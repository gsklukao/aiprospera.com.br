import PolicyLayout from '@/components/PolicyLayout';

export default function TermosUso() {
  return (
    <PolicyLayout title="Termos de" subtitle="Uso">
      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>1. Aceitação dos Termos</h2>
        <p>
          Ao acessar e utilizar os serviços da <strong>AiProspera - Soluções</strong>, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, você não deve utilizar nossos serviços.
        </p>
      </div>

      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>2. Descrição e Natureza dos Serviços</h2>
        <p>
          A AiProspera fornece soluções baseadas em modelos probabilísticos de <strong>Inteligência Artificial</strong>. Nossos serviços incluem automações, chatbots e agentes de voz. Devido à natureza da tecnologia de IA (LLMs), os resultados gerados podem conter imprecisões ou informações incorretas ("alucinações").
        </p>
      </div>

      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>3. Responsabilidades do Usuário</h2>
        <p>Ao utilizar nossa plataforma, você se compromete a:</p>
        <ul style={{ paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-xs)' }}>
          <li>Fornecer informações verdadeiras e atualizadas.</li>
          <li>Não utilizar nossos agentes para fins ilícitos, abusivos ou que violem os termos de serviço das plataformas de mensageria (como WhatsApp).</li>
          <li>Ser integralmente responsável pelo conteúdo e tratamento dos dados de seus próprios clientes finais.</li>
        </ul>
      </div>

      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>4. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo, algoritmos, fluxos de automação e códigos-fonte desenvolvidos pela AiProspera permanecem como propriedade intelectual exclusiva da empresa, salvo acordos contratuais específicos de transferência de tecnologia.
        </p>
      </div>

      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>5. Limitação de Responsabilidade</h2>
        <p>
          A <strong>AiProspera - Soluções</strong> atua como fornecedora de tecnologia e não se responsabiliza por:
        </p>
        <ul style={{ paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-xs)' }}>
          <li>Mensagens ou conteúdos gerados automaticamente que venham a ser interpretados como ofensivos ou incorretos (o usuário deve configurar filtros e validar outputs).</li>
          <li>Instabilidades ou mudanças súbitas nas políticas de APIs de terceiros (Meta/WhatsApp, OpenAI, Anthropic).</li>
          <li>Banimento de números de WhatsApp por descumprimento das regras da Meta pelo usuário final.</li>
          <li>Decisões financeiras ou de negócios tomadas sem validação humana primária.</li>
        </ul>
      </div>
    </PolicyLayout>
  );
}
