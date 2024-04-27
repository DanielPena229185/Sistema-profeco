namespace DealService;

public interface IDeal
{
    void Attach(IDealObserver observer);
    void Detach(IDealObserver observer);
}
