export default defineNuxtConfig({
  modules: ["@nuxtjs/partytown"],
  partytown: {
    forward: ["dataLayer.push"],
  },
  app: {
    head: {
      script: [
        // Insert your Google Tag Manager Script here
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-QE3C9S378L");
          `,
        },

        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-QE3C9S378L",
          async: true,
          type: "text/partytown",
        },
      ],
    },
  },
});
