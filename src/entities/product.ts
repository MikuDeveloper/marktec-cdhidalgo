export interface Product {
  id: string
  entryDate: string
  entryHour: string
  category: string //Celular, smartwatch, tablet, consola, auriculares, laptops, otros.
  brand: string
  IMEI: string
  model: string
  color: string
  storageCapacity?: number | string
  storageUnit?: string
  physicalState: number //1 - 10
  batteryState?: number | string //%
  comments?: string
  location: string //Bodega, local, prestado (cliente y empleado), reparación, Querétaro(empleado), VENDIDO (EXCLUSIVO DE VENTA)
  location_employee?: string
  location_customer?: string
  price: number
  employeeId: string
  urlPhoto1?: string
  urlPhoto2?: string
}
