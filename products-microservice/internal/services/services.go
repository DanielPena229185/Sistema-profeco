package services

import (
	"context"
	"errors"
	"log"

	"github.com/silverflin/go-rpc/internal/messaging"
	"github.com/silverflin/go-rpc/internal/model"
	pb "github.com/silverflin/go-rpc/proto"
)

type ProductListServer struct {
	pb.UnimplementedProductsServer
}

func (s ProductListServer) GetProductsByPrice(ctx context.Context, req *pb.ProductListRequest) (*pb.CompareProductList, error) {
	log.Printf("New Request %v", req.ProductName)

	filteredProductList := model.GetProductPricesByProductName(req.ProductName)

	if filteredProductList == nil {
		return nil, errors.New("Product not found")
	}

	go messaging.SendToProductQueue("List request")

	return filteredProductList, nil
}

func (s ProductListServer) GetCompareProductListById(ctx context.Context, req *pb.ProductByIdRequest) (*pb.CompareProductList, error) {
	log.Printf("New Request Product Id: %v", req.ProductId)

	result := model.GetCompareProductListById(req.ProductId)

	if result == nil {
		return nil, errors.New("Product not found")
	}

	return result, nil
}

func (s ProductListServer) GetProductById(ctx context.Context, req *pb.ProductByIdRequest) (*pb.Product, error) {
	log.Printf("New Request Product Id: %v", req.ProductId)

	result := model.GetProductById(req.ProductId)

	if result == nil {
		return nil, errors.New("Product not found")
	}

	return result, nil
}

func (s ProductListServer) GetProducts(ctx context.Context, empty *pb.Empty) (*pb.ProductList, error) {
	log.Print("New Request: products ")

	productsNames := model.GetProducts()

	go messaging.SendToProductQueue("Products Names Request")
	return productsNames, nil
}
