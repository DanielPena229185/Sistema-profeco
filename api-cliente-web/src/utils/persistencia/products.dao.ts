export class ProductDAO {
    products: Product[];
    markets: CompareProduct[];
    constructor() {
        this.products = [];
        this.markets = [];
        this.initProducts();
    }

    private initProducts(): void {
        const huevos: Product = {
            id: '1',
            name: 'Huevos',
            imageUrl: 'https://c.files.bbci.co.uk/016E/production/_115766300_gettyimages-1185128848.jpg',
            details: 'Docena de huevos de gallina roja'
        };
        const leche: Product = {
            id: '2',
            name: 'Leche santa clara',
            imageUrl: 'https://cdn.reva.mx/media/products/7501295600126/01.jpg',
            details: 'Leche entera de vaca'
        };
        const pan: Product = {
            id: '3',
            name: 'Pan Bimbo',
            imageUrl: 'https://th.bing.com/th/id/OIP.TDjLfieGrTAeOtln5DSBwwHaHa?rs=1&pid=ImgDetMain',
            details: 'Pan blanco rebanado'
        };
        const arroz: Product = {
            id: '4',
            name: 'Arroz valle Verde',
            imageUrl: 'https://th.bing.com/th/id/OIP.qzUx8jkR2QAGE4iiI6xDiAHaHa?rs=1&pid=ImgDetMain',
            details: 'Arroz blanco grano largo'
        };
        const frijol: Product = {
            id: '5',
            name: 'Frijol valle verde',
            imageUrl: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750107130104L.jpg',
            details: 'Frijol valle verde'
        };
        const galletas: Product = {
            id: '6',
            name: 'Galletas Ritz',
            imageUrl: 'https://th.bing.com/th/id/R.aef87aa954de0b032fe978d17a554b7c?rik=wWbbfG%2bqdn4MKg&pid=ImgRaw&r=0',
            details: 'Galletas Ritz Tamaño familiar'
        };
        //Precios walmart uno
        const walmartUnoPrecio1: ProductMarket = {
            id: '1',
            marketName: 'Walmart',
            price: 33
        };
        const walmartUnoPrecio2: ProductMarket = {
            id: '1',
            marketName: 'Walmart',
            price: 32
        };
        const walmartUnoPrecio3: ProductMarket = {
            id: '1',
            marketName: 'Walmart',
            price: 25
        };
        //Precios walmart dos
        const walmartDosPrecio1: ProductMarket = {
            id: '2',
            marketName: 'Walmart',
            price: 32
        };
        const walmartDosPrecio2: ProductMarket = {
            id: '2',
            marketName: 'Walmart',
            price: 28
        };
        const walmartDosPrecio3: ProductMarket = {
            id: '2',
            marketName: 'Walmart',
            price: 22
        };
        //Precios bodega aurrera uno
        const bodegaAurreraUnoPrecio1: ProductMarket = {
            id: '3',
            marketName: 'Bodega Aurrera',
            price: 45
        };
        const bodegaAurreraUnoPrecio2: ProductMarket = {
            id: '3',
            marketName: 'Bodega Aurrera',
            price: 39
        };
        const bodegaAurreraUnoPrecio3: ProductMarket = {
            id: '3',
            marketName: 'Bodega Aurrera',
            price: 55
        };
        //Precios bodega aurrera dos
        const bodegaAurreraDosPrecio1: ProductMarket = {
            id: '4',
            marketName: 'Bodega Aurrera',
            price: 38
        };
        const bodegaAurreraDosPrecio2: ProductMarket = {
            id: '4',
            marketName: 'Bodega Aurrera',
            price: 30
        };
        const bodegaAurreraDosPrecio3: ProductMarket = {
            id: '4',
            marketName: 'Bodega Aurrera',
            price: 24
        };
        this.products.push(huevos, leche, pan, arroz, frijol, galletas);
        this.markets.push({ product: huevos, prices: [walmartUnoPrecio1, walmartDosPrecio1, bodegaAurreraUnoPrecio1, bodegaAurreraDosPrecio1] });
        this.markets.push({ product: leche, prices: [walmartUnoPrecio2, walmartDosPrecio2, bodegaAurreraUnoPrecio2, bodegaAurreraDosPrecio2] });
        this.markets.push({ product: pan, prices: [walmartUnoPrecio3, walmartDosPrecio3, bodegaAurreraUnoPrecio3, bodegaAurreraDosPrecio3] });
        this.markets.push({ product: arroz, prices: [walmartUnoPrecio1, walmartDosPrecio1, bodegaAurreraUnoPrecio1, bodegaAurreraDosPrecio1] });
        this.markets.push({ product: frijol, prices: [walmartUnoPrecio2, walmartDosPrecio2, bodegaAurreraUnoPrecio2, bodegaAurreraDosPrecio2] });
        this.markets.push({ product: galletas, prices: [walmartUnoPrecio3, walmartDosPrecio3, bodegaAurreraUnoPrecio3, bodegaAurreraDosPrecio3] });
    }

    insertProduct(product: Product): void {
        this.products.push(product);
    }

    insertProductMarkets(productId: string, market: ProductMarket): void {
        const product = this.products.find(product => product.id === productId);
        if (!product) {
            throw new Error('Product not found');
        }
        if (!this.markets.some(product => product.product.id === productId)) {
            this.markets.push({ product, prices: [] });
        }
        const productMarkets = this.markets.find(product => product.product.id === productId);
        productMarkets.prices.push(market);
    }

    getProductById(productId: string): Product {
        return this.products.find(product => product.id === productId);
    }

    getProductByName(productName: string): Product {
        return this.products.find(product => product.name === productName);
    }

    getProductsByIds(productIds: string[]): Product[] {
        return this.products.filter(product => productIds.includes(product.id));
    }

    getPriceByProductIdAndMarketId(productId: string, marketId: string): number {
        const product = this.markets.find(product => product.product.id === productId);
        if (!product) {
            throw new Error('Product not found');
        }
        const compareProduct: CompareProduct = this.markets.find(compare => compare.product.id === productId);
        const market: ProductMarket = compareProduct.prices.find(productMarket => productMarket.id === marketId);
        return market.price;
    }

    getAllProducts(page: number, count: number, all: Boolean): Product[] {
        if (all) {
            return this.products;
        }
        return this.products.slice(page * count, (page + 1) * count);
    }

    getProductsByPrice(price: number, page: number, count: number, all: boolean): Product[] {
        const productMarkets: CompareProduct[] = this.markets.filter(product => product.prices.some(market => market.price === price));
        const products: Product[] = productMarkets.map(product => product.product);
        return all ? products : products.slice(page * count, (page + 1) * count);
    }

    getCompareProductsById(productId: string): CompareProduct {
        return this.markets.find(product => product.product.id === productId);
    }

    getProductsByMarketId(marketId: string): Product[] {
        const productMarkets: CompareProduct[] = this.markets.filter(product => product.prices.some(market => market.id === marketId));
        const products: Product[] = productMarkets.map(product => product.product);
        return products;
    }
}

export interface Product {
    id: string;
    name: string;
    imageUrl: string;
    details: string;
}

export interface ProductMarket {
    id: string;
    marketName: string;
    price: number;
}

export interface CompareProduct {
    product: Product;
    prices: ProductMarket[];
    urlImg?: string;
}