"use client";

import DivisionCard from "@/components/ui/DivisionCard";
import { motion } from "framer-motion";

export default function Divisions() {
  return (
    <section id="divisions" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-4 text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
          Our <span className="text-blue-600">Divisions</span>
        </h3>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          A flexible portfolio that grows with market needs — built, funded, and supported through Sinneo Group.
        </p>
      </div>

      <div className="mt-16 grid gap-10 max-w-6xl mx-auto px-4 md:grid-cols-2">
        {/* Sinneo Consulting */}
        <motion.div
          whileHover={{ scale: 1.02, rotate: "-1deg" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <DivisionCard
            imageSrc="/consulting.jpg"
            title="Sinneo Consulting"
            tagline="AI-driven strategy"
            desc="AI-enabled business transformation, workflows, and automation tailored for SMEs."
            align="center"
            learnMore
            modalContent={
              <>
                <p>
                  Sinneo Consulting works with growing businesses to optimize operations, implement automation, and
                  future-proof strategy with the power of AI and smart processes.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-1">
                  <li>AI-driven process design</li>
                  <li>Operational efficiency for SMEs</li>
                  <li>Custom workflow automation</li>
                  <li>Business diagnostics & audits</li>
                </ul>
              </>
            }
          />
        </motion.div>

        {/* Vizurely */}
        <motion.div
          whileHover={{ scale: 1.02, rotate: "1deg" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <DivisionCard
            imageSrc="/vizurely.png"
            title="Vizurely"
            tagline="No-code BI"
            desc="Lightweight, plug-and-play BI, reporting, and data automation platform."
            align="center"
            learnMore
            modalContent={
              <>
                <p>
                  Vizurely is a no-code business intelligence tool for real-time reporting and data visualization.
                  Designed with non-technical users in mind, Vizurely enables instant dashboarding and automation.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-1">
                  <li>Easy integrations (Google Sheets, Notion, Airtable)</li>
                  <li>Instant dashboards & charts</li>
                  <li>Custom triggers and data alerts</li>
                  <li>Perfect for resource-limited teams</li>
                </ul>
              </>
            }
          />
        </motion.div>

        {/* Sinneo Logistics */}
        <motion.div
          whileHover={{ scale: 1.02, rotate: "-1deg" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <DivisionCard
            imageSrc="/logistics.jpg"
            title="Sinneo Logistics"
            tagline="Smart distribution"
            desc="Advanced route planning, fleet optimization, and logistics tech stack for modern distribution."
            align="center"
            learnMore
            modalContent={
              <>
                <p>
                  Sinneo Logistics provides software and systems to help logistics businesses move faster, cheaper, and
                  smarter. Built for Africa’s complex logistics networks.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-1">
                  <li>Dynamic route optimization</li>
                  <li>Fleet tracking dashboards</li>
                  <li>Predictive delivery estimation</li>
                  <li>Works with low-connectivity environments</li>
                </ul>
              </>
            }
          />
        </motion.div>

        {/* 🚀 New Division: Sinneo Amplify */}
        <motion.div
          whileHover={{ scale: 1.02, rotate: "1deg" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="h-full"
        >
          <DivisionCard
            imageSrc="/Gemini_Generated_Image_c4zhvnc4zhvnc4zh.png"
            title="Sinneo Amplify"
            tagline="AI-powered brand growth"
            desc="Boosting content, engagement, and brand voice using generative AI."
            align="center"
            learnMore
            modalContent={
              <>
                <p>
                  Sinneo Amplify helps brands unlock the power of generative AI for marketing, communications, and
                  customer engagement. We make sure your brand sounds smarter, moves faster, and connects deeper.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-1">
                  <li>AI-generated content (blogs, posts, emails, more)</li>
                  <li>Personalized campaigns & messaging</li>
                  <li>Brand voice modeling with GPT-powered tools</li>
                  <li>Multi-platform content scheduling & insights</li>
                </ul>
              </>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
