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
    navigate("/comments");
    setCode(code);
  };

  const likeButtonHandler = (id) => {
    console.log(id);
    postData.map((item, index) => {
      console.log("item.id", item.id);
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
                    <BiCommentDots />
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
