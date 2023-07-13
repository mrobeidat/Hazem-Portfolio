export default {
    name: 'company',
    title: 'Work',
    type: 'document',
    fields: [
        {   
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',

            options: {
                dateFormat: 'YYYY-MM-DD',
                // timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Today'
            }
        },
        {
            name: 'descripition',
            title: 'Descripition',
            type: 'string'
        },
        
    ]
}