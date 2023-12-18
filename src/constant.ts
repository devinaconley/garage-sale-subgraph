import { BigInt, Address, log, BigDecimal, Bytes, ethereum } from "@graphprotocol/graph-ts"


export const ZERO_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000');
export const ZERO_INT = BigInt.fromI32(0);
export const ZERO_DECIMAL = BigDecimal.fromString('0');

export const ONE_INT = BigInt.fromI32(1);
export const ONE_DECIMAL = BigDecimal.fromString('1.0');

export const OFFER = BigDecimal.fromString('0.000001');
