import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0702", color: "#F0F4FF", fontFamily: "system-ui, sans-serif" }}>
      <nav style={{ padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <span style={{ fontSize: 16, fontWeight: 800 }}>CarrierShift</span>
        <Link href="/pricing" style={{ background: "#F59E0B", color: "#0A0702", padding: "8px 20px", borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Get Started</Link>
      </nav>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "100px 32px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 900, marginBottom: 24, lineHeight: 1.05, letterSpacing: "-0.03em" }}>CarrierShift</h1>
        <p style={{ fontSize: 19, color: "#8FA3C0", maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.7 }}>Track insurance carrier appetite shifts, rate changes, and market movements befo...</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/pricing" style={{ background: "#F59E0B", color: "#0A0702", padding: "15px 34px", borderRadius: 8, fontSize: 16, fontWeight: 800, textDecoration: "none", display: "inline-block" }}>Get Started &#8594;</Link>
          <Link href="/agent" style={{ background: "transparent", color: "#F0F4FF", border: "1px solid rgba(255,255,255,0.15)", padding: "15px 34px", borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: "none", display: "inline-block" }}>Talk to AI Agent</Link>
        </div>
      </div>
    </div>
  );
}
