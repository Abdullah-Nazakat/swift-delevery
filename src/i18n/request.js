import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../config';

export default getRequestConfig(async ({ requestLocale }) => { // Fixed parameter name
    const locale = await requestLocale;
    
    // Validate the locale
    if (!locale || !locales.includes(locale)) { // Fixed typo: include → includes
        notFound();
    }

    return {
        locale, // You need to return the locale
        messages: (await import(`../app/messages/${locale}.json`)).default, // Fixed: locales → locale
    };
});