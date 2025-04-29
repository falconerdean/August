import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';
import mushroomsImage from '../img/mushrooms.webp';
import therapyImage from '../img/therapy.webp';
import sexTherapyImage from '../img/pexels-visoesdomundo-2494701.jpg';
import pathImage from '../img/path.webp';

const features = [
  {
    title: 'Natural Medicine Assisted Therapy',
    description: 'Our agency provides our clientele with experienced Licensed Professional Counselors and Clinical Facilitators to guide their journey to health and recovery. Get relief from depression, anxiety, and the symptoms of PTSD.',
    image: mushroomsImage,
    cta: 'Learn More'
  },
  {
    title: 'Assessment',
    description: 'August Advice provides assessments to support veteran VA claims regarding mental health. We utilize both instruments and interviews to craft supporting documents for your claim.',
    image: sexTherapyImage,
    cta: 'Learn More'
  },
  {
    title: 'Standard Therapy',
    description: 'Personalized counseling for anxiety, depression, trauma, and personal growth. Using proven therapeutic techniques tailored to your unique journey.',
    image: therapyImage,
    cta: 'Learn More'
  }
];

const statistics = [
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    value: '80%',
    label: 'of people search for healthcare providers online',
    description: "If your website isn't optimized, potential clients won't find you."
  },
  {
    image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=800&q=80',
    value: '75%',
    label: 'judge credibility based on website design',
    description: 'A professional, modern site makes you trustworthy and approachable.'
  },
  {
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    value: '57%',
    label: "won't recommend businesses with poor mobile sites",
    description: "If your site isn't fast and mobile-friendly, you could be losing referrals."
  }
];

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero>
        {/* Hero Section */}
        <section className="min-h-[600px] flex items-center px-4 pt-48 pb-32 md:pt-56 md:pb-40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="max-w-4xl mx-auto fade-in">
                <h1 className="hero-text text-white mb-4">
                  Natural Medicine-Assisted Therapy
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  August Advice is a professional counseling service providing treatment for mental health conditions using both conventional and psychedelic-assisted therapy.
                </p>
                <img 
                  src="/src/img/transparentlogo.png" 
                  alt="August Advice Therapy Logo" 
                  className="hero-logo"
                />
                <Link to="/contact" className="primary-button inline-flex mx-auto mt-8">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PageHero>

      {/* Services Section */}
      <section className="pt-12 pb-24 bg-[#2A7C6F]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Services</h2>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="group flex flex-col rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-8 pb-4">
                    <h3 className="text-2xl font-semibold text-[rgb(var(--color-midnight-green))] text-center text-[24px] font-semibold">{feature.title}</h3>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[200px] object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <p className="text-[rgb(var(--color-midnight-green))/0.8] mb-4 min-h-[72px]">{feature.description}</p>
                    <Link 
                      to={`/services${
                        index === 0 ? '#natural-medicine' :
                        index === 1 ? '#sex-therapy' :
                        '#individual-therapy'
                      }`}
                      className="inline-flex items-center justify-center px-6 py-2 bg-[rgb(var(--color-persian-green))] text-white rounded-full transform transition-transform duration-300 hover:-translate-y-1 font-medium"
                    >
                      {feature.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-12 pb-12 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-[rgb(var(--color-light-sea-green)/0.1)] text-center">
              <h2 className="section-title text-center">Your Path to Healing and Growth</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
                <div className="space-y-8">
                  <img
                    src={pathImage}
                    alt="Healing journey visualization"
                    className="rounded-2xl shadow-lg w-full object-cover aspect-4/3"
                  />
                  <blockquote className="text-2xl font-display italic text-navy-800 font-bold text-center">
                    "The secret of health for both mind and body is not to mourn for the past, nor to worry about the future, but to live the present moment wisely and earnestly."
                    <footer className="mt-2 text-xl text-navy-700 font-bold">— Buddha</footer>
                  </blockquote>
                </div>
                <div className="text-left">
                  <div className="space-y-4 text-lg text-navy-700">
                    <p>At August Advice Counseling, we combine innovative approaches to help those struggling with treatment-resistant conditions. Our integrated method includes:</p>
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[rgb(var(--color-persian-green))] flex-shrink-0"></div>
                        <span>Traditional talk therapy for emotional processing and insight</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[rgb(var(--color-persian-green))] flex-shrink-0"></div>
                        <span>Natural medicine-assisted treatments for deeper healing</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[rgb(var(--color-persian-green))] flex-shrink-0"></div>
                        <span>Physical and sensory interventions for whole-person care</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[rgb(var(--color-persian-green))] flex-shrink-0"></div>
                        <span>Personalized approaches tailored to your unique needs</span>
                      </li>
                    </ul>
                    <p className="mt-6">We create customized healing experiences for PTSD, intimacy issues, and various mental health challenges.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                <Link to="/about" className="primary-button">
                  Discover Our Approach
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/about" className="secondary-button">
                  Background &amp; qualifications
                  <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center bg-teal-700/90 rounded-2xl p-8 backdrop-blur-sm">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Vincent Bruno"
                  className="rounded-2xl shadow-2xl w-full mx-auto object-cover mb-4"
                />
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/u31qwQUeGuM"
                    title="Vincent Bruno introduces his practice"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-teal-900/20 to-transparent"></div>
              </div>
              <div className="text-white">
                <h2 className="text-5xl font-display mb-2 text-white font-semibold drop-shadow-lg">The Founder</h2>
                <h3 className="text-2xl font-display mb-6 text-teal-100">Vincent Bruno, Licensed Therapist</h3>
                <p className="text-xl leading-relaxed text-white mb-6">
                  As a licensed therapist with advanced training in Natural Medicine-Assisted therapy, I'm dedicated to helping clients experiencing trauma, depression, anxiety, and personal growth challenges. My integrative approach combines evidence-based techniques with compassionate care to support your unique healing journey.
                </p>
                <p className="text-xl leading-relaxed text-white mb-8">
                  With extensive experience, I bring extensive knowledge in trauma treatment, harm reduction, and support for neurodivergent clients. My compassionate, client-centered approach creates a safe space for profound healing and transformation.
                </p>
                <Link to="/about" className="inline-flex items-center text-white hover:text-teal-100 transition-colors font-medium">
                  Learn more about our approach
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <div className="bg-teal-800/50 rounded-xl p-6 mt-10">
                  <h4 className="text-2xl font-display font-bold mb-4 text-teal-100">Credentials & Certifications</h4>
                  <ul className="space-y-2 text-white">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-200"></div>
                      <span>Licensed Professional Counselor</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-200"></div>
                      <span>Natural Medicine Practitioner</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-200"></div>
                      <span>Certified Trauma Professional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-teal-200"></div>
                      <span>Member, American Counseling Association</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}