import { Link } from "react-router"

export default function MainCard({ name, nickname, path, img }) {
  return (
    <Link to={path} className="group relative flex flex-col items-center justify-center border-overlay-gray-light border rounded-2xl bg-overlay-medium overflow-hidden">
      <img src={img} alt={name} className="hover:brightness-10 transition-all duration-200" />
      <div className="absolute flex flex-col items-center origin-bottom group-hover:scale-y-100 scale-y-0 transition-all duration-200 pointer-events-none">
        <h3 className="text-text-secondary text-2xl font-bold">{name}</h3>
        <small className="text-text-secondary">{nickname}</small>
      </div>
    </Link>
  )
}