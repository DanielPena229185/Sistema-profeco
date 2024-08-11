namespace DealService;

public interface IDealDAO: IDeal
{
    public Deal InsertDeal(Deal deal);
    public Deal GetDealByDealId(string dealId);
    public List<Deal> GetDeals(int page, int count);
    public List<Deal> GetDealsByMarket(string marketId, int page, int count);
}
