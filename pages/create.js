import Head from 'next/head'
import { useState } from "react";
import { useRouter } from 'next/router'

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const redirect = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const issue = { title, body };

    setIsPending(true);

    fetch(process.env.STRAPI_URI + '/issues', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(issue)
    }).then(() => {
      console.log("New Issue Added");
      setIsPending(false);
      setTimeout(() => {
        redirect.push("/")
      }, 1000);
    })
  };

  return ( 
    <>
      <Head>
        <title>New Issue | Issue Tracker</title>
        <meta name="keyword" content="issues" />
        </Head>
      <div className="create">
        <h1>Add New Issue</h1>
        <form onSubmit={handleSubmit}>
        <label>Issue title:</label>
        <input 
          type="text"
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        <label>Issue body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          >
        </textarea>
        {!isPending && <button>Add Issue</button>}
        {isPending && <button disabled>Adding Issue...</button>}
      </form>
      </div>
    </>
   );
}
 
export default Create;