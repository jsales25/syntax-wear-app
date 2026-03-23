import { createFileRoute, Link } from "@tanstack/react-router";
import bannerAbout from "@/assets/images/about.jpg";

export const Route = createFileRoute("/_app/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="flex flex-col md:flex-row items-center md:h-screen">
      <div className="h-100 md:h-full md:w-1/2">
        <img src={bannerAbout} alt="Homem sentado com tênis da marca"  className="size-full object-cover"/>
      </div>

      <div className="text-black px-8 py-16 lg:px-20 md:w-1/2 h-full flex flex-col justify-center">
        <h2 className="text-5xl lg:text-6xl font-medium text-[#333333] mb-8">Sobre nós</h2>

       <p className="text-[#666666] text-lg leading-relaxed mb-5">
          Somos apaixonados por calçados que unem estilo, conforto e
          durabilidade. Nossa missão? Fazer você se sentir bem a cada passo,
          oferecendo uma experiência de compra incrível e uma seleção de tênis,
          botas e sapatos para todas as ocasiões.
        </p>

        <Link to="/our-stores" className="self-start inline-block text-xs font-bold text-[#333333] uppercase border-b-2 tracking-[2.5px] hover:text-accent transition-colors duration-500">Saiba mais sobre nossas lojas</Link>
      </div>
    </section>
  );
}
