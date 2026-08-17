import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  pathnames: {
    '/qui-sommes-nous': {
      fr: '/qui-sommes-nous',
      en: '/about',
    },
    '/contact': {
      fr: '/contact',
      en: '/contact-us',
    },
    '/services': {
      fr: '/nos-services',
      en: '/our-services',
    },
    '/support': {
      fr: '/assistance',
      en: '/support',
    },
    // Nouvelles routes
    '/telecommunications': {
      fr: '/telecommunications',
      en: '/telecommunications',
    },
    '/energies': {
      fr: '/energies',
      en: '/energies',
    },
    '/conseil/expertise-assistance-technique': {
      fr: '/conseil/expertise-assistance-technique',
      en: '/conseil/expertise-assistance-technique',
    },
    '/conseil/strategie-partenariats-financement': {
      fr: '/conseil/strategie-partenariats-financement',
      en: '/conseil/strategie-partenariats-financement',
    },
  },
});