import React, { createContext, useContext, useState } from 'react'

type PaymentCtxValues = {
  totalOrder: number,
  handleSetTotalAmounts: (amount: number) => void
}

type PaymentContextProps = {
  children: React.ReactNode
}

export const PaymentCtx = createContext<PaymentCtxValues>({
  totalOrder: 0,
  handleSetTotalAmounts: () => { throw Error("Function not initialized!") }
})

export const PaymentContext: React.FC<PaymentContextProps> = ({ children }) => {
  const [total, setTotal] = useState(0)

  const handleSetTotalAmounts = (amount: number) => setTotal(amount)
  const valuesSet: PaymentCtxValues = {
    totalOrder: total,
    handleSetTotalAmounts
  }

  return (
    <PaymentCtx.Provider value={valuesSet}>
      {children}
    </PaymentCtx.Provider>
  )
}

export const usePayMentContext = () => useContext(PaymentCtx)
