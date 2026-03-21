import PolicyLayout from '@/components/PolicyLayout';

export default function ExclusaoDados() {
  return (
    <PolicyLayout title="Exclusão de" subtitle="Dados">
      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>Como solicitar a exclusão</h2>
        <p>
          Respeitamos o seu direito ao esquecimento previsto na LGPD. Para solicitar a exclusão total dos seus dados pessoais e de sua empresa de nossos servidores e modelos de IA, siga os passos abaixo:
        </p>
      </div>

      <div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>Via E-mail</h3>
        <p>
          Envie uma mensagem para <strong>contato@aiprospera.com.br</strong> com o assunto "Solicitação de Exclusão de Dados". No corpo do e-mail, informe o nome da sua empresa e o e-mail/telefone cadastrado.
        </p>
      </div>

      <div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-sm)', color: 'var(--color-text-main)' }}>Via Plataforma</h3>
        <p>
          Usuários registrados podem solicitar a deleção de conta diretamente no painel de configurações de perfil. Após a solicitação, os dados são anonimizados e excluídos de nossos bancos de dados ativos em até 15 dias úteis.
        </p>
      </div>

      <div style={{ padding: 'var(--space-lg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', background: 'rgba(255, 0, 0, 0.05)' }}>
        <p style={{ margin: 0 }}>
          <strong>Atenção:</strong> A exclusão de dados é irreversível. Todas as configurações de seus agentes de IA, históricos de conversas e métricas serão perdidas permanentemente.
        </p>
      </div>
    </PolicyLayout>
  );
}
