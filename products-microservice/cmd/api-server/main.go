package main

import (
	"fmt"
	"log"
	"net"
	"os"

	"github.com/joho/godotenv"
	"github.com/silverflin/go-rpc/internal/services"
	pb "github.com/silverflin/go-rpc/proto"
	"google.golang.org/grpc"
)

var RPC_URL, RPC_PORT string

func init() {
	var err error

	if os.Getenv("PRODUCT_MICROSERVICE_ENV") == "PROD" {
		err = godotenv.Load(".env.production")
	} else {
		err = godotenv.Load(".env.development")
	}

	if err != nil {
		log.Printf("Error loading .env file \n %s", err.Error())
		log.Println("Loading exe env variables")
		RPC_URL = "localhost"
		RPC_PORT = "50051"
	}

}

func main() {
	rpcURI := fmt.Sprintf("%v:%v", RPC_URL, RPC_PORT)
	lis, err := net.Listen("tcp", rpcURI)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	log.Print(fmt.Sprintf("Listening on %v", rpcURI))

	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)
	pb.RegisterProductsServer(grpcServer, newServer())
	grpcServer.Serve(lis)
}

func newServer() *services.ProductListServer {
	s := &services.ProductListServer{}
	return s
}
