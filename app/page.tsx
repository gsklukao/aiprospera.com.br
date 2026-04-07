import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import Stats from "@/components/Stats";
import Solutions from "@/components/Solutions";
import Ecosystem from "@/components/Ecosystem";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AiProspera — Máquina de Vendas com IA no WhatsApp",
  description:
    "A primeira Máquina de Vendas com IA que atende, recupera carrinhos abandonados e cobra PIX não pagos 24h por dia. Comece agora pelo WhatsApp.",
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

      {/* 2. Dor — esfrega o problema antes da solução */}
      <PainSection />

      {/* 3. Prova em números */}
      <Stats />

      {/* 4. O que a Máquina faz (4 pilares) */}
      <Solutions />

      {/* 5. Por que AiProspera (diferenciais) */}
      <Ecosystem />

      {/* 6. Como funciona (3 passos) */}
      <Timeline />

      {/* 6. FAQ */}
      <FAQ />

      {/* 7. CTA final */}
      <CTA />
    </main>
  );
}
