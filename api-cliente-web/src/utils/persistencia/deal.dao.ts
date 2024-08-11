export class DealsDAO {

    deals: Deal[];

    constructor() {
        this.deals = [];
        this.initDeals();
    }

    private initDeals(): void {
        const marketUno: DealMarket = {
            id: '1',
            name: 'Walmart'
        };
        const marketDos: DealMarket = {
            id: '2',
            name: 'Walmart'
        };
        const marketTres: DealMarket = {
            id: '3',
            name: 'Bodega Aurrera'
        };
        const marketCuatro: DealMarket = {
            id: '4',
            name: 'Bodega Aurrera'
        };
        const huevos: DealProduct = {
            id: '1',
            name: 'Huevos'
        };
        const leche: DealProduct = {
            id: '2',
            name: 'Leche santa clara'
        };
        const pan: DealProduct = {
            id: '3',
            name: 'Pan Bimbo'
        };
        const arroz: DealProduct = {
            id: '4',
            name: 'Arroz valle Verde'
        };
        const dealUno: Deal = {
            id: '1',
            description: 'Huevos a buen precio',
            price: 20,
            date: this.getRandomDate(),
            product: huevos,
            market: marketUno
        };
        const dealDos: Deal = {
            id: '2',
            description: 'Leche a buen precio',
            price: 15,
            date: this.getRandomDate(),
            product: leche,
            market: marketDos
        };
        const dealTres: Deal = {
            id: '3',
            description: 'Pan a buen precio',
            price: 10,
            date: this.getRandomDate(),
            product: pan,
            market: marketTres
        };
        const dealCuatro: Deal = {
            id: '4',
            description: 'Arroz a buen precio',
            price: 25,
            date: this.getRandomDate(),
            product: arroz,
            market: marketCuatro
        };
        this.deals.push(dealUno, dealDos, dealTres, dealCuatro);
    }

    private getRandomDate(): Date {
        const today = new Date();
        const maxDays = 10;
        const randomDays = Math.floor(Math.random() * maxDays);
        const randomDate = new Date(today.getTime() + randomDays * 24 * 60 * 60 * 1000);
        return randomDate;
    }

    insertDeal(deal: Deal): void {
        this.deals.push(deal);
    }

    getDealById(dealId: string): Deal {
        return this.deals.find(deal => deal.id === dealId);
    }
    getDealsByIds(dealIds: string[]): Deal[] {
        return this.deals.filter(deal => dealIds.includes(deal.id));
    }
    getAllDeals(page: number, count: number): Deal[] {
        return this.deals.slice(page * count, (page + 1) * count);
    }

    getDealsByMarketId(marketId: string, page: number, count: number, all: boolean): Deal[] {
        if (all) {
            return this.deals.filter(deal => deal.market.id === marketId);
        }
        return this.deals.filter(deal => deal.market.id === marketId).slice(page * count, (page + 1) * count);
    }
}

export interface Deal {
    id: string;
    description: string;
    price: number;
    date: Date;
    product: DealProduct;
    market: DealMarket;
}

export interface DealMarket {
    id: string;
    name: string;
}

export interface DealProduct {
    id: string;
    name: string;
}