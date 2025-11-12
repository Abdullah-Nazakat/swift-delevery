'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import courierImageUrl from '../../../public/bg-06.jpg'

// Memoized InputField component
const InputField = React.memo(({ label, name, required, icon, value, onChange, disabled }) => (
  <div className="relative border border-gray-200 rounded-lg p-3 shadow-sm transition duration-300 hover:border-orange-500 bg-white/80 backdrop-blur-sm">
    <label className="block text-sm font-medium text-gray-600 mb-1">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <div className="flex items-center">
      <input 
        type="text" 
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label.replace('*', '')}
        required={required}
        disabled={disabled}
        className="w-full text-lg text-gray-800 placeholder-gray-400 focus:outline-none 
        bg-transparent disabled:opacity-50"
      />
      {icon && <div className="ml-3 text-gray-400">{icon}</div>}
    </div>
  </div>
))

InputField.displayName = 'InputField'

const HomeSecFour = () => {
  const t = useTranslations('HomePage')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    loadType: '',
    departure: '',
    surrender: '',
    internationalTrc: '',
    height: '',
    width: ''
  })

  const formFields = [
    { 
      key: "Form.FullName", 
      name: "fullName",
      required: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      )
    },
    { 
      key: "Form.Phone", 
      name: "phone",
      required: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 3.38 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    },
    { 
      key: "Form.LoadType", 
      name: "loadType",
      required: true 
    },
    { 
      key: "Form.Departure", 
      name: "departure",
      required: true 
    },
    { 
      key: "Form.Surrender", 
      name: "surrender",
      required: true 
    },
    { 
      key: "Form.InternationalTrc", 
      name: "internationalTrc",
      required: false 
    },
    { 
      key: "Form.Height", 
      name: "height",
      required: true 
    },
    { 
      key: "Form.Width", 
      name: "width",
      required: true 
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/shipment-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: data.message || 'Thank you for your shipment quote request! We will contact you soon.' 
        })
        // Reset form
        setFormData({
          fullName: '',
          phone: '',
          loadType: '',
          departure: '',
          surrender: '',
          internationalTrc: '',
          height: '',
          width: ''
        })
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.error || 'An error occurred. Please try again.' 
        })
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative w-full h-auto py-20 font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={courierImageUrl}
          alt="Courier background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div className="text-white space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-0.5 bg-orange-500"></div>
              <p className="uppercase font-semibold text-orange-400 tracking-widest">
                {t('QuoteSectionTitle')}
              </p>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              {t('QuoteSectionSubtitle')}
            </h2>
            <p className="text-lg text-gray-200 max-w-md">
              {t('QuoteSectionDesc')}
            </p>
          </div>

          {/* Right: Form */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            {/* Status Message */}
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-md text-center ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-300' 
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {formFields.map((field, index) => (
                  <InputField
                    key={index} 
                    label={t(field.key)} 
                    name={field.name}
                    required={field.required}
                    icon={field.icon}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                ))}
                <div className="sm:col-span-2 mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold py-4 rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.02] disabled:transform-none text-xl uppercase disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'SUBMITTING...' : t('Form.Shipment')}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSecFour