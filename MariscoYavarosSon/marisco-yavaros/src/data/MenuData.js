// Menu data en español
export const menuItems = [
  // cocteles
  {
  id: '1',
  name: 'Cóctel de Camarón',
  description: 'Camarones frescos marinados en limón con tomate, cebolla y cilantro.',
  image: 'https://i.pinimg.com/736x/93/a2/6b/93a26b097251df92c3ee6fa1642b92ac.jpg',
  category: 'cocteles',
  sizes: [
    { label: 'Chico', price: 70 },
    { label: 'Mediano', price: 140 },
    { label: 'Grande', price: 190 }
  ]
},
  {
  id: '2',
  name: 'Cóctel de Pulpo y Camarón',
  description: 'Camarones y Pulpos frescos marinados en limón con tomate, cebolla y cilantro.',
  image: 'https://i.pinimg.com/736x/1f/d0/68/1fd068ca4627df1f726b9af17da2f556.jpg',
  category: 'cocteles',
  sizes: [
    { label: 'Chico', price: 80 },
    { label: 'Mediano', price: 140 },
    { label: 'Grande', price: 190 }
  ]
},
  {
  id: '3',
  name: 'Cóctel de Camarón y Caracol',
  description: 'Camarones y Caracoles frescos marinados en limón con tomate, cebolla y cilantro.',
  image: '/camaronCaracol.jpg',
  category: 'cocteles',
  sizes: [
    { label: 'Chico', price: 80 },
    { label: 'Mediano', price: 140 },
    { label: 'Grande', price: 190 }
  ]
},
{
  id: '4',
  name: 'Cóctel de Camarón y Callo',
  description: 'Camarones y Callos frescos marinados en limón con tomate, cebolla y cilantro.',
  image: '/camaronCaracol.jpg',
  category: 'cocteles',
  sizes: [
    
    { label: 'Mediano', price: 180 },
    { label: 'Grande', price: 220 }
  ]
},
{
  id: '5',
  name: 'Campechana',
  description: 'Deliciosa mezcla de marisco servidos en un coctel frío con jugo de tomate, limón, cebolla, cilantro y un toque de picante. Una explosión de sabor marino en cada cucharada.',
  image: 'https://i.pinimg.com/736x/06/50/f0/0650f0428b50db7696c555a3c2877122.jpg',
  category: 'cocteles',
  sizes: [
    { label: 'Chico', price: 70 },
    { label: 'Mediano', price: 120 },
    { label: 'Grande', price: 150 }
  ]
},
{
  id: '6',
  name: 'Agasajo',
  description: 'Selección fresca de mariscos fríos con camarón crudo y cocido, pulpo, caracol y callo, preparados con el auténtico sabor del Pacífico.',
  image: '/agasajoPlato.jpg',
  category: 'cocteles',
  sizes: [
    
    { label: 'Mediano', price: 180 },
    { label: 'Grande', price: 220 }
  ]
},
{
  id: '7',
  name: 'Agasajo en plato',
  description: 'Selección fresca de mariscos fríos con camarón crudo y cocido, pulpo, caracol y callo, preparados con el auténtico sabor del Pacífico.',
  image: '/agasajoPlato.jpg',
  category: 'cocteles',
  sizes: [
    
    { label: 'Mediano', price: 240 },
    { label: 'Grande', price: 320 }
  ]
},
{
  id: '8',
  name: 'Mariscada',
  description: 'Combinacion de mariscos que incluye callo, camaron, caracol y pescado',
  image: 'https://i.pinimg.com/736x/18/39/e5/1839e5de08b13c707a23b11beb3001b2.jpg',
  category: 'cocteles',
  sizes: [
    
    { label: 'Mediano', price: 240 },
    { label: 'Grande', price: 320 }
  ]
},
  // Ceviches
  {
    id: '9',
    name: 'Ceviche de Camaron',
    description: 'Camarón curtido en limón con salsas caseras, tomate, cebolla, cilantro y chile.',
    price: 320,
    image: 'https://i.pinimg.com/736x/6a/17/97/6a1797c2032632a04580105fc0f22275.jpg',
    category: 'ceviches',
    sizes: [
    
    { label: 'Mediano', price: 170 },
    { label: 'Grande', price: 220 }
  ]
  },
  {
    id: '10',
    name: 'Ceviche de Pescado',
    description: 'Pescado curtido en limón con salsas caseras, tomate, cebolla, cilantro y chile.',
    price: 320,
    image: 'https://i.pinimg.com/736x/6a/17/97/6a1797c2032632a04580105fc0f22275.jpg',
    category: 'ceviches',
    sizes: [
    { label: 'Chico', price: 60 },
    { label: 'Mediano', price: 90 },
    { label: 'Grande', price: 140 }
  ]
  },
  {
    id: '11',
    name: 'Aguachiles',
    description: 'Aguachile de camaron  preparado al momento con chiles frescos, jugo de limón, pepino crujiente y cebolla morada en finas láminas.',
    price: 320,
    image: 'https://i.pinimg.com/736x/6a/17/97/6a1797c2032632a04580105fc0f22275.jpg',
    category: 'ceviches',
    sizes: [
    
    { label: 'Mediano', price: 170 },
    { label: 'Grande', price: 220 }
  ]
  },

  // Tostadas
  {
    id: '12',
    name: 'Cachoreadas',
    description: 'Tostada cargada con camarón, pulpo, callo y caracol, bañada en salsas de la casa y un toque picante. Frescura y sabor en cada bocado.',
    price: 120,
    image: 'https://images.pexels.com/photos/14701650/pexels-photo-14701650.jpeg',
    category: 'tostadas'
  },
  {
    id: '13',
    name: 'Tostada de Camaron',
    description: 'Tostada crujiente con camarón cocido, acompañado de tomate, cebolla, cilantro y salsas especiales.',
    price: 70,
    image: 'https://i.pinimg.com/736x/31/75/0e/31750ee3cc3d1d520eb42e6dfa372832.jpg',
    category: 'tostadas'
  },
 {
    id: '14',
    name: 'Tostada de Pescado',
    description: 'Pescado fresco marinado en limón con pico de gallo y salsas de la casa sobre una tostada crujiente.',
    price: 60,
    image: 'https://i.pinimg.com/736x/8d/c0/b1/8dc0b1b8474195ba8752cdfed55cd097.jpg',
    category: 'tostadas'
  },
  {
    id: '15',
    name: 'Tostada de Pulpo',
    description: 'Pulpo suave al estilo ceviche con verduras frescas y un toque de chile en tostada dorada.',
    price: 110,
    image: 'https://i.pinimg.com/736x/38/8c/06/388c06381966c7bc6158388ad63eee6a.jpg',
    category: 'tostadas'
  },
  {
    id: '16',
    name: 'Tostada de Jaiba',
    description: 'Jaiba desmenuzada marinada con limón, mezclada con vegetales frescos y servida sobre una tostada crujiente.',
    price: 80,
    image: 'https://i.pinimg.com/736x/0b/3f/6f/0b3f6fbc5b8fe2218380bb64aff0c8ba.jpg',
    category: 'tostadas'
  },
  {
    id: '17',
    name: 'Tostada de Camaron Curtido',
    description: 'Tostada crujiente con camarón fresco curtido en limón, acompañado de tomate, cebolla, cilantro y salsas especiales.',
    price: 120,
    image: 'https://i.pinimg.com/736x/68/74/9b/68749b9e3529b67d6704ff8b1608c848.jpg',
    category: 'tostadas'
  },
  //Tostitos
  {
    id: '18',
    name: 'Tosti-pescado',
    description: 'Crujientes Tostitos cubiertos con ceviche de pescado fresco, bañados en salsas de la casa y un toque de limón.',
    price: 130,
    image: 'https://i.pinimg.com/736x/2b/1a/3b/2b1a3b44a3ddf43327e94c7cb35db641.jpg',
    category: 'tostitos'
  },
  {
    id: '19',
    name: 'Tosti-Camaron',
    description: 'Crujientes Tostitos cubiertos con Camaron fresco, bañados en salsas de la casa y un toque de limón.',
    price: 150,
    image: 'https://i.pinimg.com/736x/4b/c9/14/4bc914b98c24d340007367c3779b825f.jpg',
    category: 'tostitos'
  },
  {
    id: '20',
    name: 'Tosti-Mixto Camaron cocido y Pescado',
    description: 'Crujientes Tostitos cubiertos con ceviche de pescado fresco y camarones cocidos, bañados en salsas de la casa y un toque de limón.',
    price: 180,
    image: 'https://i.pinimg.com/736x/a5/58/9b/a5589ba0035e170608a7d4adc2ccd4fd.jpg',
    category: 'tostitos'
  },
  {
    id: '21',
    name: 'Tosti-Mixto Camaron cocido y cirtido',
    description: 'Crujientes Tostitos cubiertos con  camarones cocidos y curtidos en limon, bañados en salsas de la casa y un toque de limón.',
    price: 220,
    image: 'https://i.pinimg.com/736x/a5/58/9b/a5589ba0035e170608a7d4adc2ccd4fd.jpg',
    category: 'tostitos'
  },
  //Calientes
  {
    id: '22',
    name: 'Cahuamanta',
    description: 'Tradicional caldo sonorense preparado con manta ray y camarón, acompañado de verduras y servido bien caliente, ideal para revivir el cuerpo.',
    price: 120,
    image: 'https://i.pinimg.com/736x/89/fe/c7/89fec7628741eeefda05ae8a9e69ef53.jpg',
    category: 'calientes'
  },
  {
    id: '23',
    name: 'Sopa de mariscos',
    description: 'Caldo abundante y lleno de sabor, preparado con una mezcla de pescado, aleta, manta, pulpo, camarón y caracol. Una explosión marina en cada cucharada.',
    price: 140,
    image: 'https://i.pinimg.com/736x/f8/ca/81/f8ca8149e9619829967671ebf9a1827a.jpg',
    category: 'calientes'
  },
  {
    id: '24',
    name: 'Tacos de Pescado',
    description: 'Crujiente filete de pescado rebozado al estilo tempura, servido en tortilla de maíz con col fresca y aderezo especial.',
    price: 35,
    image: 'https://i.pinimg.com/736x/0b/2e/a9/0b2ea987aaf7d2613a7c12b0e96b8f86.jpg',
    category: 'calientes'
  },
  {
    id: '25',
    name: 'Tacos de Camaron',
    description: 'Jugosos camarones empanizados al estilo tempura, acompañados de ensalada fresca y salsas de la casa en tortilla de maíz.',
    price: 40,
    image: 'https://i.pinimg.com/736x/70/52/33/70523351a9ba18681f34c9bab1a2839e.jpg',
    category: 'calientes'
  },
  {
    id: '26',
    name: 'Empanizados',
    description: 'Suave filete de pescado cubierto con una crujiente capa de pan rallado, dorado a la perfección y servido con una guarnición de ensalada fresca y papas fritas.',
    price: 190,
    image: 'https://i.pinimg.com/736x/aa/86/b3/aa86b3ee30ab2f774076942b046acec2.jpg',
    category: 'calientes'
  },
  
  {
    id: '27',
    name: 'Orden de Camaron Empanizado',
    description: 'Camarones frescos empanizados y fritos, acompañados de ensalada de col, lechuga y limón fresco.',
    price: 190,
    image: 'https://i.pinimg.com/736x/0e/cf/06/0ecf06a05fa28d662f59161ab1824941.jpg',
    category: 'calientes'
  },
  {
    id: '28',
    name: 'Orden de Lisa',
    description: 'Lisa frita fresc, perfectamente fritA, acompañada de ensalada fresca y vegetales.',
    price: 100,
    image: 'https://i.pinimg.com/736x/df/27/61/df27612f12c9e1c5b78405b2572486f4.jpg',
    category: 'calientes'
  },
  {
    id: '29',
    name: 'Cahuamanta con Aleta',
    description: 'Deliciosa sopa de mariscos con cahuama y aleta, acompañada de un caldo sabroso y especiado que resalta los sabores del mar.',
    price: 150,
    image: 'https://i.pinimg.com/736x/0a/65/0f/0a650f4b2b7ca7ef40daf898ed5815b9.jpg',
    category: 'calientes'
  },
  //molcajetes
  {
    id: '30',
    name: 'Molcajete de Camaron cocido',
    description: 'Un platillo lleno de sabor, donde los camarones cocidos se mezclan con salsas caseras y especias en un tradicional molcajete, brindando una experiencia única de sabores y texturas. Ideal para compartir.',
    price: 240,
    image: 'https://i.pinimg.com/736x/7f/8e/55/7f8e55fef393a86512a9be6ccfe50bf6.jpg',
    category: 'molcajetes'
  },
  {
    id: '31',
    name: 'Molcajete de Camaron curtido',
    description: 'Un platillo lleno de sabor, donde los camarones curtidos se mezclan con salsas caseras y especias en un tradicional molcajete, brindando una experiencia única de sabores y texturas. Ideal para compartir.',
    price: 240,
    image: 'https://i.pinimg.com/736x/7f/8e/55/7f8e55fef393a86512a9be6ccfe50bf6.jpg',
    category: 'molcajetes'
  },
  {
    id: '32',
    name: 'Molcajete de Pulpo',
    description: 'Un platillo lleno de sabor, donde los Pulpos se mezclan con salsas caseras y especias en un tradicional molcajete, brindando una experiencia única de sabores y texturas. Ideal para compartir.',
    price: 240,
    image: 'https://i.pinimg.com/736x/71/91/4f/71914fcf08a6a50baacef603351c22c7.jpg',
    category: 'molcajetes'
  },
  {
    id: '33',
    name: 'Molcajete de Caracol',
    description: 'Un platillo lleno de sabor, donde los Caracoles se mezclan con salsas caseras y especias en un tradicional molcajete, brindando una experiencia única de sabores y texturas. Ideal para compartir.',
    price: 240,
    image: 'https://images.pexels.com/photos/3407782/pexels-photo-3407782.jpeg',
    category: 'molcajetes'
  },
  {
    id: '34',
    name: 'Molcajete de Jaiba',
    description: 'Un platillo lleno de sabor, donde la jaiba se mezcla con salsas caseras y especias en un tradicional molcajete, brindando una experiencia única de sabores y texturas. Ideal para compartir.',
    price: 240,
    image: 'https://i.pinimg.com/736x/83/a5/d2/83a5d2b95ee171df5ce4eed844f3925f.jpg',
    category: 'molcajetes'
  },
  //bebidas
  {
    id: '35',
    name: 'Sodas',
    description: 'Coca-cola, Sprite, 7Up, Fresa, Naranja, Manzanita...',
    price: 30,
    image: 'https://i.pinimg.com/736x/36/f7/94/36f794c4259b302993889004e21eb865.jpg',
    category: 'molcajetes'
  },
  {
    id: '36',
    name: 'Jugos Naturales',
    description: 'Jugos de fruta',
    price: 30,
    image: 'https://i.pinimg.com/736x/04/d0/23/04d023229fa8675daad0a87dceb6f0ce.jpg',
    category: 'bebidas'
  },
  {
    id: '37',
    name: 'Agua',
    description: 'Agua embotellada',
    price: 30,
    image: 'https://i.pinimg.com/736x/56/88/40/568840d4808ba2f1c76932cdddef942c.jpg',
    category: 'bebidas'
  }
];
