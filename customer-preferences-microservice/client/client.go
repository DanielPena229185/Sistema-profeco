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

	err = TestGettingVisitedProductList()
	totalTests++
	if err == nil {
		passedTests++
	}

	err = TestAddFavoriteMarket()
	totalTests++
	if err == nil {
		passedTests++
	}

	err = TestGetFavoriteMarketList()
	totalTests++
	if err == nil {
		passedTests++
	}

	err = TestAddProductToShoppingCart()
	totalTests++
	if err == nil {
		passedTests++
	}

	err = TestGetShoppingCart()
	totalTests++
	if err == nil {
		passedTests++
	}

	fmt.Print("\n\n======\n")
	fmt.Printf("Tests Passed: %d/%d", passedTests, totalTests)
	fmt.Print("\n======\n\n")
}

func TestAddingProductVisited() error {
	productList, err := client.AddVisitedProduct(context.TODO(), &pb.AddProductRequest{
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

	if productList.Product[0].ProductId != "1" {
		fmt.Println("Error adding product visited: Product ID does not match")
		return errors.New("Error adding product visited: Product ID does not match")
	}

	fmt.Println("Passed: AddVisitedProduct Test")
	return nil
}

func TestGettingVisitedProductList() error {
	productList, err := client.GetVisitedProductList(context.TODO(), &pb.PreferencesDefaultRequest{
		UserId: "1",
	})
	if err != nil {
		fmt.Println("Error getting visited product list:", err)
		return err
	}

	if productList.Product[0].ProductId != "1" {
		fmt.Println("Error getting visited product list: Product ID does not match")
		return errors.New("Error getting visited product list: Product ID does not match")
	}

	fmt.Println("Passed: GetVisitedProductList Test")
	return nil
}

func TestAddFavoriteMarket() error {
	marketList, err := client.AddFavoriteMarket(context.TODO(), &pb.FavoriteMarketRequest{
		UserId: "1",
		Market: &pb.Market{
			MarketId:   "1",
			MarketName: "Market 1",
		},
	})
	if err != nil {
		fmt.Println("Error adding favorite market:", err)
		return err
	}

	if marketList.Market[0].MarketId != "1" {
		fmt.Println("Error adding favorite market: Market ID does not match")
		return errors.New("Error adding favorite market: Market ID does not match")
	}

	fmt.Println("Passed: AddFavoriteMarket Test")
	return nil
}

func TestGetFavoriteMarketList() error {
	marketList, err := client.GetFavoriteMarketsList(context.TODO(), &pb.PreferencesDefaultRequest{
		UserId: "1",
	})
	if err != nil {
		fmt.Println("Error getting favorite market list:", err)
		return err
	}

	if marketList.Market[0].MarketId != "1" {
		fmt.Println("Error getting favorite market list: Market ID does not match")
		return errors.New("Error getting favorite market list: Market ID does not match")
	}

	fmt.Println("Passed: GetFavoriteMarketList Test")
	return nil
}

func TestAddProductToShoppingCart() error {
	shoppingCart, err := client.AddProductToShoppingCart(context.TODO(), &pb.AddProductRequest{
		UserId: "1",
		Product: &pb.Product{
			ProductId:   "1",
			ProductName: "Product 1",
		},
	})
	if err != nil {
		fmt.Println("Error adding product to shopping cart:", err)
		return err
	}

	if shoppingCart.Product[0].ProductId != "1" {
		fmt.Println("Error adding product to shopping cart: Product ID does not match")
		return errors.New("Error adding product to shopping cart: Product ID does not match")
	}

	fmt.Println("Passed: AddProductToShoppingCart Test")
	return nil
}

func TestGetShoppingCart() error {
	shoppingCart, err := client.GetShoppingCart(context.TODO(), &pb.PreferencesDefaultRequest{
		UserId: "1",
	})
	if err != nil {
		fmt.Println("Error getting shopping cart:", err)
		return err
	}

	if shoppingCart.Product[0].ProductId != "1" {
		fmt.Println("Error getting shopping cart: Product ID does not match")
		return errors.New("Error getting shopping cart: Product ID does not match")
	}

	fmt.Println("Passed: GetShoppingCart Test")
	return nil
}
