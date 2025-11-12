'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Contact from '../../../public/contact.jpeg';
import Navbar from '@/components/navbar';
import HomeSecSix from '../home/home-sec-six';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';

const page = () => {
  const t = useTranslations('Contact'); // Namespace for translations

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || t('SuccessMessage') });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || t('ErrorMessage') });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: t('NetworkError') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center min-h-screen">
        <Navbar />

        <div className="relative w-full flex justify-center items-center image-career">
          <h1 className="text-white text-5xl md:text-8xl font-bold tracking-wide text-center">
            {t('HeroTitle')}
          </h1>
        </div>

        <div className="relative w-full flex flex-col items-center max-w-7xl mx-auto -top-50">
          <div className="absolute inset-0 z-0">
            <Image
              src={Contact}
              alt={t('HeroAlt')}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 w-full flex flex-col items-center px-4 py-16">
            <span className="text-orange-600 text-sm mb-8 uppercase font-semibold border-t-2 border-b-2 border-orange-600 px-3 py-1">
              {t('SectionLabel')}
            </span>

            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
              {t('SectionTitle')}
            </h2>

            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-md w-full max-w-4xl text-center ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-300' 
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="max-w-4xl w-full flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3 flex flex-col space-y-10 text-white">
                <div className="flex flex-col">
                  <div className="text-orange-600 mb-2"><span className="text-lg">📧</span></div>
                  <span className="text-sm opacity-70 mb-1">{t('EmailLabel')}</span>
                  <span className="font-semibold">info@swiftdeliver.gr</span>
                </div>

                <div className="flex flex-col">
                  <div className="text-orange-600 mb-2"><span className="text-lg">📍</span></div>
                  <span className="text-sm opacity-70 mb-1">{t('OfficeLabel')}</span>
                  <div className="flex flex-col text-sm">
                    <span className="font-semibold">{t('OfficeAddress')}</span>
                    <span>{t('VATInfo')}</span>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 flex flex-col space-y-8">
                <input type="text" name="name" placeholder={t('Form.Name')} value={formData.name} onChange={handleChange} required className="bg-transparent border-b border-neutral-700 text-white pb-2 focus:outline-none focus:border-orange-600" disabled={isSubmitting} />
                <input type="email" name="email" placeholder={t('Form.Email')} value={formData.email} onChange={handleChange} required className="bg-transparent border-b border-neutral-700 text-white pb-2 focus:outline-none focus:border-orange-600" disabled={isSubmitting} />
                <input type="tel" name="phone" placeholder={t('Form.Phone')} value={formData.phone} onChange={handleChange} className="bg-transparent border-b border-neutral-700 text-white pb-2 focus:outline-none focus:border-orange-600" disabled={isSubmitting} />
                <input type="text" name="subject" placeholder={t('Form.Subject')} value={formData.subject} onChange={handleChange} className="bg-transparent border-b border-neutral-700 text-white pb-2 focus:outline-none focus:border-orange-600" disabled={isSubmitting} />
                <textarea name="message" placeholder={t('Form.Message')} rows="3" value={formData.message} onChange={handleChange} required className="bg-transparent border-b border-neutral-700 text-white pb-2 focus:outline-none focus:border-orange-600 resize-none" disabled={isSubmitting}></textarea>
                <button type="submit" disabled={isSubmitting} className="bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 w-fit mt-6 disabled:cursor-not-allowed">
                  {isSubmitting ? t('Sending') : t('SendRequest')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="-mt-50">
        <HomeSecSix />
      </div>
      <Footer />
    </>
  );
};

export default page;
