package services

import (
	"context"
	"log"

	"github.com/silverflin/customer-service/internal/model"
	pb "github.com/silverflin/customer-service/proto"
)

type CustomerServer struct {
	pb.UnimplementedCustomersServer
}

func (s CustomerServer) CreateCustomer(ctx context.Context, req *pb.Customer) (*pb.Customer, error) {
	// validate customer data
	createdCustomer, err := model.CreateCustomer(req)
	if err != nil {
		log.Fatal("Error at creating customer * service")
	}
	// log to rabbit

	return createdCustomer, nil
}

func (s CustomerServer) GetCustomerById(ctx context.Context, req *pb.CustomerByIdRequest) (*pb.Customer, error) {
	customerFound := model.GetCustomerById(req.Id)

	return customerFound, nil
}
