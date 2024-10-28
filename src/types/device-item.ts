export interface IBaseItem {
    id: number,
    name: string
}
export interface IDeviceItem {
    id: number,
    name: string,
    nodes: IBaseItem[]
}