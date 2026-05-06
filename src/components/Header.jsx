import { NavLink } from "react-router";

export default function Header() {
  const navItems = ['HOME', 'LEGENDS', 'WEAPONS', 'TOURNAMENTS', 'GUIDES', 'COMMUNITY'];

  return (
    <header className="bg-overlay-gray-heavy backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">
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
                to={`/${item == 'HOME' ? '' : item}`}
                className={({isActive}) => (
                  `${isActive ? 'text-orange' : ''} text-sm font-semibold tracking-wide transition-colors`
                )}
              >
                {item}
              </NavLink>
            ))}
          </nav>

          <input type="text" placeholder='Search' className='py-1 px-2 hidden md:flex items-center rounded-md bg-overlay-gray-light text-sm' />

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}