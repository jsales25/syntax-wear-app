import tenisBranco from "@/assets/images/tenis-branco.jpg";
import tenisCinza from "@/assets/images/tenis-cinza.jpg";
import tenisFuturista from "@/assets/images/tenis-futurista.jpg";
import tenisColorido from "@/assets/images/tenis-colorido.jpg";
import { Button } from "../Button";

const categories = [
    { name: "Casual", image: tenisBranco },
    { name: "Esporte", image: tenisCinza },
    { name: "Moderno", image: tenisColorido },
    { name: "Futurista", image: tenisFuturista },
]

export const Categories = () => {
    return (
        <section
            className='container flex gap-2.5 lg:grid lg:grid-cols-4 lg:gap-6 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory'>
            {categories.map((category, index) => (
                <div
                    key={index}
                    className='h-[31.25rem] bg-center bg-cover rounded-[20px] relative flex justify-center items-center shrink-0 w-[95%] 
                    md:w-1/2 lg:w-full snap-center'
                    style={{ backgroundImage: `url(${category.image})` }}
                >
                    <div className="absolute inset-0 bg-black/30 rounded-[20px]" />

                    <div className="relative">
                        <Button variant='secondary'>{category.name}</Button>
                    </div>
                </div>
            ))}
        </section>
    )
}