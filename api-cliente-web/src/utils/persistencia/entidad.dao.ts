import { Customer } from "src/customer/customer.types";
export interface ReviewDTO{
    id?:string;
    market:{
        id:string;
        name:string;
        urlImg:string;
        address:string;
    },
    customer:{
        id:string;
        firstName:string;
        lastName:string;
        email:string;
        //curp:string;
    },
    content:string;
    rating:number;
    created_at:string;
}
export class DATA{
constructor(){}

 customers:Customer[]=[
    {
      id: "1",
      firstName: "Carlos",
      lastName: "García",
      email: "carlos.garcia@example.com",
      //curp: "GARC850812HDFRLR09"
    },
    {
      id: "2",
      firstName: "María",
      lastName: "Martínez",
      email: "maria.martinez@example.com",
      //curp: "MARM910624MDFRTS08"
    },
    {
      id: "3",
      firstName: "Luis",
      lastName: "Hernández",
      email: "luis.hernandez@example.com",
      //curp: "HERL720315HDFLNS07"
    },
    {
      id: "4",
      firstName: "Ana",
      lastName: "López",
      email: "ana.lopez@example.com",
      //curp: "LOPA950928MDFPZN03"
    },
    {
      id: "5",
      firstName: "Jorge",
      lastName: "Pérez",
      email: "jorge.perez@example.com",
      //curp: "PERJ860203HDFRLG02"
    },
    {
      id: "6",
      firstName: "Laura",
      lastName: "Gómez",
      email: "laura.gomez@example.com",
      //curp: "GOML990112MDFMZR04"
    }
  ];

 reviews:ReviewDTO[] = [
    {
      id: "1",
      market: {
        id: "1",
        name: "Walmart",
        urlImg: "https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw",
        address: "México 15 1073, Zona Nte Comercial, 85000 Cdad. Obregón, Son."
      },
      customer: {
        id: "1",
        firstName: "Carlos",
        lastName: "García",
        email: "carlos.garcia@example.com",
        //curp: "GARC850812HDFRLR09"
      },
      content: "Muy buen servicio y precios accesibles.",
      rating: 5,
      created_at: "2024-05-01T10:00:00Z"
    },
    {
      id: "2",
      market: {
        id: "2",
        name: "Walmart",
        urlImg: "https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw",
        address: "Kiosco SC 2646, C. Sufragio Efectivo 901, Miravalle, 85000 Cdad. Obregón, Son."
      },
      customer: {
        id: "2",
        firstName: "María",
        lastName: "Martínez",
        email: "maria.martinez@example.com",
        //curp: "MARM910624MDFRTS08"
      },
      content: "Encuentro todo lo que necesito, pero a veces hay mucha fila.",
      rating: 4,
      created_at: "2024-05-02T11:30:00Z"
    },
    {
      id: "3",
      market: {
        id: "3",
        name: "Bodega Aurrera",
        urlImg: "https://imgs.search.brave.com/kPf4v2D6Ohya9vDLbkUAB2cjmV30OfxV61Mwg0IQIyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYS5s/ZWFmbGV0c2NkbnMu/Y29tL214L2RhdGEv/NC9sb2dvLndlYnA_/MmMyMjU1M2NlNzM5/NWExZTE0MzQ5ZDdj/MWNjOTMwN2Y",
        address: "Zona Comercial, Blvd Rodolfo Elias Calles S/N Lote 2 Manzana 1, Blvd. Rodolfo Elías Calles S/N, Zona Comercial, 85013 Cdad. Obregón, Son."
      },
      customer: {
        id: "3",
        firstName: "Luis",
        lastName: "Hernández",
        email: "luis.hernandez@example.com",
        //curp: "HERL720315HDFLNS07"
      },
      content: "Buenos productos, pero el estacionamiento es pequeño.",
      rating: 3,
      created_at: "2024-05-03T09:15:00Z"
    },
    {
      id: "4",
      market: {
        id: "4",
        name: "Bodega Aurrera",
        urlImg: "https://imgs.search.brave.com/kPf4v2D6Ohya9vDLbkUAB2cjmV30OfxV61Mwg0IQIyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYS5s/ZWFmbGV0c2NkbnMu/Y29tL214L2RhdGEv/NC9sb2dvLndlYnA_/MmMyMjU1M2NlNzM5/NWExZTE0MzQ5ZDdj/MWNjOTMwN2Y",
        address: "C. Michoacán S/N, Cumuripa, 85000 Cajame, Son."
      },
      customer: {
        id: "4",
        firstName: "Ana",
        lastName: "López",
        email: "ana.lopez@example.com",
        //curp: "LOPA950928MDFPZN03"
      },
      content: "Precios bajos, pero no siempre hay variedad.",
      rating: 3,
      created_at: "2024-05-04T14:20:00Z"
    },
    {
      id: "5",
      market: {
        id: "1",
        name: "Walmart",
        urlImg: "https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw",
        address: "México 15 1073, Zona Nte Comercial, 85000 Cdad. Obregón, Son."
      },
      customer: {
        id: "5",
        firstName: "Jorge",
        lastName: "Pérez",
        email: "jorge.perez@example.com",
        //curp: "PERJ860203HDFRLG02"
      },
      content: "Muy buena atención al cliente.",
      rating: 5,
      created_at: "2024-05-05T16:45:00Z"
    },
    {
      id: "6",
      market: {
        id: "2",
        name: "Walmart",
        urlImg: "https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw",
        address: "Kiosco SC 2646, C. Sufragio Efectivo 901, Miravalle, 85000 Cdad. Obregón, Son."
      },
      customer: {
        id: "6",
        firstName: "Laura",
        lastName: "Gómez",
        email: "laura.gomez@example.com",
        //curp: "GOML990112MDFMZR04"
      },
      content: "Variedad de productos y buenos precios.",
      rating: 4,
      created_at: "2024-05-06T13:35:00Z"
    },
    {
      id: "7",
      market: {
        id: "3",
        name: "Bodega Aurrera",
        urlImg: "https://imgs.search.brave.com/kPf4v2D6Ohya9vDLbkUAB2cjmV30OfxV61Mwg0IQIyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYS5s/ZWFmbGV0c2NkbnMu/Y29tL214L2RhdGEv/NC9sb2dvLndlYnA_/MmMyMjU1M2NlNzM5/NWExZTE0MzQ5ZDdj/MWNjOTMwN2Y",
        address: "Zona Comercial, Blvd Rodolfo Elias Calles S/N Lote 2 Manzana 1, Blvd. Rodolfo Elías Calles S/N, Zona Comercial, 85013 Cdad. Obregón, Son."
      },
      customer: {
        id: "1",
        firstName: "Carlos",
        lastName: "García",
        email: "carlos.garcia@example.com",
        //curp: "GARC850812HDFRLR09"
      },
      content: "Me gusta la tienda, pero el estacionamiento es un problema.",
      rating: 3,
      created_at: "2024-05-07T12:00:00Z"
    },
    {
      id: "8",
      market: {
        id: "4",
        name: "Bodega Aurrera",
        urlImg: "https://imgs.search.brave.com/kPf4v2D6Ohya9vDLbkUAB2cjmV30OfxV61Mwg0IQIyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYS5s/ZWFmbGV0c2NkbnMu/Y29tL214L2RhdGEv/NC9sb2dvLndlYnA_/MmMyMjU1M2NlNzM5/NWExZTE0MzQ5ZDdj/MWNjOTMwN2Y",
        address: "C. Michoacán S/N, Cumuripa, 85000 Cajame, Son."
      },
      customer: {
        id: "2",
        firstName: "María",
        lastName: "Martínez",
        email: "maria.martinez@example.com",
        //curp: "MARM910624MDFRTS08"
      },
      content: "Precios accesibles, pero a veces el servicio es lento.",
      rating: 3,
      created_at: "2024-05-08T15:50:00Z"
    },
    {
      id: "9",
      market: {
        id: "1",
        name: "Walmart",
        urlImg: "https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw",
        address: "México 15 1073, Zona Nte Comercial, 85000 Cdad. Obregón, Son."
      },
      customer: {
        id: "3",
        firstName: "Luis",
        lastName: "Hernández",
        email: "luis.hernandez@example.com",
        //curp: "HERL720315HDFLNS07"
      },
      content: "Siempre hay lo que busco y a buen precio.",
      rating: 4,
      created_at: "2024-05-09T10:10:00Z"
    },
    {
      id: "10",
      market: {
        id: "2",
        name: "Walmart",
        urlImg: "https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw",
        address: "Kiosco SC 2646, C. Sufragio Efectivo 901, Miravalle, 85000 Cdad. Obregón, Son."
      },
      customer: {
        id: "4",
        firstName: "Ana",
        lastName: "López",
        email: "ana.lopez@example.com",
        //curp: "LOPA950928MDFPZN03"
      },
      content: "Buena experiencia de compra, aunque el lugar es muy concurrido.",
      rating: 4,
      created_at: "2024-05-10T09:25:00Z"
    }
  ];

    createCustomer(customer:Customer):Customer{
    this.customers.push(customer);
        return customer;
}

    getCustomerById(id:string):Customer{
    const customer:Customer[]= this.customers.filter((customer)=> customer.id==id);
        return customer[0];
}

  createReview(review:ReviewDTO):ReviewDTO{
    review.id=(this.reviews.length+1).toString();
    this.reviews.push(review);
        return review;
}

  getReviewsByMarketId(market_id):ReviewDTO[]{
    const data:ReviewDTO[] = this.reviews.filter((review)=>review.market.id==market_id);
    return data;
}

}