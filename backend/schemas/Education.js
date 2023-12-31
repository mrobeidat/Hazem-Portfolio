import {BookIcon} from '@sanity/icons'

export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    icon : BookIcon, 
    fields: [
        {
            name: 'institution',
            title: 'Institution',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',

            options: {
                dateFormat: 'YYYY',
                timeStep: 15,
                calendarTodayLabel: 'Today'

            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        
    ]
}