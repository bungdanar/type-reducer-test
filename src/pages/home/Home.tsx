import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="row justify-content-center">
      <div className="col-sm-6">
        <ul>
          <li>
            <Link to="/product">product</Link>
          </li>
          <li>
            <Link to="/form">form</Link>
          </li>
          <li>
            <Link to="/rencana">rencana</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
