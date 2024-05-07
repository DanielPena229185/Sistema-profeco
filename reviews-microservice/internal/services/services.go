package services

import (
	"context"
	"errors"

	"github.com/silverflin/Sistema-profeco/reviews-microservice/internal/model"
	pb "github.com/silverflin/Sistema-profeco/reviews-microservice/proto"
)

type ReviewsServer struct {
	pb.UnimplementedReviewsServer
}

func (s ReviewsServer) GetMarketReviews(ctx context.Context, req *pb.GetMarketReviewsRequest) (*pb.ReviewsResponse, error) {

	return nil, errors.New("Not implemented")
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
