import { motion } from 'framer-motion';
import { Mail, ShieldCheck, Clock, FileText } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function ExclusaoDados() {
  return (
    <section style={{ padding: 'var(--space-3xl) 0 var(--space-4xl)' }}>
      <div className="section-container" style={{ maxWidth: '800px' }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-lg)', color: 'var(--color-text-main)' }}>
            Instruções para <span className="text-gradient">Exclusão de Dados</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2xl)', fontSize: '1.1rem' }}>
            Em conformidade com a LGPD e as políticas de plataformas parceiras (como Facebook/Meta), fornecemos um processo simples e transparente para que você solicite a remoção de seus dados pessoais de nossas bases.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            
            <div className="glass-card" style={{ padding: 'var(--space-xl)', border: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                <div className="icon-box" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                  <Mail size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-xs)' }}>Como Solicitar</h3>
                  <p style={{ color: 'var(--color-text-dim)', lineHeight: 1.6 }}>
                    Para solicitar a exclusão definitiva dos seus dados coletados através de nossos aplicativos, integrações ou agentes de IA, envie um e-mail para:
                  </p>
                  <p style={{ marginTop: 'var(--space-sm)', fontWeight: 700, color: 'var(--color-text-main)', fontSize: '1.1rem' }}>
                    contato@aiprospera.com.br
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)' }}>
              <div className="glass-card" style={{ padding: 'var(--space-lg)' }}>
                <Clock size={24} color="var(--color-primary)" style={{ marginBottom: 'var(--space-sm)' }} />
                <h4 style={{ marginBottom: 'var(--space-xs)' }}>Prazo de Processamento</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                  Sua solicitação será processada em até <strong>10 dias úteis</strong> após a confirmação de recebimento.
                </p>
              </div>
              <div className="glass-card" style={{ padding: 'var(--space-lg)' }}>
                <ShieldCheck size={24} color="var(--color-primary)" style={{ marginBottom: 'var(--space-sm)' }} />
                <h4 style={{ marginBottom: 'var(--space-xs)' }}>Confirmação</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                  Você receberá um e-mail de confirmação assim que todos os registros forem removidos de nossos servidores.
                </p>
              </div>
            </div>

            <div style={{ padding: 'var(--space-xl)', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--color-border)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                <FileText size={18} color="var(--color-text-muted)" />
                <h4 style={{ margin: 0, fontSize: '1rem' }}>Informações Necessárias</h4>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Ao enviar o e-mail, por favor informe o seu <strong>Nome Completo</strong> e o <strong>E-mail/Telefone</strong> utilizado durante a interação com nossos serviços para que possamos localizar seus dados corretamente.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
