using System;

namespace Market;

public class GetMarketsByIdsQueryDTO(string ids, string[] fields, string relations)
{
    public string Ids { get; set; } = ids;
    public string[] Fields { get; set; } = fields;
    public string Relations { get; set; } = relations;
}
