import { categoryEvent } from "./Category";

export type EventType = {
    id?: number,
    name?: string,
    category: categoryEvent,
    price?: number,
    discount?: number|null,
    date?: string,
    tickets?: number,
    image?: any,
}