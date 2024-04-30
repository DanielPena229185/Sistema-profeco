package model

import (
	"context"
	"fmt"
	"log"
	"slices"

	"github.com/silverflin/go-rpc/internal/database"
	pb "github.com/silverflin/go-rpc/proto"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var (
	products            []*pb.CompareProductList
	mongoCollectionName = "CompareProductList"
	mongoDatabaseName   = "profeco-products"
)

func init() {
	err := database.Connect()
	if err != nil {
		fmt.Println("Error connecting to MongoDB:", err)
		return
	}
	products = initializeProducts()
}

func GetProducts() *pb.ProductList {
	productList := &pb.ProductList{Product: make([]*pb.Product, 0)}

	for _, val := range products {
		if !slices.Contains(productList.Product, val.Product) {
			productList.Product = append(productList.Product, val.Product)
		}
	}

	return productList
}

func GetProductPricesByProductName(name string) *pb.CompareProductList {
	allProducts := GetProducts()

	for _, val := range allProducts.Product {
		if val.Name == name {
			filteredProductList := pb.CompareProductList{}
			filteredProductList.Product = val
			filteredProductList.Prices = GetPricesFromProduct(val.Name)
			return &filteredProductList
		}
	}
	return nil
}

func GetProductById(productId string) *pb.Product {
	objID, err := primitive.ObjectIDFromHex(productId)
	if err != nil {
		log.Println("Invalid ID format:", err)
		return nil
	}

	filter := bson.M{"_id": objID}

	var result pb.CompareProductList

	collection := database.Client.Database(mongoDatabaseName).Collection(mongoCollectionName)
	err = collection.FindOne(context.TODO(), filter).Decode(&result)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			log.Println("Product not found for ID:", productId)
		} else {
			log.Println("Error fetching product:", err)
		}
		return nil
	}

	log.Println("Product found:", &result)

	result.Product.Id = productId

	return result.Product
}

func GetCompareProductListById(productId string) *pb.CompareProductList {
	objID, err := primitive.ObjectIDFromHex(productId)
	if err != nil {
		log.Println("Invalid ID format:", err)
		return nil
	}

	filter := bson.M{"_id": objID}

	var result pb.CompareProductList

	collection := database.Client.Database(mongoDatabaseName).Collection(mongoCollectionName)
	err = collection.FindOne(context.TODO(), filter).Decode(&result)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			log.Println("Product not found for ID:", productId)
		} else {
			log.Println("Error fetching product:", err)
		}
		return nil
	}

	log.Println("Product found:", &result)

	return &result
}

func GetPricesFromProduct(productName string) []*pb.MarketPrice {
	for _, val := range products {
		if val.Product.Name == productName {
			return val.Prices
		}
	}
	return nil
}

type Market struct {
	id         string
	MarketName string
}

func initializeProducts() []*pb.CompareProductList {
	collection := database.Client.Database(mongoDatabaseName).Collection(mongoCollectionName)

	markets := make([]Market, 0)

	markets = append(markets,
		Market{id: "123", MarketName: "walmart"},
		Market{id: "124", MarketName: "costco"},
		Market{id: "125", MarketName: "cafe"},
		Market{id: "126", MarketName: "soriana"},
	)

	collection.DeleteMany(context.Background(), bson.M{})
	products := []*pb.CompareProductList{
		{
			Product: &pb.Product{
				Name:     "Dougnuts",
				ImageUrl: "https://images.unsplash.com/photo-1597586255676-6b33b6268e33?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fH",
				Details:  "Delicious donuts freshly baked every morning",
			},
			Prices: []*pb.MarketPrice{
				{
					MarketName: markets[0].MarketName,
					Price:      30,
					Id:         markets[0].id,
				},
			},
		},
		{
			Product: &pb.Product{
				Name:     "Bagels",
				ImageUrl: "https://images.unsplash.com/photo-1664038082440-ee0a677af315?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M",
			},
			Prices: []*pb.MarketPrice{
				{
					MarketName: markets[0].MarketName,
					Price:      25,
					Id:         markets[0].id,
				},
				{
					MarketName: markets[1].MarketName,
					Price:      27,
					Id:         markets[1].id,
				},
			},
		},
		{
			Product: &pb.Product{
				Name:     "Croissants",
				ImageUrl: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=",
			},
			Prices: []*pb.MarketPrice{
				{
					MarketName: markets[1].MarketName,
					Price:      35,
					Id:         markets[1].id,
				},
				{
					MarketName: markets[2].MarketName,
					Price:      30,
					Id:         markets[2].id,
				},
			},
		},
	}

	for _, product := range products {
		result, err := collection.InsertOne(context.Background(), product)
		if err != nil {
			log.Fatal(err)
		}

		insertedID, ok := result.InsertedID.(primitive.ObjectID)
		if !ok {
			log.Fatal("Failed to convert inserted ID to ObjectID")
		}

		product.Product.Id = insertedID.Hex()
	}

	products = products[:0]

	cursor, err := collection.Find(context.Background(), bson.M{})
	if err != nil {
		log.Fatal(err)
	}
	defer cursor.Close(context.Background())

	for cursor.Next(context.Background()) {
		var product pb.CompareProductList

		if err := cursor.Decode(&product); err != nil {
			log.Fatal(err)
		}

		var result map[string]interface{}

		err := cursor.Decode(&result)
		if err != nil {
			log.Fatal(err)
		}
		id, ok := result["_id"].(primitive.ObjectID)
		if !ok {
			log.Fatal("Failed to convert _id to ObjectID")
		}

		product.Product.Id = id.Hex()

		log.Println(id.Hex())
		products = append(products, &product)
	}
	if err := cursor.Err(); err != nil {
		log.Fatal(err)
	}

	return products
}
