export const getStaticPath = async () => {
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

const IssueDetails = () => {
  return ( 
    <div>
      <h1>Issue Details</h1>
    </div>
   );
}
 
export default IssueDetails;