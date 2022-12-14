import { defineConfig } from 'vitepress'

import { join } from 'path'
import { SearchPlugin } from 'vitepress-plugin-search'

export default defineConfig({
    lang: 'en-US',
    title: 'KingWorld',
    description:
        'Fast, and friendly Bun web framework for Bun. Designed on top of 3 philosophies: Performance, Simplicity, Flexibility.',
    lastUpdated: true,
    markdown: {
        theme: 'github-light'
    },
    vite: {
        plugins: [
            SearchPlugin({
                preset: 'performance',
                tokenize: 'full'
            })
        ]
    },
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/assets/kingworld.png'
            }
        ],
        [
            'meta',
            {
                property: 'og:image',
                content: 'https://kingworldjs.com/assets/cover.png'
            }
        ],
        [
            'meta',
            {
                property: 'og:image:width',
                content: '1920'
            }
        ],
        [
            'meta',
            {
                property: 'og:image',
                content: '1080'
            }
        ]
    ],
    themeConfig: {
        "logo": "/assets/kingworld.svg",
        nav: [
            {
                text: 'Quick Start',
                link: '/quick-start'
            },
            {
                text: 'Release',
                link: 'https://github.com/SaltyAom/kingworld/releases'
            }
        ],
        sidebar: [
            {
                text: 'Getting Start',
                collapsible: true,
                items: [
                    {
                        text: 'Introduction',
                        link: '/'
                    },
                    {
                        text: 'Quick Start',
                        link: '/quick-start'
                    }
                ]
            },
            {
                text: 'Core Concept',
                collapsible: true,
                items: [
                    {
                        text: 'Route',
                        link: '/route'
                    },
                    {
                        text: 'Handler',
                        link: '/handler'
                    },
                    {
                        text: 'State & Decorate',
                        link: '/state-decorate'
                    },
                    {
                        text: 'Group',
                        link: '/group'
                    },
                    {
                        text: 'Middleware',
                        link: '/middleware'
                    },
                    {
                        text: 'Schema',
                        link: '/schema'
                    },
                    {
                        text: 'Guard',
                        link: '/guard'
                    },
                    {
                        text: 'Plugin',
                        link: '/plugin'
                    },
                    {
                        text: 'Config',
                        link: '/config'
                    }
                ]
            },
            {
                text: 'Technique',
                collapsible: true,
                items: [
                    {
                        text: 'Chaining',
                        link: '/technique/chaining'
                    },
                    {
                        text: 'Typed Plugin',
                        link: '/technique/typed-plugin'
                    }
                ]
            },
            {
                text: 'Collections',
                collapsible: true,
                items: [
                    {
                        text: 'Plugins',
                        link: '/ecosystem'
                    },
                    {
                        text: 'Cheat Sheet',
                        link: '/cheat-sheet'
                    }
                ]
            },
            {
                text: 'Patterns',
                collapsible: true,
                items: [
                    {
                        text: 'Custom 404',
                        link: '/patterns/custom-404'
                    },
                    {
                        text: 'Redirect',
                        link: '/patterns/redirect'
                    },
                    {
                        text: 'Static File',
                        link: '/patterns/static-file'
                    }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/saltyaom/kingworld' },
            { icon: 'discord', link: 'https://discord.gg/eaFJ2KDJck' }
        ],
        editLink: {
            text: 'Edit this page on GitHub',
            pattern:
                'https://github.com/saltyaom/kingworld-docs/edit/main/docs/:path'
        }
    }
})
