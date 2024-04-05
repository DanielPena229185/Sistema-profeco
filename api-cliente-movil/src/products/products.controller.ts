import { Body, Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Product, ProductListRequest, ProductName } from './products.types';
import { map } from 'rxjs';

@Controller('products')
export class ProductsController implements OnModuleInit {
    private productsService;
    constructor(
        @Inject('PRODUCTS_SERVICE') private client:ClientGrpc,
    ){}

    onModuleInit() {
        this.productsService = this.client.getService('Products');
    }

    @Get('names')
    async getProducts(){
     const products = await this.productsService.GetProducts({});
        return products;
    }

    @Get('by-price')
     async getProductsByPrice(@Body() body){
        const products = await this.productsService.GetProductsByPrice(body);
        return  products;
    }


}
