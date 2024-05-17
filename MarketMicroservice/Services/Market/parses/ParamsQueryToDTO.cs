using System;

namespace Market;

public class ParamsQueryToDTO
{
    public static GetMarketsByIdsQueryDTO GetMarketsByIdsQuery(GetMarketsByIdsQuery query)
    {
        string[] fieldsAvailables = ["id", "name", "urlImage", "company_id", "address", "created_at", "updated_at"];
        string fieldsQuery = query.Fields;
        if (fieldsQuery == null || fieldsQuery.Length == 0)
        {
            Console.Error.WriteLine("Fields query is required");
        }
        string[] relationsAvailables = ["company"];
        string relationsQuery = query.Relations;
        string[] fields = ParseQueries.GetFields(fieldsQuery, fieldsAvailables);
        string relations = ParseQueries.GetRelations(relationsQuery, relationsAvailables);
        return new(query.Ids, fields, relations);
    }

    public static GetAllMarketsQueryDTO GetAllMarketsQuery(GetAllMarketsQuery query)
    {
        string[] fieldsAvailables = ["id", "name", "urlImage", "company_id", "address", "created_at", "updated_at"];
        string fieldsQuery = query.Fields;
        if (fieldsQuery == null || fieldsQuery.Length == 0)
        {
            Console.Error.WriteLine("Fields query is required");
        }
        string[] relationsAvailables = ["company"];
        string relationsQuery = query.Relations;
        int page = query.PaginationParams.Page;
        if (page < 0)
        {
            page = 0;
        }
        int count = query.PaginationParams.Count;
        if (count < 0)
        {
            count = 5;
        }
        string marketName = query.MarketName;
        string address = query.Address;
        bool isExclusive = query.Exclusive;
        string[] fields = ParseQueries.GetFields(fieldsQuery, fieldsAvailables);
        string relations = ParseQueries.GetRelations(relationsQuery, relationsAvailables);
        return new(fields, relations, page, count, marketName, address, isExclusive);
    }

    public static GetMarketByIdQueryDTO GetMarketByIdQuery(GetMarketByIdQuery query){
        string[] fieldsAvailables = ["id", "name", "urlImage", "company_id", "address", "created_at", "updated_at"];
        string fieldsQuery = query.Fields;
        if (fieldsQuery == null || fieldsQuery.Length == 0)
        {
            Console.Error.WriteLine("Fields query is required");
        }
        string[] relationsAvailables = ["company"];
        string relationsQuery = query.Relations;
        string marketId = query.MarketId;
        string[] fields = ParseQueries.GetFields(fieldsQuery, fieldsAvailables);
        string relations = ParseQueries.GetRelations(relationsQuery, relationsAvailables);
        return new(marketId, fields, relations);
    }
}
