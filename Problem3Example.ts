import { BroadcastTransactionService, TransactionStatusMonitoring } from "./Problem3"

const handleBroadcastTransaction = async (symbol: string, price: number, timestamp: number) => {
  //...
  // Note that method of obtaining parameter can be done other ways
  let hash: string = ""
  try {
    //...
    hash = await BroadcastTransactionService(symbol, price, timestamp)
    //..
  }
  catch {
    //..
    hash = ""
  }
  return hash;
  //...
}

const runTrasactionMonitor = async (hash: string) => {
  const status = await TransactionStatusMonitoring(hash);
  return status
}

const main = async () => {
  //..
  // Transaction logic 
  const CHECK_INTERVAL: number = 10000
  const symbol = "ETH"
  const price = 4500
  const timestamp = 1678912345
  const hash: string = await handleBroadcastTransaction(symbol, price, timestamp);
  setInterval(async () => { console.log(await runTrasactionMonitor(hash)) }, CHECK_INTERVAL)
}



