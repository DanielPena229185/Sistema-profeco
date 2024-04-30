using System;
using System.ComponentModel;

namespace Market;

public interface IQueryBuilder
{   
    IQueryBuilder Select(string[] fields);
    IQueryBuilder From(string table);
    IQueryBuilder Where(IWhereReference whereReference);
    IQueryBuilder InnerJoin(string table, string on);
    IQueryBuilder Limit(int count);
    IQueryBuilder Offset(int count);
    string Build();
}
