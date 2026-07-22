import {
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  Heart,
  Mail,
} from "lucide-react";

import Button from "@/components/ui/button";
import SecondaryButton from "@/components/ui/button-secondary";

const featuredArticles = [
  {
    id: "1",
    category: "Desenvolvimento Web",
    date: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    author: "John Doe",
    readTime: "5 min",
    views: 123,
    likes: 1,
    isHighlighted: false,
  },
  {
    id: "2",
    category: "Desenvolvimento Web",
    date: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    author: "John Doe",
    readTime: "5 min",
    views: 123,
    likes: 1,
    isHighlighted: true,
  },
  {
    id: "3",
    category: "Desenvolvimento Web",
    date: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    author: "John Doe",
    readTime: "5 min",
    views: 123,
    likes: 1,
    isHighlighted: false,
  },
];

const recentArticles = [
  {
    id: "1",
    category: "Desenvolvimento Web",
    date: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    author: "John Doe",
    isHighlighted: false,
  },
  {
    id: "2",
    category: "Desenvolvimento Web",
    date: "4 out 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in augue ligula. Donec sed eros vel lacus condimentum sollicitudin...",
    author: "John Doe",
    isHighlighted: true,
  },
];

const Home = () => {
  return (
    <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-12 space-y-24">
      {/* Hero */}
      <section className="flex flex-col items-center text-center space-y-6 pt-8 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
          Explore o Futuro da{" "}
          <span className="text-primary">Tecnologia</span>
        </h1>

        <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
          Artigos sobre IA, desenvolvimento, DevOps e as últimas tendências
          tecnológicas.
        </p>

        <div className="flex flex-col space-y-3 w-full max-w-md pt-2">
          <Button className="w-full sm:w-auto px-6">
            Explorar Artigos
          </Button>

          <SecondaryButton className="w-full sm:w-auto px-6">
            Começar a Escrever
          </SecondaryButton>
        </div>
      </section>

      {/* Artigos em destaque */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Artigos em Destaque
            </h2>

            <p className="text-xs text-muted-foreground mt-1">
              Os melhores conteúdos selecionados para você
            </p>
          </div>

          <a
            href="#artigos"
            className="flex items-center gap-1 text-xs text-primary hover:underline"
          >
            Ver todos
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className={`bg-card border ${
                article.isHighlighted
                  ? "border-primary"
                  : "border-border"
              } rounded-lg overflow-hidden flex flex-col transition hover:border-primary`}
            >
              <div className="w-full h-44 bg-gradient-to-tr from-indigo-300 via-red-200 to-pink-200 flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-gray-900">
                  Lorem ipsum
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="bg-secondary px-2 py-0.5 rounded">
                      {article.category}
                    </span>

                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {article.date}
                    </div>
                  </div>

                  <h3
                    className={`text-sm font-semibold leading-snug line-clamp-2 ${
                      article.isHighlighted
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {article.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                </div>
                                <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-2 border-t border-border">
                  <span>{article.author}</span>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </div>

                    <div className="flex items-center gap-1">
                      <Eye size={12} />
                      {article.views}
                    </div>

                    <div className="flex items-center gap-1">
                      <Heart size={12} />
                      {article.likes}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Artigos recentes */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Artigos Recentes
          </h2>

          <p className="text-xs text-muted-foreground mt-1">
            Conteúdo recente da comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <article
              key={article.id}
              className={`bg-card border ${
                article.isHighlighted
                  ? "border-primary"
                  : "border-border"
              } rounded-lg p-5 flex flex-col justify-between gap-4 hover:border-primary transition`}
            >
              <div className="space-y-2">
                <span className="inline-block bg-secondary text-xs px-2 py-1 rounded">
                  {article.category}
                </span>

                <h3
                  className={`text-sm font-semibold leading-snug line-clamp-2 ${
                    article.isHighlighted
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {article.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-2 border-t border-border">
                <span>{article.author}</span>

                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  {article.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-card border border-border rounded-lg p-8 sm:p-12 text-center flex flex-col items-center gap-4">
        <div className="p-3 rounded-full bg-background border border-border text-primary">
          <Mail size={24} />
        </div>

        <h2 className="text-2xl font-bold text-foreground">
          Newsletter Semanal
        </h2>

        <p className="text-xs text-muted-foreground max-w-md">
          Receba os melhores artigos de tecnologia diretamente no seu e-mail.
          <br />
          Sem spam, apenas conteúdo de qualidade.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="exemplo@email.com"
            className="flex-1 bg-background border border-border rounded-lg px-4 py-2 text-sm outline-none focus:border-primary"
          />

          <Button className="h-8 px-4 text-sm" type="submit">
            Inscrever
          </Button>
        </form>

        <p className="text-[10px] text-muted-foreground">
          Mais de 10.000 desenvolvedores já recebem nossa newsletter.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4 py-6">
        <h2 className="text-2xl font-bold text-foreground">
          Compartilhe Seu Conhecimento
        </h2>

        <p className="text-xs text-muted-foreground max-w-md mx-auto">
          Junte-se à nossa comunidade de escritores e compartilhe suas
          experiências e conhecimentos em tecnologia.
        </p>

         <Button className="h-8 px-4 text-sm">
          Criar Conta Gratuita
        </Button>
      </section>
    </main>
  );
};

export default Home;