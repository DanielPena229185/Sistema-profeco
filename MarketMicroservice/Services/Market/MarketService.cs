using System;
using System.Collections.Generic;
using System.Configuration;
using System.Threading.Tasks;
using Grpc.Core;

namespace Market.Services
{
    public class MarketService : Market.MarketBase
    {

        public override Task<GetMarketsByIdsResponse> GetMarketsByIds(GetMarketsByIdsRequest request, ServerCallContext context)
        {
            MarketDAO marketDAO = new();
            Console.WriteLine(request.Query.Fields);
            GetMarketsByIdsQueryDTO query = ParamsQueryToDTO.GetMarketsByIdsQuery(request.Query);
            List<MarketEntity> markets = marketDAO.GetMarketsByIds(query);
            return Task.FromResult(new GetMarketsByIdsResponse
            {
                Markets = { markets }
            });
        }
        
        public override Task<GetAllMarketsResponse> GetAllMarkets(GetAllMarketsRequest request, ServerCallContext context)
        {
            MarketDAO marketDAO = new();
            GetAllMarketsQueryDTO query = ParamsQueryToDTO.GetAllMarketsQuery(request.Query);
            List<MarketEntity> markets = marketDAO.GetAllMarkets(query);
            return Task.FromResult(new GetAllMarketsResponse
            {
                Markets = { markets }
            });
        }

        public override Task<GetMarketByIdResponse> GetMarketById(GetMarketByIdRequest request, ServerCallContext context)
        {
            MarketDAO marketDAO = new();
            GetMarketByIdQueryDTO query = ParamsQueryToDTO.GetMarketByIdQuery(request.Query);
            MarketEntity market = marketDAO.GetMarketById(query);
            return Task.FromResult(new GetMarketByIdResponse
            {
                Market = market
            });
        }

    }

}
