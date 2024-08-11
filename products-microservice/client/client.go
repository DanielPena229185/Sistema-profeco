package main

import (
	"context"
	"errors"
	"fmt"
	"log"

	pb "github.com/silverflin/go-rpc/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var firstProduct *pb.Product
var client pb.ProductsClient

var totalTests = 0
var passedTests = 0

func main() {
	var opts []grpc.DialOption
	opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))
	totalTests++
	conn, err := grpc.Dial("localhost:50051", opts...)
	if err != nil {
		log.Fatalf("fail to dial: %v", err)
	}
	passedTests++
	fmt.Println("Passed: Connection Test")
	defer conn.Close()
	client = pb.NewProductsClient(conn)

	err = TestGettingProductListByName()
	totalTests++
	if err == nil {
		passedTests++
	}

	err = TestGettingProductList()
	totalTests++
	if err == nil {
		passedTests++
	}

	err = TestGettingProductByNonExistentId()
	totalTests++
	if err == nil {
		passedTests++
	}

	err = TestGettingProductById()
	totalTests++
	if err == nil {
		passedTests++
	}

	err = TestGettingCompareProductListtByProductId()
	totalTests++
	if err == nil {
		passedTests++
	}

	err = TestUpdateProductPrice()
	totalTests++
	if err == nil {
		passedTests++
	}

	fmt.Print("\n\n======\n")
	fmt.Printf("Tests Passed: %d/%d", passedTests, totalTests)
	fmt.Print("\n======\n\n")
}

func TestGettingProductListByName() error {
	fmt.Println("\n[Getting Product List: Bagels]")
	_, err := client.GetProductsByPrice(context.Background(), &pb.ProductListRequest{ProductName: "Bagels"})
	if err != nil {
		fmt.Println("Failed: Getting Product List: Bagels")
		return err
	}
	fmt.Println("Passed: Getting Product List")

	return nil
}

func TestGettingProductList() error {
	fmt.Println("\n[Getting Product Names]")
	productNames, err := client.GetProducts(context.Background(), &pb.Empty{})
	firstProduct = productNames.Product[0]
	if err != nil {
		fmt.Println("Failed: Getting Product Names")
		return err
	} else {
		fmt.Println("Passed: Getting Product Names")
	}
	return nil
}

func TestGettingProductByNonExistentId() error {
	fmt.Println("\n[Getting Product By Non Existent Id]")
	nonExistentProduct, err := client.GetProductById(context.Background(), &pb.ProductByIdRequest{ProductId: "randomId"})
	if err == nil || nonExistentProduct != nil {
		fmt.Println("Failed: Getting product by non existent id")
		return errors.New("Product Found")
	} else {
		fmt.Println("Passed: Getting product by non existent id")
	}

	return nil
}

func TestGettingProductById() error {
	fmt.Println("\n[Getting Product By Id]")
	productId := firstProduct.Id
	_, err := client.GetProductById(context.Background(), &pb.ProductByIdRequest{ProductId: productId})
	if err != nil {
		fmt.Println("Failed: Getting product by id")
		return err
	} else {
		fmt.Println("Passed: Getting product by id")
	}
	return nil
}

func TestGettingCompareProductListtByProductId() error {
	fmt.Println("\n[Getting CompareProductList By Id]")
	productId := firstProduct.Id
	_, err := client.GetCompareProductListById(context.Background(), &pb.ProductByIdRequest{ProductId: productId})
	if err != nil {
		fmt.Println("Failed: Getting CompareProductList By Id")
		return err
	} else {
		fmt.Println("Passed: Getting CompareProductList By Id")
	}
	return nil
}

func TestUpdateProductPrice() error {
	fmt.Println("\n[Update Product]")

	marketId := "123"
	newPrice := float32(99.5)

	_, err := client.UpdateProductPrice(context.TODO(), &pb.UpdateProductPriceRequest{MarketId: marketId, Product: firstProduct, NewPrice: newPrice})

	if err != nil {
		fmt.Println("Failed: Updating Product")
		return err
	}

	updatedProduct, err := client.GetCompareProductListById(context.TODO(), &pb.ProductByIdRequest{ProductId: firstProduct.Id})

	for _, val := range updatedProduct.Prices {
		if val.Id == "123" {
			if val.Price == 99.5 {
				fmt.Println("Passed: Updating Product")
				return nil
			}
		}
	}

	fmt.Println("Failed: Updating Product")
	return errors.New("Product not updated")
}
