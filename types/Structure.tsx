import { categoryStructure } from "./Category"
import { EventType } from "./Event"

export type StructureType = {
    id?: number,
    name?: string,
    category: categoryStructure,
    address?: string,
    city?: string,
    postalCode?: string,
    events?: EventType[],
    image?: any,
}