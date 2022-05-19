import { BigInt } from "@graphprotocol/graph-ts"
import {
  Lend,
  AcceptLoan,
  AdminChanged,
  BeaconUpgraded,
  CancelLoan,
  CreateLoan,
  LiquidateLoan,
  OwnershipTransferred,
  Paused,
  PullAsset,
  RepayLoan,
  Unpaused,
  Upgraded
} from "../generated/Lend/Lend"
import {
  ERC20Token
} from "../generated/ERC20Token/ERC20Token"
import { Loan } from "../generated/schema"

export function handleAcceptLoan(event: AcceptLoan): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let loan_entity = Loan.load(event.params.loanID.toHex());
  if (loan_entity) {
    loan_entity.wvtAmount = event.params.wvtAmount;
    loan_entity.stableCoinAmount = event.params.stableCoinAmount;

    loan_entity.initiationTime = event.params.initiationTime;

    if(loan_entity.stageOfLoan== BigInt.fromI32(1)){
      loan_entity.externalLiquidation = event.params.externalLiquidation;
      loan_entity.lenderAddress = event.transaction.from;
      loan_entity.stageOfLoan = BigInt.fromI32(3);
      loan_entity.description = "Loan accepted by lender"
    }else{
      loan_entity.borrowerAddress = event.transaction.from;
      loan_entity.stageOfLoan = BigInt.fromI32(4);
      loan_entity.endTime = loan_entity.endTime.plus(event.params.initiationTime);
      loan_entity.description = "Loan started"
    }
    loan_entity.save();
  }
  

    

}

export function handleAdminChanged(event: AdminChanged): void {}

export function handleBeaconUpgraded(event: BeaconUpgraded): void {}

export function handleCancelLoan(event: CancelLoan): void {
  let loan_entity = Loan.load(event.params.loanID.toHex());
  if (loan_entity) {
    loan_entity.stageOfLoan = BigInt.fromI32(0);
    loan_entity.description = "Loan Cancelled";
    loan_entity.completedAtTime = event.block.timestamp;
    loan_entity.save();
  }
}

export function handleCreateLoan(event: CreateLoan): void {
  let loan_entity = Loan.load(event.params.loanID.toHex())
  if (!loan_entity) {
    loan_entity = new Loan(event.params.loanID.toHex())
    
    loan_entity.loanID = event.params.loanID;
    loan_entity.wvtAddress = event.params.collateralAddress;
    let _wvtToken = ERC20Token.bind(event.params.collateralAddress);
    loan_entity.wvtDecimal = BigInt.fromI32(_wvtToken.decimals());
    loan_entity.wvtTicker = _wvtToken.symbol();
    loan_entity.stableCoinAddress = event.params.stableCoin;
    let _stableToken = ERC20Token.bind(event.params.stableCoin);
    loan_entity.stableCoinDecimal = BigInt.fromI32(_stableToken.decimals());
    loan_entity.stableCoinTicker = _stableToken.symbol();
    loan_entity.loanToValue = event.params.ltv;
    loan_entity.discount = event.params.discount;
    loan_entity.liquidationThreshold = event.params.lt;
    loan_entity.endTime = event.params.duration;
    loan_entity.initiationTime = BigInt.fromI32(0);
    loan_entity.interestRate = event.params.interestrate;

    if(event.params.borrower){

      loan_entity.stageOfLoan = BigInt.fromI32(1);
      loan_entity.borrowerAddress = event.transaction.from;
      loan_entity.wvtAmount = event.params.amount;
      loan_entity.description = "Created by borrower";


    } else {

      loan_entity.stageOfLoan = BigInt.fromI32(2);
      loan_entity.lenderAddress = event.transaction.from;
      loan_entity.externalLiquidation = event.params.externalLiquidate;
      loan_entity.stableCoinAmount = event.params.amount;
      loan_entity.description = "Created by lender";

    }
  }
  loan_entity.save()

}

export function handleLiquidateLoan(event: LiquidateLoan): void {

  let loan_entity = Loan.load(event.params.loanID.toHex());
  if (loan_entity) {
    loan_entity.stageOfLoan = BigInt.fromI32(6);
    loan_entity.liquidationIntoContractAmt = event.params.stableContractAmount;
    loan_entity.liquidationFromContractToLenderAmt = event.params.stablePushAmount;
    
    if(event.params.stableContractAmount==BigInt.fromI32(0) && event.params.stablePushAmount==BigInt.fromI32(0)){

      loan_entity.description = "Loan liquidated by Lender itself";
    }else{
      loan_entity.description = "Loan liquidated";
    }
    loan_entity.liquidator = event.transaction.from;
    loan_entity.completedAtTime = event.block.timestamp;
    loan_entity.save();

  }

}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handlePullAsset(event: PullAsset): void {
  let loan_entity = Loan.load(event.params.loanID.toHex());
  if (loan_entity) {
    
    
    if(event.params.initiationTime==BigInt.fromI32(0)){
      loan_entity.description = "Assets did not got pulled"
      loan_entity.stageOfLoan = BigInt.fromI32(0);
      loan_entity.completedAtTime = event.block.timestamp;
    }else{
      loan_entity.description = "Loan started"
      loan_entity.stageOfLoan = BigInt.fromI32(4);
      loan_entity.initiationTime = event.params.initiationTime
      loan_entity.endTime = loan_entity.endTime.plus(event.params.initiationTime);

    }
    
    loan_entity.save();
  }

}

export function handleRepayLoan(event: RepayLoan): void {

  let loan_entity = Loan.load(event.params.loanID.toHex());
  if (loan_entity) {
    loan_entity.stageOfLoan = BigInt.fromI32(5);
    loan_entity.description = "Loan repayed";
    loan_entity.completedAtTime = event.block.timestamp;
    loan_entity.save();
  }

}

export function handleUnpaused(event: Unpaused): void {}

export function handleUpgraded(event: Upgraded): void {}