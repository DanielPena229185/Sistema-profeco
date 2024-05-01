package database

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client

var DB_HOST, DB_PORT string

func init() {
	var err error

	if os.Getenv("PRODUCT_MICROSERVICE_ENV") == "PROD" {
		err = godotenv.Load(".env.production")
	} else {
		err = godotenv.Load(".env.development")
	}

	if err != nil {
		log.Println("ENV not loaded")
		log.Println("Loading exe env variables")
		DB_HOST = "localhost"
		DB_PORT = "27017"
	}
}

func Connect() error {
	dbURI := fmt.Sprintf("mongodb://%s:%s",DB_HOST , DB_PORT)
    
	clientOptions := options.Client().ApplyURI(dbURI)
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		return err
	}
	Client = client
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
