import styles from '../../styles/Issues.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  return {
    props: { issues: data }
  }
}

const IssueList = ({ issues }) => {
  return ( 
    <div className="issues-list">
      <h1>All Issues</h1>
      {issues.map(issue => (
        <div key={issue.id}>
          <a className={styles.single}>
            <h3>{ issue.title }</h3>
          </a>
        </div>
      ))}
    </div>
   );
}
 
export default IssueList
;