"use client";

import { useState, useRef } from "react";

const reviews = [
  {
    name: "Gautam Sharma",
    text: "Excellent service and very transparent advice. Highly recommended for insurance planning.",
  },
  {
    name: "Priya Verma",
    text: "Very professional and supportive team. They explained everything clearly.",
  },
  {
    name: "Ishan Pandita",
    text: "Excellent. Thankyou Sanjay sir and team for providing services and building my portfolio for long time"
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
    name: "Umar Sadiq",
    text: "Got the best and chepeast insurance with all benefits for my car "
  },
  {
    name: "Sandeep Mehta",
    text: "They helped me choose the perfect health insurance plan.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const itemsPerView =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  const maxIndex = reviews.length - itemsPerView;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();

    touchStartX.current = null;
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          What Our Customers Say
        </h2>
        <p className="text-slate-600 mt-3 mb-14">
          Trusted by thousands of satisfied clients from last 27 years
        </p>

        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / itemsPerView)
              }%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 px-4 flex-shrink-0"
              >
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition">
                  <p className="text-slate-600 mb-4">
                    “{review.text}”
                  </p>
                  <h4 className="font-semibold text-slate-900">
                    {review.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots for ALL devices */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
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