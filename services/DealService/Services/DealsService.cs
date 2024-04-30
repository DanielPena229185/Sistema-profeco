using Grpc.Core;

namespace DealService;

public class DealsService : Deals.DealsBase
{
    private readonly IDealDAO DealDAO = new DealDAO();
    private IDealObserver DealObserver;

    private void SuscribeToDealDAO()
    {
        if (DealObserver != null)
        {
            return;
        }
        DealObserver = new DealPublicated();
        DealDAO.Attach(DealObserver);
    }
    public override Task<DealEntity> CreateDeal(DealEntity deal, ServerCallContext context)
    {
        SuscribeToDealDAO();
        Deal createDeal = ParseProtoEntity.ParseDealEntity(deal);
        DealDAO.InsertDeal(createDeal);
        DealEntity dealEntity = ParseProtoEntity.ParseDeal(createDeal);
        return Task.FromResult(dealEntity);
    }

    public override Task<GetDealByIdResponse> GetDealById(GetDealByIdRequest request, ServerCallContext context)
    {
        string dealId = request.Id;
        Deal deal = DealDAO.GetDealByDealId(dealId);
        DealEntity dealEntity = ParseProtoEntity.ParseDeal(deal);
        GetDealByIdResponse response = new()
        {
            Deal = dealEntity
        };
        return Task.FromResult(response);
    }

    public override Task<GetDealsResponse> GetDeals(GetDealsRequest request, ServerCallContext context)
    {
        int page = request.Page;
        int count = request.Count;
        List<Deal> deals = DealDAO.GetDeals(page, count);
        List<DealEntity> dealEntities = [];
        foreach (Deal deal in deals)
        {
            dealEntities.Add(ParseProtoEntity.ParseDeal(deal));
        }
        GetDealsResponse dealsEntities = new()
        {
            Deals = { dealEntities }
        };
        return Task.FromResult(dealsEntities);
    }
}
