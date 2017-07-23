define({ "api": [
  {
    "type": "get",
    "url": "/img/:id",
    "title": "LoadImage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Image ID</p>"
          }
        ]
      }
    },
    "name": "LoadImage",
    "group": "Image",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Base 64 encoded Image</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/img",
    "title": "Save new image",
    "name": "SaveImage",
    "group": "Image",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Image ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Image"
  }
] });
