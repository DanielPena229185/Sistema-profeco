package model

import (
	"context"
	"fmt"
	"time"

	"github.com/silverflin/Sistema-profeco/reviews-microservice/internal/database"
	"go.mongodb.org/mongo-driver/bson"
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
	UserId    string `bson:"user_id"`
	MarketId  string `bson:"market_id"`
	CreatedAt string `bson:"created_at"`
	Rating    int32  `bson:"rating"`
	Content   string `bson:"content"`
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

	collection := database.Client.Database(mongoDatabaseName).Collection(mongoCollectionName)

	_, err := collection.InsertOne(context.TODO(), review)
	if err != nil {
		return nil, err
	}

	return review, nil
}

func GetMarketReviews(marketId string) ([]Review, error) {
	collection := database.Client.Database(mongoDatabaseName).Collection(mongoCollectionName)
	CreateReview(CreateReviewInput{
		UserId:   "2",
		MarketId: "1",
		Rating:   4,
		Content:  "This is another test review",
	})

	filter := bson.D{{Key: "market_id", Value: marketId}}
	cursor, err := collection.Find(context.Background(), filter)
	if err != nil {
		return nil, err
	}

	var reviews []Review

	for cursor.Next(context.Background()) {
		var review Review
		cursor.Decode(&review)
		reviews = append(reviews, review)
	}

	fmt.Println("model")
	fmt.Println(reviews)

	return reviews, nil
}
