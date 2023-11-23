
import React from "react";
import Post from "./components/post";


const DATA = [
  {
    id: 1,
    title: "sunt aut facere repellat provident occaicate exepturi optio reprehenderit",
    body: "lorem lorem lorem lorem"
  },
  {
    id: 2,
    title: "qui est esse",
    body: "lorem lorem lorem lorem"
  },
  {
    id: 3,
    title: "ea molistias uasi exercitationem repellat qui spa sit aut",
    body: "lorem lorem lorem lorem"
  },
  {
    id: 4,
    title: "eum et est occaicati",
    body: "lorem lorem lorem lorem"
  },
  {
    id: 5,
    title: "nescuit quas dio",
    body: "lorem lorem lorem lorem"
  }
]
function App() {
  return (
    <div>
        {DATA.map(post => (
        <Post
          key={post.id}
          title={post.title} 
          body={post.body}   
        />
      ))}
    </div>
  );
}

export default App;
