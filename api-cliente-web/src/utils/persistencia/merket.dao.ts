export class MarketDAO {

    markets: Market[];

    constructor() {
        this.markets = [];
        this.initMarkets();
    }

    private initMarkets(): void {
        const walmartUno: Market = {
            id: '1',
            name: 'Walmart',
            urlImg: 'https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw',
            address: 'México 15 1073, Zona Nte Comercial, 85000 Cdad. Obregón, Son.'
        };
        const walmartDos: Market = {
            id: '2',
            name: 'Walmart',
            urlImg: 'https://imgs.search.brave.com/U7osKveKZcGGjIKWin2bisv7Z_YGXQG2oDMWQ8isjnY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVT/dEFiUkhMQTRaZHl6/UVpWaXZtMmMtMzIw/LTgwLmpwZw',
            address: 'Kiosco SC 2646, C. Sufragio Efectivo 901, Miravalle, 85000 Cdad. Obregón, Son.'
        };
        const bodegaAurreraUno: Market = {
            id: '3',
            name: 'Bodega Aurrera',
            urlImg: 'https://imgs.search.brave.com/kPf4v2D6Ohya9vDLbkUAB2cjmV30OfxV61Mwg0IQIyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYS5s/ZWFmbGV0c2NkbnMu/Y29tL214L2RhdGEv/NC9sb2dvLndlYnA_/MmMyMjU1M2NlNzM5/NWExZTE0MzQ5ZDdj/MWNjOTMwN2Y',
            address: 'Zona Comercial, Blvd Rodolfo Elias Calles S/N Lote 2 Manzana 1, Blvd. Rodolfo Elías Calles S/N, Zona Comercial, 85013 Cdad. Obregón, Son.'
        };
        const bodegaAurreraDos: Market = {
            id: '4',
            name: 'Bodega Aurrera',
            urlImg: 'https://imgs.search.brave.com/kPf4v2D6Ohya9vDLbkUAB2cjmV30OfxV61Mwg0IQIyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYS5s/ZWFmbGV0c2NkbnMu/Y29tL214L2RhdGEv/NC9sb2dvLndlYnA_/MmMyMjU1M2NlNzM5/NWExZTE0MzQ5ZDdj/MWNjOTMwN2Y',
            address: 'C. Michoacán S/N, Cumuripa, 85000 Cajame, Son.'
        };
        this.markets.push(walmartUno, walmartDos, bodegaAurreraUno, bodegaAurreraDos);
    }

    getMarketById(marketId: string): Market {
        return this.markets.find(market => market.id === marketId);
    }

    getMarketsByIds(marketIds: string[]): Market[] {
        return this.markets.filter(market => marketIds.includes(market.id));
    }

    getAllMarkets(page: number, count: number, all: Boolean): Market[] {
        if (all) {
            return this.markets;
        }
        return this.markets.slice(page * count, (page + 1) * count);
    }
}

export interface Market {
    id: string;
    name: string;
    urlImg: string;
    address: string;
}