import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Sample Data
const SAMPLE_PRODUCTS = [
  {
    id: '1',
    title: 'Automação Shopee Affiliate',
    description: 'Sistema completo para coletar ofertas e distribuir no WhatsApp automaticamente com IA.',
    price: 97.90,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    category: 'Workflow',
    badge: 'Mais Vendido',
    salesCount: 128,
    rating: 5
  },
  {
    id: '2',
    title: 'Consultoria n8n (Expert)',
    description: '2 horas de mentoria dedicada para destravar seus fluxos e automações complexas.',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    category: 'Consultoria',
    badge: 'Popular',
    salesCount: 45,
    rating: 5
  },
  {
    id: '3',
    title: 'Agente de IA Evolution',
    description: 'Transforme seu WhatsApp em uma máquina de vendas com integração ChatGPT e Evolution API.',
    price: 147.00,
    image: 'https://images.unsplash.com/photo-1675557009875-436f09789452?auto=format&fit=crop&q=80&w=800',
    category: 'Agente IA',
    badge: 'Novo',
    salesCount: 32,
    rating: 4
  },
  {
    id: '4',
    title: 'Fluxo Afiliado Magalu',
    description: 'Automação completa para curadoria e postagem de promoções Magazine Luiza.',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    category: 'Workflow',
    salesCount: 89,
    rating: 5
  },
  {
    id: '5',
    title: 'Pack de Prompts Avançados',
    description: 'Mais de 500 prompts validados para marketing, vendas e automação de processos.',
    price: 47.00,
    image: 'https://images.unsplash.com/photo-1673187115862-d62e8965c71a?auto=format&fit=crop&q=80&w=800',
    category: 'Recursos',
    salesCount: 215,
    rating: 5
  },
  {
    id: '6',
    title: 'Dashboard Financeiro IA',
    description: 'Controle total dos seus ganhos de afiliados com visualização de dados dinâmica.',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Dashboard',
    badge: 'Premium',
    salesCount: 67,
    rating: 5
  }
];

const CATEGORIES = ['Todos', 'Workflow', 'Consultoria', 'Agente IA', 'Recursos', 'Dashboard'];

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
