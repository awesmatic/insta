import styles from "./instaPage.module.css";
import { useNavigate } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
const InstaPage = ({
  postData,
  setCode,
  setPostData,
  commentData,
  totalComments,
}) => {
  let navigate = useNavigate();

  const commentButtonHandler = (code) => {
    navigate("/comments", { id: "kumar" });
    setCode(code);
  };

  const likeButtonHandler = (id) => {
    postData.map((item, index) => {
      if (item.id === id) {
        setPostData([
          ...postData,
          (postData[index].likes = postData[index].likes + 1),
        ]);
      }
      return postData;
    });
  };

  return (
    <>
      <div className={styles.item}>
        {postData.map((item, index) => {
          return (
            <div key={index} className={styles.post}>
              <img
                src={item.display_src}
                alt="instagram-pic"
                className={styles.pic}
              />
              <div>
                <p className={styles.caption}>{item.caption}</p>
                <div>
                  <button
                    onClick={() => likeButtonHandler(item.id)}
                    className={styles.button}
                  >
                    <BsSuitHeartFill /> {item.likes}
                  </button>
                  <button
                    onClick={() => commentButtonHandler(item.code)}
                    className={styles.button}
                  >
                    <BiCommentDots />{" "}
                    {commentData[item.code] ? commentData[item.code].length : 0}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InstaPage;
