import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Solutions from "@/components/Solutions";
import Ecosystem from "@/components/Ecosystem";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background Ambient Glows */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-15%', left: '-10%', width: '45vw', height: '45vw', background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-15%', right: '-10%', width: '45vw', height: '45vw', background: 'radial-gradient(circle, rgba(123,44,191,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', top: '40%', left: '60%', width: '30vw', height: '30vw', background: 'radial-gradient(circle, rgba(0,180,216,0.04) 0%, transparent 70%)', filter: 'blur(100px)' }} />
      </div>

      <Hero />
      <Stats />
      <Solutions />
      <Ecosystem />
      <Timeline />
      <FAQ />
      <CTA />
    </main>
  );
}
