import styles from '../../styles/Issues.module.css'
import Link from 'next/link'
import Head from 'next/head';

export const getStaticProps = async () => {
  const res = await fetch(process.env.STRAPI_URI + '/issues').then(result => result.json());

  return {
    props: { issues: res.data }
  }
}

const IssueList = ({ issues }) => {
  return ( 
    <>
      <Head>
        <title>All Issues | Issue Tracker</title>
        <meta name="keyword" content="issues" />
      </Head>
      <div className="issues-list">
        <h1>All Issues</h1>
        {issues.map(issue => (
          <Link href={"/issues/" + issue.id} key={issue.id}>
            <a className={styles.single}>
              <h2>{ issue.id }</h2>
              <h3>{ issue.attributes.title }</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
   );
}
 
export default IssueList
;