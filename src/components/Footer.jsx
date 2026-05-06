import { Link } from "react-router"

export default function Footer() {
  return (
    <footer className="bg-black/60 border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6">
          <h3 className="font-bold text-xl mb-4">ApexIntel</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-2 text-orange">Content</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/news" className="hover:text-white transition-colors">Latest News</Link></li>
              <li><Link to="/guides" className="hover:text-white transition-colors">Legend Guides</Link></li>
              <li><Link to="/weapons" className="hover:text-white transition-colors">Weapon Stats</Link></li>
              <li><Link to="/tournaments" className="hover:text-white transition-colors">Tournament Coverage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-orange">Community</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/discord" className="hover:text-white transition-colors">Discord</Link></li>
              <li><Link to="/forums" className="hover:text-white transition-colors">Forums</Link></li>
              <li><Link to="/submit" className="hover:text-white transition-colors">Submit News</Link></li>
              <li><Link to="/contributors" className="hover:text-white transition-colors">Contributors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-orange">Follow Us</h4>
            <div className="flex gap-4">
              <a href="" className="w-10 h-10 bg-white/10 hover:bg-orange rounded-lg flex items-center justify-center transition-colors">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="" className="w-10 h-10 bg-white/10 hover:bg-orange rounded-lg flex items-center justify-center transition-colors">
                <span className="text-xl">▶</span>
              </a>
              <a href="" className="w-10 h-10 bg-white/10 hover:bg-orange rounded-lg flex items-center justify-center transition-colors">
                <span className="text-xl">📘</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>&copy; 2026 ApexIntel. All rights reserved. Not affiliated with EA or Respawn Entertainment.</p>
        </div>
      </div>
    </footer>
  )
}