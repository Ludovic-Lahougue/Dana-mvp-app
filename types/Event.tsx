import { categoryEvent } from "./Category";

export type EventType = {
    id?: number,
    name?: string,
    category: categoryEvent,
    price?: number,
    discount?: number|null,
    date?: any,
    tickets?: number,
    image?: any,
    resume?: string,
}