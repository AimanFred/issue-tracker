import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Issue Tracker</title>
        <meta name="keyword" content="issues" />
      </Head>
      <div>
        <h1 className={styles.title}>Dashboard</h1>
        <Link href="/issues">
          <a className={styles.btn}>See all issues</a>
        </Link>
      </div>
    </>
  )
}
