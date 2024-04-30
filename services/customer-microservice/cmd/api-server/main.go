package main

import (
	"fmt"
	"log"
	"net"
	"os"

	"github.com/joho/godotenv"
	"github.com/silverflin/customer-service/internal/services"
	pb "github.com/silverflin/customer-service/proto"
	"google.golang.org/grpc"
)

func main() {
	var err error
	if os.Getenv("CUSTOMER_MICROSERVICE_ENV") == "PROD" {
		err = godotenv.Load(".env.production")
	} else {
		err = godotenv.Load(".env.development")
	}

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	lis, err := net.Listen("tcp", fmt.Sprintf("%v:%v", os.Getenv("RPC_URL"), os.Getenv("RPC_PORT")))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	log.Print(fmt.Sprintf("Listening on %v:%v", os.Getenv("RPC_URL"), os.Getenv("RPC_PORT")))
	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	pb.RegisterCustomersServer(grpcServer, newServer())
	grpcServer.Serve(lis)
}

func newServer() *services.CustomerServer {
	s := &services.CustomerServer{}
	return s
}
