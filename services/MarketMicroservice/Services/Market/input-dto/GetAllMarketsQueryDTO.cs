using System;

namespace Market;

public class GetAllMarketsQueryDTO(string[] fields, string relations, int page, int count, string market_name, string address, bool exclusive)
{
    public string[] Fields { get; set; } = fields;
    public string Relations { get; set; } = relations;
    public int Page { get; set; } = page;
    public int Count { get; set; } = count;
    public string Market_name { get; set; } = market_name;
    public string Address { get; set; } = address;
    public bool Exclusive { get; set; } = exclusive;

    public bool HasWhere()
    {
        return HasMarketName() || HasAddress();
    }

    public bool HasMarketName()
    {
        return Market_name.Length > 0;
    }

    public bool HasAddress()
    {
        return Address.Length > 0;
    }

    public int GetSkip()
    {
        return Page * Count;
    }
}