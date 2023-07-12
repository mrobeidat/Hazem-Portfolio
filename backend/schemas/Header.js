export default
    {
        name: 'Header',
        title: 'Header',
        type: 'document',
        fields: [
            {
                name: 'name',
                title: 'Name',
                type: 'string'
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