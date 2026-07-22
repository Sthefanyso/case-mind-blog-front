import { Link } from "react-router-dom";
import { Moon } from "lucide-react";

import Logo from "@/components/common/logo";

const Navbar = () => {
  return (
    <nav className="w-full bg-background text-foreground border-b border-border">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Logo />

        {/* Navegação */}
        <div className="flex items-center gap-8">
          {/* Links */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Label
            </Link>

            <Link
              to="/"
              className="text-foreground transition-colors hover:text-primary"
            >
              Artigos
            </Link>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-border" />

          {/* Ícone */}
          <Moon size={18} className="text-muted-foreground" />

          {/* Ações */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Entrar
            </Link>

            <Link
              to="/signup"
              className="bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Cadastrar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
