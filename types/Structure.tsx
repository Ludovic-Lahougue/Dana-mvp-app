import { EventType } from "./Event"

export type StructureType = {
    id?: number,
    name?: string,
    category?: string,
    address?: string,
    city?: string,
    postalCode?: string,
    events?: EventType[],
}