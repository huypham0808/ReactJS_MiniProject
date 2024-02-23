import { useState } from "react";

const Creat = () => {
   const [title, setTitle] = useState("Please input title");
   const [body, setBody] = useState("Please input description for detail");
   const [author, setAuthor] = useState("Select author");
   return (
      <div className="create">
         <h2>Add a new detail</h2>
         <form className="form-card">
            <label>Block name:</label>
            <input
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               type="text"
               required className="form-text-area" />
            <label>Block describtion</label>
            <textarea
               value={body}
               onChange={(e) => setBody(e.target.value)}
               required className="form-text-area"
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
            <button style={{
               color: 'white',
               backgroundColor: "#087ea4",
               borderRadius: "8px",
               padding: "8px",
               cursor: 'pointer',
               marginTop: "20px"
            }}>Add new block</button>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
         </form>
      </div>
   );
}

export default Creat;