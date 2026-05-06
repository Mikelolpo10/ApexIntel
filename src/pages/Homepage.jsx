import { Link } from 'react-router';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function ApexInsightHomepage() {
  const newsArticles = [
    {
      id: 1,
      category: 'PATCH NOTES',
      title: 'Season 20 brings massive Legend balancing changes',
      quote: 'Respawn Entertainment has released comprehensive patch notes addressing community feedback on Legend abilities and weapon meta.',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=500&fit=crop',
      time: '2 hours ago'
    },
    {
      id: 2,
      category: 'TOURNAMENTS',
      title: 'ALGS Championship reaches record viewership',
      quote: 'The Apex Legends Global Series Championship finals broke all previous records with over 500,000 concurrent viewers.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop',
      time: '5 hours ago'
    },
    {
      id: 3,
      category: 'LEGENDS',
      title: 'New Legend "Catalyst" abilities revealed',
      quote: 'Data miners have uncovered potential abilities for the upcoming defensive Legend set to release next season.',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=500&fit=crop',
      time: '8 hours ago'
    },
    {
      id: 4,
      category: 'WEAPONS',
      title: 'Wingman receives slight damage nerf in latest update',
      quote: 'The beloved hand cannon has been adjusted to better balance the weapon meta in high-level competitive play.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop',
      time: '12 hours ago'
    },
    {
      id: 5,
      category: 'COMMUNITY',
      title: 'Player hits Predator rank using only melee attacks',
      quote: 'An incredible feat of skill and patience as one player reaches the highest rank without firing a single bullet.',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=500&fit=crop',
      time: '1 day ago'
    },
    {
      id: 6,
      category: 'ESPORTS',
      title: 'Team Liquid dominates regional qualifiers',
      quote: 'North American powerhouse secures their spot in the international championship with a flawless performance.',
      image: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=800&h=500&fit=crop',
      time: '1 day ago'
    }
  ];

  const featuredArticle = {
    category: 'BREAKING NEWS',
    title: 'Broken Moon map receives major update with new POI locations',
    quote: 'Respawn has announced sweeping changes to the Broken Moon map, introducing three new points of interest and revamping existing areas based on player feedback and competitive balance.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=600&fit=crop',
    time: '30 minutes ago'
  };

  return (
    <>
      <title>ApexIntel</title>

      <div className="min-h-screen text-white">

        {/* Header */}
        <Header />

        <main className="before:content-[''] before:fixed before:bg-[url('/images/background-grayscale.jpg')] before:bg-cover before:bg-center before:inset-0 before:-z-20 min-h-screen after:content-[''] after:fixed after:inset-0 after:bg-black/90 after:-z-10" >
          {/* Hero Section - Featured Article */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <Link to='/news/' className="group relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent z-10"></div>
              <div className='rounded-xl overflow-hidden'>
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-125 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <span className="inline-block bg-primary-red px-3 py-1 text-xs font-bold mb-3">
                  {featuredArticle.category}
                </span>
                <h2 className="group-hover:underline max-w-xl text-4xl md:text-3xl font-bold mb-4 underline-offset-4 decoration-[1.5px] leading-tight duration-75">
                  {featuredArticle.title}
                </h2>
                <p className="text-md text-white/90 mb-4 max-w-3xl">
                  {featuredArticle.quote}
                </p>
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span>{featuredArticle.time}</span>
                </div>
              </div>
            </Link>
          </section>

          {/* Latest News Section */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Latest News</h2>
              <Link to='/news' className="text-orange hover:text-orange-light font-semibold text-sm flex items-center gap-2">
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((news) => (
                <NewsCard news={news} />
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Patch Notes', 'Tournaments', 'Legend Guides', 'Weapon Stats', 'Meta Analysis', 'Pro Tips', 'Community Highlights', 'Developer Updates'].map((category) => (
                <div key={category} className="bg-black/40 hover:bg-orange border border-white/10 rounded-lg p-6 text-center cursor-pointer transition-all group">
                  <h3 className="font-bold text-lg group-hover:scale-110 transition-transform">
                    {category}
                  </h3>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}