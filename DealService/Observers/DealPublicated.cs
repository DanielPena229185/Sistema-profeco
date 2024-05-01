using System.Text.Json;

namespace DealService;

public class DealPublicated : IDealObserver
{
    private readonly string exchangeName = "notifications";
    public void Update(Deal deal)
    {
        string message = JsonSerializer.Serialize(deal);
        Console.WriteLine($"DealPublicated: {message}");
        RabbitController.SendMessage(message, exchangeName);
    }
}
