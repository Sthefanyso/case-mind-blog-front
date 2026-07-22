import Logo from "@/components/common/logo";

import githubIcon from "@/assets/icons/icon-github.svg";
import linkedinIcon from "@/assets/icons/icon-linkedin.svg";
import twitterIcon from "@/assets/icons/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-background text-muted-foreground border-t border-border">

      <div className="max-w-[1440px] mx-auto px-10 py-16 flex justify-between">

        {/* ESQUERDA */}
        <div className="flex flex-col items-start gap-4 max-w-sm">

          <Logo />

          <p className="text-sm leading-relaxed">
            Seu portal de tecnologia com artigos, tutoriais e novidades do mundo tech.
          </p>

        </div>


        {/* DIREITA */}
        <div className="flex gap-20">

          {/* Navegação */}
          <div className="flex flex-col gap-4">

            <h3 className="text-base font-semibold text-foreground">
              Navegação
            </h3>

            <nav className="flex flex-col gap-3 text-sm">

              <a
                href="#"
                className="hover:text-primary transition-colors"
              >
                Home
              </a>

              <a
                href="#"
                className="hover:text-primary transition-colors"
              >
                Artigos
              </a>

              <a
                href="#"
                className="hover:text-primary transition-colors"
              >
                Dashboard
              </a>

            </nav>

          </div>


          {/* Redes Sociais */}
          <div className="flex flex-col gap-4">

            <h3 className="text-base font-semibold text-foreground">
              Redes Sociais
            </h3>


            <div className="flex items-center gap-4">

                 <a href="#" aria-label="Linkedin">
                <img
                  src={linkedinIcon}
                  alt="Linkedin"
                  className="h-5 w-5 opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>

              <a href="#" aria-label="Github">
                <img
                  src={githubIcon}
                  alt="Github"
                  className="h-5 w-5 opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>

              <a href="#" aria-label="Twitter">
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="h-5 w-5 opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* Linha inferior */}
      <div className="border-t border-border" />


      {/* Copyright */}
      <div className="max-w-[1440px] mx-auto px-10 py-6 text-center">

        <p className="text-xs opacity-80">
          © 2025 TechBlog. Todos os direitos reservados.
        </p>

      </div>


    </footer>
  );
};

export default Footer;