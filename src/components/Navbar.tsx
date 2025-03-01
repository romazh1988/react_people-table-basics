import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      data-cy="nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            className={`navbar-item ${location.pathname === '/' ? 'has-background-grey-lighter' : ''}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`navbar-item ${location.pathname === '/people' ? 'has-background-grey-lighter' : ''}`}
            to="/people"
          >
            People
          </Link>
        </div>
      </div>
    </nav>
  );
};
