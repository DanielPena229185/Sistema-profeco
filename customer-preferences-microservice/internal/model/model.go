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
	}
	_, err = collection.InsertOne(context.TODO(), userPreferences)
	if err != nil {
		return nil, err
	}

	return userPreferences.VisitedProducts, nil
}
