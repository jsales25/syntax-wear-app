import { createFileRoute, Link } from "@tanstack/react-router";
import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import { Separator } from "../../components/Separator";
import { GoogleAuthButton } from "../../components/GoogleAuthButton";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Login - SyntaxWear" }],
  }),
});

function RouteComponent() {
  return (
    <section className="text-black bg-surface h-screen w-full flex justify-center items-center p-5">
      <div className="w-[450px] bg-white rounded-[18px] p-10 shadow-md">
        <div className="flex flex-col">
          <Logo />

          <h2 className="text-black font-bold text-[21px] mb-2">Entrar</h2>

          <p className="mb-3.5">Escoha como você gostaria de fazer login</p>

          <GoogleAuthButton />

          <Separator />

          <LoginForm />

          <p className="mt-3.5 text-center">
            Ainda não possui conta?{" "}
            <Link to="/sign-up" className="ml-1 text-accent hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
