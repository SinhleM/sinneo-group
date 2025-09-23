// File: app/page.tsx
// Sinneo Group - Landing Page component
// Design: Istenvie inspired, Tailwind CSS, Framer Motion for subtle animations
'use client';

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Page container */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Header / Nav */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-400 flex items-center justify-center text-white font-semibold">SG</div>
            <div>
              <h1 className="text-lg font-semibold">Sinneo Group</h1>
              <p className="text-sm text-gray-500">Building ventures that transform business</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:underline">About</a>
            <a href="#divisions" className="hover:underline">Divisions</a>
            <a href="#impact" className="hover:underline">Innovation</a>
            <a href="#news" className="hover:underline">News</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <Link href="#contact" className="ml-4 inline-block rounded-md px-4 py-2 border border-transparent bg-sky-600 text-white text-sm">Inquire</Link>
          </nav>
        </header>

        {/* Hero */}
        <motion.section initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <p className="text-sm text-sky-600 font-medium">Trusted by ambitious businesses</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">Sinneo Group, building future-ready ventures that scale</h2>
            <p className="mt-6 text-gray-600 max-w-xl">We launch and operate companies that solve real problems, from AI-driven data products to logistics optimization. Our group model combines consulting, product delivery, and operational excellence to create measurable value for clients and partners.</p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-block rounded-md px-6 py-3 bg-indigo-600 text-white font-medium">Work with us</a>
              <a href="#divisions" className="inline-block rounded-md px-6 py-3 border border-gray-200 text-gray-700">Explore divisions</a>
            </div>

            <div className="mt-8 text-xs text-gray-500">Backed by Sinneo Group — Virzurely, Sinneo Logistics, Sinneo Consulting</div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Featured product</p>
                  <h3 className="text-lg font-semibold">Virzurely</h3>
                </div>
                <div className="text-sm text-gray-500">SaaS, BI for SMEs</div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-3 border rounded-lg">
                  <p className="text-xs text-gray-400">Sales</p>
                  <p className="font-medium">R324,500</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="text-xs text-gray-400">Expenses</p>
                  <p className="font-medium">R124,300</p>
                </div>
                <div className="p-3 border rounded-lg col-span-2">
                  <p className="text-xs text-gray-400">Top insight</p>
                  <p className="font-medium">Stockouts cost 12% in lost sales, fix reorder points</p>
                </div>
              </div>

              <div className="mt-6 text-right">
                <a href="#contact" className="text-sm font-medium text-indigo-600">Request a demo</a>
              </div>
            </div>

            <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-100 to-sky-50 opacity-80 blur-lg" />
          </div>
        </motion.section>

        {/* About */}
        <section id="about" className="mb-16">
          <div className="max-w-4xl">
            <h3 className="text-2xl font-semibold">About Sinneo Group</h3>
            <p className="mt-4 text-gray-600">Sinneo Group is a modern conglomerate that builds, invests in, and operates businesses that solve practical problems. We combine product thinking, technology, and operational know-how to help companies and communities thrive.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">Mission</h4>
                <p className="mt-2 text-sm text-gray-600">Create scalable ventures that deliver measurable economic and social impact.</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">Vision</h4>
                <p className="mt-2 text-sm text-gray-600">Be the trusted partner for African businesses embracing digital transformation.</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">Values</h4>
                <p className="mt-2 text-sm text-gray-600">Integrity, clarity, long-term focus, and technology-forward thinking.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divisions / Services */}
        <section id="divisions" className="mb-16">
          <h3 className="text-2xl font-semibold">Our Divisions</h3>
          <p className="mt-2 text-gray-600 max-w-2xl">A flexible portfolio that grows with market needs, funded and supported through Sinneo Group.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Sinneo Consulting" desc="AI-enabled business transformation, workflows, and automation for SMEs." />
            <Card title="Virzurely" desc="Lightweight, plug-and-play BI, reporting, and data automation for SMEs." highlight />
            <Card title="Sinneo Logistics" desc="Route planning, fleet optimization, and logistic tech solutions to improve margins." />
          </div>
        </section>

        {/* Innovation & Impact */}
        <section id="impact" className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Innovation and Impact</h3>
              <p className="mt-4 text-gray-600">We focus on responsible growth, sustainable operations, and inclusive technology. Our products are designed to be low energy, privacy-first, and practical for the South African context, POPIA compliant, and simple to use.</p>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Modular product design for lower maintenance and better reliability.</li>
                <li>AI that augments human work, not replace it, to improve productivity.</li>
                <li>Local-first solutions, built for Johannesburg and Cape Town markets, with global ambitions.</li>
              </ul>
            </div>

            <div className="flex-1 bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold">Impact snapshot</h4>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Stat label="SMEs onboarded" value="28" />
                <Stat label="Avg time saved" value="12 hrs/mo" />
                <Stat label="Reduction in errors" value="84%" />
                <Stat label="POPIA compliant" value="Yes" />
              </div>
            </div>
          </div>
        </section>

        {/* News / Updates */}
        <section id="news" className="mb-16">
          <h3 className="text-2xl font-semibold">News and Updates</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <NewsCard title="Virzurely public beta launches" date="Sep 8, 2025" excerpt="Lightweight BI for SMEs, first 50 users offered discounted pricing." />
            <NewsCard title="Sinneo Group partners with local fleet" date="Aug 14, 2025" excerpt="Pilot for route optimization and fuel savings begins in Gauteng." />
            <NewsCard title="POPIA best practices guide published" date="Jul 22, 2025" excerpt="Free resource for small businesses, covers compliant data handling." />
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="mb-16">
          <h3 className="text-2xl font-semibold">Leadership</h3>
          <p className="mt-2 text-gray-600">A small, experienced team focused on execution and integrity.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Leader name="Sinhle Mkhabela" role="Founder & CEO" bio="Product and cloud strategist, focused on data and operations." />
            <Leader name="Anele Dlamini" role="Head of Product" bio="Design and UX lead, building human centered experiences." />
            <Leader name="Nokuthula M" role="Head of Ops" bio="Operations and logistics specialist with local market experience." />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-24">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="mt-2 text-gray-600">For partnerships, demos, or media enquiries, get in touch.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <form className="space-y-4 bg-white rounded-lg shadow p-6" onSubmit={(e) => {
              e.preventDefault()
              const form = e.target as HTMLFormElement
              const data = new FormData(form)
              const subject = encodeURIComponent(`Inquiry from ${data.get('name')}`)
              const body = encodeURIComponent(`Email: ${data.get('email')}%0D%0AMessage:%0D%0A${data.get('message')}`)
              window.location.href = `mailto:hello@sinneo.co.za?subject=${subject}&body=${body}`
            }}>
              <div>
                <label className="text-sm font-medium">Name</label>
                <input name="name" required className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-3" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" name="email" required className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-3" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea name="message" required rows={4} className="mt-2 block w-full rounded-md border-gray-200 shadow-sm p-3" />
              </div>
              <div className="text-right">
                <button type="submit" className="inline-block rounded-md px-5 py-2 bg-indigo-600 text-white font-medium">Send inquiry</button>
              </div>
            </form>

            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="font-semibold">Head office</h4>
                <p className="mt-2 text-sm text-gray-600">Johannesburg, South Africa</p>
                <p className="mt-1 text-sm text-gray-600">Email: hello@sinneo.co.za</p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="font-semibold">Follow</h4>
                <div className="mt-3 flex gap-3">
                  <a href="#" aria-label="LinkedIn" className="text-sm">LinkedIn</a>
                  <a href="#" aria-label="Twitter" className="text-sm">X</a>
                  <a href="#" aria-label="Instagram" className="text-sm">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-6 pb-12 text-sm text-gray-500">
          <div className="flex items-center justify-between">
            <div>© {new Date().getFullYear()} Sinneo Group. All rights reserved.</div>
            <div>Terms · Privacy · POPIA compliant</div>
          </div>
        </footer>
      </section>
    </main>
  )
}

/* --- Small presentational components used above --- */

function Card({ title, desc, highlight }: { title: string, desc: string, highlight?: boolean }) {
  return (
    <div className={"p-6 rounded-lg shadow-sm bg-white " + (highlight ? 'border-2 border-indigo-100' : '')}>
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
      <div className="mt-4">
        <a href="#contact" className="text-sm font-medium text-indigo-600">Learn more</a>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-3 border rounded">
      <div className="text-xs text-gray-400">{label}</div>
      <div className="font-medium mt-1">{value}</div>
    </div>
  )
}

function NewsCard({ title, date, excerpt }: { title: string, date: string, excerpt: string }) {
  return (
    <article className="p-4 bg-white rounded-lg shadow-sm">
      <div className="text-xs text-gray-400">{date}</div>
      <h5 className="font-semibold mt-2">{title}</h5>
      <p className="mt-2 text-sm text-gray-600">{excerpt}</p>
      <div className="mt-4">
        <a href="#" className="text-sm text-indigo-600">Read more</a>
      </div>
    </article>
  )
}

function Leader({ name, role, bio }: { name: string, role: string, bio: string }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-center">
      <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-sky-300 to-indigo-400 flex items-center justify-center text-white font-semibold">{name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
      <div className="mt-4 font-medium">{name}</div>
      <div className="text-sm text-gray-500">{role}</div>
      <p className="mt-2 text-sm text-gray-600">{bio}</p>
    </div>
  )
}
