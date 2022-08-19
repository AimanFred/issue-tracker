export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/issues");
  const data = await res.json();

  const paths = data.map(issue => {
    return {
      params: { id: issue.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:8000/issues/" + id);
  const data = await res.json();

  return {
    props: { issue: data }
  }
}

const IssueDetails = ({ issue }) => {
  return ( 
    <div>
      <h1>Issue Details</h1>
      <h3>{ issue.author }</h3>
      <p>{ issue.body }</p>
    </div>
   );
}
 
export default IssueDetails;