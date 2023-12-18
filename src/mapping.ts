import { Address, BigInt, BigDecimal, log } from "@graphprotocol/graph-ts";
import {
  Buy,
  Sell,
  TokenUpdated,
  GarageSale,
} from "../generated/GarageSale/GarageSale";
import { Protocol, Collection, Bundle } from "../generated/schema";
import { ONE_INT, ONE_DECIMAL, OFFER } from "./constant";
import { getProtocol, getCollection, integerToDecimal } from "./util";

export function handleTokenUpdated(event: TokenUpdated): void {
  let protocol = getProtocol();
  let collection = getCollection(event.params.token, event.params.type_);
  protocol.save();
  collection.save();
}

export function handleSell(event: Sell): void {
  let protocol = getProtocol();
  let gs = GarageSale.bind(event.address);

  protocol.sold = protocol.sold.plus(ONE_INT);
  protocol.sent = protocol.sent.plus(OFFER);
  protocol.inventory = gs.inventorySize();

  protocol.save();
}

export function handleBuy(event: Buy): void {
  let protocol = getProtocol();
  let gs = GarageSale.bind(event.address);

  protocol.bought = protocol.bought.plus(ONE_INT);
  const val = integerToDecimal(event.transaction.value);
  protocol.received = protocol.received.plus(val);
  protocol.inventory = gs.inventorySize();

  const start = gs.start();
  let bundle = new Bundle(start.toString());
  bundle.auction = start;
  bundle.buyer = event.params.buyer.toHexString();
  bundle.price = val;

  protocol.save();
  bundle.save();
}
