export interface ITours {
    id: number
    name: string
    typeKey: number
    type: string
    partnerKey: number
    partner: string
    gdsTransport: number
    gdsHotel: number
    url: string
    withRegularFreight: number
    nameAlt: string
    typeAlt: string
    partnerAlt: string
    selected: number
    groups: string[]
}