'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Card = () => {
  return (
    <div className="relative max-w-sm rounded-2xl backdrop-opacity-40  border bg-white/20   border-white/60 p-6 text-white shadow-lg">
      {/* Title */}
      <h2 className="text-2xl  mb-3 font-bold">
        Business{' '}
        <span className="text-color-gradient">
          Marketing & 
        </span> <br />
        <span className="text-color-gradient">
          Consulting
        </span>
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        We have a strong team of professionals <br />including{' '}
        real estate developers <br />
        , Architecture & Engineering (A&E), legal/ <br />compliance, blockchain
        engineers,<br /> programmers, marketers/advertising,<br /> writers, public
        relations, and much more.
      </p>

      {/* Button */}
      <button className="flex items-center gap-2 btn-gradient text-white font-medium px-5 py-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
        Our Team <ArrowRight size={16} />
      </button>

      {/* Optional background blur effect (if overlay on image) */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-black/30 backdrop-blur-md" />
    </div>
  );
};

export default Card;
