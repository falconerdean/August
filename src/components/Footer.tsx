import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setEmail('');
    setMessage('');
  };

  return (
    <footer className="bg-[rgb(var(--color-midnight-green))] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-display mb-6 text-[rgb(var(--color-light-sea-green))]">August Advice Counseling</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-[rgb(var(--color-light-sea-green))] flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Primary Location</p>
                  <p className="text-white">1422 North Hancock Drive</p>
                  <p className="text-white">Colorado Springs, CO 80903</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-[rgb(var(--color-light-sea-green))]" />
                <a href="tel:719-330-3366" className="text-white hover:text-[rgb(var(--color-light-sea-green))] transition-colors">719-330-3366</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-[rgb(var(--color-light-sea-green))]" />
                <a href="mailto:vbruno@augustadvice.com" className="text-white hover:text-[rgb(var(--color-light-sea-green))] transition-colors">vbruno@augustadvice.com</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-display mb-6 text-white">Reach Out</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-[rgb(var(--color-persian-green)/0.1)] border border-[rgb(var(--color-persian-green)/0.2)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-persian-green))] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-[rgb(var(--color-persian-green)/0.1)] border border-[rgb(var(--color-persian-green)/0.2)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-persian-green))] focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[rgb(var(--color-persian-green))] hover:bg-[rgb(var(--color-persian-green)/0.9)] rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-[rgb(var(--color-midnight-green)/0.6)]">
          <div className="flex flex-col items-center gap-4">
            <p className="text-white text-center">© 2025 All Rights Reserved ✦ August Advice Counseling</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-white hover:text-[rgb(var(--color-light-sea-green))] transition-colors">Privacy & Terms</Link>
              <Link to="/good-faith-estimate" className="text-white hover:text-[rgb(var(--color-light-sea-green))] transition-colors">Good Faith Estimate</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}