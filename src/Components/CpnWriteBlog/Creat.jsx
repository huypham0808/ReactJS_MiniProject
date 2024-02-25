import { useState } from "react";

const Creat = () => {
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [author, setAuthor] = useState("");
   const [isPending, setIsPending] = useState(false);
   const [message, setMessage] = useState("");
   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = {
         title, body, author
      };
      setIsPending(true);
      fetch('http://localhost:8000/blogs', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(blog),
      }).then(() => {
         // console.log('New blog added');
         setMessage("New blog added");
         setIsPending(false);
         setTitle("");
         setBody("");
         setAuthor("Maria");
      });
   }
   return (
      <div className="create">
         <h2>Add a new detail</h2>
         <form className="form-card" onSubmit={handleSubmit}>
            <label>Block name:</label>
            <input
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               type="text"
               required className="form-text-area"
               placeholder="Input title" />
            <label>Block describtion</label>
            <textarea
               value={body}
               onChange={(e) => setBody(e.target.value)}
               required
               placeholder="Input body"
               className="form-text-area"
               style={{
                  color: 'grey',
                  height: "160px"
               }}></textarea>
            <label>Author</label>
            <select
               className="form-text-area"
               value={author}
               onChange={(e) => setAuthor(e.target.value)}>
               <option value="John">John</option>
               <option value="Andrew">Andrew</option>
               <option value="Maria">Maria</option>
            </select>
            {!isPending &&
               <button style={{
                  color: 'white',
                  backgroundColor: "#087ea4",
                  borderRadius: "8px",
                  padding: "8px",
                  cursor: 'pointer',
                  marginTop: "20px"
               }}>Add new block</button>
            }
            <p> {message}</p>
         </form>
      </div>
   );
}

export default Creat;