'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ContactImage from '../../../public/contact.png';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';
import Location from './location';
import Faqs from '../home/faqs';

const Page = () => {
  const t = useTranslations('Contact');

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
    <div className="min-h-screen flex flex-col ">
      <Navbar />

      <div className="flex-grow flex items-center justify-center py-12 px-4 md:px-8">
        <div className="w-[80%] bg-[#F4D055] rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">

          {/* Left Side - Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif tracking-tight">
              {t('HeroTitle')}
            </h1>

            <p className="text-slate-800 mb-8 text-sm md:text-base leading-relaxed opacity-90 max-w-md">
              {t('SectionTitle')}
            </p>

            {submitStatus.message && (
              <div className={`mb-6 p-3 rounded-lg text-sm font-medium ${submitStatus.type === 'success'
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-slate-800 text-sm font-medium ml-1">{t('Form.Name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-transparent border border-slate-700/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all text-slate-900 placeholder-slate-600/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-slate-800 text-sm font-medium ml-1">{t('Form.Email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-transparent border border-slate-700/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all text-slate-900 placeholder-slate-600/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-slate-800 text-sm font-medium ml-1">{t('Form.Phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="bg-transparent border border-slate-700/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all text-slate-900 placeholder-slate-600/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-slate-800 text-sm font-medium ml-1">{t('Form.Subject')}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="bg-transparent border border-slate-700/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all text-slate-900 placeholder-slate-600/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-slate-800 text-sm font-medium ml-1">{t('Form.Message')}</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-transparent border border-slate-700/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all text-slate-900 placeholder-slate-600/50 resize-none bg-yellow-500/10"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0B1221] text-white font-semibold py-3 px-10 rounded-xl shadow-lg hover:bg-slate-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? t('Sending') : t('SendRequest')}
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">
            <Image
              src={ContactImage}
              alt={t('HeroAlt')}
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
<Location/>
<div className="mt-12">
  <Faqs/>
</div>
      <Footer />
    </div>
  );
};

export default Page;
