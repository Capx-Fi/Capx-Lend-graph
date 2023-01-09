# Capx Lend Subgraph

[Capx Lend](https://test.lend.capx.fi/) is a decentralized ledger that allows individuals to lend or borrow assets. This subgraph dynamically tracks all loans created created by individuals, maintaining the latest state of the loans.
## Example Query
#### Querying Loan Information of Capx Lend subgraph

This query fetches aggregated data from all loans created on the decentralized ledger. 

```graphql
{
    loans {
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
| Lend Subgraph     | https://api.thegraph.com/subgraphs/name/shreyas3336/lend |

#### BSC

| Subgraph     | Query URL  |
|---------------------|--------------------------------------------------------------------|
| Lend Subgraph     | https://api.thegraph.com/subgraphs/name/shreyas3336/lend-bsc |

#### Matic (Polygon)

| Subgraph     | Query URL  |
|---------------------|--------------------------------------------------------------------|
| Lend Subgraph     | https://api.thegraph.com/subgraphs/name/shreyas3336/lend-matic |

#### Avalanche 

| Subgraph     | Query URL  |
|---------------------|--------------------------------------------------------------------|
| Lend Subgraph     | https://api.thegraph.com/subgraphs/name/shreyas3336/lend-avax |


## Contract Addresses

#### Ethereum

| Contract Name     | Contract Address  |
|---------------------|--------------------------------------------------------------------|
| Lend     | [0x309D0Ff4b655bAD183A3FA88A0547b41e877DcF1](https://rinkeby.etherscan.io/address/0x309D0Ff4b655bAD183A3FA88A0547b41e877DcF1) |
| Lend NFT   | [0x3d68F2e795d8DaE5a969906fBe8d9df0498Ffa0f](https://rinkeby.etherscan.io/address/0x3d68F2e795d8DaE5a969906fBe8d9df0498Ffa0f) |

#### BSC

| Contract Name     | Contract Address  |
|---------------------|--------------------------------------------------------------------|
| Lend     | [0x565371357D92d0c27e2ff4F8F49317c69De9dB67](https://bscscan.com/address/0x565371357D92d0c27e2ff4F8F49317c69De9dB67) |
| Lend NFT   | [0x26df9233B3Ef4bcBed0230Eb56eC6E07ac299d18](https://bscscan.com/address/0x26df9233B3Ef4bcBed0230Eb56eC6E07ac299d18) |

#### Matic (Polygon)

| Contract Name     | Contract Address  |
|---------------------|--------------------------------------------------------------------|
| Lend     | [0x1CCAC1f76283B97EcF263255B826ED12604c2461](https://polygonscan.com/address/0x1CCAC1f76283B97EcF263255B826ED12604c2461) |
| Lend NFT   | [0xC13D8CF625EfFdbe762981fD3a3B9c2965747109](https://polygonscan.com/address/0xC13D8CF625EfFdbe762981fD3a3B9c2965747109) |

#### Avalanche 

| Contract Name     | Contract Address  |
|---------------------|--------------------------------------------------------------------|
| Lend     | [0x564Aff2424489E08f5224Cdf24307abA2Ec35653](https://snowtrace.io/address/0x564Aff2424489E08f5224Cdf24307abA2Ec35653) |
| Lend NFT   | [0x18dA3f27Bc13a882455133C0090D1956175317BF](https://snowtrace.io/address/0x18dA3f27Bc13a882455133C0090D1956175317BF) |