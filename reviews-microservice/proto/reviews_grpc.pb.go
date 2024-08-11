// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.12.4
// source: proto/reviews.proto

package reviews_microservice

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ReviewsClient is the client API for Reviews service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ReviewsClient interface {
	GetMarketReviews(ctx context.Context, in *GetMarketReviewsRequest, opts ...grpc.CallOption) (*ReviewsResponse, error)
	CreateReview(ctx context.Context, in *CreateReviewRequest, opts ...grpc.CallOption) (*CreateReviewResponse, error)
}

type reviewsClient struct {
	cc grpc.ClientConnInterface
}

func NewReviewsClient(cc grpc.ClientConnInterface) ReviewsClient {
	return &reviewsClient{cc}
}

func (c *reviewsClient) GetMarketReviews(ctx context.Context, in *GetMarketReviewsRequest, opts ...grpc.CallOption) (*ReviewsResponse, error) {
	out := new(ReviewsResponse)
	err := c.cc.Invoke(ctx, "/proto.Reviews/GetMarketReviews", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *reviewsClient) CreateReview(ctx context.Context, in *CreateReviewRequest, opts ...grpc.CallOption) (*CreateReviewResponse, error) {
	out := new(CreateReviewResponse)
	err := c.cc.Invoke(ctx, "/proto.Reviews/CreateReview", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ReviewsServer is the server API for Reviews service.
// All implementations must embed UnimplementedReviewsServer
// for forward compatibility
type ReviewsServer interface {
	GetMarketReviews(context.Context, *GetMarketReviewsRequest) (*ReviewsResponse, error)
	CreateReview(context.Context, *CreateReviewRequest) (*CreateReviewResponse, error)
	mustEmbedUnimplementedReviewsServer()
}

// UnimplementedReviewsServer must be embedded to have forward compatible implementations.
type UnimplementedReviewsServer struct {
}

func (UnimplementedReviewsServer) GetMarketReviews(context.Context, *GetMarketReviewsRequest) (*ReviewsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMarketReviews not implemented")
}
func (UnimplementedReviewsServer) CreateReview(context.Context, *CreateReviewRequest) (*CreateReviewResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateReview not implemented")
}
func (UnimplementedReviewsServer) mustEmbedUnimplementedReviewsServer() {}

// UnsafeReviewsServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ReviewsServer will
// result in compilation errors.
type UnsafeReviewsServer interface {
	mustEmbedUnimplementedReviewsServer()
}

func RegisterReviewsServer(s grpc.ServiceRegistrar, srv ReviewsServer) {
	s.RegisterService(&Reviews_ServiceDesc, srv)
}

func _Reviews_GetMarketReviews_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMarketReviewsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReviewsServer).GetMarketReviews(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.Reviews/GetMarketReviews",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReviewsServer).GetMarketReviews(ctx, req.(*GetMarketReviewsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Reviews_CreateReview_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateReviewRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReviewsServer).CreateReview(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.Reviews/CreateReview",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReviewsServer).CreateReview(ctx, req.(*CreateReviewRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Reviews_ServiceDesc is the grpc.ServiceDesc for Reviews service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Reviews_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "proto.Reviews",
	HandlerType: (*ReviewsServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetMarketReviews",
			Handler:    _Reviews_GetMarketReviews_Handler,
		},
		{
			MethodName: "CreateReview",
			Handler:    _Reviews_CreateReview_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/reviews.proto",
}
