package model

import (
	"context"
	"errors"
	"fmt"
	"log"

	"github.com/silverflin/customer-service/internal/database"
	pb "github.com/silverflin/customer-service/proto"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var (
	mongoCollectionName = "Customers"
	mongoDatabaseName   = "profeco-customers"
)

func init() {
	err := database.Connect()
	if err != nil {
		fmt.Println("Error connecting to MongoDB:", err)
		return
	}
}

func CreateCustomer(customer *pb.Customer) (*pb.Customer, error) {
	collection := database.Client.Database(mongoDatabaseName).Collection(mongoCollectionName)

	result, err := collection.InsertOne(context.TODO(), customer)
	if err != nil {
		log.Fatal("Error at creating customer @ model")
		fmt.Println(err.Error())
	}

	insertedID, ok := result.InsertedID.(primitive.ObjectID)
	if !ok {
		return &pb.Customer{}, errors.New("failed to convert inserted ID to ObjectID")
	}
	customerCreated := customer

	customerCreated.Id = insertedID.Hex()

	return customerCreated, nil
}

func GetCustomerById(customerId string) *pb.Customer {
	collection := database.Client.Database("profeco-customers").Collection("Customers")

	objID, err := primitive.ObjectIDFromHex(customerId)
	if err != nil {
		log.Println("Invalid ID format:", err)
		return nil
	}

	filter := bson.M{"_id": objID}

	var result pb.Customer

	err = collection.FindOne(context.TODO(), filter).Decode(&result)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			log.Println("Product not found for ID:", customerId)
		} else {
			log.Println("Error fetching product:", err)
		}
		return nil
	}

	log.Println("Product found:", &result)

	result.Id = customerId

	return &result
}
