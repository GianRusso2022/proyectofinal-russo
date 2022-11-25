const products = [
    {
      "precio": 1000,
      "color": "Claro",
      "detalle": "1.50mt de largo",
      "id": 0,
      "stock": 10,
      "nombre": "Correa emoticon",
      "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/251-c4ea07f4867792d75915255658058160-640-01-a301a7dbbaac56bf2e15429947082066-480-0.png",
      "categoria": "correas",
    },
    {
      "precio": 1000,
      "color": "Anana",
      "detalle": "1.50mt de largo",
      "id": 1,
      "stock": 10,
      "nombre": "Correa Anana",
      "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/231-52ed1f46a894aad5fd15255655338964-320-01-43a63e40ead6eb4ab415323561265539-480-0.png",
      "categoria": "correas",
    },
    {
        "precio": 1200,
        "color": "Combinado",
        "detalle": "Perros medianos",
        "id": 2,
        "stock": 10,
        "nombre": "Collar Emoticono",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/71-fed610253654e292f515255619432863-640-011-ff56d5c2035e0a17e715429951177461-480-0.png",
        "categoria": "collares",
      },
      {
        "precio": 1200,
        "color": "Azul",
        "detalle": "Perros medianos",
        "id": 3,
        "stock": 10,
        "nombre": "Collar Emoticono",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/51-522d5b1ade147db62615255617464636-640-01-eb6ce6cd613217b00715429945497668-480-0.png",
        "categoria": "collares",
      },
      {
        "precio": 1200,
        "color": "Anana",
        "detalle": "Perros medianos",
        "id": 4,
        "stock": 10,
        "nombre": "Collar Anana",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/images11-1979a679f190e3b17615429947658175-480-0.jpg",
        "categoria": "collares",
      },
      {
        "precio": 2200,
        "color": "Azul",
        "detalle": "Perros medianos",
        "id": 5,
        "stock": 10,
        "nombre": "Arnes Camuflado Azul",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/camuflado-blue2-f5c87572f2cebf797f15914692047559-480-01-696f67e7286096fce615984671248846-480-0.png",
        "categoria": "arnes",
      },
      {
        "precio": 2200,
        "color": "Rosa",
        "detalle": "Perros medianos",
        "id": 6,
        "stock": 10,
        "nombre": "Arnes princes rosa",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/magic-frente1-9e326ac0049c3b922c16358484516182-640-011-030a17146d012b656416570481371495-480-0.png",
        "categoria": "arnes",
      },
      {
        "precio": 2200,
        "color": "Oscuro",
        "detalle": "Perros medianos",
        "id": 7,
        "stock": 10,
        "nombre": "Arnes gamer oscuro",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/gamer-frente21-900ca6916c44c32d1916358481507112-640-01-7c4d777308a2d9227016570470298033-480-0.png",
        "categoria": "arnes",
      },
      {
        "precio": 1200,
        "color": "Combinado",
        "detalle": "Perros medianos",
        "id": 8,
        "stock": 10,
        "nombre": "Arnes Emoticono",
        "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/068/331/products/camuflado-blue2-f5c87572f2cebf797f15914692047559-480-01-696f67e7286096fce615984671248846-480-0.png",
        "categoria": "arnes",
      },
      
  ]

  export const getProducts = (categoria) =>
  new Promise((res, rej) => {
    const response = categoria
    ? products.filter((p) => p.categoria === categoria)
    : products;
    setTimeout(() => {
      res(response);
    }, 500);
  });

  export const getProduct = (productId) => new Promise((res, rej) => {
    const response = products.find((product) => product.id == productId);
    setTimeout(() => {
      res(response);
    }, 500);
  });

  