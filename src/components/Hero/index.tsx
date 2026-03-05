import Banner from '@/assets/images/banner.jpg';

export const Hero = () => {
    return (
        <div className='container'>
        <section className='relative h-125 rounded-[20px] mb-10'>
            <img src={Banner} alt="homem sentado com os tenis da SyntaxWear" className='w-full h-full object-cover rounded-[20px]' />

            <div className='absolute w-full h-full bottom-0 flex justify-end items-center text-center px-6 md:px-24 pb-32'>
                <div className='flex flex-col items-center  text-white w-[388px]'>
                    <h2 className='text-xl font-medium leading-normal tracking-wider mb-2.5'>Kypton One</h2>
                    <h1 className='text-2xlleading-9 tracking-widest mb-10'>Transforme qualquer passo em presença</h1>

                    <div className='flex gap-3.5'>
                        <button>Ver modelos</button>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        </section>
        </div>
        
    )
}