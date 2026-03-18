import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "CarrierShift — P&C Carrier Appetite Intelligence",
  description: "Monthly carrier appetite shifts by state and line — which carriers are pulling back, expanding, or re-rating based on DO",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#0A0806", color: "#E8EAF0", fontFamily: "monospace", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
