import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
        <p>NotFound</p>
        <Link to="todos">todos</Link>
    </div>
  )
}

export default NotFound