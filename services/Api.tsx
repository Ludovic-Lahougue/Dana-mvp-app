const events = [
    {
        name: 'Titre 1',
        category: 'Film',
        price: 6,
        discount: 4,
        date: Date(),
        tickets: 2
    },
    {
        name: 'Titre 2',
        category: 'Concert',
        price: 20,
        discount: null,
        date: Date(),
        tickets: 6,
    },
]

export function nextEventsApi() {
    return events;
}

export function structuresApi() {
    return [
        {
            name: 'Structure 1',
            category: 'Cinema',
            address: 'xx rue xxxx xxxx',
            city: 'Caen',
            postalCode: 14000,
            events: [
                events[0]
            ]
        },
        {
            name: 'Structure 2',
            category: 'Salle',
            address: 'xx rue xxxx xxxx',
            city: 'Caen',
            postalCode: 14000,
            events: [
                events[1]
            ]
        },
    ]
}