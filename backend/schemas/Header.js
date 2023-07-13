import {CalendarIcon} from '@sanity/icons'


export default
    {
        name: 'Header',
        title: 'Header',
        type: 'document',
        icon: CalendarIcon,
        fields: [
            {
                name: 'name',
                title: 'Name',
                type: 'string',
               
            },
            {
                name: 'imgUrl',
                title: 'imageurl',
                type: 'image',
                options: {
                    hotspot: true   // <-- Defaults to false
                }
            },
        ]
    }