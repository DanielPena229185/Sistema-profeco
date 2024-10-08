// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.12.4
// source: proto/preferences.proto

package preferences_microservice

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type VisitedProductsList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Product []*Product `protobuf:"bytes,1,rep,name=product,proto3" json:"product,omitempty"`
}

func (x *VisitedProductsList) Reset() {
	*x = VisitedProductsList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_preferences_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *VisitedProductsList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*VisitedProductsList) ProtoMessage() {}

func (x *VisitedProductsList) ProtoReflect() protoreflect.Message {
	mi := &file_proto_preferences_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use VisitedProductsList.ProtoReflect.Descriptor instead.
func (*VisitedProductsList) Descriptor() ([]byte, []int) {
	return file_proto_preferences_proto_rawDescGZIP(), []int{0}
}

func (x *VisitedProductsList) GetProduct() []*Product {
	if x != nil {
		return x.Product
	}
	return nil
}

type ShoppingCart struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Product []*Product `protobuf:"bytes,1,rep,name=product,proto3" json:"product,omitempty"`
}

func (x *ShoppingCart) Reset() {
	*x = ShoppingCart{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_preferences_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ShoppingCart) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ShoppingCart) ProtoMessage() {}

func (x *ShoppingCart) ProtoReflect() protoreflect.Message {
	mi := &file_proto_preferences_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ShoppingCart.ProtoReflect.Descriptor instead.
func (*ShoppingCart) Descriptor() ([]byte, []int) {
	return file_proto_preferences_proto_rawDescGZIP(), []int{1}
}

func (x *ShoppingCart) GetProduct() []*Product {
	if x != nil {
		return x.Product
	}
	return nil
}

type Product struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ProductId   string `protobuf:"bytes,1,opt,name=product_id,json=productId,proto3" json:"product_id,omitempty"`
	ProductName string `protobuf:"bytes,2,opt,name=product_name,json=productName,proto3" json:"product_name,omitempty"`
}

func (x *Product) Reset() {
	*x = Product{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_preferences_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Product) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Product) ProtoMessage() {}

func (x *Product) ProtoReflect() protoreflect.Message {
	mi := &file_proto_preferences_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Product.ProtoReflect.Descriptor instead.
func (*Product) Descriptor() ([]byte, []int) {
	return file_proto_preferences_proto_rawDescGZIP(), []int{2}
}

func (x *Product) GetProductId() string {
	if x != nil {
		return x.ProductId
	}
	return ""
}

func (x *Product) GetProductName() string {
	if x != nil {
		return x.ProductName
	}
	return ""
}

type Market struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	MarketId   string `protobuf:"bytes,1,opt,name=market_id,json=marketId,proto3" json:"market_id,omitempty"`
	MarketName string `protobuf:"bytes,2,opt,name=market_name,json=marketName,proto3" json:"market_name,omitempty"`
}

func (x *Market) Reset() {
	*x = Market{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_preferences_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Market) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Market) ProtoMessage() {}

func (x *Market) ProtoReflect() protoreflect.Message {
	mi := &file_proto_preferences_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Market.ProtoReflect.Descriptor instead.
func (*Market) Descriptor() ([]byte, []int) {
	return file_proto_preferences_proto_rawDescGZIP(), []int{3}
}

func (x *Market) GetMarketId() string {
	if x != nil {
		return x.MarketId
	}
	return ""
}

func (x *Market) GetMarketName() string {
	if x != nil {
		return x.MarketName
	}
	return ""
}

type AddProductRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId  string   `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Product *Product `protobuf:"bytes,2,opt,name=product,proto3" json:"product,omitempty"`
}

func (x *AddProductRequest) Reset() {
	*x = AddProductRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_preferences_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddProductRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddProductRequest) ProtoMessage() {}

func (x *AddProductRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_preferences_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddProductRequest.ProtoReflect.Descriptor instead.
func (*AddProductRequest) Descriptor() ([]byte, []int) {
	return file_proto_preferences_proto_rawDescGZIP(), []int{4}
}

func (x *AddProductRequest) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *AddProductRequest) GetProduct() *Product {
	if x != nil {
		return x.Product
	}
	return nil
}

type PreferencesDefaultRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId string `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
}

func (x *PreferencesDefaultRequest) Reset() {
	*x = PreferencesDefaultRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_preferences_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PreferencesDefaultRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PreferencesDefaultRequest) ProtoMessage() {}

func (x *PreferencesDefaultRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_preferences_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PreferencesDefaultRequest.ProtoReflect.Descriptor instead.
func (*PreferencesDefaultRequest) Descriptor() ([]byte, []int) {
	return file_proto_preferences_proto_rawDescGZIP(), []int{5}
}

func (x *PreferencesDefaultRequest) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

type FavoriteMarketRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId string  `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	Market *Market `protobuf:"bytes,2,opt,name=market,proto3" json:"market,omitempty"`
}

func (x *FavoriteMarketRequest) Reset() {
	*x = FavoriteMarketRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_preferences_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FavoriteMarketRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FavoriteMarketRequest) ProtoMessage() {}

func (x *FavoriteMarketRequest) ProtoReflect() protoreflect.Message {
	mi := &file_proto_preferences_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FavoriteMarketRequest.ProtoReflect.Descriptor instead.
func (*FavoriteMarketRequest) Descriptor() ([]byte, []int) {
	return file_proto_preferences_proto_rawDescGZIP(), []int{6}
}

func (x *FavoriteMarketRequest) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *FavoriteMarketRequest) GetMarket() *Market {
	if x != nil {
		return x.Market
	}
	return nil
}

type FavoriteMarketsList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Market []*Market `protobuf:"bytes,1,rep,name=market,proto3" json:"market,omitempty"`
}

func (x *FavoriteMarketsList) Reset() {
	*x = FavoriteMarketsList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_preferences_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FavoriteMarketsList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FavoriteMarketsList) ProtoMessage() {}

func (x *FavoriteMarketsList) ProtoReflect() protoreflect.Message {
	mi := &file_proto_preferences_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FavoriteMarketsList.ProtoReflect.Descriptor instead.
func (*FavoriteMarketsList) Descriptor() ([]byte, []int) {
	return file_proto_preferences_proto_rawDescGZIP(), []int{7}
}

func (x *FavoriteMarketsList) GetMarket() []*Market {
	if x != nil {
		return x.Market
	}
	return nil
}

var File_proto_preferences_proto protoreflect.FileDescriptor

var file_proto_preferences_proto_rawDesc = []byte{
	0x0a, 0x17, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e,
	0x63, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x3f, 0x0a, 0x13, 0x56, 0x69, 0x73, 0x69, 0x74, 0x65, 0x64, 0x50, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x73, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2e, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63,
	0x74, 0x22, 0x38, 0x0a, 0x0c, 0x53, 0x68, 0x6f, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x43, 0x61, 0x72,
	0x74, 0x12, 0x28, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x50, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x22, 0x4b, 0x0a, 0x07, 0x50,
	0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63,
	0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x64,
	0x75, 0x63, 0x74, 0x49, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74,
	0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x70, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x22, 0x46, 0x0a, 0x06, 0x4d, 0x61, 0x72, 0x6b,
	0x65, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x5f, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x49, 0x64, 0x12,
	0x1f, 0x0a, 0x0b, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x4e, 0x61, 0x6d, 0x65,
	0x22, 0x56, 0x0a, 0x11, 0x41, 0x64, 0x64, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x28,
	0x0a, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x0e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x52,
	0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x22, 0x34, 0x0a, 0x19, 0x50, 0x72, 0x65, 0x66,
	0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x73, 0x44, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x22, 0x57,
	0x0a, 0x15, 0x46, 0x61, 0x76, 0x6f, 0x72, 0x69, 0x74, 0x65, 0x4d, 0x61, 0x72, 0x6b, 0x65, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64,
	0x12, 0x25, 0x0a, 0x06, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x0d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x4d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x52,
	0x06, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x22, 0x3c, 0x0a, 0x13, 0x46, 0x61, 0x76, 0x6f, 0x72,
	0x69, 0x74, 0x65, 0x4d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x73, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x25,
	0x0a, 0x06, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0d,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x4d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x52, 0x06, 0x6d,
	0x61, 0x72, 0x6b, 0x65, 0x74, 0x32, 0xff, 0x03, 0x0a, 0x13, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d,
	0x65, 0x72, 0x50, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x73, 0x12, 0x4b, 0x0a,
	0x11, 0x41, 0x64, 0x64, 0x56, 0x69, 0x73, 0x69, 0x74, 0x65, 0x64, 0x50, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x12, 0x18, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x41, 0x64, 0x64, 0x50, 0x72,
	0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x56, 0x69, 0x73, 0x69, 0x74, 0x65, 0x64, 0x50, 0x72, 0x6f, 0x64,
	0x75, 0x63, 0x74, 0x73, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x00, 0x12, 0x57, 0x0a, 0x15, 0x47, 0x65,
	0x74, 0x56, 0x69, 0x73, 0x69, 0x74, 0x65, 0x64, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x4c,
	0x69, 0x73, 0x74, 0x12, 0x20, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x50, 0x72, 0x65, 0x66,
	0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x73, 0x44, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x56, 0x69,
	0x73, 0x69, 0x74, 0x65, 0x64, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x4c, 0x69, 0x73,
	0x74, 0x22, 0x00, 0x12, 0x4f, 0x0a, 0x11, 0x41, 0x64, 0x64, 0x46, 0x61, 0x76, 0x6f, 0x72, 0x69,
	0x74, 0x65, 0x4d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x12, 0x1c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2e, 0x46, 0x61, 0x76, 0x6f, 0x72, 0x69, 0x74, 0x65, 0x4d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x46,
	0x61, 0x76, 0x6f, 0x72, 0x69, 0x74, 0x65, 0x4d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x73, 0x4c, 0x69,
	0x73, 0x74, 0x22, 0x00, 0x12, 0x58, 0x0a, 0x16, 0x47, 0x65, 0x74, 0x46, 0x61, 0x76, 0x6f, 0x72,
	0x69, 0x74, 0x65, 0x4d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x73, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x20,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x50, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63,
	0x65, 0x73, 0x44, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x46, 0x61, 0x76, 0x6f, 0x72, 0x69, 0x74,
	0x65, 0x4d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x73, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x00, 0x12, 0x4b,
	0x0a, 0x18, 0x41, 0x64, 0x64, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x54, 0x6f, 0x53, 0x68,
	0x6f, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x43, 0x61, 0x72, 0x74, 0x12, 0x18, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x41, 0x64, 0x64, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x53, 0x68, 0x6f,
	0x70, 0x70, 0x69, 0x6e, 0x67, 0x43, 0x61, 0x72, 0x74, 0x22, 0x00, 0x12, 0x4a, 0x0a, 0x0f, 0x47,
	0x65, 0x74, 0x53, 0x68, 0x6f, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x43, 0x61, 0x72, 0x74, 0x12, 0x20,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x50, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63,
	0x65, 0x73, 0x44, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x13, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x53, 0x68, 0x6f, 0x70, 0x70, 0x69, 0x6e,
	0x67, 0x43, 0x61, 0x72, 0x74, 0x22, 0x00, 0x42, 0x30, 0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x69, 0x6c, 0x76, 0x65, 0x72, 0x66, 0x6c, 0x69, 0x6e,
	0x2f, 0x70, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x73, 0x2d, 0x6d, 0x69, 0x63,
	0x72, 0x6f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_proto_preferences_proto_rawDescOnce sync.Once
	file_proto_preferences_proto_rawDescData = file_proto_preferences_proto_rawDesc
)

func file_proto_preferences_proto_rawDescGZIP() []byte {
	file_proto_preferences_proto_rawDescOnce.Do(func() {
		file_proto_preferences_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_preferences_proto_rawDescData)
	})
	return file_proto_preferences_proto_rawDescData
}

var file_proto_preferences_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_proto_preferences_proto_goTypes = []interface{}{
	(*VisitedProductsList)(nil),       // 0: proto.VisitedProductsList
	(*ShoppingCart)(nil),              // 1: proto.ShoppingCart
	(*Product)(nil),                   // 2: proto.Product
	(*Market)(nil),                    // 3: proto.Market
	(*AddProductRequest)(nil),         // 4: proto.AddProductRequest
	(*PreferencesDefaultRequest)(nil), // 5: proto.PreferencesDefaultRequest
	(*FavoriteMarketRequest)(nil),     // 6: proto.FavoriteMarketRequest
	(*FavoriteMarketsList)(nil),       // 7: proto.FavoriteMarketsList
}
var file_proto_preferences_proto_depIdxs = []int32{
	2,  // 0: proto.VisitedProductsList.product:type_name -> proto.Product
	2,  // 1: proto.ShoppingCart.product:type_name -> proto.Product
	2,  // 2: proto.AddProductRequest.product:type_name -> proto.Product
	3,  // 3: proto.FavoriteMarketRequest.market:type_name -> proto.Market
	3,  // 4: proto.FavoriteMarketsList.market:type_name -> proto.Market
	4,  // 5: proto.CustomerPreferences.AddVisitedProduct:input_type -> proto.AddProductRequest
	5,  // 6: proto.CustomerPreferences.GetVisitedProductList:input_type -> proto.PreferencesDefaultRequest
	6,  // 7: proto.CustomerPreferences.AddFavoriteMarket:input_type -> proto.FavoriteMarketRequest
	5,  // 8: proto.CustomerPreferences.GetFavoriteMarketsList:input_type -> proto.PreferencesDefaultRequest
	4,  // 9: proto.CustomerPreferences.AddProductToShoppingCart:input_type -> proto.AddProductRequest
	5,  // 10: proto.CustomerPreferences.GetShoppingCart:input_type -> proto.PreferencesDefaultRequest
	0,  // 11: proto.CustomerPreferences.AddVisitedProduct:output_type -> proto.VisitedProductsList
	0,  // 12: proto.CustomerPreferences.GetVisitedProductList:output_type -> proto.VisitedProductsList
	7,  // 13: proto.CustomerPreferences.AddFavoriteMarket:output_type -> proto.FavoriteMarketsList
	7,  // 14: proto.CustomerPreferences.GetFavoriteMarketsList:output_type -> proto.FavoriteMarketsList
	1,  // 15: proto.CustomerPreferences.AddProductToShoppingCart:output_type -> proto.ShoppingCart
	1,  // 16: proto.CustomerPreferences.GetShoppingCart:output_type -> proto.ShoppingCart
	11, // [11:17] is the sub-list for method output_type
	5,  // [5:11] is the sub-list for method input_type
	5,  // [5:5] is the sub-list for extension type_name
	5,  // [5:5] is the sub-list for extension extendee
	0,  // [0:5] is the sub-list for field type_name
}

func init() { file_proto_preferences_proto_init() }
func file_proto_preferences_proto_init() {
	if File_proto_preferences_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_preferences_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*VisitedProductsList); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_preferences_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ShoppingCart); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_preferences_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Product); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_preferences_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Market); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_preferences_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddProductRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_preferences_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PreferencesDefaultRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_preferences_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FavoriteMarketRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_proto_preferences_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FavoriteMarketsList); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_preferences_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_proto_preferences_proto_goTypes,
		DependencyIndexes: file_proto_preferences_proto_depIdxs,
		MessageInfos:      file_proto_preferences_proto_msgTypes,
	}.Build()
	File_proto_preferences_proto = out.File
	file_proto_preferences_proto_rawDesc = nil
	file_proto_preferences_proto_goTypes = nil
	file_proto_preferences_proto_depIdxs = nil
}
