import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0702", color: "#F0F4FF", fontFamily: "system-ui, sans-serif" }}>
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" }} />
          <span style={{ fontSize: 15, fontWeight: 800, color: "#F0F4FF" }}>CarrierShift</span>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <Link href="/pricing" style={{ fontSize: 14, color: "#8FA3C0", textDecoration: "none" }}>Pricing</Link>
          <Link href="/pricing" style={{ background: "#F59E0B", color: "#0A0702", padding: "8px 20px", borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Start Free Trial</Link>
        </div>
      </nav>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "120px 32px 80px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#F59E0B18", border: "1px solid #F59E0B35", borderRadius: 40, padding: "6px 20px", fontSize: 12, fontWeight: 700, color: "#F59E0B", letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 28 }}>
          Insurance Carrier Intelligence
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24, color: "#F0F4FF" }}>
          CarrierShift
        </h1>
        <p style={{ fontSize: 20, color: "#8FA3C0", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 48px" }}>
          Track insurance carrier appetite shifts, rate changes, and market movements before your competition does
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" as const }}>
          <Link href="/pricing" style={{ background: "#F59E0B", color: "#0A0702", border: "none", borderRadius: 8, padding: "16px 36px", fontSize: 16, fontWeight: 800, textDecoration: "none", display: "inline-block" }}>Start Free Trial &#8594;</Link>
          <Link href="/agent" style={{ background: "transparent", color: "#F0F4FF", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "16px 36px", fontSize: 16, fontWeight: 600, textDecoration: "none", display: "inline-block" }}>Talk to AI Agent</Link>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "40px 32px", textAlign: "center" }}>
        <p style={{ fontSize: 14, color: "#8FA3C0" }}>
          $299–$1,499/mo &#183; <Link href="/pricing" style={{ color: "#F59E0B", textDecoration: "none" }}>View Plans</Link> &#183; <a href="mailto:support@huit.ai" style={{ color: "#8FA3C0", textDecoration: "none" }}>support@huit.ai</a>
        </p>
      </div>
    </div>
  );
}
