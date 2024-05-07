package services

import (
	"context"
	"log"
	"net"
	"testing"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/test/bufconn"

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
	resp, err := client.GetMarketReviews(
		ctx,
		&pb.GetMarketReviewsRequest{MarketId: "1"},
	)
	if err != nil {
		t.Fatalf("GetMarketReviews failed: %v", err)
	}
	log.Printf("Response: %+v", resp)

}

func TestCreateReview(t *testing.T) {
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
	log.Printf("Response: %+v", resp)

}
