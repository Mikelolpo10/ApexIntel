import { NavLink } from "react-router"

export default function NewsCard({ news }) {
  return (
    <NavLink key={news.id} to='/news/id' className="group bg-black/40 rounded-lg overflow-hidden hover:bg-black/60 transition-colors cursor-pointer border border-white/10">
    <div className="relative overflow-hidden">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className='group-hover:opacity-50 absolute inset-0 h-100 w-100 bg-black opacity-0 transition-opacity duration-300'></div>
      <span className="absolute top-3 left-3 bg-primary-darkest px-3 py-1 text-xs font-bold">
        {news.category}
      </span>
    </div>
    <div className="p-5">
      <h3 className="group-hover:text-orange group-active:text-orange-light text-xl font-bold mb-2 transition-colors">
        {news.title}
      </h3>
      <p className="text-white/70 text-sm mb-4 line-clamp-2">
        {news.quote}
      </p>
      <div className="flex items-center gap-3 text-xs text-white/50">
        <span>{news.time}</span>
      </div>
    </div>
  </NavLink>
  )
}