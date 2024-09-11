import video from "../data/video.js";
import Comments from "./Comments.js";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <h2>{video.title}</h2>
      <p>Uploaded {video.createdAt} by {video.user} with {video.upvotes} upvotes and {video.downvotes} downvotes</p>
      <br></br>
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
