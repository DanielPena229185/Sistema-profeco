using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DealService;

public class Market
{
    [BsonElement("_id")]
    public string Id { get; set; }
    
    [BsonElement("name")]
    public string Name { get; set; }
}
