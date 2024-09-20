import "./TopNavbar.css"
export default function TopNavbar({handleLoginClick}) {
  return (    
      <nav>
        <h1 className="brand">
          <a href="">DoXo</a>
        </h1>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="">Product</a>
          </li>
          <li className="nav-item">
            <a href="">Documentation</a>
          </li>
          <li className="nav-item">
            <button onClick={handleLoginClick} className="button">Login</button>
          </li>
        </ul>
      </nav>
    
  );
}
