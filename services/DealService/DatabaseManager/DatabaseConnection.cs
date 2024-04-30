﻿using MongoDB.Driver;

namespace DealService;

public class DatabaseConnection
{
    private const string ConnectionString = "mongodb://localhost:27017";
    private const string DatabaseName = "DealService";
    private static DatabaseConnection databaseConnection;

    private static int count = 0;

    public MongoClient Client { get; }

    private DatabaseConnection()
    {
        Client = new MongoClient(ConnectionString);
    }

    public static DatabaseConnection GetInstance()
    {
        if (databaseConnection == null)
        {
            databaseConnection = new DatabaseConnection();
        }
        count++;
        Console.WriteLine($"DatabaseConnection count: {count}");
        return databaseConnection;
    }   
}
