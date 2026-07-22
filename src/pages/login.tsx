import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Logo from "@/components/common/logo";

const Login = () => {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-10">
      <div className="w-full max-w-[400px]">

        {/* Header */}
       <div className="mb-8 flex flex-col items-center text-center gap-2">
        <Logo />

          <h1 className="text-2xl font-bold">
            Entrar na Plataforma
          </h1>

          <p className="text-sm text-muted-foreground">
            Acesse sua conta para gerenciar seus artigos
          </p>
        </div>

        {/* Card */}
        <div className="
          rounded-lg
          border
          border-border
          bg-card
          p-6
          shadow-xl
        ">
          <form className="space-y-4">

            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="exemplo@email.com"
              required
            />

            <Input
              label="Senha"
              id="password"
              type="password"
              placeholder="••••••••"
              required
              rightElement={
                <button
                  type="button"
                  className="
                    text-xs
                    text-muted-foreground
                    transition-colors
                    hover:text-primary
                  "
                >
                  Esqueceu a senha?
                </button>
              }
            />

           <Button type="submit">
              Entrar
            </Button>

          </form>

          <div className="my-6 border-t border-border" />

          <p className="text-center text-xs text-muted-foreground">
            Não tem uma conta?{" "}
            <button
              type="button"
              className="
                font-medium
                text-foreground
                hover:text-primary
              "
            >
              Criar conta
            </button>
          </p>

        </div>
      </div>
    </main>
  );
};

export default Login;