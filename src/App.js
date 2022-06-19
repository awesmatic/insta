import { useState } from "react";
import styles from "./App.module.css";
import InstagramPage from "./components/instaPage";
import Comment from "./components/comment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import postsData from "./Data/post";
import commentData from "./Data/comment";

function App() {
  const [code, setCode] = useState();
  const [postData, setPostData] = useState(postsData);

  return (
    <Router>
      <div className={styles.App}>
        <div className={styles.insta}>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2016-present.jpg"
            alt="insta-logo"
            className={styles.Logo}
          />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <InstagramPage
                setCode={setCode}
                postData={postData}
                setPostData={setPostData}
                commentData={commentData}
              />
            }
          />
          <Route
            path="/comments"
            element={
              <Comment
                postData={postData}
                commentData={commentData}
                code={code}
                setPostData={setPostData}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
