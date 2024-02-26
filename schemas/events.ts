export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'overview', type: 'string', title: 'Overview'},
    {name: 'url', type: 'string', title: 'Url'},
    {name: 'slug', type: 'slug', title: 'Slug', options: {source: 'title'}},
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'block'},
        {type: 'image', fields: [{type: 'text', name: 'alt', title: 'Alternative Text'}]},
      ],
    },
  ],
}