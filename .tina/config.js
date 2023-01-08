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
                            value: "cover"
                          },
                          {
                            value: "contain"
                          },
                          {
                            value: "actual"
                          }
                        ]
                      },
                      {
                        name: "image_position",
                        label: "Image Position",
                        type: "string",
                        options: [
                          {
                            value: "left"
                          },
                          {
                            value: "center"
                          },
                          {
                            value: "right"
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
                            value: "cover"
                          },
                          {
                            value: "contain"
                          },
                          {
                            value: "actual"
                          }
                        ]
                      },
                      {
                        name: "image_position",
                        label: "Image Position",
                        type: "string",
                        options: [
                          {
                            value: "left"
                          },
                          {
                            value: "center"
                          },
                          {
                            value: "right"
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
                        value: "fa"
                      },
                      {
                        value: "fas"
                      },
                      {
                        value: "fab"
                      },
                      {
                        value: "ai"
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
      },
/*      {
        label: "Blog posts",
        name: "blog_posts",
        path: "content/blog",
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
      {
        label: "Sculptures",
        name: "sculptures",
        path: "content/gallery",
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
      {
        label: "Workshops",
        name: "workshops",
        path: "content/workshops",
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
      {
        label: "About me",
        name: "about_me",
        path: "content/about-me",
        fields: [
          {
            type: "rich-text",
            name: "bio",
            label: "BBio",
            description: "Your Biography",
          },
        ],
      },
      {
        label: "Schools",
        name: "schools",
        path: "content/schools",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },*/
      {
        label: "Pages",
        name: "pages",
        path: "content",
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
    ],
  },
});
