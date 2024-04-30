
using System.Collections.ObjectModel;
using MongoDB.Driver;

namespace DealService;

public class DealDAO : IDealDAO
{

    private readonly List<IDealObserver> Observers = [];
    private readonly IMongoDatabase Database;
    private readonly IMongoCollection<Deal> DealsCollection;
    private static readonly string CollectionNmae = "Deals";


    public DealDAO()
    {
        Database = DatabaseConnection.GetInstance().Client.GetDatabase("DealService");
        DealsCollection = Database.GetCollection<Deal>(CollectionNmae);
    }

    public Deal GetDealByDealId(string dealId)
    {
        var filters = Builders<Deal>.Filter.Eq("Id", dealId);
        return DealsCollection.Find(filters).FirstOrDefault();
    }

    public List<Deal> GetDeals(int page, int count)
    {
        var filters = Builders<Deal>.Filter.Empty;
        int Skip = page * count;
        List<Deal> deals = DealsCollection.Find(filters).Skip(Skip).Limit(count).ToList();
        return deals;
    }

    public Deal InsertDeal(Deal deal)
    {
        DealsCollection.InsertOne(deal);
        NotifyAllIDealObservers(deal);
        return deal;
    }

    public void Attach(IDealObserver observer)
    {
        Observers.Add(observer);
    }

    public void Detach(IDealObserver observer)
    {
        Observers.Remove(observer);
    }

    private void NotifyAllIDealObservers(Deal deal)
    {
        foreach (var observer in Observers)
        {
            observer.Update(deal);
        }
    }
}
