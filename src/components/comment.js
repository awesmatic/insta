import styles from "./comment.module.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import { useParams } from "react-router-dom";

const Comment = (props) => {
  const { id } = useParams();
  console.log(id);
  console.log(props);
  const { postData, commentData, code, setPostData } = props;
  let itemData = [];
  let Comments = commentData[code];

  postData.map((item) => {
    if (item.code === code) {
      itemData = item;
    }
    return itemData;
  });

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
    <div className={styles.container}>
      <div className={styles.pic_Section}>
        <img
          src={itemData.display_src}
          alt="insta-pic"
          className={styles.pic}
        />
        <div>
          <p className={styles.caption}>{itemData.caption}</p>
          <div>
            <button
              onClick={() => likeButtonHandler(itemData.id)}
              className={styles.button}
            >
              <BsSuitHeartFill /> {itemData.likes}
            </button>
            <button className={styles.button}>
              <BiCommentDots />{" "}
              {commentData[code] ? commentData[code].length : 0}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.comment_section}>
        {Comments?.map((item, index) => {
          return (
            <div key={index} className={styles.Comments}>
              <p className={styles.user}>{item.user}</p>
              <p className={styles.text}>{item.text}</p>
            </div>
          );
        })}
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Author" />
          <input className={styles.input} type="text" placeholder="Comment" />
        </form>
      </div>
    </div>
  );
};

export default Comment;
