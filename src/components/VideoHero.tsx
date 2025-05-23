'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  const videoUrl = "/videos/hero.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      console.log('Video metadata loaded', video.videoWidth, video.videoHeight);
      video.play().catch(e => console.warn('Autoplay prevented:', e));
    };

    video.addEventListener('loadedmetadata', handleLoaded);
    video.addEventListener('error', () => {
      console.error('Video error', video.error);
      setHasError(true);
    });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      video.removeEventListener('error', () => setHasError(true));
    };
  }, []);

  return (
    <div className="relative w-full aspect-video bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ backgroundColor: 'transparent' }}
        poster="/images/fallback-hero.jpg"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover World-Class Events
          </h1>
          <Link 
            href="/events"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-200"
          >
            Browse Events
          </Link>
        </div>
      </div>

      {hasError && (
        <Image
          src="/images/fallback-hero.jpg"
          alt="Event background"
          width={1920} // Adjust based on your image dimensions
          height={1080}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
    </div>
  );
}