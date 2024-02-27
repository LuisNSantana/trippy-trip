export default {
    name:"author",
    title:"Author",
    type:"document",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name",
        },
        {
            name: "bio",
            type: "text",
            title: "Bio",
        },
        {
            name: "image",
            type: "image",
            title: "Image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "twitter",
            type: "url",
            title: "Twitter",
        },
        {
            name: "facebook",
            type: "url",
            title: "Facebook",
        },
        {
            name: "instagram",
            type: "url",
            title: "Instagram",
        },
       
    ]
}