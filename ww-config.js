export default {
  editor: {
    label: {
      en: "PDF viewer",
    },
  },
  properties: {
    file: {
      label: { en: "PDF Url", fr: "PDF Url" },
      type: "Text",
      options: {
        placeholder: "PDF url",
      },
      defaultValue:
        "https://weweb-staging.s3.amazonaws.com/designs/1fb3c298-9f4f-4b49-9661-35a8eee7941b/files/Focussurcatnat.pdf",
      bindable: true,
    },
    defaultZoom: {
      type: "Number",
      label: {
        en: "Default zoom",
        fr: "zoom par defaut",
      },
      options: {
        min: 1, // default 0
        max: 1000, // default 100,
        step: 1, // default 1
      },
      defaultValue: 100,
    },
    defaultPage: {
      type: "Number",
      label: {
        en: "Default page",
        fr: "Page par defaut",
      },
      options: {
        min: 1, // default 0
        max: 1000, // default 100,
        step: 1, // default 1
      },
      defaultValue: 1,
    },
  },
};
