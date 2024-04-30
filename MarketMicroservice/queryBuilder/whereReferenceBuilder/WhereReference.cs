using System;

namespace Market;

public class WhereReference : IWhereReference
{
    private string where = "";

    public IWhereReference Equal(string field)
    {
        where += $"{field} = @{field} ";
        return this;
    }
    public IWhereReference Like(string field)
    {
        where += $"{field} LIKE @{field} ";
        return this;
    }
    public IWhereReference And()
    {
        where += "AND ";
        return this;
    }
    public IWhereReference Or()
    {
        where += "OR ";
        return this;
    }
    public string Build()
    {
        return where;
    }
}
