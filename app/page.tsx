import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Solutions from "@/components/Solutions";
import Ecosystem from "@/components/Ecosystem";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AiProspera — Venda mais com fluxos automáticos no WhatsApp",
  description:
    "Converta leads em clientes, recupere carrinhos abandonados e feche mais vendas com inteligência artificial no WhatsApp. Diagnóstico gratuito.",
};

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Ambient background glows */}
      <div style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-15%",
            left: "-10%",
            width: "45vw",
            height: "45vw",
            background: "radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            right: "-10%",
            width: "45vw",
            height: "45vw",
            background: "radial-gradient(circle, rgba(123,44,191,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "60%",
            width: "30vw",
            height: "30vw",
            background: "radial-gradient(circle, rgba(0,180,216,0.04) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* 1. Promessa forte */}
      <Hero />

      {/* 2. Prova em números */}
      <Stats />

      {/* 3. O que oferecemos (3 pilares de venda) */}
      <Solutions />

      {/* 4. Por que AiProspera (diferenciais) */}
      <Ecosystem />

      {/* 5. Como funciona (3 passos) */}
      <Timeline />

      {/* 6. FAQ */}
      <FAQ />

      {/* 7. CTA final */}
      <CTA />
    </main>
  );
}
