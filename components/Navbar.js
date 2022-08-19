import Link from 'next/link'

const Navbar = () => {
  return (
      <nav className="navbar">
          <h1>The Issue Tracker</h1>
          <div className="links">
              <Link href="/"><a>Dashboard</a></Link>
              <Link href="/create"><a>New Issue</a></Link>
          </div>
      </nav>
  );
}

export default Navbar;