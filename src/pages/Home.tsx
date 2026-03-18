import { useState, useEffect, useRef } from 'react';
import {
  Bot, Zap, ArrowRight, Activity, Car, Users, CheckCircle2,
  MessageSquare, PhoneCall, ChevronDown, 
  Search, Cpu, Rocket, BarChart3, Shield
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/* ============================
   Counter Animation Hook
   ============================ */
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView) return;
    if (hasStarted.current) return;
    hasStarted.current = true;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return { count, ref };
}

/* ============================
   FAQ Data
   ============================ */
const faqData = [
  {
    q: "Como a IA da AiProspera se diferencia de chatbots comuns?",
    a: "Nossos agentes são alimentados por LLMs especializados que compreendem contexto, intenção e sentimento. Ao invés de menus rígidos, mantemos conversas naturais e humanizadas que realmente resolvem problemas."
  },
  {
    q: "Quanto tempo leva para integrar as soluções ao meu negócio?",
    a: "A integração básica via WhatsApp pode ser feita em 48h. Soluções mais complexas como IFinanças e Drive levam de 1 a 2 semanas, com acompanhamento completo do nosso time."
  },
  {
    q: "É necessário conhecimento técnico para usar a plataforma?",
    a: "Não. Toda a configuração é feita pelo nosso time. Você recebe um painel intuitivo para acompanhar métricas e resultados sem precisar escrever uma linha de código."
  },
  {
    q: "Os dados dos meus clientes estão seguros?",
    a: "Sim. Utilizamos criptografia de ponta a ponta, servidores seguros com certificações de segurança, e estamos em conformidade com a LGPD. Seus dados e de seus clientes estão blindados."
  },
  {
    q: "Quais são os custos além da assinatura mensal?",
    a: "Para algumas automações, pode haver custos de terceiros (como OpenAI API ou Evolution API). Porém, na nossa consultoria VIP, ajudamos você a otimizar esses custos para manter sua margem de lucro alta."
  },
  {
    q: "Os workflows do catálogo são fáceis de instalar?",
    a: "Sim! Todos os nossos workflows acompanham um guia de instalação passo a passo. Além disso, oferecemos suporte técnico para garantir que tudo esteja rodando perfeitamente no seu n8n."
  },
  {
    q: "Posso solicitar uma automação personalizada?",
    a: "Com certeza! Se não encontrou o que precisava no catálogo, nosso time pode desenvolver uma solução exclusiva sob medida para as necessidades específicas da sua empresa."
  }
];

/* ============================
   Animation Variants
   ============================ */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

/* ============================
   FAQ Item Component
   ============================ */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      variants={fadeInUp}
      className="faq-item"
      style={{ background: 'var(--color-bg-glass)' }}
    >
      <button
        className="faq-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span>{q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={20} color="var(--color-text-muted)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="faq-content">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ============================
   Home Page Component
   ============================ */
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const counter1 = useCountUp(500, 2000);
  const counter2 = useCountUp(98, 2000);
  const counter3 = useCountUp(24, 1500);
  const counter4 = useCountUp(50, 2000);
  const location = useLocation();

  useEffect(() => {
    // Extrai o caminho sem a barra inicial
    const path = location.pathname.substring(1);
    
    // Se o caminho corresponder a um ID de seção, faz o scroll
    if (['ecossistema', 'solucoes', 'como-funciona', 'planos', 'faq', 'catalogo'].includes(path)) {
      const element = document.getElementById(path);
      if (element) {
        // Pequeno delay para garantir que o componente foi montado e o layout estabilizado
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.pathname]);

  const heroSlides = [
    {
      badge: "A revolução da automação corporativa",
      title1: "Funcionários Digitais",
      title2: "Trabalhando 24/7",
      desc: "Escale suas operações, melhore seu atendimento e recupere ativos sem aumentar seu time. A inteligência artificial da AiProspera cuida do trabalho duro."
    },
    {
      badge: "IFinanças",
      title1: "Seu Fluxo de Caixa",
      title2: "Sempre Blindado",
      desc: "Recuperação de crédito amigável via WhatsApp combinada com análise preditiva. Inteligência no controle financeiro do seu negócio."
    },
    {
      badge: "AiProspera Drive e Conecta",
      title1: "Ecossistema Completo",
      title2: "Para Seu Crescimento",
      desc: "Desde o match perfeito de prestadores de serviço com clientes até o rastreamento logístico contínuo em tempo real."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <>
      {/* ===== HERO ===== */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingBottom: 'var(--space-4xl)' }}>
        <div className="hero-grid-bg" />

        {/* Wrapper Centralizado */}
        <div style={{
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: 'var(--space-2xl) var(--space-xl)',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>

          {/* Coluna Central — texto */}
          <div style={{ textAlign: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="badge-pill" style={{ marginBottom: 'var(--space-lg)', display: 'inline-flex' }}>
                  <Zap size={14} /> <span>{heroSlides[currentSlide].badge}</span>
                </div>

                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1.05, marginBottom: 'var(--space-lg)' }}>
                  {heroSlides[currentSlide].title1} <br />
                  <span className="text-gradient">{heroSlides[currentSlide].title2}</span>
                </h1>

                <p style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', color: 'var(--color-text-muted)', maxWidth: '750px', margin: '0 auto', lineHeight: 1.75 }}>
                  {heroSlides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Indicadores */}
            <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', margin: 'var(--space-2xl) 0 var(--space-lg)' }}>
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  style={{
                    width: i === currentSlide ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === currentSlide ? 'var(--color-primary)' : 'var(--color-slider-dot)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    border: 'none',
                    padding: 0,
                    boxShadow: i === currentSlide ? '0 0 12px rgba(0,240,255,0.4)' : 'none',
                  }}
                  aria-label={`Ir para slide ${i + 1}`}
                />
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <a href="#solucoes" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Conheça as Soluções <ArrowRight size={18} />
              </a>
              <a href="#planos" className="btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Ver Planos
              </a>
            </motion.div>
          </div>

        </div>

        {/* Seta de scroll indicando mais conteúdo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}
        >
          <span style={{ fontSize: '0.7rem', color: 'var(--color-text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} color="var(--color-text-dim)" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== MÉTRICAS / SOCIAL PROOF ===== */}
      <section style={{ padding: 'var(--space-2xl) 0 var(--space-3xl)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              borderRadius: 'var(--radius-2xl)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg-glass)',
              backdropFilter: 'blur(16px)',
              overflow: 'hidden',
            }}
          >
            {[
              { ref: counter1.ref, count: counter1.count, suffix: '+', label: 'Empresas Atendidas' },
              { ref: counter2.ref, count: counter2.count, suffix: '%', label: 'Taxa de Satisfação' },
              { ref: counter3.ref, count: counter3.count, suffix: '/7', label: 'Atendimento Contínuo' },
              { ref: counter4.ref, count: counter4.count, suffix: 'k+', label: 'Interações/Mês' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                ref={stat.ref}
                className="stat-counter"
                style={{ borderRight: i < 3 ? '1px solid var(--color-border)' : 'none', padding: 'var(--space-2xl) var(--space-lg)' }}
              >
                <div className="stat-number">
                  <span className="text-gradient-accent">{stat.count}{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SOLUÇÕES BASE ===== */}
      <section id="solucoes" style={{ padding: 'var(--space-3xl) 0 var(--space-4xl)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="section-header">
            <h2 className="section-title">
              Sua Operação em <span className="text-gradient">Piloto Automático</span>
            </h2>
            <p className="section-subtitle">Canais de atendimento imersivos alimentados por LLMs super-especializados.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}
          >
            {[
              { icon: <MessageSquare size={28} color="var(--color-primary)" />, title: 'Automação de WhatsApp', desc: 'Atenda clientes, qualifique leads e venda automaticamente de forma natural e humanizada no principal canal de comunicação.', boxClass: '' },
              { icon: <Bot size={28} color="var(--color-secondary-light)" />, title: 'Chatbots de Alta Conversão', desc: 'Esqueça as árvores de botões rígidas. Nossos chatbots compreendem a intenção real e mantém conversas fluídas 24h por dia.', boxClass: 'icon-box-secondary' },
              { icon: <PhoneCall size={28} color="var(--color-accent)" />, title: 'Agentes de Voz via IA', desc: 'IA que atende o telefone da sua empresa, ouve o cliente, processa a demanda e resolve o problema sem fricção.', boxClass: '' }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card" style={{ padding: 'var(--space-2xl)' }}>
                <div className={`icon-box ${item.boxClass}`} style={i === 2 ? { background: 'rgba(0,180,216,0.12)', borderColor: 'rgba(0,180,216,0.15)' } : {}}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.35rem', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-sm)' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ECOSSISTEMA ===== */}
      <section id="ecossistema" style={{ padding: 'var(--space-4xl) 0', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(0,240,255,0.02) 50%, transparent 100%)', zIndex: -1 }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="badge-pill badge-pill-secondary" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>O ECOSSISTEMA AIPROSPERA</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-lg)' }}>
              Soluções modulares para <br />cada <span className="text-gradient">etapa do seu negócio</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', marginTop: 'var(--space-2xl)' }}>
            <motion.div variants={fadeInUp} className="glass-card" style={{ display: 'flex', flexWrap: 'wrap', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', padding: 0 }}>
              <div style={{ flex: '1 1 500px', padding: 'var(--space-3xl)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                  <div className="icon-box"><Activity size={24} color="var(--color-primary)" /></div>
                  <h3 style={{ fontSize: '1.75rem', margin: 0 }}>IFinanças</h3>
                </div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 'var(--space-xl)' }}>
                  Sua IA financeira. Fazemos cobranças de forma empática via WhatsApp e analisamos seu fluxo de caixa preditivamente para blindar o financeiro do seu negócio.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['Recuperação de Crédito amigável', 'Previsibilidade de Fluxo de Caixa', 'Integração contábil automatizada'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)' }}>
                      <CheckCircle2 size={18} color="var(--color-primary)" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ flex: '1 1 350px', background: 'var(--color-bg-darker)', minHeight: '280px', borderLeft: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: '180px', height: '180px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.12 }} />
                <Activity size={100} color="var(--color-border)" style={{ opacity: 0.25 }} />
              </div>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-xl)' }}>
              <motion.div variants={fadeInUp} className="glass-card" style={{ padding: 'var(--space-2xl)' }}>
                <div className="icon-box-secondary" style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-lg)' }}>
                  <Car size={28} color="var(--color-secondary-light)" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>AiProspera Drive</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>A inteligência por trás do rastreamento logístico contínuo e gestão documental de frotas através do WhatsApp.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass-card" style={{ padding: 'var(--space-2xl)' }}>
                <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-lg)', background: 'rgba(0,180,216,0.12)', border: '1px solid rgba(0,180,216,0.15)' }}>
                  <Users size={28} color="var(--color-accent)" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>AiProspera Conecta</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>Match instantâneo entre prestadores de serviço qualificados e quem mais precisa deles.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section id="como-funciona" style={{ padding: 'var(--space-4xl) 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-header">
            <div className="badge-pill" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
              <Rocket size={14} /> COMO FUNCIONA
            </div>
            <h2 className="section-title">Da análise ao resultado em <span className="text-gradient">4 passos</span></h2>
            <p className="section-subtitle">Um processo simples e transparente para transformar suas operações.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ maxWidth: '700px', margin: '0 auto' }}>
            {[
              { step: 1, icon: <Search size={20} />, title: 'Análise Personalizada', desc: 'Mapeamos seus processos, identificamos gargalos e desenhamos uma solução de IA sob medida para o seu negócio.' },
              { step: 2, icon: <Cpu size={20} />, title: 'Integração da IA', desc: 'Nosso time configura e treina os agentes de IA com os dados e fluxos específicos da sua operação.' },
              { step: 3, icon: <Rocket size={20} />, title: 'Ativação Automática', desc: 'Os funcionários digitais entram em operação, atendendo clientes e executando tarefas automaticamente.' },
              { step: 4, icon: <BarChart3 size={20} />, title: 'Resultados Mensuráveis', desc: 'Acompanhe métricas em tempo real e veja o impacto direto na receita, produtividade e satisfação.' }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="timeline-step">
                <div style={{ position: 'relative' }}>
                  <div className="timeline-marker">{item.step}</div>
                  {i < 3 && <div className="timeline-line" />}
                </div>
                <div className="timeline-content" style={{ paddingTop: '0.5rem' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>{item.icon} {item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CATÁLOGO PREVIEW ===== */}
      <section id="catalogo" style={{ padding: 'var(--space-4xl) 0', background: 'var(--color-bg-darker)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-header">
            <div className="badge-pill" style={{ marginBottom: 'var(--space-md)', display: 'inline-flex' }}>
              PRODUTOS EM DESTAQUE
            </div>
            <h2 className="section-title">Nossos <span className="text-gradient">Workflows</span> Populares</h2>
            <p className="section-subtitle">Conheça as ferramentas prontas para impulsionar seu faturamento.</p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'var(--space-xl)',
            marginBottom: 'var(--space-3xl)'
          }}>
            {[
              { title: 'YouTube Automático Pro', category: 'Workflow', price: '147,00', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' },
              { title: 'Shopee Affiliate Bot', category: 'Afiliados', price: '97,90', img: 'https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?auto=format&fit=crop&q=80&w=800' },
              { title: 'Agente de Voz IA', category: 'Agente IA', price: '197,00', img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800' }
            ].map((prod, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img src={prod.img} alt={prod.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--color-primary)', fontWeight: 600 }}>{prod.category.toUpperCase()}</span>
                  <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{prod.title}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>R$ {prod.price}</span>
                    <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Ver Mais</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="/#/catalogo" className="btn-secondary" style={{ padding: '1rem 3rem' }}>
              Ver Catálogo Completo <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== PLANOS ===== */}
      <section id="planos" style={{ padding: 'var(--space-4xl) 0', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(123,44,191,0.02) 50%, transparent 100%)', zIndex: -1 }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-header">
            <h2 className="section-title">Planos que Crescem <span className="text-gradient">Com Você</span></h2>
            <p className="section-subtitle">Comece pequeno, ou vá all-in na automação corporativa.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)', alignItems: 'center' }}
          >
            <motion.div variants={fadeInUp} className="glass-card" style={{ padding: 'var(--space-2xl)' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: 'var(--space-xs)' }}>Starter</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-xl)', fontSize: '0.95rem' }}>Para empreendedores dando o primeiro passo.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 'var(--space-xl)' }}>
                R$297<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>/mês</span>
              </div>
              <button className="btn-secondary" style={{ width: '100%', padding: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>Assinar Starter</button>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {['Chatbot Base WhatsApp', 'Até 1000 interações', 'Suporte em horário comercial'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    <CheckCircle2 size={16} color="var(--color-text-dim)" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card" style={{ padding: 'calc(var(--space-2xl) + 0.5rem) var(--space-2xl)', position: 'relative', border: '1px solid rgba(0,240,255,0.3)', background: 'linear-gradient(180deg, rgba(0,240,255,0.04) 0%, var(--color-bg-glass) 100%)', transform: 'scale(1.03)', boxShadow: 'var(--shadow-glow-primary)' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', color: 'var(--color-btn-text)', padding: '0.25rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                MAIS POPULAR
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>Pro</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-xl)', fontSize: '0.95rem' }}>Para E-commerces e empresas tracionando vendas.</p>
              <div style={{ fontSize: '2.75rem', fontWeight: 700, marginBottom: 'var(--space-xl)' }}>
                R$897<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>/mês</span>
              </div>
              <button className="btn-primary" style={{ width: '100%', padding: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>Assinar Pro</button>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {['Integração com 3 canais', 'Qualificação avançada de Leads', 'Dashboard Analytics', 'Suporte Prioritário'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--color-primary)" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card" style={{ padding: 'var(--space-2xl)' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: 'var(--space-xs)' }}>Enterprise</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-xl)', fontSize: '0.95rem' }}>Ecossistema Full para corporações de alto volume.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 'var(--space-xl)' }}>
                Sob<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 400 }}> medida</span>
              </div>
              <button className="btn-secondary" style={{ width: '100%', padding: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>Falar com Especialista</button>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {['Acesso a IFinanças & Drive', 'Agentes de Voz dedicados', 'Integração ERP', 'SLAs dedicados'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    <CheckCircle2 size={16} color="var(--color-text-dim)" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" style={{ padding: 'var(--space-4xl) 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="section-header">
            <h2 className="section-title">Perguntas <span className="text-gradient">Frequentes</span></h2>
            <p className="section-subtitle">Tire suas dúvidas sobre nossas soluções de IA.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ maxWidth: '750px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
          >
            {faqData.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="cta-section" style={{ margin: '0 var(--space-xl) var(--space-3xl)', borderRadius: 'var(--radius-2xl)', background: 'linear-gradient(135deg, rgba(0,240,255,0.06) 0%, rgba(123,44,191,0.06) 100%)', border: '1px solid var(--color-border)' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ position: 'relative', zIndex: 1 }}>
          <div className="badge-pill" style={{ marginBottom: 'var(--space-lg)', display: 'inline-flex' }}>
            <Shield size={14} /> COMECE AGORA
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', marginBottom: 'var(--space-md)', maxWidth: '700px', margin: '0 auto var(--space-md)' }}>
            Pronto para escalar suas operações <span className="text-gradient">com IA?</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto var(--space-xl)', lineHeight: 1.7 }}>
            Agende uma demonstração gratuita e veja como a AiProspera pode transform seu negócio.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
              Agendar Demonstração <ArrowRight size={18} />
            </button>
            <button className="btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
              Falar com Especialista
            </button>
          </div>
        </motion.div>
      </section>
      
      {/* Esconde as colunas laterais do hero em mobile */}
      <style>{`
        @media (max-width: 1023px) {
          .hero-side-cards { display: none !important; }
        }
        @media (max-width: 1023px) {
          section > div[style*="grid-template-columns: 1fr 2fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
