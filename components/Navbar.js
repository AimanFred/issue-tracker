import Link from 'next/link'

const Navbar = () => {
  return (
      <nav>
        <div className="logo">
          <h1>The Issue Tracker</h1>
        </div>
        <Link href="/"><a>Dashboard</a></Link>
        <Link href="/create"><a>New Issue</a></Link>
      </nav>
  );
}

export default Navbar;