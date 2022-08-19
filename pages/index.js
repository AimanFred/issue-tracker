import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Dashboard</h1>
      <Link href="/create">
        <a className={styles.btn}>Add New Issue</a>
      </Link>
    </div>
  )
}
