import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink, Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
  rating?: number;
  salesCount?: number;
}

export default function ProductCard({
  title,
  description,
  price,
  image,
  category,
  badge,
  rating = 5,
  salesCount = 0
}: ProductCardProps) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Product Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          className="product-image-hover"
        />
        
        {/* Badges */}
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
          <span className="badge-pill" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)', borderColor: 'var(--color-primary)' }}>
            {category.toUpperCase()}
          </span>
          {badge && (
            <span className="badge-pill badge-pill-secondary" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', borderColor: 'rgba(34, 197, 94, 0.3)' }}>
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill={i < rating ? "currentColor" : "none"} color={i < rating ? "var(--color-primary)" : "var(--color-text-dim)"} />
          ))}
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)', marginLeft: '0.25rem' }}>({salesCount})</span>
        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-text-main)' }}>{title}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineClamp: '2', WebkitLineClamp: '2', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {description}
        </p>

        <div style={{ marginTop: 'auto' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-text-main)' }}>
            R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <button className="btn-secondary" style={{ padding: '0.6rem', fontSize: '0.85rem' }}>
              <ExternalLink size={16} /> Saiba Mais
            </button>
            <button className="btn-primary" style={{ padding: '0.6rem', fontSize: '0.85rem' }}>
              <ShoppingCart size={16} /> Comprar
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .product-image-hover:hover {
          transform: scale(1.1);
        }
      `}</style>
    </motion.div>
  );
}
