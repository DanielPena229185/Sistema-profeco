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

func Connect() error {
	var err error

	if os.Getenv("CUSTOMER_MICROSERVICE_ENV") == "PROD" {
		err = godotenv.Load(".env.production")
	} else {
		err = godotenv.Load(".env.development")
	}

	dbURI := fmt.Sprintf("mongodb://%s:%s", os.Getenv("DB_HOST"), os.Getenv("DB_PORT"))

	clientOptions := options.Client().ApplyURI(dbURI)
	ctx := context.TODO()
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		return err
	}
	log.Println("Database Connected")
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
