/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "proto";

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  details: string;
}

export interface MarketPrice {
  marketName: string;
  price: number;
}

export interface ProductListRequest {
  productName: string;
}

export interface Empty {
}

export interface ProductList {
  product: Product[];
}

export interface CompareProductList {
  product: Product | undefined;
  prices: MarketPrice[];
}

function createBaseProduct(): Product {
  return { id: "", name: "", imageUrl: "", details: "" };
}

export const Product = {
  encode(message: Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.imageUrl !== "") {
      writer.uint32(26).string(message.imageUrl);
    }
    if (message.details !== "") {
      writer.uint32(34).string(message.details);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.imageUrl = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.details = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Product {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      imageUrl: isSet(object.imageUrl) ? globalThis.String(object.imageUrl) : "",
      details: isSet(object.details) ? globalThis.String(object.details) : "",
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.imageUrl !== "") {
      obj.imageUrl = message.imageUrl;
    }
    if (message.details !== "") {
      obj.details = message.details;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Product>, I>>(base?: I): Product {
    return Product.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Product>, I>>(object: I): Product {
    const message = createBaseProduct();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.imageUrl = object.imageUrl ?? "";
    message.details = object.details ?? "";
    return message;
  },
};

function createBaseMarketPrice(): MarketPrice {
  return { marketName: "", price: 0 };
}

export const MarketPrice = {
  encode(message: MarketPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketName !== "") {
      writer.uint32(10).string(message.marketName);
    }
    if (message.price !== 0) {
      writer.uint32(21).float(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.marketName = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.price = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketPrice {
    return {
      marketName: isSet(object.marketName) ? globalThis.String(object.marketName) : "",
      price: isSet(object.price) ? globalThis.Number(object.price) : 0,
    };
  },

  toJSON(message: MarketPrice): unknown {
    const obj: any = {};
    if (message.marketName !== "") {
      obj.marketName = message.marketName;
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MarketPrice>, I>>(base?: I): MarketPrice {
    return MarketPrice.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MarketPrice>, I>>(object: I): MarketPrice {
    const message = createBaseMarketPrice();
    message.marketName = object.marketName ?? "";
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseProductListRequest(): ProductListRequest {
  return { productName: "" };
}

export const ProductListRequest = {
  encode(message: ProductListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productName !== "") {
      writer.uint32(10).string(message.productName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.productName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductListRequest {
    return { productName: isSet(object.productName) ? globalThis.String(object.productName) : "" };
  },

  toJSON(message: ProductListRequest): unknown {
    const obj: any = {};
    if (message.productName !== "") {
      obj.productName = message.productName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProductListRequest>, I>>(base?: I): ProductListRequest {
    return ProductListRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProductListRequest>, I>>(object: I): ProductListRequest {
    const message = createBaseProductListRequest();
    message.productName = object.productName ?? "";
    return message;
  },
};

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Empty>, I>>(base?: I): Empty {
    return Empty.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseProductList(): ProductList {
  return { product: [] };
}

export const ProductList = {
  encode(message: ProductList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.product) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.product.push(Product.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductList {
    return {
      product: globalThis.Array.isArray(object?.product) ? object.product.map((e: any) => Product.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProductList): unknown {
    const obj: any = {};
    if (message.product?.length) {
      obj.product = message.product.map((e) => Product.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProductList>, I>>(base?: I): ProductList {
    return ProductList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProductList>, I>>(object: I): ProductList {
    const message = createBaseProductList();
    message.product = object.product?.map((e) => Product.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCompareProductList(): CompareProductList {
  return { product: undefined, prices: [] };
}

export const CompareProductList = {
  encode(message: CompareProductList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.prices) {
      MarketPrice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompareProductList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompareProductList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.product = Product.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.prices.push(MarketPrice.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CompareProductList {
    return {
      product: isSet(object.product) ? Product.fromJSON(object.product) : undefined,
      prices: globalThis.Array.isArray(object?.prices) ? object.prices.map((e: any) => MarketPrice.fromJSON(e)) : [],
    };
  },

  toJSON(message: CompareProductList): unknown {
    const obj: any = {};
    if (message.product !== undefined) {
      obj.product = Product.toJSON(message.product);
    }
    if (message.prices?.length) {
      obj.prices = message.prices.map((e) => MarketPrice.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompareProductList>, I>>(base?: I): CompareProductList {
    return CompareProductList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompareProductList>, I>>(object: I): CompareProductList {
    const message = createBaseCompareProductList();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    message.prices = object.prices?.map((e) => MarketPrice.fromPartial(e)) || [];
    return message;
  },
};

export interface Products {
  GetProductsByPrice(request: ProductListRequest): Promise<CompareProductList>;
  GetProducts(request: Empty): Promise<ProductList>;
}

export const ProductsServiceName = "proto.Products";
export class ProductsClientImpl implements Products {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ProductsServiceName;
    this.rpc = rpc;
    this.GetProductsByPrice = this.GetProductsByPrice.bind(this);
    this.GetProducts = this.GetProducts.bind(this);
  }
  GetProductsByPrice(request: ProductListRequest): Promise<CompareProductList> {
    const data = ProductListRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetProductsByPrice", data);
    return promise.then((data) => CompareProductList.decode(_m0.Reader.create(data)));
  }

  GetProducts(request: Empty): Promise<ProductList> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetProducts", data);
    return promise.then((data) => ProductList.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
