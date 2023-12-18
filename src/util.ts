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
import { ZERO_ADDRESS, ZERO_INT } from "./constant";

export function getProtocol(): Protocol {
  const id = ZERO_ADDRESS.toHexString();
  let protocol = Protocol.load(id);
  if (protocol === null) {
    protocol = new Protocol(id);
    // ...
  }
  return protocol;
}

export function getCollection(addr: Address, type: BigInt): Collection {
  let id = addr.toHexString();
  let collection = Collection.load(id);
  if (collection === null) {
    collection = new Collection(id);
    // ...
  }
  return collection;
}
