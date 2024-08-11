using System;

namespace Market;

public interface IWhereReference
{
    IWhereReference Equal(string field);
    IWhereReference Like(string field);
    IWhereReference And();
    IWhereReference Or();
    string Build();

}
