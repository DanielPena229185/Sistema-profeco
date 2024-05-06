package main

import (
	"fmt"
	"log"
	"net"
	"os"

	"github.com/joho/godotenv"
	"github.com/silverflin/Sistema-profeco/customer-preferences-microservice/internal/services"
	pb "github.com/silverflin/Sistema-profeco/customer-preferences-microservice/proto"
	"google.golang.org/grpc"
)



func init() {
	var err error

	if os.Getenv("PREFERENCES_MICROSERVICE_ENV") == "PROD" {
		err = godotenv.Load(".env.production")
	} else {
		err = godotenv.Load(".env.development")
	}

	if err != nil {
		log.Fatalf("Error loading .env file \n %s", err.Error())
	}
}


func main() {
	rpcURI := fmt.Sprintf("%v:%v", os.Getenv("RPC_URL"), os.Getenv("RPC_PORT"))
	lis, err := net.Listen("tcp", rpcURI)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	log.Print(fmt.Sprintf("Listening on %v", rpcURI))

	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)

	pb.RegisterCustomerPreferencesServer(grpcServer, newServer())
	grpcServer.Serve(lis)
}

func newServer() *services.CustomerPreferencesServer {
	s := &services.CustomerPreferencesServer{}
	return s
}
