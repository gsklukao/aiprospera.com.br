import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function PoliticasPrivacidade() {
  return (
    <section style={{ padding: 'var(--space-3xl) 0 var(--space-4xl)' }}>
      <div className="section-container" style={{ maxWidth: '800px' }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-lg)', color: 'var(--color-text-main)' }}>
            Política de <span className="text-gradient">Privacidade</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2xl)' }}>
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', color: 'var(--color-text-dim)', lineHeight: 1.7 }}>
            
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>1. Introdução</h2>
              <p>
                A <strong>AiProspera - Soluções</strong> valoriza a sua privacidade e se compromete a proteger os dados pessoais de seus clientes e usuários. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações ao utilizar nossos serviços e nossa plataforma.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>2. Dados que Coletamos</h2>
              <p>Podemos coletar os seguintes tipos de informações:</p>
              <ul style={{ paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-xs)' }}>
                <li><strong>Informações de Contato:</strong> Nome, endereço de e-mail e número de telefone (como WhatsApp).</li>
                <li><strong>Informações de Uso:</strong> Dados sobre como você interage com nossos agentes de IA, logs de conversa e preferências do sistema.</li>
                <li><strong>Dados Financeiros:</strong> Quando aplicável (via IFinanças), dados necessários para processamento de pagamentos ou análise de fluxo de caixa, tratados com conformidade aos padrões do setor.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>3. Como Utilizamos Suas Informações</h2>
              <p>Utilizamos os dados coletados exclusivamente para:</p>
              <ul style={{ paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-xs)' }}>
                <li>Prestar e melhorar nossos serviços de inteligência artificial.</li>
                <li>Treinar nossos modelos para fornecer um atendimento mais humanizado e contextual para sua empresa.</li>
                <li>Enviar atualizações operacionais, relatórios e contatos de suporte.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>4. Compartilhamento de Dados</h2>
              <p>
                Não vendemos ou alugamos seus dados pessoais a terceiros. Podemos compartilhar suas informações estritamente com prestadores de serviço terceirizados que nos auxiliam a operar a inteligência artificial (como infraestruturas de nuvem e provedores de LLMs), garantindo que estes possuam contratos rigorosos de confidencialidade através da Lei Geral de Proteção de Dados (LGPD).
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>5. Segurança dos Dados</h2>
              <p>
                Adotamos medidas técnicas, administrativas e físicas para proteger suas informações pessoais contra perda, roubo, uso indevido e acesso não autorizado. Embora nenhum sistema seja completamente à prova de falhas, trabalhamos com criptografia de ponta a ponta nas comunicações de ponta dos agentes.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>6. Seus Direitos</h2>
              <p>
                De acordo com a LGPD, você tem o direito de solicitar acesso, correção, anonimização, bloqueio ou eliminação dos seus dados pessoais. Para exercer esses direitos, entre em contato através de nossos canais de comunicação oficiais.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>7. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail: <strong>contato@aiprospera.com.br</strong>
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
