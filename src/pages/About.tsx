import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, GraduationCap, Award, Shield } from 'lucide-react';
import { PageHero } from '../components/PageHero';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero>
        <div className="text-center pt-32 pb-20">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Meet Vincent Bruno
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Licensed Professional Counselor & Natural Medicine Practitioner
          </p>
        </div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="prose max-w-none">
                <p className="text-xl leading-relaxed mb-8">
                  Welcome, I'm Vincent Bruno, a licensed professional counselor and natural medicine practitioner based in Colorado Springs. My therapeutic journey began when I discovered the profound impact that compassionate, innovative therapy approaches can have on those struggling with trauma and treatment-resistant conditions.
                </p>
                
                <div className="bg-[rgb(var(--color-light-sea-green)/0.05)] rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-[rgb(var(--color-persian-green))]" />
                    Professional Credentials
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-[rgb(var(--color-persian-green))] mt-1" />
                      <span>Licensed Professional Counselor #LPC 0005602</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-[rgb(var(--color-persian-green))] mt-1" />
                      <span>Licensed Clinical Facilitator #NMCF 0000008</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-[rgb(var(--color-persian-green))] mt-1" />
                      <span>Certified Autism Treatment provider</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-[rgb(var(--color-persian-green))] mt-1" />
                      <span>Domestic Violence Full Operating Provider (ret 2020)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/img/headshot.webp"
                alt="Vincent Bruno"
                className="w-full rounded-xl shadow-lg mb-8"
              />
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="pt-8 pb-16">
          <div className="bg-[rgb(var(--color-persian-green))] text-white rounded-xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-white">
                <Shield className="h-6 w-6" />
                My Commitment to You
              </h3>
              <p className="text-lg mb-4 text-white">
                As someone deeply committed to holistic healing, I've dedicated my professional life to providing effective, personalized care that addresses not just symptoms, but the whole person.
              </p>
              <p className="text-lg text-white">
                I believe that everyone deserves access to transformative therapeutic experiences that honor their unique path and promote genuine healing in a completely anonymous and confidential setting.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 text-center bg-[rgb(var(--color-light-sea-green)/0.05)] rounded-2xl px-8 mb-16">
          <div className="inline-block p-3 bg-[rgb(var(--color-persian-green)/0.1)] rounded-2xl mb-6">
            <Heart className="h-8 w-8 text-[rgb(var(--color-persian-green))]" />
          </div>
          <h2 className="text-3xl font-bold text-[rgb(var(--color-midnight-green))] mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg text-[rgb(var(--color-midnight-green)/0.8)] max-w-2xl mx-auto mb-8">
            I welcome the opportunity to discuss how my approach might support your unique needs and goals. I offer free 15-minute consultation calls to answer your questions and help determine if we're a good fit for working together. All consultations are completely anonymous and confidential.
          </p>
          <Link to="/contact" className="primary-button inline-flex">
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}