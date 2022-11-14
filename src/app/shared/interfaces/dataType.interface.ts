export interface Model {
    number: number,
    invoiceNumber: number,
    startAndUpdateDate: string,
    additional: AdditionalModel[]
}

export interface AdditionalModel {
    number: number,
    positionNum: number,
    truckNumber: string,
    material: string,
    date: string,
    grossWeight: any,
    tareWeight: number,
    netWeight: number
}