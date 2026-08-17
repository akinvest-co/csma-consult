import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Vérifier que locale est bien une des locales supportées
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  const commonMessages = (await import(`../messages/${locale}/common.json`)).default;
  const menuMessages = (await import(`../messages/${locale}/menu.json`)).default;
const presentationMessages=(await import(`../messages/${locale}/presentation.json`)).default;
const bureauMessages= (await import(`../messages/${locale}/bureau.json`)).default;
const methodeMessages= (await import(`../messages/${locale}/methode.json`)).default;
const espaceMethode=(await import(`../messages/${locale}/espace.json`)).default;
const ctaMessages= (await import(`../messages/${locale}/cta.json`)).default;
const aboutMessages= (await import(`../messages/${locale}/about.json`)).default;
const servicesMessages= (await import(`../messages/${locale}/services.json`)).default;
const reseauxMessages= (await import(`../messages/${locale}/reseaux.json`)).default;
const mobilisationMessages= (await import(`../messages/${locale}/mobilisation.json`)).default;
const externalisationMessages= (await import(`../messages/${locale}/externalisation.json`)).default;
const enegersMessages= (await import(`../messages/${locale}/energie.json`)).default;
const conseilMessages= (await import(`../messages/${locale}/conseil.json`)).default;
const assistanceMessages= (await import(`../messages/${locale}/assistance.json`)).default;
const strategieMessages= (await import(`../messages/${locale}/strategie.json`)).default;
const infrastructuresMessages= (await import(`../messages/${locale}/infrastructures.json`)).default;
  return {
    locale,
    messages: {
     common:commonMessages,
      menu:menuMessages,
      presentation:presentationMessages,
      bureau:bureauMessages,
      methode:methodeMessages,
      espace:espaceMethode,
      cta:ctaMessages,
      about:aboutMessages,
      services:servicesMessages,
      reseaux:reseauxMessages,
      mobilisation:mobilisationMessages,
      externalisation:externalisationMessages,
      energie:enegersMessages,
      conseil:conseilMessages,
      assistance:assistanceMessages,
      strategie:strategieMessages,
      infrastructures:infrastructuresMessages
      // ...otherMessages,
    }
  };
});