'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "./Modal";

interface DivisionCardProps {
  imageSrc: string;
  title: string;
  desc: string;
  align: "left" | "right";
  highlight?: boolean;
  learnMore?: boolean;
  modalContent?: React.ReactNode;
}

export default function DivisionCard({
  imageSrc,
  title,
  desc,
  align,
  highlight = false,
  learnMore = false,
  modalContent,
}: DivisionCardProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const isLeftAligned = align === "left";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className={`relative w-full rounded-3xl shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden
          ${highlight ? "bg-blue-600 text-white" : "bg-white text-black"}`}
      >
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16
            ${isLeftAligned ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          {/* Image Block */}
          <div className="relative w-full md:w-1/2 h-64 overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className={`flex flex-col gap-4 w-full md:w-1/2 p-8 ${isLeftAligned ? "text-left" : "text-right"}`}>
            <h4 className="text-3xl font-bold">{title}</h4>
            <p className="text-lg">{desc}</p>

            {learnMore && (
              <div className={`mt-4 ${isLeftAligned ? "text-left" : "text-right"}`}>
                <button
                  onClick={() => setIsOpen(true)}
                  className={`inline-flex items-center gap-2 font-medium transition-colors cursor-pointer
                    ${highlight ? "text-white hover:text-gray-200" : "text-blue-600 hover:text-blue-800"}`}
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal Component */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title}>
        {modalContent}
      </Modal>
    </>
  );
}
