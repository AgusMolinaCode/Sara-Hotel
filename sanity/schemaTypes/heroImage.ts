// heroImage.ts
export default {
  title: 'Poster',
  name: 'poster',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: 'Alt',
      name: 'alt',
      type: 'string',
    },
  ],
}
