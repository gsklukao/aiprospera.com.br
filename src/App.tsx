
import { Bot, Zap, ArrowRight, Activity, Car, Users, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen">
      {/* Background glow effects */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(0,240,255,0.08) 0%, rgba(10,10,12,0) 70%)', filter: 'blur(60px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(123,44,191,0.08) 0%, rgba(10,10,12,0) 70%)', filter: 'blur(60px)' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(0,240,255,0.03) 0%, rgba(10,10,12,0) 70%)', filter: 'blur(80px)' }}></div>
      </div>

      <header style={{ padding: '1.25rem 2rem', position: 'fixed', top: 0, width: '100%', zIndex: 50, borderBottom: '1px solid rgba(255,255,255,0.05)' }} className="glass-panel">
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
            Ai<span className="text-gradient">Prospera</span>
          </div>
          <nav className="main-nav" style={{ gap: '2.5rem' }}>
            <a href="#solucoes" style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.8'}>Soluções Base</a>
            <a href="#ecossistema" style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.8'}>O Ecossistema</a>
            <a href="#planos" style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', fontWeight: 500, opacity: 0.8, transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.8'}>Planos</a>
          </nav>
          <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>
            Fale com a IA
          </button>
        </div>
      </header>

      <main style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        {/* HERO SECTION */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem', textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 240, 255, 0.08)', border: '1px solid rgba(0, 240, 255, 0.2)', padding: '0.5rem 1.25rem', borderRadius: '2rem', marginBottom: '2.5rem', color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 500 }}>
              <Zap size={16} /> <span>A revolução da automação corporativa chegou</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: '1.1', marginBottom: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
              Funcionários Digitais <br />
              <span className="text-gradient">Trabalhando 24/7</span>
            </motion.h1>
            <motion.p variants={fadeInUp} style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: 'var(--color-text-muted)', maxWidth: '750px', margin: '2rem auto 3.5rem', lineHeight: '1.6' }}>
              Escale suas operações, melhore seu atendimento e recupere ativos sem aumentar seu time. A inteligência artificial da AiProspera cuida do trabalho duro para você focar no estratégico.
            </motion.p>
            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Conheça as Soluções <ArrowRight size={20} />
              </button>
              <button style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', background: 'transparent', border: '1px solid var(--color-border)', borderRadius: '9999px', color: 'white', cursor: 'pointer', transition: 'background 0.3s' }} className="glass-panel" onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                Ver Planos
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* SOLUÇÕES BASE */}
        <section id="solucoes" style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>Sua Operação em <span className="text-gradient">Piloto Automático</span></h2>
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '4rem', fontSize: '1.1rem' }}>Canais de atendimento imersivos alimentados por LLMs super-especializados.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {[
              { icon: <MessageSquare size={32} color="var(--color-primary)" />, title: 'Automação de WhatsApp', desc: 'Atenda clientes, qualifique leads e venda automaticamente de forma natural e humanizada no principal canal de comunicação.' },
              { icon: <Bot size={32} color="#7b2cbf" />, title: 'Chatbots de Alta Conversão', desc: 'Esqueça as árvores de botões rígidas. Nossos chatbots compreendem a intenção real e mantém conversas fluídas 24h por dia.' },
              { icon: <PhoneCall size={32} color="#00b4d8" />, title: 'Agentes de Voz via IA', desc: 'IA que atende o telefone da sua empresa, ouve o cliente, processa a demanda e resolve o problema sem fricção.' }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-panel" style={{ padding: '2.5rem', borderRadius: '1.5rem', transition: 'transform 0.3s ease', cursor: 'default' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.03)', width: '64px', height: '64px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ECOSSISTEMA */}
        <section id="ecossistema" style={{ padding: '6rem 2rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(10,10,12,0) 0%, rgba(0,240,255,0.03) 50%, rgba(10,10,12,0) 100%)', zIndex: -1 }}></div>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(123, 44, 191, 0.15)', borderRadius: '2rem', color: '#b56dfc', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1rem' }}>O ECOSSISTEMA AIPROSPERA</div>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Soluções modulares para <br/>cada <span className="text-gradient">etapa do seu negócio</span></h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '4rem' }}>
              
              <motion.div variants={fadeInUp} className="glass-panel" style={{ display: 'flex', flexWrap: 'wrap', borderRadius: '2rem', overflow: 'hidden' }}>
                <div style={{ flex: '1 1 500px', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <Activity size={32} color="var(--color-primary)" />
                    <h3 style={{ fontSize: '2rem', margin: 0 }}>IFinanças</h3>
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Sua IA financeira. Fazemos cobranças de forma empática via WhatsApp e analisamos seu fluxo de caixa preditivamente para blindar o financeiro do seu negócio.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {['Recuperação de Crédito amigável', 'Previsibilidade de Fluxo de Caixa', 'Integração contábil'].map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e0e0e0' }}><CheckCircle2 size={18} color="var(--color-primary)"/> {f}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ flex: '1 1 400px', background: 'rgba(0,0,0,0.3)', minHeight: '300px', borderLeft: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                  <div style={{ position: 'absolute', width: '200px', height: '200px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15 }}></div>
                  {/* Mock dashboard gráfico abstrato poderia entrar aqui */}
                  <Activity size={120} color="var(--color-border)" style={{ opacity: 0.3 }} />
                </div>
              </motion.div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                <motion.div variants={fadeInUp} className="glass-panel" style={{ padding: '3rem', borderRadius: '2rem' }}>
                  <Car size={32} color="#7b2cbf" style={{ marginBottom: '1.5rem' }} />
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>AiProspera Drive</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>A inteligência por trás do rastreamento logístico contínuo e gestão documental de frotas através do WhatsApp.</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="glass-panel" style={{ padding: '3rem', borderRadius: '2rem' }}>
                  <Users size={32} color="#00b4d8" style={{ marginBottom: '1.5rem' }} />
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>AiProspera Conecta</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>A plataforma inteligente que une necessidades e ofícios. Match instantâneo entre prestadores de serviço qualificados e quem mais precisa deles.</p>
                </motion.div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* PRICING */}
        <section id="planos" style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Planos que Crescem <span className="text-gradient">Com Você</span></h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>Comece pequeno, ou vá all-in na automação corporativa.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            
            {/* Starter */}
            <motion.div variants={fadeInUp} className="glass-panel" style={{ padding: '3rem', borderRadius: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Starter</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Para pequenos empreendedores dão o primeiro passo na IA.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>
                $297<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>/mês</span>
              </div>
              <button style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '9999px', color: 'white', fontWeight: 600, cursor: 'pointer', marginBottom: '2rem' }}>Assinar Starter</button>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Chatbot Base WhatsApp', 'Até 1000 interações', 'Suporte em horário comercial'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}><CheckCircle2 size={16} color="var(--color-text-muted)"/> {f}</li>
                ))}
              </ul>
            </motion.div>

            {/* Pro - Highlighted */}
            <motion.div variants={fadeInUp} className="glass-panel" style={{ padding: '3.5rem 3rem', borderRadius: '2rem', position: 'relative', border: '1px solid var(--color-primary)', background: 'linear-gradient(180deg, rgba(0,240,255,0.05) 0%, rgba(20,20,25,0.6) 100%)', transform: 'scale(1.05)' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: '#000', padding: '0.25rem 1rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 700 }}>MAIS POPULAR</div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Pro</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Para E-commerces e empresas já tracionando vendas.</p>
              <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem' }}>
                $897<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>/mês</span>
              </div>
              <button className="btn-primary" style={{ width: '100%', padding: '1rem', borderRadius: '9999px', fontWeight: 600, marginBottom: '2rem' }}>Assinar Pro</button>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Integração com 3 canais', 'Qualificação avançada de Leads', 'Dashboard Analytics', 'Suporte Prioritário'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}><CheckCircle2 size={18} color="var(--color-primary)"/> {f}</li>
                ))}
              </ul>
            </motion.div>

            {/* Enterprise */}
            <motion.div variants={fadeInUp} className="glass-panel" style={{ padding: '3rem', borderRadius: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Enterprise</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Ecossistema Full para corporações de alto volume.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>
                Sob<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontWeight: 400 }}> medida</span>
              </div>
              <button style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '9999px', color: 'white', fontWeight: 600, cursor: 'pointer', marginBottom: '2rem' }}>Falar com Especialista</button>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Acesso a IFinanças & Drive', 'Agentes de Voz dedicados', 'Integração ERP', 'SLAs dedicados'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}><CheckCircle2 size={16} color="var(--color-text-muted)"/> {f}</li>
                ))}
              </ul>
            </motion.div>

          </motion.div>
        </section>

      </main>

      <footer style={{ borderTop: '1px solid var(--color-border)', padding: '4rem 2rem', background: 'rgba(10,10,12,0.8)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
              Ai<span className="text-gradient">Prospera</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '300px' }}>Automatizando o presente para você focar no futuro.</p>
          </div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>
            &copy; {new Date().getFullYear()} AiProspera - Soluções. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
