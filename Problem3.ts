// For the first requirement
interface BroadcastTransactionServicePayload {
  symbol: string,
  price: number,
  timestamp: number
}
const BroadcastTransactionService = async (symbol: string, price: number, timestamp: number) => {
  const payload: BroadcastTransactionServicePayload = {
    symbol,
    price,
    timestamp
  }
  try {

    const response: any = await fetch(`https://mock-node-wgqbnxruha-as.a.run.app/broadcast`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    const data: any = response.json()["tx_hash"];
    return data

  }
  catch (error) {
    console.error(`An error occured: ${error}`)

  }
}


// Second requirement
const TransactionStatusMonitoring = async (tx_hash: string) => {
  const response: any = await fetch(`https://mock-node-wgqbnxruha-as.a.run.app/check/${tx_hash}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  }
  )
  return response.json()["tx_status"]
}

export {BroadcastTransactionService,TransactionStatusMonitoring}
