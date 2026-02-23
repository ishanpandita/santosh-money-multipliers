"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Gautam Sharma",
    text: "Excellent service and very transparent advice. Highly recommended for insurance planning.",
  },
  {
    name: "Priya Verma",
    text: "Visited the office. Very professional and supportive team.",
  },
  {
    name: "Amit Singh",
    text: "Quick response and smooth claim process. Truly trustworthy service.",
  },
  {
    name: "Neha Kapoor",
    text: "Best financial guidance I’ve received. Very honest and reliable.",
  },
  {
    name: "Sandeep Mehta",
    text: "They helped me choose the perfect health insurance plan.",
  },
  {
    name: "Ishan Pandita",
    text: "Sanjay sir and team helped me personally for long time. Excellent services "
  },
  {
    name: "Umar Sadiq",
    text: "Amazing professionals helped me to create a significant portfolio"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          What Our Customers Say
        </h2>
        <p className="text-slate-600 mt-3 mb-14">
          Trusted by thousands of satisfied clients from last 27 years
        </p>

        {/* Desktop View (3 Cards) */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition"
            >
              <p className="text-slate-600 mb-4">“{review.text}”</p>
              <h4 className="font-semibold text-slate-900">
                {review.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Mobile View (1 Card Swipe) */}
        <div className="md:hidden overflow-x-auto scroll-smooth flex snap-x snap-mandatory gap-6 pb-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-full snap-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <p className="text-slate-600 mb-4">“{review.text}”</p>
              <h4 className="font-semibold text-slate-900">
                {review.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Dot Navigation (Desktop Only) */}
        <div className="hidden md:flex justify-center mt-8 space-x-3">
          {Array.from({ length: reviews.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === index
                  ? "bg-teal-600"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}