using System;

namespace Market;

public class GetMarketByIdQueryDTO(string marketId ,string[] fields, string relations)
{
    public string[] Fields { get; set; } = fields;
    public string Relations { get; set; } = relations;
    public string MarketId { get; set; } = marketId;
}
