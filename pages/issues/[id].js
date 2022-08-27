import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch('https://issue-strapi.herokuapp.com/api/issues').then(result => result.json());
  // const { data } = await res.json();

  const paths = res.data.map(issue => {
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
  const res = await fetch('https://issue-strapi.herokuapp.com/api/issues/' + id).then(result => result.json());

  return {
    props: { issue: res.data }
  }
}

const IssueDetails = ({ issue }) => {
  return ( 
    <>
      <Head>
        <title>Issue Details | Issue Tracker</title>
        <meta name="keyword" content="issues" />
      </Head>
      <div>
        <h1>Issue Details</h1>
        <h3>{ issue.attributes.title }</h3>
        <p>{ issue.attributes.body }</p>
      </div>
    </>
  );
}
 
export default IssueDetails;