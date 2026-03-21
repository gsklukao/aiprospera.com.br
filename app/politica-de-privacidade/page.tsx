import PolicyLayout from '@/components/PolicyLayout';

export default function PoliticasPrivacidade() {
  return (
    <PolicyLayout title="Política de" subtitle="Privacidade">
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
          <li><strong>Dados Financeiros:</strong> Quando aplicável, dados necessários para processamento de pagamentos ou análise de fluxo de caixa.</li>
        </ul>
      </div>

      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>3. Como Utilizamos Suas Informações</h2>
        <p>Utilizamos os dados coletados exclusivamente para:</p>
        <ul style={{ paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-xs)' }}>
          <li>Prestar e melhorar nossos serviços de inteligência artificial.</li>
          <li>Treinar nossos modelos para fornecer um atendimento mais humanizado.</li>
          <li>Enviar atualizações operacionais, relatórios e contatos de suporte.</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
      </div>

      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>4. Compartilhamento de Dados</h2>
        <p>
          Não vendemos ou alugamos seus dados pessoais a terceiros. Podemos compartilhar suas informações estritamente com prestadores de serviço terceirizados que nos auxiliam a operar a inteligência artificial (como infraestruturas de nuvem e provedores de LLMs).
        </p>
      </div>

      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>5. Contato</h2>
        <p>
          Em caso de dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail: <strong>contato@aiprospera.com.br</strong>
        </p>
      </div>
    </PolicyLayout>
  );
}
