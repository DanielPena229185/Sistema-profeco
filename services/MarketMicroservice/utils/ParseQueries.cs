using System;
using System.Collections.Generic;

namespace Market;

public class ParseQueries
{
    public static string[] GetFields(string fieldsRequest, string[] fields)
{
    string[] fieldsQuery = fieldsRequest.Split(',');
    List<string> selectedFields = new List<string>();

    foreach (string field in fields)
    {
        if (Array.IndexOf(fieldsQuery, field) != -1)
        {
            selectedFields.Add(field);
        }
    }

    return selectedFields.ToArray();
}


    public static string GetWhere(string whereRequest, string[] where)
    {
        string[] whereQuery = whereRequest.Split(',');
        string whereString = "";
        foreach (string w in where)
        {
            if (Array.IndexOf(whereQuery, w) != -1)
            {
                if (whereString != "")
                {
                    whereString += ",";
                }
                whereString += w;
            }
        }
        return whereString;
    }

    public static string GetRelations(string relationsRequest, string[] relations)
    {
        string[] relationsQuery = relationsRequest.Split(',');
        string relationsString = "";
        foreach (string relation in relations)
        {
            if (Array.IndexOf(relationsQuery, relation) != -1)
            {
                if (relationsString != "")
                {
                    relationsString += ",";
                }
                relationsString += relation;
            }
        }
        return relationsString;
    }

}
