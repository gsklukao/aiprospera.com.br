'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const SAMPLE_PRODUCTS = [
  {
    id: '1',
    title: 'YouTube Automático Pro',
    description: 'Crie e gerencie canais dark no YouTube 100% com IA e n8n. Automação de roteiro, voz e edição.',
    price: 347.00,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    category: 'Workflow',
    badge: 'Mais Vendido',
    salesCount: 542,
    rating: 5
  },
  {
    id: '2',
    title: 'Shopee Affiliate Bot',
    description: 'O melhor bot do mercado para faturar no automático. Coleta ofertas e envia para WhatsApp e Telegram.',
    price: 297.90,
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
    price: 189.90,
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
    id: '12',
    title: 'Sistema de Recuperação de Carrinho',
    description: 'Agente de IA que entra em contato via WhatsApp com clientes que abandonaram o checkout.',
    price: 157.00,
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800',
    category: 'Automação',
    badge: 'ROI Alto',
    salesCount: 211,
    rating: 5
  }
];

const CATEGORIES = ['Todos', 'Workflow', 'Afiliados', 'Agente IA', 'Automação', 'Gestão', 'Mentoria', 'Recursos', 'Social'];

export default function CatalogPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": SAMPLE_PRODUCTS.map((p, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Product",
                "name": p.title,
                "description": p.description,
                "offers": {
                  "@type": "Offer",
                  "price": p.price,
                  "priceCurrency": "BRL"
                }
              }
            }))
          })
        }}
      />
      <section style={{ 
        position: 'relative', 
        padding: 'var(--space-4xl) var(--space-xl)', 
        textAlign: 'center',
        background: 'linear-gradient(180deg, var(--color-bg-dark) 0%, var(--color-bg-darker) 100%)',
        overflow: 'hidden'
      }}>
        <div className="hero-grid-bg" />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge-pill" style={{ marginBottom: 'var(--space-md)' }}>SOLUÇÕES DE ELITE</span>
            <h1 className="section-title">Nosso <span className="text-gradient">Catálogo</span> de Fluxos</h1>
            <p className="section-subtitle">Escolha a ferramenta certa para escalar seus ganhos. Automações prontas e consultoria especializada.</p>
          </motion.div>
        </div>
      </section>

      <section style={{ position: 'sticky', top: '5rem', zIndex: 50, padding: '1rem 0', marginBottom: 'var(--space-2xl)' }}>
        <div className="section-container">
          <div className="glass-panel" style={{ padding: '1rem 1.5rem', borderRadius: 'var(--radius-xl)', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
              <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-dim)' }} />
              <input 
                type="text" 
                placeholder="Buscar soluções..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', padding: '0.75rem 1rem 0.75rem 3rem', color: 'var(--color-text-main)', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Filter size={16} color="var(--color-primary)" />
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.5rem 1rem', color: 'var(--color-text-main)' }}>
                  {CATEGORIES.map(cat => <option key={cat} value={cat} style={{ background: 'var(--color-bg-dark)' }}>{cat}</option>)}
                </select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ArrowUpDown size={16} color="var(--color-primary)" />
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.5rem 1rem', color: 'var(--color-text-main)' }}>
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

      <section className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--space-xl)' }}>
          {filteredProducts.map(product => <ProductCard key={product.id} {...product} />)}
        </div>
      </section>
    </div>
  );
}
