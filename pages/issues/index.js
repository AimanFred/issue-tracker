import styles from '../../styles/Issues.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://issue-strapi.herokuapp.com/api/issues').then(result => result.json());
  // const data = JSON.stringify(res);

  return {
    props: { issues: res.data }
  }
}

const IssueList = ({ issues }) => {
  return ( 
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
   );
}
 
export default IssueList
;