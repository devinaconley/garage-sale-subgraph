import {
  BigInt,
  Address,
  log,
  BigDecimal,
  Bytes,
  ethereum,
} from "@graphprotocol/graph-ts";
import { Collection, Protocol } from "../generated/schema";
import { ERC721 } from "../generated/GarageSale/ERC721";
import { ERC1155 } from "../generated/GarageSale/ERC1155";
import { ZERO_ADDRESS, ZERO_INT, ZERO_DECIMAL } from "./constant";

export function getProtocol(): Protocol {
  const id = ZERO_ADDRESS.toHexString();
  let protocol = Protocol.load(id);
  if (protocol === null) {
    protocol = new Protocol(id);
    protocol.sold = ZERO_INT;
    protocol.bought = ZERO_INT;
    protocol.inventory = ZERO_INT;
    protocol.volume = ZERO_DECIMAL;
    protocol.received = ZERO_DECIMAL;
    protocol.sent = ZERO_DECIMAL;
  }
  return protocol;
}

export function getCollection(addr: Address, type: i32): Collection {
  const id = addr.toHexString();
  let collection = Collection.load(id);
  if (collection === null) {
    collection = new Collection(id);
    collection.name = id.substring(0, 8);

    if (type == 0) {
      collection.type = "Unknown";
    } else if (type == 1) {
      collection.type = "ERC721";
      const res = ERC721.bind(addr).try_name();
      if (!res.reverted) collection.name = res.value;
    } else if (type == 2) {
      collection.type = "ERC1155";
    }
  }
  return collection;
}

export function integerToDecimal(
  value: BigInt,
  decimals: BigInt = BigInt.fromI32(18)
): BigDecimal {
  let denom = BigInt.fromI32(10).pow(decimals.toI32() as u8);
  return value.toBigDecimal().div(denom.toBigDecimal());
}
