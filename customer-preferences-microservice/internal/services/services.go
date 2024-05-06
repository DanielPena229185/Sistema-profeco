package services

import (
	"context"

	"github.com/silverflin/Sistema-profeco/customer-preferences-microservice/internal/model"
	pb "github.com/silverflin/Sistema-profeco/customer-preferences-microservice/proto"
)

type CustomerPreferencesServer struct {
	pb.UnimplementedCustomerPreferencesServer
}

func (s CustomerPreferencesServer) AddVisitedProduct(ctx context.Context, req *pb.AddProductRequest) (*pb.VisitedProductsList, error) {
	visitedProductsList, err := model.AddVisitedProduct(req.UserId, req.Product)

	if err != nil {
		return nil, err
	}

	return visitedProductsList, nil
}

func (s CustomerPreferencesServer) GetVisitedProductList(ctx context.Context, req *pb.PreferencesDefaultRequest) (*pb.VisitedProductsList, error) {
	visitedProductsList, err := model.GetVisitedProducts(req.UserId)

	if err != nil {
		return nil, err
	}

	return visitedProductsList, nil
}

func (s CustomerPreferencesServer) AddFavoriteMarket(ctx context.Context, req *pb.FavoriteMarketRequest) (*pb.FavoriteMarketsList, error) {
	favoriteMarketsList, err := model.AddFavoriteMarket(req.UserId, req.Market)

	if err != nil {
		return nil, err
	}

	return favoriteMarketsList, nil
}

func (s CustomerPreferencesServer) GetFavoriteMarketsList(ctx context.Context, req *pb.PreferencesDefaultRequest) (*pb.FavoriteMarketsList, error) {
	favoriteMarketsList, err := model.GetFavoriteMarkets(req.UserId)

	if err != nil {
		return nil, err
	}

	return favoriteMarketsList, nil
}

func (s CustomerPreferencesServer) AddProductToShoppingCart(ctx context.Context, req *pb.AddProductRequest) (*pb.ShoppingCart, error) {
	favoriteProductsList, err := model.AddProductToShoppingCart(req.UserId, req.Product)

	if err != nil {
		return nil, err
	}

	return favoriteProductsList, nil
}
