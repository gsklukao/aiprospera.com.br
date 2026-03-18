import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Sample Data
// Full Product Data
const SAMPLE_PRODUCTS = [
  {
    id: '1',
    title: 'YouTube Automático Pro',
    description: 'Crie e gerencie canais dark no YouTube 100% com IA e n8n. Automação de roteiro, voz e edição.',
    price: 147.00,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    category: 'Workflow',
    badge: 'Mais Vendido',
    salesCount: 342,
    rating: 5
  },
  {
    id: '2',
    title: 'Shopee Affiliate Bot',
    description: 'O melhor bot do mercado para faturamento no automático. Coleta ofertas e envia para WhatsApp e Telegram.',
    price: 97.90,
    image: 'https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?auto=format&fit=crop&q=80&w=800',
    category: 'Afiliados',
    badge: 'Elite',
    salesCount: 856,
    rating: 5
  },
  {
    id: '3',
    title: 'Amazon & Magalu Flow',
    description: 'Sistema dual-platform para curadoria de promoções. Monitore ofertas quentes em tempo real.',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1523474253046-2cd2c78a0dbb?auto=format&fit=crop&q=80&w=800',
    category: 'Afiliados',
    badge: 'Popular',
    salesCount: 412,
    rating: 5
  },
  {
    id: '4',
    title: 'Agente de Voz IA (Voice)',
    description: 'Assistente virtual para atendimento telefônico com voz humana ultrarrealista. Perfeito para vendas.',
    price: 197.00,
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
    category: 'Agente IA',
    badge: 'Premium',
    salesCount: 89,
    rating: 5
  },
  {
    id: '5',
    title: 'WhatsApp Sales Intelligence',
    description: 'Integração de agentes inteligentes que qualificam leads, respondem dúvidas e fecham vendas 24/7.',
    price: 129.00,
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
    category: 'Automação',
    badge: 'Destaque',
    salesCount: 156,
    rating: 4
  },
  {
    id: '6',
    title: 'Dashboard AiProspera Pro',
    description: 'Visualização completa das suas métricas de afiliados e performance de automações em um só lugar.',
    price: 47.00,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Gestão',
    salesCount: 267,
    rating: 5
  },
  {
    id: '7',
    title: 'Consultoria Estratégica VIP',
    description: 'Mentoria individual focada em escala e implementação de processos robustos de automação n8n.',
    price: 299.00,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    category: 'Mentoria',
    badge: 'Vagas Limitadas',
    salesCount: 24,
    rating: 5
  },
  {
    id: '8',
    title: 'Pack de Prompts Viral (AI)',
    description: 'Biblioteca com mais de 1.000 prompts validados para gerar conteúdo viral e textos de alta conversão.',
    price: 37.00,
    image: 'https://images.unsplash.com/photo-1673187115862-d62e8965c71a?auto=format&fit=crop&q=80&w=800',
    category: 'Recursos',
    badge: 'Novo',
    salesCount: 1245,
    rating: 5
  },
  {
    id: '9',
    title: 'Mass TikTok/Reels Automation',
    description: 'Sistema completo para criação e postagem em massa de vídeos curtos. Domine o algoritmo.',
    price: 117.00,
    image: 'https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?auto=format&fit=crop&q=80&w=800',
    category: 'Social',
    badge: 'Hot',
    salesCount: 198,
    rating: 5
  }
];

const CATEGORIES = ['Todos', 'Workflow', 'Afiliados', 'Agente IA', 'Automação', 'Gestão', 'Mentoria', 'Recursos', 'Social'];

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('relevant');

  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS
      .filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             p.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todos' || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'sales') return b.salesCount - a.salesCount;
        return 0;
      });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div style={{ paddingBottom: 'var(--space-4xl)' }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        padding: 'var(--space-4xl) var(--space-xl)', 
        textAlign: 'center',
        background: 'linear-gradient(180deg, var(--color-bg-dark) 0%, var(--color-bg-darker) 100%)',
        overflow: 'hidden'
      }}>
        <div className="hero-grid-bg" />
        
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-pill" style={{ marginBottom: 'var(--space-md)' }}>
              SOLUÇÕES DE ELITE
            </span>
            <h1 className="section-title" style={{ marginBottom: 'var(--space-lg)' }}>
              Nosso <span className="text-gradient">Catálogo</span> de Fluxos
            </h1>
            <p className="section-subtitle">
              Escolha a ferramenta certa para escalar seus ganhos. Automações prontas, 
              consultoria especializada e recursos de última geração.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ 
        position: 'sticky', 
        top: '5rem', 
        zIndex: 50, 
        padding: '1rem 0',
        marginBottom: 'var(--space-2xl)'
      }}>
        <div className="section-container">
          <div className="glass-panel" style={{ 
            padding: '1rem 1.5rem', 
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            {/* Search */}
            <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
              <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-dim)' }} />
              <input 
                type="text" 
                placeholder="Buscar soluções..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.75rem 1rem 0.75rem 3rem',
                  color: 'var(--color-text-main)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {/* Category */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Filter size={16} color="var(--color-primary)" />
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.5rem 2rem 0.5rem 1rem',
                    color: 'var(--color-text-main)',
                    fontSize: '0.85rem',
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat} style={{ background: 'var(--color-bg-dark)' }}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ArrowUpDown size={16} color="var(--color-primary)" />
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.5rem 2rem 0.5rem 1rem',
                    color: 'var(--color-text-main)',
                    fontSize: '0.85rem',
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="relevant" style={{ background: 'var(--color-bg-dark)' }}>Relevância</option>
                  <option value="sales" style={{ background: 'var(--color-bg-dark)' }}>Mais Vendidos</option>
                  <option value="price-asc" style={{ background: 'var(--color-bg-dark)' }}>Menor Preço</option>
                  <option value="price-desc" style={{ background: 'var(--color-bg-dark)' }}>Maior Preço</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-container">
        {filteredProducts.length > 0 ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: 'var(--space-xl)' 
          }}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--space-4xl)', color: 'var(--color-text-muted)' }}>
            <p>Nenhuma solução encontrada para os filtros selecionados.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('Todos'); }}
              style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', marginTop: '1rem', textDecoration: 'underline' }}
            >
              Resetar filtros
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
