using System;

namespace Market;

public interface IWhereReference
{
    IWhereReference Equal(string field, string identifier="");
    IWhereReference Like(string field);
    IWhereReference And();
    IWhereReference Or();
    string Build();

}
