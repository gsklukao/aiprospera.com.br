import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AiProspera | Funcionários Digitais com IA - Automação Inteligente",
  description: "Contrate um funcionário digital que trabalha 24h, não tira férias e reduz seus custos em até 90%. Automação inteligente via WhatsApp, chatbots e agentes de voz.",
  keywords: ["inteligência artificial", "automação", "WhatsApp", "chatbot", "IA", "atendimento automático", "funcionários digitais", "automação para PMEs", "agente de IA Brasil"],
  authors: [{ name: "AiProspera - Soluções" }],
  openGraph: {
    type: "website",
    url: "https://aiprospera.com.br/",
    title: "AiProspera | Funcionários Digitais com IA",
    description: "Escale suas operações com funcionários digitais que trabalham 24/7. Automação inteligente via WhatsApp.",
    siteName: "AiProspera",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AiProspera - Funcionários Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AiProspera | Funcionários Digitais com IA",
    description: "Escale suas operações com funcionários digitais que trabalham 24/7.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`} data-theme="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AiProspera",
              "url": "https://aiprospera.com.br",
              "description": "Soluções em Inteligência Artificial e Automação para Empresas",
              "sameAs": [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Como a IA da AiProspera se diferencia de chatbots comuns?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nossos agentes são alimentados por LLMs especializados que compreendem contexto, intenção e sentimento."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quanto tempo leva para integrar as soluções ao meu negócio?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A integração básica via WhatsApp pode ser feita em 48h. Soluções mais complexas levam de 1 a 2 semanas."
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
