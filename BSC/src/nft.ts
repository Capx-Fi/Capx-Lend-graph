import { BigInt } from "@graphprotocol/graph-ts"
import {
  LendNFT,
  AdminChanged,
  Approval,
  ApprovalForAll,
  BeaconUpgraded,
  OwnershipTransferred,
  Transfer,
  Upgraded
} from "../generated/LendNFT/LendNFT"
import { NFT } from "../generated/schema"

export function handleAdminChanged(event: AdminChanged): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.balanceOf(...)
  // - contract.controller(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.proxiableUUID(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleBeaconUpgraded(event: BeaconUpgraded): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {

  let entity = NFT.load(event.params.tokenId.toHex());
  if (!entity) {
    entity = new NFT(event.params.tokenId.toHex());
    entity.tokenId = event.params.tokenId;
    // Entity fields can be set using simple assignments
    entity.owner = event.params.to;
  } else{
    entity.owner = event.params.to;
  }
  entity.save();
}

export function handleUpgraded(event: Upgraded): void {}