'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

const InputField = React.memo(({ label, name, required, value, onChange, disabled }) => (
  <div className="relative">
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`${label}${required ? '*' : ''}`}
      required={required}
      disabled={disabled}
      className="w-full h-12 px-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-[#FFFDF5] transition duration-300"
    />
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
    { key: "Form.FullName", name: "fullName", required: true },
    { key: "Form.Phone", name: "phone", required: true },
    { key: "Form.LoadType", name: "loadType", required: true },
    { key: "Form.Departure", name: "departure", required: true },
    { key: "Form.Surrender", name: "surrender", required: true },
    { key: "Form.InternationalTrc", name: "internationalTrc", required: true },
    { key: "Form.Height", name: "height", required: true },
    { key: "Form.Width", name: "width", required: true }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/shipment-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || t('FormSuccessMessage')
        })
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
          message: data.error || t('FormErrorMessage')
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t('FormNetworkError')
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      className="relative w-full py-20 font-sans text-white"
      style={{ background: 'linear-gradient(90deg, #111828 0%, #1E2939 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              {t('GetStartedSection.Title')}
            </h2>

            <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
              {t('GetStartedSection.Description')}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#FDC748] hover:bg-[#e0b140] text-[#111828] font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 flex items-center gap-2">
                {t('GetStartedSection.StartShipping')}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <button className="bg-transparent border border-gray-500 hover:border-white text-white font-medium py-3 px-8 rounded-full transition duration-300">
                {t('GetStartedSection.ViewPricing')}
              </button>
            </div>
          </div>

          {/* Right — Form */}
          <div className="border border-white/20 rounded-2xl p-8 lg:p-10 relative">
            <h3 className="text-3xl font-bold mb-8 text-white">
              {t('QuoteSectionTitle')}
            </h3>

            {/* Status */}
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-md text-center text-sm font-medium ${
                submitStatus.type === 'success'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {formFields.map((field, index) => (
                  <InputField
                    key={index}
                    label={t(field.key)}
                    name={field.name}
                    required={field.required}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FDC748] hover:bg-[#e0b140] disabled:opacity-70 text-[#111828] font-bold py-3 rounded-lg shadow-md transition duration-300 mt-2"
              >
                {isSubmitting ? t('FormSubmitting') : t('FormSubmit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSecFour
