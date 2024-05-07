package services

import (
	"context"
	"errors"

	pb "github.com/silverflin/Sistema-profeco/reviews-microservice/proto"
)

type ReviewsServer struct {
	pb.UnimplementedReviewsServer
}

//rpc GetMarketReviews(GetMarketReviewsRequest) returns (ReviewsResponse);
//rpc CreateReview(CreateReviewRequest) returns (CreateReviewResponse);

func (s ReviewsServer) GetMarketReviews(ctx context.Context, req *pb.GetMarketReviewsRequest) (*pb.ReviewsResponse, error) {

	return nil, errors.New("Not implemented")
}

func (s ReviewsServer) CreateReview(ctx context.Context, req *pb.CreateReviewRequest) (*pb.CreateReviewResponse, error) {

	return nil, errors.New("Not implemented")
}
