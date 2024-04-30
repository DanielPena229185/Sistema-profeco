﻿using System.Text;
using RabbitMQ.Client;

namespace DealService;

public class RabbitController
{
    private static RabbitController _instance;
    private static ConnectionFactory _factory;
    private static IConnection _connection;
    private static IModel _channel;
    private RabbitController()
    {
        _factory = new ConnectionFactory { HostName = "localhost" };
        _connection = _factory.CreateConnection();
        _channel = _connection.CreateModel();
    }

    public static void SendMessage(string message, string exchange)
    {
        if (_instance == null)
        {
            _instance = new RabbitController();
        }
        var body = Encoding.UTF8.GetBytes(message);
        _channel.BasicPublish(exchange: exchange,
                            routingKey: string.Empty,
                            basicProperties: null,
                            body: body);
        Console.WriteLine($" [x] Sent {message}");
    }
}
