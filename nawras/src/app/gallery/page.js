'use client'

import { useState } from 'react';

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
      <section className="px-4 py-16 bg-[#EFE3B5] rounded-4xl ">
        <h1 className="text-4xl md:text-6xl font-black text-black text-center pb-10">
          Latest Videos
        </h1>
        <hr className='w-2 h-2 bg-black '/>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((videoId, i) => (
              <div
                key={i}
                className="w-full aspect-video cursor-pointer"
                onClick={() => setSelectedVideo(videoId)}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  className="w-full h-full rounded-xl shadow-md pointer-events-none"
                  title={`YouTube video ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>

        {/* Fullscreen Modal */}
        {selectedVideo && (
            <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.9)] flex items-center justify-center">
            <div className="relative w-full h-full max-w-6xl max-h-[80vh] p-4">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Fullscreen Video"
              />
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
