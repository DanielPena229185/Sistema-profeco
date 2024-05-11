FROM golang:1.22

WORKDIR /app

ENV REVIEWS_MICROSERVICE_ENV PROD

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -o main ./cmd/api-server/main.go

CMD ["./main"]
