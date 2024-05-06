package main

import (
	"context"
	"errors"
	"fmt"
	"log"

	pb "github.com/silverflin/Sistema-profeco/customer-preferences-microservice/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var client pb.CustomerPreferencesClient

var totalTests = 0
var passedTests = 0

func main() {

	var opts []grpc.DialOption
	opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))
	totalTests++
	conn, err := grpc.Dial("localhost:50057", opts...)
	if err != nil {
		log.Fatalf("fail to dial: %v", err)
	}
	passedTests++
	fmt.Println("Passed: Connection Test")
	defer conn.Close()
	client = pb.NewCustomerPreferencesClient(conn)

	err = TestAddingProductVisited()
	totalTests++
	if err == nil {
		passedTests++
	}

	fmt.Print("\n\n======\n")
	fmt.Printf("Tests Passed: %d/%d", passedTests, totalTests)
	fmt.Print("\n======\n\n")
}

func TestAddingProductVisited() error {
	productList, err := client.AddVisitedProduct(context.TODO(), &pb.AddVisitedProductRequest{
		UserId: "1",
		Product: &pb.Product{
			ProductId:   "1",
			ProductName: "Product 1",
		},
	})
	if err != nil {
		fmt.Println("Error adding product visited:", err)
		return err
	}

	if productList.Product[0].ProductId != "2" {
		fmt.Println("Error adding product visited: Product ID does not match")
		return errors.New("Error adding product visited: Product ID does not match")
	}

	fmt.Println("Passed: AddVisitedProduct Test")
	return nil
}
