import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import speakers from '../../data/speakers';

const SpeakersSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollByCard = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.children[0]?.offsetWidth || 300;
    const gap = 24; // gap-6
    container.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' });
  };

  return (
    <section className="bg-gold py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="section-title mb-5">Meet our seasoned speakers</h2>
            <p className="lede !text-ink/80">
              Learn from industry leaders, innovators, and visionaries who are shaping the future of work and technology.
            </p>
          </div>

          <div className="hidden lg:flex gap-2 shrink-0">
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Previous speakers"
              className="w-12 h-12 flex items-center justify-center rounded-md border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white transition-colors"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Next speakers"
              className="w-12 h-12 flex items-center justify-center rounded-md border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white transition-colors"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Desktop horizontal scroll */}
        <div
          ref={scrollContainerRef}
          className="hidden lg:flex gap-6 overflow-x-auto pb-2 snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {speakers.map((speaker) => (
            <div key={speaker.id} className="flex-shrink-0 w-72 snap-start">
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6">
          {speakers.slice(0, 4).map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        <div className="mt-12">
          <Link to="/speakers" className="btn btn-secondary px-8">
            See all speakers
          </Link>
        </div>
      </div>
    </section>
  );
};

const SpeakerCard = ({ speaker }) => (
  <Link to="/speakers" className="group block">
    <div className="aspect-[4/5] overflow-hidden rounded-lg bg-ink/10">
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="pt-4">
      <h3 className="text-xl font-bold text-ink underline-offset-4 decoration-2 group-hover:underline">
        {speaker.name}
      </h3>
      <p className="text-ink/80 font-medium mt-1">{speaker.title}</p>
      <p className="text-ink/70 text-sm mt-0.5">{speaker.company}</p>
    </div>
  </Link>
);

export default SpeakersSection;
