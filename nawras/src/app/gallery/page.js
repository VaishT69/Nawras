'use client'

import { useState } from 'react';
import VideoComponent from '@/components/VideoComponent/VideoComponent';
// import VideoCarousel from '@/components/VideoCarousel/VideoCarousel'
export default function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    'n-cCuPy2o7g',
    'Ws3GQX5C9kM',
    'G7Nb2GFPgPw',
    'Hdt9MuQXB9E',
    'qxq152kPgpc',
    '_WBbaU1GGZE',
    'vC4pKMeNhgU',
    '-oIJQHwjOFg',
    'XQ3MQXvOufo',
  ];

  return (
    <main>
      {/* <section className="px-4 py-16 bg-[#EFE3B5] rounded-4xl "> */}
<section>
    <VideoComponent/>
    {/* <VideoCarousel/> */}
      </section>
    </main>
  );
}
