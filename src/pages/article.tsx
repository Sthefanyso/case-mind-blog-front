import {
  ArrowLeft,
  Bookmark,
  Clock,
  Eye,
  Heart,
  MessageSquare,
  Share2,
} from "lucide-react";

import Button from "@/components/ui/button";


export const ArticleDetail = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 py-8 space-y-8">
        <div>
          <a
            href="#artigos"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            Voltar aos Artigos
          </a>
        </div>

        <header className="space-y-6">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded">
            Desenvolvimento web
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            O Futuro da Inteligência Artificial em 2025
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed">
            Explorando as tendências e inovações que moldarão o futuro da IA
            nos próximos anos.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
                alt="John Doe"
                className="w-10 h-10 rounded-full object-cover border border-border"
              />

              <div className="flex flex-col text-xs">
                <span className="font-semibold">John Doe</span>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>20/01/2025</span>
                  <span>•</span>

                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>6 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground">
              <button className="p-1.5 hover:text-primary transition-colors">
                <Heart size={18} />
              </button>

              <button className="p-1.5 hover:text-primary transition-colors">
                <Bookmark size={18} />
              </button>

              <button className="p-1.5 hover:text-primary transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Heart size={14} />
              1 curtidas
            </div>

            <div className="flex items-center gap-1.5">
              <Eye size={14} />
              122 visualizações
            </div>

            <div className="flex items-center gap-1.5">
              <MessageSquare size={14} />
              2 comentários
            </div>
          </div>
        </header>
                <div className="w-full h-64 sm:h-80 bg-gradient-to-tr from-indigo-300 via-red-200 to-pink-200 rounded-lg flex items-center justify-center p-6 shadow-md overflow-hidden">
          <span className="text-4xl sm:text-5xl font-serif font-bold text-gray-900">
            Lorem ipsum
          </span>
        </div>

        <article className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">
              O Futuro da Inteligência Artificial em 2025
            </h2>

            <p>
              A inteligência artificial continua a evoluir em um ritmo
              acelerado. Neste artigo, vamos explorar as principais tendências
              e inovações que estão moldando o futuro da IA.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-foreground">
              Modelos de Linguagem Avançados
            </h3>

            <p>
              Os modelos de linguagem como GPT-4 e além estão se tornando cada
              vez mais sofisticados, capazes de entender e gerar texto com
              precisão impressionante.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-foreground">
              Automação Inteligente
            </h3>

            <p>
              A automação está alcançando novos patamares com sistemas de IA
              que podem tomar decisões complexas e adaptar-se a novas
              situações.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-foreground">
              Ética e Responsabilidade
            </h3>

            <p>
              Com o avanço da IA, questões éticas se tornam cada vez mais
              importantes. É crucial desenvolver sistemas responsáveis e
              transparentes.
            </p>
          </section>
        </article>

        <div className="flex flex-wrap gap-2 border-y border-border py-4">
          <span className="bg-card border border-border text-xs text-muted-foreground px-3 py-1 rounded">
            Desenvolvimento web
          </span>

          <span className="bg-card border border-border text-xs text-muted-foreground px-3 py-1 rounded">
            Inteligência Artificial
          </span>

          <span className="bg-card border border-border text-xs text-muted-foreground px-3 py-1 rounded">
            Desenvolvimento backend
          </span>
        </div>

        <section className="space-y-6 pt-4">
          <h3 className="text-sm font-semibold">
            Comentário (2)
          </h3>

          <div className="bg-card border border-border rounded-lg p-6 text-center flex flex-col items-center gap-3">
            <p className="text-xs text-muted-foreground">
              Faça login para comentar
            </p>

            <Button className="w-32 py-2 text-xs">
              Fazer login
            </Button>
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
                    alt="John Doe"
                    className="w-8 h-8 rounded-full object-cover"
                  />

                  <div className="flex flex-col text-xs">
                    <span className="font-semibold">
                      John Doe
                    </span>

                    <span className="text-[10px] text-muted-foreground">
                      20/01/2025
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Heart size={14} />
                  1
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Excelente artigo! Muito bem explicado sobre as tendências de IA.
              </p>
            </div>
                        <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt="Marie Smith"
                    className="w-8 h-8 rounded-full object-cover"
                  />

                  <div className="flex flex-col text-xs">
                    <span className="font-semibold">
                      Marie Smith
                    </span>

                    <span className="text-[10px] text-muted-foreground">
                      20/01/2025
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Heart size={14} />
                  4
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Artigo muito interessante, mostra claramente como a IA está
                deixando de ser tendência para se tornar parte essencial das
                soluções do dia a dia.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArticleDetail;