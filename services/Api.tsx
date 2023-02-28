import { categoryEvent, categoryStructure } from "../types/Category";
import { EventType } from "../types/Event";
import { StructureType } from "../types/Structure";

const categoriesEvent: categoryEvent[] = [
    {
        name: 'Cinéma',
        image: require('../assets/images/cinema.jpg')
    },
    {
        name: 'Théatre',
        image: require('../assets/images/theater.jpg')
    },
    {
        name: 'Danse',
        image: require('../assets/images/danse.jpg')
    },
    {
        name: 'Concert',
        image: require('../assets/images/concert.jpg')
    },
    {
        name: 'Jeune public',
        image: require('../assets/images/jeune_public.jpg')
    },
    {
        name: 'Atelier',
        image: require('../assets/images/workshop.jpg')
    },
];

const categoriesStructure: categoryStructure[] = [
    {
        name:'Cinéma',
    },
    {
        name:'Salle',
    },
    {
        name:'Musée',
    },
    {
        name:'Convert',
    },
    {
        name:'Jeune public',
    },
    {
        name:'Atelier',
    },
];

const events: EventType[] = [
    {
        name: 'Gagarine',
        category: categoriesEvent[0],
        price: 6,
        discount: 4,
        date: Date(),
        tickets: 2,
        image: require('../assets/images/events/gagarine.jpg')
    },
    {
        name: 'Fakear + Le Bag',
        category: categoriesEvent[3],
        price: 20,
        discount: null,
        date: Date(),
        tickets: 6,
        image: require('../assets/images/events/fakear.jpg')
    },
    {
        name: 'Titre 3',
        category: categoriesEvent[3],
        price: 36,
        discount: 30,
        date: Date(),
        tickets: 10,
        image: require('../assets/images/events/fakear.jpg')
    },
];

const structures: StructureType[] = [
    {
        name: 'Structure 1',
        category: categoriesStructure[0],
        address: 'xx rue xxxx xxxx',
        city: 'Caen',
        postalCode: '14000',
        events: [
            events[0]
        ],
        image: require('../assets/images/structures/lux.jpg')
    },
    {
        name: 'Structure 2',
        category: categoriesStructure[1],
        address: 'xx rue xxxx xxxx',
        city: 'Caen',
        postalCode: '14000',
        events: [
            events[1]
        ],
        image: require('../assets/images/structures/cargo.jpg')
    },
];

export function nextEventsApi() {
    return events;
}

export function eventsApi() {
    return events;
}

export function structuresApi() {
    return structures;
}

export function categoriesApi() {
    return categoriesEvent;
}