// schemas/settings.js
export default {
  name: "settings",
  title: "Settings",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "nombre",
      type: "string",
      title: "nombre",
    },
  ],
};
