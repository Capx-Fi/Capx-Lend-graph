# Capx Lend Subgraph

[Capx Lend](https://test.lend.capx.fi/) is a decentralized ledger that allows individuals to lend or borrow assets. This subgraph dynamically tracks all loans created created by individuals, maintaining the latest state of the loans.
## Example Query
#### Querying Loan Information of Capx Lend subgraph

This query fetches aggregated data from all loans created on the platform. 

```graphql
{
    loanEntities {
        id
        loanID
        wvtAddress
        wvtDecimal
        wvtAmount
        wvtTicker
        stableCoinAddress
        stableCoinDecimal
        stableCoinAmount
        stableCoinTicker
        loanToValue
        discount
        liquidationThreshold
        endTime
        initiationTime
        interestRate
        externalLiquidation
        stageOfLoan
        description
        liquidationIntoContractAmt
        liquidationFromContractToLenderAmt
        borrowerAddress
        lenderAddress
        liquidator
        completedAtTime
    }
}
```
## Query URLs

#### Ethereum

| Subgraph     | Query URL  |
|---------------------|--------------------------------------------------------------------|
| Master Subgraph     | https://api.thegraph.com/subgraphs/name/shreyas3336/lend |