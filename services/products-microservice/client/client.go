package main

import (
	"context"
	"fmt"
	"log"

	pb "github.com/silverflin/go-rpc/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	var opts []grpc.DialOption
	opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))
	conn, err := grpc.Dial("localhost:50051", opts...)
	if err != nil {
		log.Fatalf("fail to dial: %v", err)
	}
	defer conn.Close()
	client := pb.NewProductsClient(conn)

	fmt.Println("\n[Getting Product List: Bagels]")
	productList, err := client.GetProductsByPrice(context.Background(), &pb.ProductListRequest{ProductName: "Bagels"})
	if err != nil {
		fmt.Printf("error at getting products: %s", err.Error())
	} else {
		fmt.Println(productList)
	}

	fmt.Println("\n[Getting Product Names]")
	productNames, err := client.GetProducts(context.Background(), &pb.Empty{})
	if err != nil {
		fmt.Println("error at getting products names")
	} else {
		fmt.Println(productNames)
	}

	fmt.Println("\n[Getting Product By Non Existent Id]")
	nonExistentProduct, err := client.GetProductById(context.Background(), &pb.ProductByIdRequest{ProductId: "randomId"})
	if err != nil {
		fmt.Println("randomId product not found")
	} else {
		fmt.Println(nonExistentProduct)
	}

	productId := "6628019c58bb122921954f5a"

	fmt.Println("\n[Getting Product By Id]")

	product, err := client.GetProductById(context.Background(), &pb.ProductByIdRequest{ProductId: productId})
	if err != nil {
		fmt.Println("Product by id not found")
	}
	fmt.Println(product)

	fmt.Println("\n[Getting CompareProductList By Id]")

	compareProductList, err := client.GetCompareProductListById(context.Background(), &pb.ProductByIdRequest{ProductId: productId})
	if err != nil {
		fmt.Println("CompareProductList by id not found")
	}
	fmt.Println(compareProductList)
}
