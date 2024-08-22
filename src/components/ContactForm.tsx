import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          'service_npgdn15',
          'template_dltt6ks',
          formData,
          "6avFVztmOpQ8FZled"
        )
        .then((response) => {
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          console.error('FAILED...', error);
          toast.error('Failed to send message. Please try again later.');
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section className='bg-stone-50 p-4' id='contact'>
      <Toaster />
      <h2 className='my-8 text-center text-4xl font-semibold tracking-tight'>Let's Connect</h2>
      <form onSubmit={handleSubmit} className='mx-auto mb-20 lg:max-w-3xl'>
        <div className='mb-4 flex flex-wrap -mx-2'>
          <div className='mb-4 lg:w-1/2 px-2'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              placeholder='Name'
              onChange={handleChange}
              className='mt-1 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
            />
            {errors.name && <p className='text-sm text-rose-800'>{errors.name}</p>}
          </div>

          <div className='mb-4 lg:w-1/2 px-2'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              placeholder='Email'
              onChange={handleChange}
              className='mt-1 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
            />
            {errors.email && <p className='text-sm text-rose-800'>{errors.email}</p>}
          </div>

          <div className='mb-4 px-2 lg:w-full'>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              placeholder='Message'
              onChange={handleChange}
              className='mt-1 w-full h-[150px] appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
            />
            {errors.message && <p className='text-sm text-rose-800'>{errors.message}</p>}
          </div>

          <button
            type='submit'
            className={`w-full rounded border bg-emerald-950 px-4 py-2 font-semibold text-orange-50 hover:bg-emerald-900 ${isSending ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={isSending}
          >
            <div className='flex items-center justify-center gap-2'>
              {isSending ? 'Sending...' : 'Send'}
              <FiSend />
            </div>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
