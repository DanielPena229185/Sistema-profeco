package database

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client

func init() {
	var err error

	if os.Getenv("REVIEWS_MICROSERVICE_ENV") == "PROD" {
		err = godotenv.Load(".env.production")
	} else {
		err = godotenv.Load(".env.development")
	}

	if err != nil {
		err = godotenv.Load("../../.env.development")
        fmt.Println("Loading .env.development for test")
		if err != nil {
			log.Fatalf("Error loading .env file")
		}
	}
}

func Connect() error {
	dbURI := fmt.Sprintf("mongodb://%s:%s", os.Getenv("DB_HOST"), os.Getenv("DB_PORT"))

	clientOptions := options.Client().ApplyURI(dbURI)
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		return err
	}
	Client = client

	err = TestConnection()

	if err != nil {
		panic(err)
	}

	return nil
}

func TestConnection() error {
	var result bson.M
	err := Client.
		Database("admin").
		RunCommand(context.TODO(), bson.D{{Key: "ping", Value: 1}}).
		Decode(&result)

	if err != nil {
		return err
	}

	return nil
}

func Close() error {
	if Client != nil {
		err := Client.Disconnect(context.TODO())
		if err != nil {
			return err
		}
	}
	return nil
}
