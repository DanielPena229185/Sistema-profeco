using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DealService;

public class Deal
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("description")]
    public string Description { get; set; }

    [BsonElement("price")]
    public decimal Price { get; set; }

    [BsonElement("date")]
    public DateTime Date { get; set; }

    [BsonElement("market")]
    public Market Market { get; set; }

    [BsonElement("product")]
    public Product Product { get; set; }
}
