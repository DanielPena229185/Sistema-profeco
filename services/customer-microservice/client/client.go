package main

import (
	"context"
	"fmt"
	"log"

	pb "github.com/silverflin/customer-service/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	var opts []grpc.DialOption
	opts = append(opts, grpc.WithTransportCredentials(insecure.NewCredentials()))
	conn, err := grpc.Dial("localhost:50059", opts...)
	if err != nil {
		log.Fatalf("fail to dial: %v", err)
	}
	defer conn.Close()
	client := pb.NewCustomersClient(conn)

	fmt.Println("[CreateCustomer]")
	customer, err := client.CreateCustomer(context.Background(), &pb.Customer{FirstName: "Luis"})
	if err != nil {
		fmt.Println("error at creating customer @ client")
	}
	fmt.Println(customer)

	fmt.Println("\n[CreateCustomer]")

	customerFound, err := client.GetCustomerById(context.Background(), &pb.CustomerByIdRequest{Id: "6628643f9406a491f754fc69"})
	if err != nil {
		fmt.Println("error at finding customer @ client")
	}
	fmt.Println(customerFound)
}
