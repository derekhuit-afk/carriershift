import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

const SAMPLE_DATA = [{"carrier":"State Farm","state":"FL","line":"Homeowners","action":"Market Exit","effective_date":"2026-04-01","policies_affected":72000,"premium_impact":890000000,"reason":"Hurricane risk accumulation","replacement_available":False},{"carrier":"Allstate","state":"CA","line":"Auto","action":"Rate Increase","effective_date":"2026-03-15","policies_affected":0,"premium_impact":0,"rate_change_pct":18.4,"reason":"Loss cost inflation","replacement_available":True},{"carrier":"Farmers","state":"TX","line":"Commercial Property","action":"Appetite Expansion","effective_date":"2026-02-01","policies_affected":0,"premium_impact":0,"rate_change_pct":-3.2,"reason":"Market opportunity","replacement_available":True}];

function getStats(data: Record<string, unknown>[]) {
  if (!data || data.length === 0) return {};
  const numericKeys = Object.keys(data[0]).filter(k => typeof data[0][k] === "number");
  const stats: Record<string, unknown> = { total_records: data.length };
  numericKeys.slice(0, 2).forEach(k => {
    const avg = data.reduce((s, r) => s + (Number(r[k]) || 0), 0) / data.length;
    stats[`avg_${k}`] = Math.round(avg * 100) / 100;
  });
  return stats;
}

export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  
  const url = new URL(req.url);
  const q = url.searchParams.get("q") || "";
  
  let data = SAMPLE_DATA as Record<string, unknown>[];
  if (q) {
    data = data.filter(r =>
      Object.values(r).some(v => String(v).toLowerCase().includes(q.toLowerCase()))
    );
  }
  
  return NextResponse.json({
    data,
    stats: getStats(data),
    refreshed: new Date().toISOString()
  });
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  
  const data = SAMPLE_DATA as Record<string, unknown>[];
  const headers = data.length > 0 ? Object.keys(data[0]) : [];
  const csv = [
    headers.join(","),
    ...data.map(r => headers.map(h => String(r[h] ?? "")).join(","))
  ].join("\n");
  
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename=carriershift-export.csv`
    }
  });
}
