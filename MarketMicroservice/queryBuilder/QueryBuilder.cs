using System;

namespace Market;

public class QueryBuilder : IQueryBuilder
{
    private string SelectQuery = "";
    private string FromQuery = "";
    private string InnerQuery = "";
    private string LimitQuery = "";
    private string OffsetQuery = "";
    private string WhereQuery = "";


    public IQueryBuilder Select(string[] fields)
    {
        if (SelectQuery.Length == 0)
        {
            this.SelectQuery += "SELECT ";
        }
        else if (fields.Length > 0)
        {
            this.SelectQuery += ", ";
        }
        this.SelectQuery += $"{string.Join(",", fields)} ";
        return this;
    }

    public IQueryBuilder From(string table)
    {
        if (FromQuery.Length == 0)
        {
            this.FromQuery += "FROM ";
        }
        this.FromQuery += $"{table} ";
        return this;
    }

    public IQueryBuilder InnerJoin(string table, string on)
    {
        if (InnerQuery.Length == 0)
        {
            this.InnerQuery += "INNER JOIN ";
        }
        this.InnerQuery += $"{table} ON {on} ";
        return this;
    }

    public IQueryBuilder Limit(int count)
    {
        this.LimitQuery += $"LIMIT {count} ";
        return this;
    }

    public IQueryBuilder Offset(int count)
    {
        this.OffsetQuery += $"OFFSET {count} ";
        return this;
    }

    public IQueryBuilder Where(IWhereReference whereReference)
    {
        if (WhereQuery.Length == 0)
        {
            this.WhereQuery += "WHERE ";
        }
        this.WhereQuery += whereReference.Build();
        return this;
    }
    public string Build()
    {
        return this.SelectQuery + this.FromQuery + this.InnerQuery + this.WhereQuery + this.LimitQuery + this.OffsetQuery;
    }

    public static string[] SetAlias(string[] fields, string alias)
    {
        string[] aliasedFields = new string[fields.Length];
        for (int i = 0; i < fields.Length; i++)
        {
            aliasedFields[i] = $"{alias}.{fields[i]} AS {alias}_{fields[i]}";
        }
        return aliasedFields;
    }
}
