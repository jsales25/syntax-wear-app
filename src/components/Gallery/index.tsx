import banner from "@/assets/images/banner.jpg";
import tenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import tenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import tenisBrancoEPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import tenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import modelo from "@/assets/images/galeria-modelo.jpg";

export const Gallery = () => {
  return (
    <section className="container grid grid-cols-12 gap-2.5 md:gap-7 mb-10">
      <div className="col-span-12 row-span-3 md:col-span-6 order-1">
        <img
          className="w-full h-full object-cover rounded-[20px]"
          src={banner}
          alt="Banner"
        />
      </div>

      <div className="col-span-12 row-span-1 md:col-span-6 order-6 md:order-2">
        <img
          className="w-full h-full object-cover rounded-[20px]"
          src={tenisRoxo}
          alt="Tênis Roxo"
        />
      </div>

      <div className="col-span-6 row-span-6 md:col-span-3 order-3">
        <img className="w-full h-full object-cover rounded-[20px]" src={modelo} alt="Modelo" />
      </div>

      <div className="col-span-6 row-span-3 md:col-span-3 order-4">
        <img src={tenisColorido} alt="Tênis Colorido" />
      </div>

      <div className=" col-span-12 row-span-4 md:col-span-6 order-2 md:order-5">
        <img className="w-full h-full object-cover rounded-[20px]" src={tenisBrancoEPreto} alt="Tênis Preto e Branco" />
      </div>

      <div className="col-span-6 row-span-3 md:col-span-3 order-4 md:order-6">
        <img className="w-full h-full object-cover rounded-[20px]" src={tenisCinza} alt="Tênis Cinza" />
      </div>
    </section>
  );
};
