import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Issue Tracker | Dashboard</title>
        <meta name="keyword" content="issues" />
      </Head>
      <div>
        <h1 className={styles.title}>Dashboard</h1>
        <Link href="/create">
          <a className={styles.btn}>Add New Issue</a>
        </Link>
      </div>
    </>
  )
}
