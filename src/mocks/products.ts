import MensTreeDasher from '@/assets/images/tree-dasher-2-natural-black-boyal-blue.webp'
import MensTreeRunnerNz from '@/assets/images/tree-runner-nz-weathered-brown.webp'
import MensWoolCruiser from '@/assets/images/wool-cruiser-burgundy.webp'
import MensWoolCruiserSlipOn from '@/assets/images/wool-cruiser-slip-on-dark-grey.webp'
import MensWoolCruiserWaterproof from '@/assets/images/wool-cruiser-waterproof-natural-black.webp'
import MensWoolRunnerNzWaterproof from '@/assets/images/wool-runner-nz-waterproof-medium-grey.webp'
import MensWoolRunnerNzMidWaterproof from '@/assets/images/wool-runner-nz-mid-waterproof-natural-black.webp'
import MensStriderExplore from '@/assets/images/strider-explore-rustic-green.webp'
import MensCruiserMidExplore from '@/assets/images/cruiser-mid-explore-rustic-green.webp'
import MensCruiser from '@/assets/images/cruiser_blizzard_blizzard.webp'

export const products = [
    {
        id: 1,
        name: 'Mens tree dasher 2',
        image: MensTreeDasher,
        price: 135,
        color: 'Natural Black/Royal blue',
        description: 'Tênis de performance feito em tecido respirável de fibra de árvore, com ótimo amortecimento e suporte. Ideal para treinos e uso diário, oferecendo conforto e estilo moderno.',
        category: { id: 1, name: "Masculino" }
    },
    {
        id: 2,
        name: 'Mens tree runner nz',
        image: MensTreeRunnerNz,
        price: 110,
        color: 'Weathered Brown',
        description: 'Tênis leve e confortável produzido com tecido natural de eucalipto. Possui maciez no toque, respirabilidade e design versátil para acompanhar qualquer look casual.',
       category: { id: 1, name: "Masculino" }
    },
    {
        id: 3,
        name: 'Mens wool cruiser',
        image: MensWoolCruiser,
        price: 100,
        color: 'Burgundy',
        description: 'Sapato feito com lã merino macia que mantém os pés aquecidos e confortáveis. Estiloso, resistente e perfeito para dias frios sem abrir mão do visual moderno.',
        category: { id: 1, name: "Masculino" }
    },
    {
        id: 4,
        name: 'Mens wool cruiser slip on',
        image: MensWoolCruiserSlipOn,
        price: 95,
        color: 'Dark Grey',
        description: 'Modelo slip-on em lã merino, fácil de calçar e extremamente confortável. Ideal para quem busca praticidade, estilo discreto e aquecimento natural.',
        category: { id: 1, name: "Masculino" }
    },
    {
        id: 5,
        name: 'Mens wool cruiser waterproof',
        image: MensWoolCruiserWaterproof,
        price: 140,
        color: 'Natural Black',
        description: 'Versão impermeável do Wool Cruiser, feita com lã merino tratada. Mantém os pés secos e aquecidos mesmo em dias chuvosos, sem perder o conforto e o estilo.',
        category: { id: 1, name: "Masculino" }
    },
    {
        id: 6,
        name: 'Mens wool runner nz waterproof',
        image: MensWoolRunnerNzWaterproof,
        price: 150,
        color: 'Medium Grey',
        description: 'Tênis resistente à água, feito em lã merino com ajuste confortável e respirável. Perfeito para quem busca proteção e estilo em qualquer clima.',
        category: { id: 5, name: "Moderno" }
    },
    {
        id: 7,
        name: 'Mens wool runner nz mid waterproof',
        image: MensWoolRunnerNzMidWaterproof,
        price: 160,
        color: 'Natural Black',
        description: 'Modelo de cano médio em lã merino, impermeável e elegante. Oferece estabilidade extra, conforto térmico e proteção ideal para dias frios e úmidos.',
        category: { id: 5, name: "Moderno" }
    },
    {
        id: 8,
        name: 'Mens strider explore',
        image: MensStriderExplore,
        price: 130,
        color: 'Rustic Green',
        description: 'Tênis robusto e moderno, feito para aventuras urbanas e ao ar livre. Combina resistência, conforto e design em um só produto versátil.',
        category: { id: 5, name: "Moderno" }
    },
    {
        id: 9,
        name: 'Mens cruiser mid explore',
        image: MensCruiserMidExplore,
        price: 140,
        color: 'Rustic Green',
        description: 'Sapato de cano médio com acabamento resistente e estilo aventureiro. Proporciona conforto prolongado e segurança em diferentes tipos de terreno.',
        category: { id: 3, name: "Outlet" }
    },
    {
        id: 10,
        name: 'Mens cruiser',
        image: MensCruiser,
        price: 100,
        color: 'Blizzard',
        description: 'Clássico e elegante, o Cruiser é feito em materiais premium que garantem conforto e durabilidade. Uma escolha versátil para qualquer ocasião.',
        category: { id: 3, name: "Outlet" }
    },
]
