import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {// Blog Posts Collection
        label: "Blog posts",
        name: "blog_posts",
        path: "content/blog",
        format: "md",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {// Sculptures Collection
        label: "Sculptures",
        name: "sculptures",
        path: "content/gallery",
        format: "md",
        templates: [
          {// gallery index page
            name: "index_page",
            label: "Index Page",
            fields: [
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
              },
              {
                name: "subtitle",
                label: "Sub-Title",
                type: "string",
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "date",
                label: "Date",
                type: "datetime",
                required: true,
                ui: {
                  dateFormat: 'DD/MM/YYYY',
                  parse: (val)=>{ val.utc(true); return val.toISOString(); }
                }
              },
              {
                name: "hero_media",
                label: "Hero Media",
                type: "string"
              },
              {
                name: "content",
                label: "Content",
                type: "object",
                fields: [
                  {
                    name: "count",
                    label: "Count",
                    type: "number"
                  },
                  {
                    name: "offset",
                    label: "Offset",
                    type: "number"
                  },
                  {
                    name: "order",
                    Label: "Order",
                    type: "string",
                    options: [
                      {
                        value: "asc",
                        label: "Ascending"
                      },
                      {
                        value: "desc",
                        label: "Descending"
                      }
                    ]
                  },
                  {
                    name: "page_type",
                    label: "Page Type",
                    type: "string"
                  },
                  {
                    name: "filter_button",
                    label: "Filter Button",
                    type: "object",
                    list: true,
                    fields: [
                      {
                        name: "name",
                        label: "Name",
                        type: "string",
                        required: true
                      },
                      {
                        name: "tag",
                        label: "Tag",
                        type: "string",
                        required: true
                      }
                    ]
                  }
                ]
              },
              {
                name: "cta",
                label: "Call to Action",
                type: "object",
                fields: [
                  {
                    name: "url",
                    label: "URL",
                    type: "string"
                  },
                  {
                    name: "label",
                    label: "Label",
                    type: "string"
                  },
                  {
                    name: "icon_pack",
                    label: "Icon Pack",
                    type: "string",
                    options: [
                      {
                        value: "fa", label: "fa"
                      },
                      {
                        value: "fas", label: "fas"
                      },
                      {
                        value: "fab", label: "fab"
                      },
                      {
                        value: "ai", label: "ai"
                      }
                    ]
                  },
                  {
                    name: "icon",
                    label: "Icon",
                    type: "string"
                  }
                ]
              },
              {
                name: "cta_alt",
                label: "CTA ALT",
                type: "object",
                fields: [
                  {
                    name: "url",
                    label: "URL",
                    type: "string"
                  },
                  {
                    name: "label",
                    label: "Label",
                    type: "string"
                  }
                ]
              },
              {
                name: "cta_note",
                label: "CTA Note",
                type: "object",
                fields: [
                  {
                    name: "label",
                    label: "Label",
                    type: "string"
                  }
                ]
              },
              {
                name: "design",
                label: "Design",
                type: "object",
                fields: [
                  {
                    name: "view",
                    label: "View",
                    type: "number"
                  },
                  {
                    name: "background",
                    label: "Background",
                    type: "object",
                    fields: [
                      {
                        name: "color",
                        label: "Colour",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_start",
                        label: "Gradient Start",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_end",
                        label: "Gradient End",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "image",
                        label: "Image",
                        type: "string"
                      },
                      {
                        name: "image_darken",
                        label: "Image Darken",
                        type: "number",
                        description: "Darken the image? Range 0-1 where 0 is transparent and 1 is opaque, in steps of 0.1"
                      },
                      {
                        name: "image_size",
                        label: "Image Size",
                        type: "string",
                        options: [
                          {
                            value: "cover", label: "cover"
                          },
                          {
                            value: "contain", label: "contain"
                          },
                          {
                            value: "actual", label: "actual"
                          }
                        ]
                      },
                      {
                        name: "image_position",
                        label: "Image Position",
                        type: "string",
                        options: [
                          {
                            value: "left", label: "left"
                          },
                          {
                            value: "center", label: "center"
                          },
                          {
                            value: "right", label: "right"
                          }
                        ]
                      },
                      {
                        name: "image_parallax",
                        label: "Image Parallax",
                        type: "boolean"
                      },
                      {
                        name: "image_min_height",
                        label: "Image Min Height",
                        type: "string"
                      },
                      {
                        name: "text_color_light",
                        label: "Text Colour Light",
                        type: "boolean"
                      }
                    ]
                  },
                ]
              },
              {
                name: "header",
                label: "Header",
                type: "object",
                fields: [
                  {
                    name: "caption",
                    label: "Caption",
                    type: "string",
                  },
                  {
                    name: "image",
                    label: "Image",
                    type: "string"
                  }
                ]
              },
              {
                name: "image",
                label: "Image",
                type: "object",
                fields: [
                  {
                    name: "caption",
                    label: "Caption",
                    type: "string"
                  },
                  {
                    name: "placement",
                    label: "Placement",
                    type: "number"
                  }
                ]
              },
              {
                label: "Body",
                name: "body",
                isBody: true,
                type: "rich-text"
              }
            ]
          },
          {// sculpture page
            name: "sculpture",
            label: "Sculpture",
            fields: [
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
              },
              {
                name: "summary",
                label: "Summary",
                type: "string",
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "date",
                label: "Date",
                type: "datetime",
                required: true,
                ui: {
                  dateFormat: 'DD/MM/YYYY',
                  parse: (val)=>{ val.utc(true); return val.toISOString(); }
                }
              },
              {
                name: "type",
                label: "Type",
                type: "string"
              },
              {
                name: "weight",
                label: "Weight",
                type: "number",
                required: true
              },
              {
                name: "featured",
                label: "Featured",
                type: "boolean"
              },
              {
                name: "tags",
                label: "Tags",
                type: "string",
                list: true
              },
              {
                name: "share",
                label: "Share",
                type: "boolean"
              },
              {
                name: "commentable",
                label: "Commentable",
                type: "boolean"
              },
              {
                name: "editable",
                label: "Editable",
                type: "boolean"
              },
              {
                name: "image",
                label: "Image",
                type: "object",
                fields: [
                  {
                    name: "caption",
                    label: "Caption",
                    type: "string"
                  },
                  {
                    name: "focal_point",
                    label: "Focal Point",
                    type: "string"
                  },
                  {
                    name: "name",
                    label: "Name",
                    type: "string",
                    required: true
                  },
                  {
                    name: "preview_only",
                    label: "Preview Only",
                    type: "boolean"
                  }
                ]
              },
              {
                label: "Body",
                name: "body",
                isBody: true,
                type: "rich-text"
              }
            ]
          }
        ],
      },
      {// Workshops Collection
        label: "Workshops",
        name: "workshops",
        path: "content/workshops",
        format: "md",
        templates: [
          {// workshops index page
            name: "index_page",
            label: "Index Page",
            fields: [
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
              },
              {
                name: "subtitle",
                label: "Sub-Title",
                type: "string",
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "date",
                label: "Date",
                type: "datetime",
                required: true,
                ui: {
                  dateFormat: 'DD/MM/YYYY',
                  parse: (val)=>{ val.utc(true); return val.toISOString(); }
                }
              },
              {
                name: "hero_media",
                label: "Hero Media",
                type: "string"
              },
              {
                name: "content",
                label: "Content",
                type: "object",
                fields: [
                  {
                    name: "count",
                    label: "Count",
                    type: "number"
                  },
                  {
                    name: "offset",
                    label: "Offset",
                    type: "number"
                  },
                  {
                    name: "order",
                    Label: "Order",
                    type: "string",
                    options: [
                      {
                        value: "asc",
                        label: "Ascending"
                      },
                      {
                        value: "desc",
                        label: "Descending"
                      }
                    ]
                  },
                  {
                    name: "filter_button",
                    label: "Filter Button",
                    type: "object",
                    list: true,
                    fields: [
                      {
                        name: "name",
                        label: "Name",
                        type: "string",
                        required: true
                      },
                      {
                        name: "tag",
                        label: "Tag",
                        type: "string",
                        required: true
                      }
                    ]
                  },
                  {
                    name: "filters",
                    label: "Filters",
                    type: "object",
                    fields: [
                      {
                        name: "category",
                        label: "Category",
                        type: "string"
                      },
                      {
                        name: "exclude_featured",
                        label: "Exclude Featured Workshops",
                        type: "boolean"
                      },
                      {
                        name: "exclude_future",
                        label: "Exclude workshops dated in the future",
                        type: "boolean"
                      },
                      {
                        name: "exclude_past",
                        label: "Exclude workshops from the past",
                        type: "boolean"
                      },
                      {
                        name: "filter_default",
                        label: "Show how many?",
                        type: "number",
                        description: "0 (zero) means show them all"
                      },
                      {
                        name: "tag",
                        label: "Filter by a Tag",
                        type: "string"
                      }
                    ]
                  }
                ]
              },
              {
                name: "cta",
                label: "Call to Action",
                type: "object",
                fields: [
                  {
                    name: "url",
                    label: "URL",
                    type: "string"
                  },
                  {
                    name: "label",
                    label: "Label",
                    type: "string"
                  },
                  {
                    name: "icon_pack",
                    label: "Icon Pack",
                    type: "string",
                    options: [
                      {
                        value: "fa", label: "fa"
                      },
                      {
                        value: "fas", label: "fas"
                      },
                      {
                        value: "fab", label: "fab"
                      },
                      {
                        value: "ai", label: "ai"
                      }
                    ]
                  },
                  {
                    name: "icon",
                    label: "Icon",
                    type: "string"
                  }
                ]
              },
              {
                name: "cta_alt",
                label: "CTA ALT",
                type: "object",
                fields: [
                  {
                    name: "url",
                    label: "URL",
                    type: "string"
                  },
                  {
                    name: "label",
                    label: "Label",
                    type: "string"
                  }
                ]
              },
              {
                name: "cta_note",
                label: "CTA Note",
                type: "object",
                fields: [
                  {
                    name: "label",
                    label: "Label",
                    type: "string"
                  }
                ]
              },
              {
                name: "design",
                label: "Design",
                type: "object",
                fields: [
                  {
                    name: "view",
                    label: "View",
                    type: "number"
                  },
                  {
                    name: "background",
                    label: "Background",
                    type: "object",
                    fields: [
                      {
                        name: "color",
                        label: "Colour",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_start",
                        label: "Gradient Start",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_end",
                        label: "Gradient End",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "image",
                        label: "Image",
                        type: "string"
                      },
                      {
                        name: "image_darken",
                        label: "Image Darken",
                        type: "number",
                        description: "Darken the image? Range 0-1 where 0 is transparent and 1 is opaque, in steps of 0.1"
                      },
                      {
                        name: "image_size",
                        label: "Image Size",
                        type: "string",
                        options: [
                          {
                            value: "cover", label: "cover"
                          },
                          {
                            value: "contain", label: "contain"
                          },
                          {
                            value: "actual", label: "actual"
                          }
                        ]
                      },
                      {
                        name: "image_position",
                        label: "Image Position",
                        type: "string",
                        options: [
                          {
                            value: "left", label: "left"
                          },
                          {
                            value: "center", label: "center"
                          },
                          {
                            value: "right", label: "right"
                          }
                        ]
                      },
                      {
                        name: "image_parallax",
                        label: "Image Parallax",
                        type: "boolean"
                      },
                      {
                        name: "image_min_height",
                        label: "Image Min Height",
                        type: "string"
                      },
                      {
                        name: "text_color_light",
                        label: "Text Colour Light",
                        type: "boolean"
                      }
                    ]
                  },
                ]
              },
              {
                name: "header",
                label: "Header",
                type: "object",
                fields: [
                  {
                    name: "caption",
                    label: "Caption",
                    type: "string",
                  },
                  {
                    name: "image",
                    label: "Image",
                    type: "string"
                  }
                ]
              },
              {
                name: "image",
                label: "Image",
                type: "object",
                fields: [
                  {
                    name: "caption",
                    label: "Caption",
                    type: "string"
                  },
                  {
                    name: "placement",
                    label: "Placement",
                    type: "number"
                  }
                ]
              },
              {
                label: "Body",
                name: "body",
                isBody: true,
                type: "rich-text"
              }
            ]
          },
          {// workshop
            name: "workshop",
            label: "Workshop",
            fields: [
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
              },
              {
                name: "subtitle",
                label: "Sub-Title",
                type: "string",
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "summary",
                label: "Summary",
                type: "string",
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "date",
                label: "Date",
                type: "datetime",
                required: true,
                description: "The date on which the workshop will be held",
                ui: {
                  dateFormat: 'DD/MM/YYYY',
                  parse: (val)=>{ val.utc(true); return val.toISOString(); }
                }
              },
              {
                name: "endDate",
                label: "End Date",
                type: "datetime",
                required: false,
                description: "Leave blank unless this is a multi-day course",
                ui: {
                  dateFormat: 'DD/MM/YYYY',
                  parse: (val)=>{ val.utc(true); return val.toISOString(); }
                }
              },
              {
                name: "publishDate",
                label: "Publish Date",
                type: "datetime",
                required: true,
                description: "the date the workshop should be publicised",
                ui: {
                  dateFormat: 'DD/MM/YYYY',
                  parse: (val)=>{ val.utc(true); return val.toISOString(); }
                }
              },
              {
                name: "cancelled",
                label: "Cancelled",
                type: "boolean",
                description: "Has this workshop been cancelled?"
              },
              {
                name: "cancellation_text",
                label: "Cancellation Text",
                type: "string",
                description: "A message about the cancellation"
              },
              {
                name: "hidePrice",
                label: "Hide Price Display",
                type: "boolean"
              },
              {
                name: "price",
                label: "Price",
                type: "number",
                description: "The price of the workshop"
              },
              {
                name: "deposit",
                label: "Deposit",
                type: "number",
                description: "The amount of deposit required"
              },
              {
                name: "hidePlaces",
                label: "Hide Place Display",
                type: "boolean"
              },
              {
                name: "places",
                label: "Places",
                type: "number",
                description: "The number of available places on the workshop"
              },
              {
                name: "venue",
                label: "Venue",
                type: "string",
                options:[
                  { value: "CPAC", label: "Castle Park" },
                  { value: "ZANTIUM", label: "Zantium" },
                  { value: "BODFARI", label: "Bodfari" }
                ]
              },
              {
                name: "image",
                label: "Image",
                type: "object",
                fields: [
                  {
                    name: "name",
                    label: "Name",
                    type: "string"
                  },
                  {
                    name: "caption",
                    label: "Caption",
                    type: "string"
                  },
                  {
                    name: "focal_point",
                    label: "Focal Point",
                    type: "string",
                    options: [
                      { value: "Smart", label: "Smart" },
                      { value: "Center", label: "Center" },
                      { value: "TopLeft", label: "Top Left" },
                      { value: "Top", label: "Top" },
                      { value: "TopRight", label: "Top Right" },
                      { value: "Left", label: "Left" },
                      { value: "Right", label: "Right" },
                      { value: "BottomLeft", label: "Bottom Left" },
                      { value: "Bottom", label: "Bottom" },
                      { value: "BottomRight", label: "Bottom Right" }
                    ]
                  },
                  {
                    name: "preview_only",
                    label: "Preview Only",
                    type: "boolean"
                  }
                ]
              },
              {
                name: "featured",
                label: "Featured",
                type: "boolean",
                description: "You can filter by featured content on your homepage"
              },
              {
                name: "share",
                label: "Share",
                type: "boolean"
              },
              {
                name: "commentable",
                label: "Commentable",
                type: "boolean"
              },
              {
                name: "editable",
                label: "Editable",
                type: "boolean"
              },
              {
                label: "Body",
                name: "body",
                isBody: true,
                type: "rich-text"
              }
            ]
          }        ],
      },
      {// About Me Collection
        label: "About me",
        name: "about_me",
        path: "content/about-me",
        format: "md",
        templates: [
          {// about_me_page
            name: "about_me_page",
            label: "About Me",
            fields: [
              {
                name: "name",
                label: "Name",
                type: "string",
                required: true,
              },
              {
                name: "featured",
                label: "Featured",
                type: "boolean"
              },
              {
                name: "date",
                label: "Date",
                type: "datetime",
                required: true,
                ui: {
                  dateFormat: 'DD/MM/YYYY',
                  parse: (val)=>{ val.utc(true); return val.toISOString(); }
                }
              },
              {
                name: "role",
                label: "Role",
                type: "string",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "bio",
                label: "Bio",
                type: "rich-text",
                description: "A short bio displyed in user profile at end of posts. Between 10 and 700 characters long.",
              },
              {
                name: "organizations",
                label: "Organizations",
                type: "object",
                list: true,
                fields: [
                  {
                    name: "name",
                    label: "Name",
                    type: "string",
                    required: true
                  },
                  {
                    name: "url",
                    label : "URL",
                    type: "string",
                    required: true
                  }
                ]
              },
              {
                name: "interests",
                label: "Interests",
                type: "string",
                list: true
              },
              {
                name: "education",
                label: "Education",
                type: "object",
                fields: [
                  {
                    name: "courses",
                    label: "Courses",
                    type: "object",
                    list: true,
                    fields: [
                      {
                        name: "course",
                        label: "Course",
                        type: "string",
                        required: true
                      },
                      {
                        name: "institution",
                        label: "Instritution",
                        type: "string",
                        required: true
                      },
                      {
                        name: "year",
                        label: "Year",
                        type: "number",
                        required: true
                      }
                    ]
                  }
                ]
              },
              {
                name: "social",
                label: "Social Media",
                type: "object",
                list: true,
                fields: [
                  {
                    name: "icon",
                    label: "Icon",
                    type: "string",
                    description: "Which icon?",
                    options: [
                      { value: "envelope", label: "envelope" },
                      { value: "phone", label: "phone" },
                      { value: "twitter", label: "twitter" },
                      { value: "facebook", label: "facebook" },
                      { value: "instagram", label: "instagram" },
                      { value: "cv", label: "cv" }
                    ]
                  },
                  {
                    name: "icon_pack",
                    label: "Icon Pack",
                    type: "string",
                    description: "From which Font Awesome set?",
                    options: [
                      { value: "fas", label: "fas" },
                      { value: "fab", label: "fab" },
                      { value: "ai", label: "ai" },
                      { value: "far", label: "far" },                      
                    ]
                  },
                  {
                    name: "link",
                    label: "Link",
                    type: "string"
                  }
                ]
              },
              {
                name: "email",
                label: "Email",
                type: "string",
                description: "Enter email to display Gravatar (if Gravatar enabled in Config)"
              },
              {
                name: "user_groups",
                label: "User Groups",
                type: "string",
                list: true
              },
              {
                name: "share",
                label: "Share",
                type: "boolean"
              },
              {
                name: "commentable",
                label: "Commentable",
                type: "boolean"
              },
              {
                name: "editable",
                label: "Editable",
                type: "boolean"
              },
              {
                name: "body",
                label: "Body",
                type: "rich-text",
                isBody: true
              }
            ]
          },
          {// page
            name: "page",
            label: "Page",
            fields: [
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
              },
              {
                name: "subtitle",
                label: "Sub-Title",
                type: "string",
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "summary",
                label: "Summary",
                type: "string",
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "featured",
                label: "Featured",
                type: "boolean"
              },
              {
                name: "date",
                label: "Date",
                type: "datetime",
                required: true,
                ui: {
                  dateFormat: 'DD/MM/YYYY',
                  parse: (val)=>{ val.utc(true); return val.toISOString(); }
                }
              },
              {
                name: "authors",
                label: "Authors",
                type: "string",
                list: true,
              },
              {
                name: "categories",
                label: "Categories",
                type: "string",
                list: true
              },
              {
                name: "tags",
                label: "Tags",
                type: "string",
                list: true
              },
              {
                name: "share",
                label: "Share",
                type: "boolean"
              },
              {
                name: "commentable",
                label: "Commentable",
                type: "boolean"
              },
              {
                name: "editable",
                label: "Editable",
                type: "boolean"
              },
              {
                name: "header",
                label: "Header",
                type: "object",
                fields: [
                  {
                    name: "caption",
                    label: "Caption",
                    type: "string"
                  },
                  {
                    name: "image",
                    label: "Image",
                    type: "string"
                  }
                ]
              },
              {
                name: "design",
                label: "Design",
                type: "object",
                fields: [
                  {
                    name: "background",
                    label: "Background",
                    type: "object",
                    fields: [
                      {
                        name: "image_darken",
                        label: "Image Darken",
                        type: "number"
                      },
                      { 
                        name: "image_min_height",
                        label: "Image Minumum Height",
                        type: "string"
                      }
                    ]
                  }
                ]
              },
              {
                name: "body",
                label: "Body",
                type: "rich-text",
                isBody: true
              }
            ]
          }
        ],
      },
      {// Schools Collection
        label: "Schools",
        name: "schools",
        path: "content/schools",
        format: "md",
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "subtitle",
            label: "Sub-Title",
            type: "string",
            ui: {
              component: "textarea"
            }
          },
          {
            name: "summary",
            label: "Summary",
            type: "string",
            ui: {
              component: "textarea"
            }
          },
          {
            name: "featured",
            label: "Featured",
            type: "boolean"
          },
          {
            name: "date",
            label: "Date",
            type: "datetime",
            required: true,
            ui: {
              dateFormat: 'DD/MM/YYYY',
              parse: (val)=>{ val.utc(true); return val.toISOString(); }
            }
          },
          {
            name: "authors",
            label: "Authors",
            type: "string",
            list: true,
          },
          {
            name: "categories",
            label: "Categories",
            type: "string",
            list: true
          },
          {
            name: "tags",
            label: "Tags",
            type: "string",
            list: true
          },
          {
            name: "share",
            label: "Share",
            type: "boolean"
          },
          {
            name: "commentable",
            label: "Commentable",
            type: "boolean"
          },
          {
            name: "editable",
            label: "Editable",
            type: "boolean"
          },
          {
            name: "header",
            label: "Header",
            type: "object",
            fields: [
              {
                name: "caption",
                label: "Caption",
                type: "string"
              },
              {
                name: "image",
                label: "Image",
                type: "string"
              }
            ]
          },
          {
            name: "design",
            label: "Design",
            type: "object",
            fields: [
              {
                name: "background",
                label: "Background",
                type: "object",
                fields: [
                  {
                    name: "image",
                    label: "Image",
                    type: "string"
                  },
                  {
                    name: "image_darken",
                    label: "Image Darken",
                    type: "number",
                    description: "Darken the image? Range 0-1 where 0 is transparent and 1 is opaque, in steps of 0.1"
                  },
                  {
                    name: "image_size",
                    label: "Image Size",
                    type: "string",
                    options: [
                      {
                        value: "cover", label: "cover"
                      },
                      {
                        value: "contain", label: "contain"
                      },
                      {
                        value: "actual", label: "actual"
                      }
                    ]
                  },
                  {
                    name: "image_position",
                    label: "Image Position",
                    type: "string",
                    options: [
                      {
                        value: "left", label: "left"
                      },
                      {
                        value: "center", label: "center"
                      },
                      {
                        value: "right", label: "right"
                      }
                    ]
                  },
                  {
                    name: "image_parallax",
                    label: "Image Parallax",
                    type: "boolean"
                  },
                  { 
                    name: "image_min_height",
                    label: "Image Minumum Height",
                    type: "string"
                  },
                  {
                    name: "text_color_light",
                    label: "Text Colour Light",
                    type: "boolean"
                  },
                ]
              }
            ]
          },
          {
            name: "cta_note",
            label: "CTA Note",
            type: "object",
            fields: [
              {
                name: "label",
                label: "Label",
                type: "string"
              }
            ]
          },
          {
            label: "Body",
            name: "body",
            isBody: true,
            type: "rich-text"
          }
        ]
      },
      {// Home Collection
        label: "Home",
        name: "home",
        path: "content/home",
        format: "md",
        templates: [
          {// contact widget
            label: "Contact Widget",
            name: "contact_widget",
            fields: [
              {
                name: "widget",
                label: "Widget",
                type: "string",
                required: true,
                ui: {
                  defaultItem: () => { return 'contact' },
                  validate: (value)=>{
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 1){
                      return 'Must be at least 1 characters long'
                    }
                    if(fieldLength > 30){
                      return 'Must be at most 30 characters long'
                    }
                  }
                }
              },
              {
                name: "headless",
                label: "Headless",
                type: "boolean",
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldValue = value || false;
                    if(!fieldValue) {
                      return "Must be set to true"
                    }
                  }
                }
              },
              {
                name: "active",
                label: "Active",
                type: "boolean",
                required: true
              },
              {
                name: "weight",
                label: "Weight",
                type: "number",
                required: true,
                ui: {
                  validate: (value) => {
                    if (value < 0 || value > 500) {
                      return "Must be between 0 and 500"
                    }
                  }
                }
              },
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 3 || fieldLength > 100) {
                      return "Must be between 3 and 100 characters"
                    }
                  }
                }
              },
              {
                name: "subtitle",
                label: "Subtitle",
                type: "string",
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "autolink",
                label: "Autolink",
                description: "Automatically link email and phone?",
                type: "boolean",
              },
              {
                name: "email_form",
                label: "Email Form",
                type: "number",
                required: true,
                ui: {
                  validate: (value) => {
                    if(value < 0 || value > 2) {
                      return "Must be between 0 and 2"
                    }
                  }
                }
              },
            ]
          },
          {// home page
            label: "Home Page",
            name: "home_page",
            fields: [
              {
                name: "type",
                label: "Type",
                type: "string",
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 5) {
                      return "Must be at least 5 characters"
                    }
                  }
                }
              },
              {
                name: "headless",
                label: "Headless",
                type: "boolean",
                required: true,
              },
            ]
          },
          {// pages widget
            label: "Pages Widget",
            name: "pages_widget",
            fields: [
              {
                name: "widget",
                label: "Widget",
                type: "string",
                required: true,
                ui: {
                  defaultItem: () => { return 'pages' },
                  validate: (value)=>{
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 1){
                      return 'Must be at least 1 characters long'
                    }
                    if(fieldLength > 30){
                      return 'Must be at most 30 characters long'
                    }
                  }
                }
              },
              {
                name: "headless",
                label: "Headless",
                type: "boolean",
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldValue = value || false;
                    if(!fieldValue) {
                      return "Must be set to true"
                    }
                  }
                }
              },
              {
                name: "active",
                label: "Active",
                type: "boolean",
                required: true
              },
              {
                name: "weight",
                label: "Weight",
                type: "number",
                required: true,
                ui: {
                  validate: (value) => {
                    if (value < 0 || value > 500) {
                      return "Must be between 0 and 500"
                    }
                  }
                }
              },
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 3 || fieldLength > 100) {
                      return "Must be between 3 and 100 characters"
                    }
                  }
                }
              },
              {
                name: "subtitle",
                label: "Subtitle",
                type: "string",
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "content",
                label: "Content",
                type: "object",
                fields: [
                  {
                    name: "page_type",
                    label: "Page Type",
                    type: "string",
                    required: true,
                    ui: {
                      defaultItem: () => { return 'blog' },
                      validate: (value)=>{
                        const fieldLength = value?.length || 0;
                        if(fieldLength < 1){
                          return 'Must be at least 1 characters long'
                        }
                      }
                    }
                  },
                  {
                    name: "count",
                    label: "Count",
                    type: "number",
                    required: true
                  },
                  {
                    name: "offset",
                    label: "Offset",
                    type: "number",
                    required: true
                  },
                  {
                    name: "order",
                    label: "Order",
                    type: "string",
                    required: true,
                    options: [
                      {
                        value: "asc",
                        label: "Ascending"
                      },
                     {
                        value: "desc",
                        label: "Descending"
                      }
                    ]
                  },
                  {
                    name: "filters",
                    label: "Filters",
                    type: "object",
                    fields: [
                      {
                        name: "tag",
                        label: "Tag",
                        type: "string",
                        required: true
                      },
                      {
                        name: "category",
                        label: "Category",
                        type: "string"
                      },
                      {
                        name: "publication_type",
                        label: "Publication Type",
                        type: "string"
                      },
                      {
                        name: "exclude_featured",
                        label: "Exclude Featured",
                        type: "boolean"
                      },
                      {
                        name: "exclude_past",
                        label: "Exclude Past",
                        type: "boolean"
                      }
                    ]
                  }
                ]
              },
              {
                name: "design",
                label: "Design",
                type: "object",
                fields: [
                  {
                    name: "view",
                    label: "View",
                    type: "number",
                    required: true,
                  },
                  {
                    name: "background",
                    label: "Background",
                    type: "object",
                    fields: [
                      {
                        name: "color",
                        label: "Colour",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_start",
                        label: "Gradient Start",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_end",
                        label: "Gradient End",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "image",
                        label: "Image",
                        type: "string"
                      },
                      {
                        name: "image_darken",
                        label: "Image Darken",
                        type: "number",
                        description: "Between 0 and 1 in steps of 0.1"
                      },
                      {
                        name: "text_color_light",
                        label: "Text Colour Light",
                        type: "boolean"
                      }
                    ]
                  }
                ]
              },
              {
                name: "advanced",
                label: "Advanced",
                type: "object",
                fields: [
                  {
                    name: "css_style",
                    label: "CSS Style",
                    type: "string"
                  },
                  {
                    name: "css_class",
                    label: "CSS Class",
                    type: "string"
                  }
                ]
              }
            ]
          },
          {// about widget
            label: "About Widget",
            name: "about_widget",
            fields: [
              {
                name: "widget",
                label: "Widget",
                type: "string",
                required: true,
                ui: {
                  defaultItem: () => { return 'blank' },
                  validate: (value)=>{
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 1){
                      return 'Must be at least 1 characters long'
                    }
                    if(fieldLength > 30){
                      return 'Must be at most 30 characters long'
                    }
                  }
                }
              },
              {
                name: "headless",
                label: "Headless",
                type: "boolean",
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldValue = value || false;
                    if(!fieldValue) {
                      return "Must be set to true"
                    }
                  }
                }
              },
              {
                name: "active",
                label: "Active",
                type: "boolean",
                required: true
              },
              {
                name: "weight",
                label: "Weight",
                type: "number",
                required: true,
                ui: {
                  validate: (value) => {
                    if (value < 0 || value > 500) {
                      return "Must be between 0 and 500"
                    }
                  }
                }
              },
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 3 || fieldLength > 100) {
                      return "Must be between 3 and 100 characters"
                    }
                  }
                }
              },
              {
                name: "subtitle",
                label: "Subtitle",
                type: "string",
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "design",
                label: "Design",
                type: "object",
                fields: [
                  {
                    name: "columns",
                    label: "Columns",
                    type: "string",
                    required: true,
                    options: [
                      {
                        value: "1",
                        label: "1 column"
                      },
                      {
                        value: "2",
                        label: "2 columns"
                      }
                    ]
                  },
                  {
                    name: "background",
                    label: "Background",
                    type: "object",
                    fields: [
                      {
                        name: "color",
                        label: "Colour",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_start",
                        label: "Gradient Start",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_end",
                        label: "Gradient End",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "image",
                        label: "Image",
                        type: "string"
                      },
                      {
                        name: "image_darken",
                        label: "Image Darken",
                        type: "number",
                        description: "Darken the image? Range 0-1 where 0 is transparent and 1 is opaque, in steps of 0.1"
                      },
                      {
                        name: "image_size",
                        label: "Image Size",
                        type: "string",
                        options: [
                          {
                            value: "cover", label: "cover"
                          },
                          {
                            value: "contain", label: "contain"
                          },
                          {
                            value: "actual", label: "actual"
                          }
                        ]
                      },
                      {
                        name: "image_position",
                        label: "Image Position",
                        type: "string",
                        options: [
                          {
                            value: "left", label: "left"
                          },
                          {
                            value: "center", label: "center"
                          },
                          {
                            value: "right", label: "right"
                          }
                        ]
                      },
                      {
                        name: "image_parallax",
                        label: "Image Parallax",
                        type: "boolean"
                      },
                      {
                        name: "text_color_light",
                        label: "Text Colour Light",
                        type: "boolean"
                      }
                    ]
                  },
                  {
                    name: "spacing",
                    label: "Spacing",
                    type: "object",
                    fields: [
                      {
                        name: "padding",
                        label: "Padding",
                        type: "string",
                        description: "Customize the section spacing. Order is top, right, bottom, left.",
                        list: true
                      }
                    ]
                  }
                ]
              },
              {
                name: "advanced",
                label: "Advanced",
                type: "object",
                fields: [
                  {
                    name: "css_style",
                    label: "CSS Style",
                    type: "string"
                  },
                  {
                    name: "css_class",
                    label: "CSS Class",
                    type: "string"
                  }
                ]
              },
              {
                label: "Body",
                name: "body",
                isBody: true,
                type: "rich-text"
              }
            ]
          },
          {// gallery widget
            label: "Gallery Widget",
            name: "gallery_widget",
            fields: [
              {
                name: "widget",
                label: "Widget",
                type: "string",
                required: true,
                ui: {
                  defaultItem: () => { return 'gallery' },
                  validate: (value)=>{
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 1){
                      return 'Must be at least 1 characters long'
                    }
                    if(fieldLength > 30){
                      return 'Must be at most 30 characters long'
                    }
                  }
                }
              },
              {
                name: "headless",
                label: "Headless",
                type: "boolean",
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldValue = value || false;
                    if(!fieldValue) {
                      return "Must be set to true"
                    }
                  }
                }
              },
              {
                name: "active",
                label: "Active",
                type: "boolean",
                required: true
              },
              {
                name: "weight",
                label: "Weight",
                type: "number",
                required: true,
                ui: {
                  validate: (value) => {
                    if (value < 0 || value > 500) {
                      return "Must be between 0 and 500"
                    }
                  }
                }
              },
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 3 || fieldLength > 100) {
                      return "Must be between 3 and 100 characters"
                    }
                  }
                }
              },
              {
                name: "subtitle",
                label: "Subtitle",
                type: "string",
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "content",
                label: "Content",
                type: "object",
                fields: [
                  {
                    name: "page_type",
                    label: "Page Type",
                    type: "string",
                    required: true,
                    ui: {
                      defaultItem: () => { return 'project' },
                      validate: (value)=>{
                        const fieldLength = value?.length || 0;
                        if(fieldLength < 1){
                          return 'Must be at least 1 characters long'
                        }
                      }
                    }
                  },
                  {
                    name: "count",
                    label: "Count",
                    type: "number",
                    required: true
                  },
                  {
                    name: "order",
                    label: "Order",
                    type: "string",
                    required: true,
                    options: [
                      {
                        value: "asc",
                        label: "Ascending"
                      },
                     {
                        value: "desc",
                        label: "Descending"
                      }
                    ]
                  },
                  {
                    name: "filters",
                    label: "Filters",
                    type: "object",
                    fields: [
                      {
                        name: "tag",
                        label: "Tag",
                        type: "string",
                        required: true
                      },
                      {
                        name: "category",
                        label: "Category",
                        type: "string"
                      },
                      {
                        name: "filter_default",
                        label: "Filter Default",
                        type: "number",
                        required: true
                      }
                    ]
                  },
                  {
                    name: "filter_button",
                    label: "Filter Button",
                    type: "object",
                    list: true,
                    fields: [
                      {
                        name: "name",
                        label: "Name",
                        type: "string",
                        required: true
                      },
                      {
                        name: "tag",
                        label: "Tag",
                        type: "string",
                        required: true
                      }
                    ]
                  }
                ]
              },
              {
                name: "design",
                label: "Design",
                type: "object",
                fields: [
                  {
                    name: "view",
                    label: "View",
                    type: "number",
                    description: "Toggle between the various page layout types: 1 = List, 2 = Compact, 3 = Card, 5 = Showcase",
                    required: true
                  },
                  {
                    name: "flip_alt_rows",
                    label: "Flip Alt Rows",
                    type: "boolean"
                  },
                  {
                    name: "columns",
                    label: "Columns",
                    type: "string",
                    required: true,
                    options: [
                      {
                        value: "1",
                        label: "1 column"
                      },
                      {
                        value: "2",
                        label: "2 columns"
                      }
                    ]
                  },
                  {
                    name: "background",
                    label: "Background",
                    type: "object",
                    fields: [
                      {
                        name: "color",
                        label: "Colour",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_start",
                        label: "Gradient Start",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_end",
                        label: "Gradient End",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "image",
                        label: "Image",
                        type: "string"
                      },
                      {
                        name: "image_darken",
                        label: "Image Darken",
                        type: "number",
                        description: "Between 0 and 1 in steps of 0.1"
                      },
                      {
                        name: "text_color_light",
                        label: "Text Colour Light",
                        type: "boolean"
                      }
                    ]
                  }
                ]
              },
              {
                name: "advanced",
                label: "Advanced",
                type: "object",
                fields: [
                  {
                    name: "css_style",
                    label: "CSS Style",
                    type: "string"
                  },
                  {
                    name: "css_class",
                    label: "CSS Class",
                    type: "string"
                  }
                ]
              }
            ]
          },
          {// hero widget
            label: "Hero Widget",
            name: "hero_widget",
            fields: [
              {
                name: "widget",
                label: "Widget",
                type: "string",
                required: true,
                ui: {
                  defaultItem: () => { return 'hero' },
                  validate: (value)=>{
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 1){
                      return 'Must be at least 1 characters long'
                    }
                    if(fieldLength > 30){
                      return 'Must be at most 30 characters long'
                    }
                  }
                }
              },
              {
                name: "headless",
                label: "Headless",
                type: "boolean",
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldValue = value || false;
                    if(!fieldValue) {
                      return "Must be set to true"
                    }
                  }
                }
              },
              {
                name: "active",
                label: "Active",
                type: "boolean",
                required: true
              },
              {
                name: "weight",
                label: "Weight",
                type: "number",
                required: true,
                ui: {
                  validate: (value) => {
                    if (value < 0 || value > 500) {
                      return "Must be between 0 and 500"
                    }
                  }
                }
              },
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 3 || fieldLength > 100) {
                      return "Must be between 3 and 100 characters"
                    }
                  }
                }
              },
              {
                name: "hero_media",
                label: "Hero Media",
                type: "string",
              },
              {
                name: "design",
                label: "Design",
                type: "object",
                fields: [
                  {
                    name: "background",
                    label: "Background",
                    type: "object",
                    fields: [
                      {
                        name: "color",
                        label: "Colour",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_start",
                        label: "Gradient Start",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_end",
                        label: "Gradient End",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "image",
                        label: "Image",
                        type: "string"
                      },
                      {
                        name: "image_size",
                        label: "Image Size",
                        type: "string",
                        options: [
                          {
                            value: "cover", label: "cover"
                          },
                          {
                            value: "contain", label: "contain"
                          },
                          {
                            value: "actual", label: "actual"
                          }
                        ]
                      },
                      {
                        name: "image_position",
                        label: "Image Position",
                        type: "string",
                        options: [
                          {
                            value: "left", label: "left"
                          },
                          {
                            value: "center", label: "center"
                          },
                          {
                            value: "right", label: "right"
                          }
                        ]
                      },
                      {
                        name: "image_parallax",
                        label: "Image Parallax",
                        type: "boolean"
                      },
                      {
                        name: "image_min_height",
                        label: "Image Min Height",
                        type: "string"
                      },
                      {
                        name: "text_color_light",
                        label: "Text Colour Light",
                        type: "boolean"
                      }
                    ]
                  }
                ]
              },
              {
                name: "cta",
                label: "Call to Action",
                type: "object",
                fields: [
                  {
                    name: "url",
                    label: "URL",
                    type: "string"
                  },
                  {
                    name: "label",
                    label: "Label",
                    type: "string"
                  },
                  {
                    name: "icon_pack",
                    label: "Icon Pack",
                    type: "string",
                    options: [
                      {
                        value: "fa", label: "fa"
                      },
                      {
                        value: "fas", label: "fas"
                      },
                      {
                        value: "fab", label: "fab"
                      },
                      {
                        value: "ai", label: "ai"
                      }
                    ]
                  },
                  {
                    name: "icon",
                    label: "Icon",
                    type: "string"
                  }
                ]
              },
              {
                name: "cta_alt",
                label: "CTA ALT",
                type: "object",
                fields: [
                  {
                    name: "url",
                    label: "URL",
                    type: "string"
                  },
                  {
                    name: "label",
                    label: "Label",
                    type: "string"
                  }
                ]
              },
              {
                name: "cta_note",
                label: "CTA Note",
                type: "object",
                fields: [
                  {
                    name: "label",
                    label: "Label",
                    type: "string"
                  }
                ]
              },
              {
                label: "Body",
                name: "body",
                isBody: true,
                type: "rich-text"
              }
            ]
          },
          {// workshops widget
            label: "Workshops Widget",
            name: "workshops_widget",
            fields: [
              {
                name: "widget",
                label: "Widget",
                type: "string",
                required: true,
                ui: {
                  defaultItem: () => { return 'workshops' },
                  validate: (value)=>{
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 1){
                      return 'Must be at least 1 characters long'
                    }
                    if(fieldLength > 30){
                      return 'Must be at most 30 characters long'
                    }
                  }
                }
              },
              {
                name: "headless",
                label: "Headless",
                type: "boolean",
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldValue = value || false;
                    if(!fieldValue) {
                      return "Must be set to true"
                    }
                  }
                }
              },
              {
                name: "active",
                label: "Active",
                type: "boolean",
                required: true
              },
              {
                name: "weight",
                label: "Weight",
                type: "number",
                required: true,
                ui: {
                  validate: (value) => {
                    if (value < 0 || value > 500) {
                      return "Must be between 0 and 500"
                    }
                  }
                }
              },
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
                ui: {
                  validate: (value) => {
                    const fieldLength = value?.length || 0;
                    if(fieldLength < 3 || fieldLength > 100) {
                      return "Must be between 3 and 100 characters"
                    }
                  }
                }
              },
              {
                name: "subtitle",
                label: "Subtitle",
                type: "string",
                ui: {
                  component: "textarea"
                }
              },
              {
                name: "design",
                label: "Design",
                type: "object",
                fields: [
                  {
                    name: "view",
                    label: "View",
                    type: "number",
                    required: true
                  },
                  {
                    name: "background",
                    label: "Background",
                    type: "object",
                    fields: [
                      {
                        name: "color",
                        label: "Colour",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_start",
                        label: "Gradient Start",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "gradient_end",
                        label: "Gradient End",
                        description: "RGB Colour specification, e.g. rgb(236, 244, 232)",
                        type: "string"
                      },
                      {
                        name: "image",
                        label: "Image",
                        type: "string"
                      },
                      {
                        name: "image_darken",
                        label: "Image Darken",
                        type: "number"
                      },
                      {
                        name: "text_color_light",
                        label: "Text Colour Light",
                        type: "boolean"
                      }
                    ]
                  }
                ]
              },
              {
                name: "advanced",
                label: "Advanced",
                type: "object",
                fields: [
                  {
                    name: "css_style",
                    label: "CSS Style",
                    type: "string"
                  },
                  {
                    name: "css_class",
                    label: "CSS Class",
                    type: "string"
                  }
                ]
              },
            ]
          },
        ],
      }
    ],
  },
});
