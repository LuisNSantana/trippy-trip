export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'overview', type: 'string', title: 'Overview'},
    {name: 'url', type: 'string', title: 'Url'},
    {name: 'slug', type: 'slug', title: 'Slug', options: {source: 'title'}},
    {name:'image', type: 'image', title: 'Image', options: {hotspot: true}},
    {name:'author', type: 'reference', title: 'Author', to:{type:'author'}},
    {name:'publishedAt', type: 'datetime', title: 'Published at'},
    {
      name: 'content',
      type: 'array',
      title: 'Contenido del evento',
      of: [
        {type: 'block'},
        {type: 'image', fields: [{type: 'text', name: 'alt', title: 'Alternative Text'}]},
      ],
    },
  ],
}