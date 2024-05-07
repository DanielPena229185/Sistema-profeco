package model

import (
	"context"
	"fmt"
	"time"

	"github.com/silverflin/Sistema-profeco/reviews-microservice/internal/database"
)

var (
	mongoCollectionName = "reviews"
	mongoDatabaseName   = "reviews-db"
)

func init() {
	err := database.Connect()
	if err != nil {
		fmt.Println("Error connecting to MongoDB:", err)
		return
	}
}

type Review struct {
	UserId    string `json:"user_id"`
	MarketId  string `json:"market_id"`
	CreatedAt string `json:"created_at"`
	Rating    int32  `json:"rating"`
	Content   string `json:"content"`
}

type CreateReviewInput struct {
	UserId   string
	MarketId string
	Rating   int32
	Content  string
}

func CreateReview(input CreateReviewInput) (*Review, error) {
	review := &Review{
		UserId:   input.UserId,
		MarketId: input.MarketId,
		Rating:   input.Rating,
		Content:  input.Content,
	}

	review.CreatedAt = time.Now().UTC().String()

	fmt.Println("Review:", review)

	collection := database.Client.Database(mongoDatabaseName).Collection(mongoCollectionName)

	_, err := collection.InsertOne(context.TODO(), review)
	if err != nil {
		return nil, err
	}

	return review, nil
}
