package model

import (
	"context"
	"fmt"

	"github.com/silverflin/Sistema-profeco/customer-preferences-microservice/internal/database"
	pb "github.com/silverflin/Sistema-profeco/customer-preferences-microservice/proto"
	"go.mongodb.org/mongo-driver/bson"
)

var (
	mongoCollectionName = "customer-preferences"
	mongoDatabaseName   = "customer-preferences-db"
)

// create a struct

type UserPreferences struct {
	UserId          string                  `bson:"userId"`
	VisitedProducts *pb.VisitedProductsList `bson:"visitedProducts"`
	FavoriteMarkets *pb.FavoriteMarketsList `bson:"favoriteMarkets"`
	ShoppingCart    *pb.ShoppingCart        `bson:"shoppingCart"`
}

func init() {
	err := database.Connect()
	if err != nil {
		fmt.Println("Error connecting to MongoDB:", err)
		return
	}
}

func findUserPreferences(userId string) (*UserPreferences, error) {
	collection := database.Client.Database(mongoDatabaseName).Collection(mongoCollectionName)

	var userPreferences UserPreferences
	err := collection.FindOne(context.TODO(), bson.M{"userId": userId}).Decode(&userPreferences)
	if err != nil {
		return nil, err
	}

	return &userPreferences, nil
}

func AddVisitedProduct(userId string, product *pb.Product) (*pb.VisitedProductsList, error) {

	collection := database.Client.Database(mongoDatabaseName).Collection(mongoCollectionName)

	userPreferences, err := findUserPreferences(userId)

	if err != nil {
		userPreferences = &UserPreferences{
			UserId:          userId,
			VisitedProducts: &pb.VisitedProductsList{},
		}
		userPreferences.VisitedProducts.Product = make([]*pb.Product, 0)
		userPreferences.VisitedProducts.Product = append(userPreferences.VisitedProducts.Product, product)

		_, err = collection.InsertOne(context.TODO(), userPreferences)
		if err != nil {
			return nil, err
		}
		return userPreferences.VisitedProducts, nil

	}

	if userPreferences.VisitedProducts == nil {
		userPreferences.VisitedProducts = &pb.VisitedProductsList{}
	}

	userPreferences.VisitedProducts.Product = append(userPreferences.VisitedProducts.Product, product)

	_, err = collection.UpdateOne(context.TODO(), bson.M{"userId": userId}, bson.M{"$set": bson.M{"visitedProducts": userPreferences.VisitedProducts}})

	if err != nil {
		return nil, err
	}

	return userPreferences.VisitedProducts, nil
}

func GetVisitedProducts(userId string) (*pb.VisitedProductsList, error) {
	userPreferences, err := findUserPreferences(userId)
	if err != nil {
		return nil, err
	}

	if userPreferences.VisitedProducts == nil {
		userPreferences.VisitedProducts = &pb.VisitedProductsList{}
	}

	return userPreferences.VisitedProducts, nil
}

func AddFavoriteMarket(userId string, market *pb.Market) (*pb.FavoriteMarketsList, error) {
	collection := database.Client.Database(mongoDatabaseName).Collection(mongoCollectionName)

	userPreferences, err := findUserPreferences(userId)

	if err != nil {
		userPreferences = &UserPreferences{
			UserId:          userId,
			FavoriteMarkets: &pb.FavoriteMarketsList{},
		}
		userPreferences.FavoriteMarkets.Market = make([]*pb.Market, 0)
		userPreferences.FavoriteMarkets.Market = append(userPreferences.FavoriteMarkets.Market, market)

		_, err = collection.InsertOne(context.TODO(), userPreferences)
		if err != nil {
			return nil, err
		}
		return userPreferences.FavoriteMarkets, nil

	}

	if userPreferences.FavoriteMarkets == nil {
		userPreferences.FavoriteMarkets = &pb.FavoriteMarketsList{}
	}

	userPreferences.FavoriteMarkets.Market = append(userPreferences.FavoriteMarkets.Market, market)

	_, err = collection.UpdateOne(context.TODO(), bson.M{"userId": userId}, bson.M{"$set": bson.M{"favoriteMarkets": userPreferences.FavoriteMarkets}})

	if err != nil {
		return nil, err
	}

	return userPreferences.FavoriteMarkets, nil
}

func GetFavoriteMarkets(userId string) (*pb.FavoriteMarketsList, error) {
	userPreferences, err := findUserPreferences(userId)
	if err != nil {
		return nil, err
	}

	if userPreferences.FavoriteMarkets == nil {
		userPreferences.FavoriteMarkets = &pb.FavoriteMarketsList{}
	}

	return userPreferences.FavoriteMarkets, nil
}

func AddProductToShoppingCart(userId string, product *pb.Product) (*pb.ShoppingCart, error) {
	collection := database.Client.Database(mongoDatabaseName).Collection(mongoCollectionName)

	userPreferences, err := findUserPreferences(userId)

	if err != nil {
		userPreferences = &UserPreferences{
			UserId:       userId,
			ShoppingCart: &pb.ShoppingCart{},
		}
		userPreferences.ShoppingCart.Product = make([]*pb.Product, 0)
		userPreferences.ShoppingCart.Product = append(userPreferences.ShoppingCart.Product, product)

		_, err = collection.InsertOne(context.TODO(), userPreferences)
		if err != nil {
			return nil, err
		}
		return userPreferences.ShoppingCart, nil

	}

	if userPreferences.ShoppingCart == nil {
		userPreferences.ShoppingCart = &pb.ShoppingCart{}
	}

	userPreferences.ShoppingCart.Product = append(userPreferences.ShoppingCart.Product, product)

	_, err = collection.UpdateOne(context.TODO(), bson.M{"userId": userId}, bson.M{"$set": bson.M{"shoppingCart": userPreferences.ShoppingCart}})

	if err != nil {
		return nil, err
	}

	return userPreferences.ShoppingCart, nil
}
