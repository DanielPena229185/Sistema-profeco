namespace DealService;

public class ParseProtoEntity
{
    private static readonly string dateFormat = "yyyy-MM-dd HH:mm:ss";
    //Parse proto DealEntity to Deal
    public static Deal ParseDealEntity(DealEntity dealEntity){
        decimal price = Decimal.Parse(dealEntity.Price.ToString());
        string dateString = dealEntity.Date;
        DateTime date = DateTime.ParseExact(dateString, dateFormat, System.Globalization.CultureInfo.InvariantCulture);
        Product product = new(){
            Id = dealEntity.Product.Id,
            Name = dealEntity.Product.Name,
        };
        Market market = new(){
            Id = dealEntity.Market.Id,
            Name = dealEntity.Market.Name,
        };
        Deal deal = new(){
            Id = dealEntity.Id,
            Price = price,
            Date = date,
            Description = dealEntity.Description,
            Product = product,
            Market = market,
        };
        return deal;
    }

    //Parse Deal to proto DealEntity
    public static DealEntity ParseDeal(Deal deal){
        string dateString = deal.Date.ToString(dateFormat);
        double price = Double.Parse(deal.Price.ToString());
        ProductEntity product = new(){
            Id = deal.Product.Id,
            Name = deal.Product.Name,
        };
        MarketEntity market = new(){
            Id = deal.Market.Id,
            Name = deal.Market.Name,
        };
        DealEntity dealEntity = new(){
            Id = deal.Id,
            Description = deal.Description,
            Price = price,
            Date = dateString,
            Product = product,
            Market = market,
        };
        return dealEntity;
    }
}
