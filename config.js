var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoiY29kZWZvcmFmcmljYSIsImEiOiJzbUlkVDRNIn0.JUlW50UqJRZ3em2BKUBJIg',
    showMarkers: true,
    theme: 'dark',
    alignment: 'right',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'phl',
            title: 'Howlwadaag, Mogadishu',
            image: '',
            description: 'Shukri was born in Mogadishu, and spent the early part of her life in a bustling family home at the heart of many far-reaching networks, with goods flowing in and out from Europe to Puntland. She lived with her parents, siblings, grandmother and one maternal aunt, but many people would come in and out. Her uncle played a key role in supporting her and the family. She attended a local school.',
            

            location: {
                center: { lon: 45.34248, lat: 2.04092 },
                zoom: 12.35,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bike-lanes',
            title: 'Galkayo',
            image: '',
            description: 'Her father is ethnically from Galkayo, so there are many relatives and cousins in Puntland they they provide support to.',
            location: {
                center: { lon: 47.43051, lat: 6.77001 },
                zoom: 13.22,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'indego',
            title: 'London, UK',
            image: '',
            description: 'She has cousins and uncles studying and working in London, who would visit the family home in Mogadishu for celebrations such as Ramadan and Eid, bringing gifts.',
            location: {
                center: { lon: -0.12751, lat: 51.48521 },
                zoom: 4.27,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'belmont',
            title: 'Mogadishu, Villa Somalia',
            image: '',
            description: 'Her father\'s work colleagues were an important professional network for him, and an important social network for the family as a whole, helping get access to imported goods.',
            location: {
                center: [45.336796, 2.041129],
                zoom: 14.99,
                pitch: 44.00,
                bearing: -40.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wiss',
            title: 'Garsoor, Galkayo',
            image: '',
            description: 'Shukri is living with her family in Galkayo, away from the fighting further South. Together with her father, mother and siblings they have a relatively good life. The family starts a small business near the family house - a grocery shop.',
            location: {
                center: [47.423572, 6.768054],
                zoom: 13.08,
                pitch: 47.50,
                bearing: 32.80
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pennypack',
            title: 'Mogadishu',
            image: '',
            description: 'Many of Shukri\'s paternal relatives remain in Mogadishu but continue to have close connections with the family in Galkayo, as well as with other parts of the region. They continue to provide financial and material support. ',
            location: {
                center: [45.336796, 2.041129],
                zoom: 13.73,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        },
        {
            id: 'mog',
            title: 'Mogadishu',
            image: '',
            description: 'Many of Shukri\'s paternal relatives remain in Mogadishu but continue to have close connections with the family in Galkayo, as well as with other parts of the region. They continue to provide financial and material support. ',
            location: {
                center: { lon: 12.53044, lat: 41.99854 },
                zoom: 4.9,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        }
    ]
};
