import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    query: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Page reload hone se rokta hai
    setLoading(true);
    setMessage('');

    // Step 1: Console me test karein ki button trigger ho raha hai ya nahi
    console.log('Form submitting with data:', formData);

    // Step 2: EmailJS Credentials (Inhe apni EmailJS website ke keys se replace karein)
    const SERVICE_ID = 'service_v5c2nsc';
    const TEMPLATE_ID = 'template_33ncitz';
    const PUBLIC_KEY = '7GoKapPYDxO13YWhd';

    // Agar credentials default hain toh simple alert dikhayega
    if (SERVICE_ID === 'service_v5c2nsc') {
      setTimeout(() => {
        setLoading(false);
        setMessage('Success! Form submitted locally (Replace EmailJS keys to receive real emails).');
        alert('Form Submitted Successfully!\n' + JSON.stringify(formData, null, 2));
        setFormData({ name: '', email: '', mobile: '', query: '' });
      }, 500);
      return;
    }

    // Real EmailJS call
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        mobile_number: formData.mobile,
        message: formData.query,
      },
      PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setLoading(false);
      setMessage('Thank you! Your query has been sent to our email.');
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', mobile: '', query: '' });
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      setLoading(false);
      setMessage('Failed to send email. Check browser console for details.');
      alert('Failed to send email. Check browser console.');
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex items-center justify-center">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-4 shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-2 text-blue-400">Contact Us</h2>

        {/* Status Message Display */}
        {message && (
          <div className="p-3 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-lg text-sm">
            {message}
          </div>
        )}

        {/* Name Input */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Mobile Input */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Query Input */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Query / Message</label>
          <textarea
            name="query"
            rows="4"
            value={formData.query}
            onChange={handleChange}
            placeholder="Write your query here..."
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition-colors text-sm disabled:opacity-50 cursor-pointer"
        >
          {loading ? 'Submitting...' : 'Submit Query'}
        </button>
      </form>
    </div>
  );
}