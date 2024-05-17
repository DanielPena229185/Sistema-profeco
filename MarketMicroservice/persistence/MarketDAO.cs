using System;
using System.Collections.Generic;
using MySql.Data.MySqlClient;

namespace Market;

public class MarketDAO
{
    public MarketDAO()
    {
    }

    public List<MarketEntity> GetMarketsByIds(GetMarketsByIdsQueryDTO queryDTO)
    {
        List<MarketEntity> markets = [];
        string query = CreateQueryGetMarketsByIds(queryDTO);
        MySqlCommand myCommand = new MySqlCommand();
        var connection = DatabaseManager.getInstance();
        try
        {
            myCommand.Connection = connection;
            myCommand.CommandText = query;
            string[] ids = StringToArray(queryDTO.Ids);
            for (int i = 0; i < ids.Length; i++)
            {
                myCommand.Parameters.AddWithValue($"@market.id{ids[i]}", ids[i]);
            }
            
            MySqlDataReader myReader = myCommand.ExecuteReader();
            markets = MapToMarkets(myReader, queryDTO.Fields, queryDTO.Relations);
        }
        finally
        {
            connection.Close();
        }
        return markets;
    }

    public List<MarketEntity> GetAllMarkets(GetAllMarketsQueryDTO queryDTO)
    {
        List<MarketEntity> markets = [];
        string query = CreateQueryGetAllMarkets(queryDTO);
        MySqlCommand myCommand = new MySqlCommand();
        var connection = DatabaseManager.getInstance();
        try
        {
            myCommand.Connection = connection;
            myCommand.CommandText = query;
            if (queryDTO.HasWhere())
            {
                if (queryDTO.HasMarketName())
                {
                    myCommand.Parameters.AddWithValue("@market.name", $"%{queryDTO.Market_name}%");
                }
                if (queryDTO.HasAddress())
                {
                    myCommand.Parameters.AddWithValue("@market.address", $"%{queryDTO.Address}%");
                }
            }
            MySqlDataReader myReader = myCommand.ExecuteReader();
            markets = MapToMarkets(myReader, queryDTO.Fields, queryDTO.Relations);
        }
        finally
        {
            connection.Close();
        }
        return markets;
    }

    public MarketEntity GetMarketById(GetMarketByIdQueryDTO queryDTO)
    {
        MarketEntity market = new();
        string query = CreateQueryGetMarketById(queryDTO);
        Console.WriteLine(query);
        MySqlCommand myCommand = new MySqlCommand();
        var connection = DatabaseManager.getInstance();
        try
        {
            myCommand.Connection = connection;
            myCommand.CommandText = query;
            myCommand.Parameters.AddWithValue("@market.id", queryDTO.MarketId);
            MySqlDataReader myReader = myCommand.ExecuteReader();
            market = MapToMarkets(myReader, queryDTO.Fields, queryDTO.Relations)[0];
        }
        finally
        {
            connection.Close();
        }
        return market;
    }

    private string CreateQueryGetMarketById(GetMarketByIdQueryDTO query)
    {
        IQueryBuilder queryBuilder = new QueryBuilder();
        string[] fieldsWithAlias = QueryBuilder.SetAlias(query.Fields, "market");//market_field
        queryBuilder.Select(fieldsWithAlias).From("market");
        IWhereReference where = new WhereReference();
        where.Equal("market.id");
        queryBuilder.Where(where);
        Boolean hasCompany = ArrayToString(query.Fields).Contains("company_id") && query.Relations.Contains("company");
        if (hasCompany)
        {
            queryBuilder.InnerJoin("company", "market.company_id = company.id");
            queryBuilder.Select(QueryBuilder.SetAlias(new string[] { "id", "name", "urlImage" }, "company"));
        }
        return queryBuilder.Build();
    }

    public string CreateQueryGetMarketsByIds(GetMarketsByIdsQueryDTO queryDTO)
    {
        string[] ids = this.StringToArray(queryDTO.Ids);
        IQueryBuilder queryBuilder = new QueryBuilder();
        string[] fieldsWithAlias = QueryBuilder.SetAlias(queryDTO.Fields, "market");//market_field
        queryBuilder.Select(fieldsWithAlias).From("market");
        IWhereReference where = new WhereReference();
        for (int i = 0; i < ids.Length; i++)
        {
            if (i > 0)
            {
                where.Or();
            }
            where.Equal("market.id", ids[i]);
        }
        queryBuilder.Where(where);
        Boolean hasCompany = ArrayToString(queryDTO.Fields).Contains("company_id") && queryDTO.Relations.Contains("company");
        if (hasCompany)
        {
            queryBuilder.InnerJoin("company", "market.company_id = company.id");
            queryBuilder.Select(QueryBuilder.SetAlias(new string[] { "id", "name", "urlImage" }, "company"));
        }
        return queryBuilder.Build();
    }

    private string CreateQueryGetAllMarkets(GetAllMarketsQueryDTO queryParams)
    {
        IQueryBuilder queryBuilder = new QueryBuilder();
        string[] fieldsWithAlias = QueryBuilder.SetAlias(queryParams.Fields, "market");//market_field
        queryBuilder.Select(fieldsWithAlias).From("market");
        if (queryParams.HasWhere())
        {
            IWhereReference where = new WhereReference();
            if (queryParams.HasMarketName())
            {
                where.Like("market.name");
            }
            if (queryParams.HasMarketName() && queryParams.HasAddress())
            {
                if (queryParams.Exclusive)
                {
                    where.And();
                }
                else
                {
                    where.Or();
                }
            }
            if (queryParams.HasAddress())
            {
                where.Like("market.address");
            }
            queryBuilder.Where(where);
        }
        Boolean hasCompany = ArrayToString(queryParams.Fields).Contains("company_id") && queryParams.Relations.Contains("company");
        if (hasCompany)
        {
            queryBuilder.InnerJoin("company", "market.company_id = company.id");
            queryBuilder.Select(QueryBuilder.SetAlias(new string[] { "id", "name", "urlImage" }, "company"));
        }
        queryBuilder.Limit(queryParams.Count).Offset(queryParams.GetSkip());
        return queryBuilder.Build();
    }

    private List<MarketEntity> MapToMarkets(MySqlDataReader myReader, string[] queryFields, string relations)
    {
        List<MarketEntity> markets = new();
        while (myReader.Read())
        {
            MarketEntity market = MapToMarket(myReader, queryFields, relations);
            markets.Add(market);
        }
        return markets;
    }

    private MarketEntity MapToMarket(MySqlDataReader myReader, string[] queryFields, string relations)
    {
        MarketEntity market = new();
        string fieldsString = ArrayToString(queryFields);
        if (fieldsString.Contains("*"))
        {
            fieldsString = "id,name,urlImage,address,created_at,updated_at";
        }
        if (fieldsString.Contains("id"))
        {
            market.Id = myReader.GetString("market_id");
        }
        if (fieldsString.Contains("name"))
        {
            market.Name = myReader.GetString("market_name");
        }
        if (fieldsString.Contains("urlImage"))
        {
            market.UrlImg = myReader.GetString("market_urlImage");
        }
        if (fieldsString.Contains("address"))
        {
            market.Address = myReader.GetString("market_address");
        }
        if (fieldsString.Contains("created_at"))
        {
            DateTime time = myReader.GetDateTime("market_created_at");
            market.CreatedAt = time.ToString("yyyy-MM-dd HH:mm:ss");
        }
        if (fieldsString.Contains("updated_at"))
        {
            DateTime time = myReader.GetDateTime("market_updated_at");
            market.UpdatedAt = time.ToString("yyyy-MM-dd HH:mm:ss");
        }
        Boolean hasCompany = fieldsString.Contains("company_id") && relations.Contains("company");
        if (hasCompany)
        {
            CompanyEntity company = new()
            {
                Id = myReader.GetString("company_id"),
                Name = myReader.GetString("company_name"),
                UrlImg = myReader.GetString("company_urlImage")
            };
            market.Company = company;
        }
        return market;
    }

    private CompanyEntity MapToCompany(MySqlDataReader myReader)
    {
        CompanyEntity company = new()
        {
            Id = myReader.GetString("company_id"),
            Name = myReader.GetString("company_name"),
            UrlImg = myReader.GetString("company_urlImage")
        };
        return company;
    }

    private string ArrayToString(string[] array)
    {
        string result = "";
        for (int i = 0; i < array.Length; i++)
        {
            result += array[i];
            if (i < array.Length - 1)
            {
                result += ",";
            }
        }
        return result;
    }

    private string[] StringToArray(string str)
    {
        return str.Split(",");
    }
}
