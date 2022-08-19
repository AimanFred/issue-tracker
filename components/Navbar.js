import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
      <nav>
        <div className="logo">
          <Image src="/issue-tracker.png" width={150} height={40} />
        </div>
        <Link href="/"><a>Dashboard</a></Link>
        <Link href="/create"><a>New Issue</a></Link>
      </nav>
  );
}

export default Navbar;