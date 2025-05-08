import { defineConfig, squooshImageService } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import starlightLinksValidator from "starlight-links-validator";
import sitemap from "@astrojs/sitemap";


// TODO: new structure
//
// 1-concepts --> 2-trailside
// 2-put-together --> 1-tour
// 4-activities --> folder ... 3-explore
// 5-wrap-up ---> 4-camp
// 3-other-languages --> move into 2-trailside as last item



// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            // Choose from Shiki's built-in themes (or add your own)
            // https://github.com/shikijs/shiki/blob/main/docs/themes.md
            theme: "dracula",
            // Add custom languages
            // Note: Shiki has countless langs built-in, including .astro!
            // https://github.com/shikijs/shiki/blob/main/docs/languages.md
            langs: [],
            // Enable word wrap to prevent horizontal scrolling
            wrap: true,
        },
    },
    site: "https://digital-systems-guide.netlify.app",
    integrations: [
        starlight({
            title: "",
            head: [
                // {
                //     tag: "script",
                //     attrs: {
                //         async: true,
                //         src: "https://www.googletagmanager.com/gtag/js?id=G-M004BNHE32",
                //     },
                // },
                //         {
                //             tag: "script",
                //             content: `
                //   window.dataLayer = window.dataLayer || [];
                //   function gtag(){dataLayer.push(arguments);}
                //   gtag('js', new Date());
                //   gtag('config', 'G-M004BNHE32');`,
                //         },
            ],
            customCss: [
                // Relative path to your custom CSS file
                "./src/styles/custom.css",
            ],
            social: {
                github: "https://github.com/splashkit/digital-systems-field-guide",
            },
            editLink: {
                baseUrl:
                    "https://github.com/splashkit/digital-systems-field-guide/edit/main/",
            },
            plugins: [
                starlightLinksValidator({
                    errorOnRelativeLinks: true,
                }),
            ],
            sidebar: [
                {
                    label: "I. Electronics to Binary and Beyond",
                    collapsed: true,
                    autogenerate: {
                        directory:
                            "book/0-electronics-to-binary",
                        collapsed: true,
                    },
                },
                {
                    label: "II. Logic Gates, Chips and Memory",
                    collapsed: true,
                    autogenerate: {
                        directory:
                            "book/1-logic-gates",
                        collapsed: true,
                    },
                },
                {
                    label: "III. Computer Architecture",
                    collapsed: true,
                    autogenerate: {
                        directory:
                            "book/2-computers",
                        collapsed: true,
                    },
                },
                {
                    label: "IV. Connecting Digital System and Operating System",
                    collapsed: true,
                    autogenerate: {
                        directory:
                            "book/3-connections",
                        collapsed: true,
                    },
                },
                {
                    label: "V. Computer Networks and Network Security (Coming soon)",
                    collapsed: true,
                    autogenerate: {
                        directory:
                            "book/4-networks",
                        collapsed: true,
                    },
                },
            ],
        }),
        react(),
        sitemap(),
    ],
    // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
    image: {
        service: squooshImageService(),
    },
    server: {
        port: 3002,
    },
});
