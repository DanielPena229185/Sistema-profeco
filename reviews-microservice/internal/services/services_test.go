package services

import (
	"context"
	"fmt"
	"log"
	"net"
	"testing"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/test/bufconn"

	"github.com/silverflin/Sistema-profeco/reviews-microservice/internal/model"
	pb "github.com/silverflin/Sistema-profeco/reviews-microservice/proto"
)

const bufSize = 1024 * 1024

var lis *bufconn.Listener

func newServer() *ReviewsServer {
	s := &ReviewsServer{}
	return s
}

func init() {
	lis = bufconn.Listen(bufSize)
	var opts []grpc.ServerOption
	s := grpc.NewServer(opts...)

	pb.RegisterReviewsServer(s, newServer())
	go func() {
		if err := s.Serve(lis); err != nil {
			log.Fatalf("Server exited with error: %v", err)
		}
	}()

}

func bufDialer(context.Context, string) (net.Conn, error) {
	return lis.Dial()
}

func TestGetMarketReviews(t *testing.T) {
	fmt.Println("TestGetMarketReviews")
	ctx := context.Background()

	model.CreateReview(model.CreateReviewInput{
		UserId:   "1",
		MarketId: "1",
		Rating:   5,
		Content:  "This is a test review",
	})

	model.CreateReview(model.CreateReviewInput{
		UserId:   "2",
		MarketId: "1",
		Rating:   4,
		Content:  "This is another test review",
	})

	conn, err := grpc.DialContext(
		ctx,
		"",
		grpc.WithContextDialer(bufDialer),
		grpc.WithTransportCredentials(insecure.NewCredentials()),
	)

	if err != nil {
		t.Fatalf("Failed to dial bufnet: %v", err)
	}

	defer conn.Close()

	client := pb.NewReviewsClient(conn)

	resp, err := client.GetMarketReviews(
		ctx,
		&pb.GetMarketReviewsRequest{MarketId: "1"},
	)

	if err != nil {
		t.Fatalf("GetMarketReviews failed: %v", err)
	}

	for _, review := range resp.Reviews {
		if review.MarketId != "1" {
			t.Fatalf("Expected marketId to be 1, got %v", review.MarketId)
		}
	}

	fmt.Print("--- PASSED\n")
}

func TestCreateReview(t *testing.T) {
	fmt.Println("TestCreateReview")
	ctx := context.Background()
	conn, err := grpc.DialContext(
		ctx,
		"",
		grpc.WithContextDialer(bufDialer),
		grpc.WithTransportCredentials(insecure.NewCredentials()),
	)

	if err != nil {
		t.Fatalf("Failed to dial bufnet: %v", err)
	}
	defer conn.Close()
	client := pb.NewReviewsClient(conn)

	resp, err := client.CreateReview(
		ctx,
		&pb.CreateReviewRequest{
			MarketId: "1",
			UserId:   "1",
			Rating:   5,
			Content:  "This is a test review",
		},
	)

	if err != nil {
		t.Fatalf("CreateReview failed: %v", err)
	}

	if resp.Review.Rating != 5 {
		t.Fatalf("Expected rating to be 5, got %v", resp.Review.Rating)
	}

	if resp.Review.Content != "This is a test review" {
		t.Fatalf("Expected content to be 'This is a test review', got %v", resp.Review.Content)
	}

	fmt.Print("--- PASSED\n")

}
