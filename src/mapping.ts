import {
  BigInt,
  Address,
  log,
  BigDecimal,
  Bytes,
  ethereum,
  Value,
} from "@graphprotocol/graph-ts";
import { Buy, Sell, TokenUpdated } from "../generated/GarageSale/GarageSale";
import { Protocol, Collection, Bundle } from "../generated/schema";
import {
  ZERO_ADDRESS,
  ZERO_INT,
  ZERO_DECIMAL,
  ONE_INT,
  ONE_DECIMAL,
} from "./constant";
import { getProtocol, getCollection } from "./util";

export function handleTokenUpdated(event: TokenUpdated): void {
  let protocol = getProtocol();
  // ...
}

export function handleSell(event: Sell): void {
  let protocol = getProtocol();
  // ...
}

export function handleBuy(event: Buy): void {
  let protocol = getProtocol();
  // ...
}
