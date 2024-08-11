//entities
export interface Review {
  id: string;
  market_id: string;
  user_id: string;
  content: string;
  rating: number;
  created_at: string;
}

//Requests
export interface GetMarketReviewsRequest {
  market_id: string;
}

export interface CreateReviewRequest {
  market_id: string;
  user_id: string;
  content: string;
  rating: number;
}

//Responses
export interface ReviewsResponse {
  reviews: Review[];
}

export interface CreateReviewResponse {
  review: Review;
}
