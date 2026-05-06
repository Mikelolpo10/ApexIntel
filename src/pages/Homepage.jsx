import { NavLink } from 'react-router';
import { useState } from 'react';

export default function ApexInsightHomepage() {
  const [activeNav, setActiveNav] = useState('home');

  const newsArticles = [
    {
      id: 1,
      category: 'PATCH NOTES',
      title: 'Season 20 brings massive Legend balancing changes',
      excerpt: 'Respawn Entertainment has released comprehensive patch notes addressing community feedback on Legend abilities and weapon meta.',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=500&fit=crop',
      time: '2 hours ago'
    },
    {
      id: 2,
      category: 'TOURNAMENTS',
      title: 'ALGS Championship reaches record viewership',
      excerpt: 'The Apex Legends Global Series Championship finals broke all previous records with over 500,000 concurrent viewers.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop',
      time: '5 hours ago'
    },
    {
      id: 3,
      category: 'LEGENDS',
      title: 'New Legend "Catalyst" abilities revealed',
      excerpt: 'Data miners have uncovered potential abilities for the upcoming defensive Legend set to release next season.',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=500&fit=crop',
      time: '8 hours ago'
    },
    {
      id: 4,
      category: 'WEAPONS',
      title: 'Wingman receives slight damage nerf in latest update',
      excerpt: 'The beloved hand cannon has been adjusted to better balance the weapon meta in high-level competitive play.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop',
      time: '12 hours ago'
    },
    {
      id: 5,
      category: 'COMMUNITY',
      title: 'Player hits Predator rank using only melee attacks',
      excerpt: 'An incredible feat of skill and patience as one player reaches the highest rank without firing a single bullet.',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=500&fit=crop',
      time: '1 day ago'
    },
    {
      id: 6,
      category: 'ESPORTS',
      title: 'Team Liquid dominates regional qualifiers',
      excerpt: 'North American powerhouse secures their spot in the international championship with a flawless performance.',
      image: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=800&h=500&fit=crop',
      time: '1 day ago'
    }
  ];

  const featuredArticle = {
    category: 'BREAKING NEWS',
    title: 'Broken Moon map receives major update with new POI locations',
    excerpt: 'Respawn has announced sweeping changes to the Broken Moon map, introducing three new points of interest and revamping existing areas based on player feedback and competitive balance.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=600&fit=crop',
    time: '30 minutes ago'
  };

  const navItems = ['HOME', 'LEGENDS', 'WEAPONS', 'TOURNAMENTS', 'GUIDES', 'COMMUNITY'];

  return (
    <>
      <title>Apex Intel</title>

      <div className="min-h-screen bg-primary-muted text-white">

        {/* Header */}
        <header className="bg-overlay-gray-heavy backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center">
              {/* Brand */}
              <div className="mr-auto md:mr-8 flex items-center">
                <h1 className="text-xl font-bold tracking-tight">ApexIntel</h1>
              </div>

              {/* Navigation */}
              <nav className="mr-auto hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item}
                    onClick={() => setActiveNav(item.toLowerCase())}
                    className={`text-sm font-semibold tracking-wide transition-colors ${activeNav === item.toLowerCase()
                      ? 'text-orange'
                      : 'text-white/80 hover:text-white'
                      }`}
                  >
                    {item}
                  </NavLink>
                ))}
              </nav>

              <input type="text" placeholder='Search' className='py-1 px-2 hidden md:flex items-center rounded-lg bg-overlay-gray-light' />

              {/* Mobile Menu Button */}
              <button className="md:hidden text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section - Featured Article */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent z-10"></div>
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-125 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <span className="inline-block bg-primary-red px-3 py-1 text-xs font-bold mb-3">
                  {featuredArticle.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-white/90 mb-4 max-w-3xl">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span>{featuredArticle.time}</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </section>

          {/* Latest News Section */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Latest News</h2>
              <a href="#" className="text-orange hover:text-orange-light font-semibold text-sm flex items-center gap-2">
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article) => (
                <div key={article.id} className="bg-black/40 rounded-lg overflow-hidden hover:bg-black/60 transition-colors group cursor-pointer border border-white/10">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-primary-darkest px-3 py-1 text-xs font-bold">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-white/50">
                      <span>{article.time}</span>
                    </div>
                  </div>
                </div>
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
        <footer className="bg-black/60 border-t border-white/10 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-4">ApexInsight</h3>
                <p className="text-white/60 text-sm">
                  Your ultimate source for Apex Legends news, guides, and competitive updates.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-orange">Content</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">Latest News</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Legend Guides</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Weapon Stats</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tournament Coverage</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-orange">Community</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Submit News</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contributors</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-orange">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-xl">𝕏</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-xl">▶</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-orange rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-xl">📘</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
              <p>&copy; 2026 ApexInsight. All rights reserved. Not affiliated with EA or Respawn Entertainment.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}