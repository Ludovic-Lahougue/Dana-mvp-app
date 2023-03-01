import { categoryEvent, categoryStructure } from "../types/Category";
import { EventType } from "../types/Event";
import { StructureType } from "../types/Structure";
import { UserType } from "../types/User";

import Moment from 'moment';

Moment.locale('fr');

const categoriesEvent: categoryEvent[] = [
    {
        id: 1,
        name: 'Cinéma',
        image: require('../assets/images/cinema.jpg')
    },
    {
        id: 2,
        name: 'Théatre',
        image: require('../assets/images/theater.jpg')
    },
    {
        id: 3,
        name: 'Danse',
        image: require('../assets/images/danse.jpg')
    },
    {
        id: 4,
        name: 'Concert',
        image: require('../assets/images/concert.jpg')
    },
    {
        id: 5,
        name: 'Jeune public',
        image: require('../assets/images/jeune_public.jpg')
    },
    {
        id: 6,
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
        id: 1,
        name: 'Gagarine',
        category: categoriesEvent[0],
        price: 6,
        discount: 4,
        date: Moment(),
        tickets: 2,
        image: require('../assets/images/events/gagarine.jpg'),
        resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus felis vitae nulla consectetur volutpat. Donec vitae urna non nibh lacinia ultrices. Etiam sollicitudin auctor nibh, ac consequat erat. Quisque ut sagittis ante. Morbi aliquam, nulla sed ullamcorper porta, justo erat auctor sapien, non volutpat est tellus vel dui. Phasellus pellentesque lectus ac ex aliquet dictum. Maecenas at tellus vestibulum, ultrices augue a, lacinia nulla. Nam placerat auctor ipsum ac accumsan. In mattis lacus lectus, eu malesuada nunc molestie a. Nunc quis est augue. Quisque consequat massa eget ornare mattis. Aliquam turpis leo, ornare at orci non, malesuada sollicitudin risus. Nulla pulvinar, purus id dapibus efficitur, orci nunc venenatis elit, aliquet suscipit metus nibh in neque. Nulla molestie gravida dui ut tincidunt. "
    },
    {
        id: 2,
        name: 'Fakear + Le Bag',
        category: categoriesEvent[3],
        price: 20,
        discount: null,
        date: Moment(),
        tickets: 6,
        image: require('../assets/images/events/fakear.jpg'),
        resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus felis vitae nulla consectetur volutpat. Donec vitae urna non nibh lacinia ultrices. Etiam sollicitudin auctor nibh, ac consequat erat. Quisque ut sagittis ante. Morbi aliquam, nulla sed ullamcorper porta, justo erat auctor sapien, non volutpat est tellus vel dui. Phasellus pellentesque lectus ac ex aliquet dictum. Maecenas at tellus vestibulum, ultrices augue a, lacinia nulla. Nam placerat auctor ipsum ac accumsan. In mattis lacus lectus, eu malesuada nunc molestie a. Nunc quis est augue. Quisque consequat massa eget ornare mattis. Aliquam turpis leo, ornare at orci non, malesuada sollicitudin risus. Nulla pulvinar, purus id dapibus efficitur, orci nunc venenatis elit, aliquet suscipit metus nibh in neque. Nulla molestie gravida dui ut tincidunt. "
    },
    {
        id: 3,
        name: 'Titre 3',
        category: categoriesEvent[3],
        price: 36,
        discount: 30,
        date: Moment(),
        tickets: 10,
        image: require('../assets/images/events/fakear.jpg'),
        resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus felis vitae nulla consectetur volutpat. Donec vitae urna non nibh lacinia ultrices. Etiam sollicitudin auctor nibh, ac consequat erat. Quisque ut sagittis ante. Morbi aliquam, nulla sed ullamcorper porta, justo erat auctor sapien, non volutpat est tellus vel dui. Phasellus pellentesque lectus ac ex aliquet dictum. Maecenas at tellus vestibulum, ultrices augue a, lacinia nulla. Nam placerat auctor ipsum ac accumsan. In mattis lacus lectus, eu malesuada nunc molestie a. Nunc quis est augue. Quisque consequat massa eget ornare mattis. Aliquam turpis leo, ornare at orci non, malesuada sollicitudin risus. Nulla pulvinar, purus id dapibus efficitur, orci nunc venenatis elit, aliquet suscipit metus nibh in neque. Nulla molestie gravida dui ut tincidunt. "
    },
];

const structures: StructureType[] = [
    {
        id: 1,
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
        id: 2,
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

const user: UserType = {
    id: 1,
    firstname: 'Michel',
    lastname: 'Dupont',
    birthday: '10/06/1963',
    phone: '0672836193',
    email: 'michel@gmail.com',
    password: 'michel',
}

export function nextEventsApi() {
    return events;
}

export function eventsApi() {
    return events;
}

export function ticketsApi() {
    return events;
}

export function structuresApi() {
    return structures;
}

export function categoriesApi() {
    return categoriesEvent;
}

export function getUser() {
    return user;
}