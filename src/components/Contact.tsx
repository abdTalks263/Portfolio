import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (status !== 'sending') setStatus('idle');
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      await emailjs.send('service_yd3437o', 'template_nwangd4', {
        to_name: 'Muhammad Abdullah Latif', from_name: formData.name,
        from_email: formData.email, from_message: formData.message
      }, 'BWSf1V79iWJdZKv9v');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch { setStatus('error'); }
  };
  return <section id="contact" className="section contact-section">
    <div className="section-intro"><h2>LET’S TALK<span className="accent">.</span></h2><p>Have a project in mind?<br />I’d love to hear about it.</p></div>
    <div className="contact-grid"><div className="contact-info"><span className="eyebrow">GET IN TOUCH</span><a className="contact-email" href="mailto:abdullahlatifrandhawa@gmail.com">abdullahlatifrandhawa<br />@gmail.com <span aria-hidden="true">↗</span></a><a href="tel:+923114290712">(+92) 311-4290712</a><p>Lahore, Pakistan</p><div className="social-links"><a href="https://www.linkedin.com/in/muhammad-abdullah-latif-70b8b7237/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href="https://github.com/abdTalks263" target="_blank" rel="noopener noreferrer">GITHUB ↗</a></div></div>
    <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact Muhammad Abdullah Latif"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required value={formData.name} onChange={handleChange} placeholder="Name" disabled={status === 'sending'} /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" disabled={status === 'sending'} /><label htmlFor="message">What do you have in mind?</label><textarea id="message" name="message" rows={3} required value={formData.message} onChange={handleChange} placeholder="Tell me about your project…" disabled={status === 'sending'} /><button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'SENDING…' : 'SEND MESSAGE'}<span aria-hidden="true">↗</span></button><div aria-live="polite">{status === 'success' && <p className="form-status">Message sent. Thanks for getting in touch!</p>}{status === 'error' && <p className="form-status">Your message couldn’t be sent. Please try again or <a href="mailto:abdullahlatifrandhawa@gmail.com">email me directly</a>.</p>}</div></form></div>
  </section>;
};
export default Contact;
