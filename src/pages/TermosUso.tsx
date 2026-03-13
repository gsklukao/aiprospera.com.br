import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function TermosUso() {
  return (
    <section style={{ padding: 'var(--space-3xl) 0 var(--space-4xl)' }}>
      <div className="section-container" style={{ maxWidth: '800px' }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-lg)', color: 'var(--color-text-main)' }}>
            Termos de <span className="text-gradient">Uso</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2xl)' }}>
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', color: 'var(--color-text-dim)', lineHeight: 1.7 }}>
            
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar os serviços fornecidos pela <strong>AiProspera - Soluções</strong>, você concorda em cumprir e ficar vinculado a estes Termos de Uso. Caso não concorde com algum dos termos descritos, você não deve utilizar nossos sistemas e plataformas.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>2. Descrição dos Serviços</h2>
              <p>
                A AiProspera fornece soluções em Inteligência Artificial para atendimento automatizado, incluindo sistemas integrados ao WhatsApp, chatbots e agentes de voz operando 24 horas por dia. Os sistemas também processam dados inerentes ao funcionamento do serviço, tais como perfis de clientes finais.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>3. Responsabilidades do Usuário</h2>
              <ul style={{ paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-xs)' }}>
                <li>Você assume a responsabilidade pela veracidade das informações e bases de dados alimentadas nos nossos funcionários digitais.</li>
                <li>Você é responsável por assegurar que não utilizará os serviços da AiProspera para fins ilegais, não éticos ou atividades de spam indesejado contra normas regulamentadoras (como os termos de serviço da Meta/WhatsApp).</li>
                <li>Você concorda em manter atualizados seus dados cadastrais.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>4. Disponibilidade dos Serviços e SLA</h2>
              <p>
                Nos empenhamos para garantir que nossos serviços operem 24/7. Contudo, paradas programadas para manutenção ou interrupções imprevisíveis ligadas à APIs de terceiros (ex. conectividade OpenAI, Meta) não configuram pretexto para quebra do serviço prestado.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>5. Propriedade Intelectual</h2>
              <p>
                Todos os direitos de propriedade intelectual da plataforma, infraestrutura dos agentes, código fonte e interface gráfica pertencem à AiProspera. Estes termos não concedem o direito de obter licença do software em sua plenitude, sendo operado estritamente como um formato SaaS (Software como Serviço).
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>6. Limitação de Responsabilidade</h2>
              <p>
                A AiProspera não se responsabiliza indiretamente por lucros cessantes, perdas de negócios ou por qualquer conselho incorreto pontual gerado pelos modelos de LLM (Alucinações de IA) durante as interações diretas. Fornecemos painéis de controle e mecanismos de revisão para constante calibração das respostas.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>7. Rescisão</h2>
              <p>
                Nós nos reservamos o direito de suspender ou encerrar seu acesso aos serviços a qualquer momento, e caso identificarmos qualquer atividade que viole regras operacionais destes Termos de Uso.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
