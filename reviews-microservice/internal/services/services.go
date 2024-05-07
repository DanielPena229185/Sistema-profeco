package services

import (
	"context"
	"fmt"

	"github.com/silverflin/Sistema-profeco/reviews-microservice/internal/model"
	pb "github.com/silverflin/Sistema-profeco/reviews-microservice/proto"
)

type ReviewsServer struct {
	pb.UnimplementedReviewsServer
}

func (s ReviewsServer) GetMarketReviews(ctx context.Context, req *pb.GetMarketReviewsRequest) (*pb.ReviewsResponse, error) {
	reviews, err := model.GetMarketReviews(req.MarketId)

	if err != nil {
		return nil, err
	}

	reviewsResponse := &pb.ReviewsResponse{}

	for _, review := range reviews {
		reviewsResponse.Reviews = append(reviewsResponse.Reviews, &pb.Review{
			UserId:    review.UserId,
			MarketId:  review.MarketId,
			CreatedAt: review.CreatedAt,
			Rating:    review.Rating,
			Content:   review.Content,
		})
	}

    fmt.Println("GetMarketReviews")

	return reviewsResponse, nil

}

func (s ReviewsServer) CreateReview(ctx context.Context, req *pb.CreateReviewRequest) (*pb.CreateReviewResponse, error) {
	review, err := model.CreateReview(model.CreateReviewInput{
		UserId:   req.UserId,
		MarketId: req.MarketId,
		Rating:   req.Rating,
		Content:  req.Content,
	})

	reviewResponse := &pb.CreateReviewResponse{
		Review: &pb.Review{
			UserId:    review.UserId,
			MarketId:  review.MarketId,
			CreatedAt: review.CreatedAt,
			Rating:    review.Rating,
			Content:   review.Content,
		},
	}

	if err != nil {
		return nil, err
	}

	return reviewResponse, nil
}
