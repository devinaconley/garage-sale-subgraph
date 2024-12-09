# garage-sale-subgraph

subgraph to index garage sale transactions, inventory, and other data

## setup

this project uses node 18, npm, and the graph cli

```
npm install
```

## dev

setup subgraph config and definitions
```
npm run prepare:sepolia
```

generate types and interfaces
```
npm run codegen
```

build subgraph
```
npm run build
```

## deploy

set access token for graph hosted service
```
npx graph auth <access token>
```

deploy to sepolia
```
npm run deploy:sepolia
```
