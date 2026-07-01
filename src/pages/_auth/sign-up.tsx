import { createFileRoute } from "@tanstack/react-router";
import { RegisterForm } from "../../components/RegisterForm";
import { Logo } from "../../components/Logo";
import { Separator } from "../../components/Separator";
import { GoogleAuthButton } from "../../components/GoogleAuthButton";

export const Route = createFileRoute("/_auth/sign-up")({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: 'Cadastre-se - SyntaxWear' }
    ]
  })
});

function RouteComponent() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-surface p-5">
      <div className="w-[450px] bg-white  rounded-2xl p-5 flex flex-col">
        <Logo />
        <RegisterForm />
        <Separator />

         <GoogleAuthButton />

        <p className="text-sm text-gray-600 mt-6 text-center">
          Já tem uma conta? { " " }
          <a href="/sign-in" className="text-accent hover:underline">
            Entrar
          </a>
        </p>
      </div>
    </section>
  );
}
