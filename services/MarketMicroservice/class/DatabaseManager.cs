using MySql.Data.MySqlClient;

namespace Market;

public class DatabaseManager
{
    private static DatabaseManager _instance;
    private static MySqlConnection myConnection;
    private static string _connectionString  = "server=127.0.0.1;uid=root;pwd=1234;database=market_microservices";
    private DatabaseManager()
    {
        
    }

    public static MySqlConnection getInstance()
    {
        if (_instance == null)
        {
            _instance = new DatabaseManager();
        }
        myConnection = new MySqlConnection(_connectionString);
        myConnection.Open();
        return myConnection;
    }
}
