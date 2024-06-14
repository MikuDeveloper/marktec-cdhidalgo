export interface Product {
  /* Data to be added at the end of the registration */
  id: string
  entryDate: string
  entryHour: string
  employeeId: string // Employee who register the product

  /* Identification data */
  category: string
  brand: string
  imei: string
  model: string
  color: string
  storageCapacity: number
  storageUnit?: string

  /* State of the device */
  physicalState: number
  batteryState: number
  comments: string

  /* About status and price */
  status: string // V for sold, B for cellar, L for local, Q for Queretaro, R for in reparation, P for lent and I for trade.
  lentTo?: string // Person to whom the product was lent
  price: number

  /* Links for photos */
  urlPhoto1?: string
  urlPhoto2?: string
}
