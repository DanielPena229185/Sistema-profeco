package messaging

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/joho/godotenv"
	amqp "github.com/rabbitmq/amqp091-go"
)

var conn *amqp.Connection

var RABBIT_URL, RABBIT_PORT string

func init() {
	var err error
	if os.Getenv("PRODUCT_MICROSERVICE_ENV") == "PROD" {
		err = godotenv.Load(".env.production")
	} else {
		err = godotenv.Load(".env.development")
	}

	if err != nil {
		log.Println("Error loading .env file")
		log.Println("Loading exe env variables")
		RABBIT_URL = "localhost"
		RABBIT_PORT = "5672"

	}

	conn, err = amqp.Dial(fmt.Sprintf("amqp://guest:guest@%v:%v/", os.Getenv("RABBIT_URL"), os.Getenv("RABBIT_PORT")))
	failOnError(err, "Failed to connect to RabbitMQ")
}

func failOnError(err error, msg string) {
	if err != nil {
		log.Panicf("%s: %s", msg, err)
	}
}

func getChannel() *amqp.Channel {
	ch, err := conn.Channel()
	failOnError(err, "Failed to open a channel")
	return ch
}

func getProductQueue(ch *amqp.Channel) (amqp.Queue, error) {
	q, err := ch.QueueDeclare(
		"product", // name
		false,     // durable
		false,     // delete when unused
		false,     // exclusive
		false,     // no-wait
		nil,       // arguments
	)
	if err != nil {
		return amqp.Queue{}, err
	}

	return q, nil
}

func SendToProductQueue(message string) {
	ch := getChannel()
	q, err := getProductQueue(ch)
	failOnError(err, "Failed to get product queue")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	body := message
	err = ch.PublishWithContext(ctx,
		"",     // exchange
		q.Name, // routing key
		false,  // mandatory
		false,  // immediate
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte(body),
		})
	failOnError(err, "Failed to publish a message")
	log.Printf(" [x] Sent %s\n", body)
}
