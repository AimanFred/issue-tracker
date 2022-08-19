export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
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
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
  const data = await res.json();
  console.log(data)

  return {
    props: { issue: data }
  }
}

const IssueDetails = ({ issue }) => {
  return ( 
    <div>
      <h1>Issue Details</h1>
      <h3>{ issue.userId }</h3>
      <p>{ issue.title }</p>
    </div>
   );
}
 
export default IssueDetails;