import PolicyLayout from '@/components/PolicyLayout';

export default function PoliticasPrivacidade() {
  return (
    <PolicyLayout title="Política de" subtitle="Privacidade">
      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>1. Introdução</h2>
        <p>
          A <strong>AiProspera - Soluções</strong> valoriza a sua privacidade e se compromete a proteger os dados pessoais de seus clientes e usuários em total conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)</strong>. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações.
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
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>4. Seus Direitos (LGPD)</h2>
        <p>Como titular de dados, você possui os seguintes direitos:</p>
        <ul style={{ paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-xs)' }}>
          <li>Confirmar a existência de tratamento de seus dados.</li>
          <li>Acessar, corrigir ou atualizar suas informações.</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
          <li>Revogar seu consentimento a qualquer momento.</li>
        </ul>
      </div>

      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>5. Compartilhamento de Dados</h2>
        <p>
          Não vendemos ou alugamos seus dados pessoais a terceiros. Podemos compartilhar suas informações estritamente com prestadores de serviço terceirizados que nos auxiliam a operar a inteligência artificial (como infraestruturas de nuvem e provedores de LLMs).
        </p>
      </div>

      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>6. Contato do DPO</h2>
        <p>
          Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato com nosso Encarregado de Dados pelo e-mail: <strong>contato@aiprospera.com.br</strong>
        </p>
      </div>
    </PolicyLayout>
  );
}
