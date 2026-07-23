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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "@/services/articles";
import type { Article } from "@/interfaces/article";

export const ArticleDetail = () => {
  const { id } = useParams();

  const [article, setArticle] = useState<Article | null>(null);

 useEffect(() => {
  async function loadArticle() {
    try {
      if (!id) return;

      const data = await getArticleById((id));
      setArticle(data);

    } catch (error) {
      console.error(error);
    }
  }

  loadArticle();
}, [id]);


  if (!article) {
    return <div className="p-10">Carregando artigo...</div>;
  }


  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 py-8 space-y-8">

        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground"
        >
          <ArrowLeft size={14} />
          Voltar aos Artigos
        </a>


        <header className="space-y-6">

          <span className="inline-block bg-accent px-2.5 py-1 rounded text-xs">
            {article.category}
          </span>


          <h1 className="text-3xl sm:text-4xl font-bold">
            {article.title}
          </h1>


          <p className="text-muted-foreground">
            {article.description}
          </p>


          <div className="flex items-center gap-3 border-b pb-4">

            <div className="flex flex-col text-xs">

              <span className="font-semibold">
                {article.author}
              </span>


              <div className="flex gap-2 text-muted-foreground">

                <span>
                  {article.date}
                </span>


                <span>
                  •
                </span>


                <div className="flex gap-1">
                  <Clock size={12}/>
                  {article.readTime}
                </div>

              </div>

            </div>


            <div className="ml-auto flex gap-3">

              <Heart size={18}/>
              <Bookmark size={18}/>
              <Share2 size={18}/>

            </div>


          </div>


          <div className="flex gap-6 text-xs text-muted-foreground">

            <span className="flex gap-1">
              <Heart size={14}/>
              {article.likes}
            </span>


            <span className="flex gap-1">
              <Eye size={14}/>
              {article.views}
            </span>


            <span className="flex gap-1">
              <MessageSquare size={14}/>
              0 comentários
            </span>


          </div>


        </header>



        <div className="w-full h-80 bg-gradient-to-tr from-indigo-300 via-red-200 to-pink-200 rounded-lg flex items-center justify-center">

          <span className="text-4xl font-serif font-bold">
            Lorem ipsum
          </span>

        </div>



        <article className="space-y-6 text-muted-foreground">

          <h2 className="text-xl font-bold text-foreground">
            {article.title}
          </h2>


          <p>
            {article.description}
          </p>


        </article>



        <div className="flex gap-2">

          <span className="border px-3 py-1 rounded text-xs">
            {article.category}
          </span>

        </div>



        <section>

          <h3 className="font-semibold mb-4">
            Comentários
          </h3>


          <div className="border rounded-lg p-5 text-center">

            <p className="text-sm text-muted-foreground">
              Faça login para comentar
            </p>


            <Button>
              Fazer login
            </Button>

          </div>

        </section>


      </main>

    </div>
  );
};


export default ArticleDetail;