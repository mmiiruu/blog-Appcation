import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import blogs from "../data/blogs";
import "./Detail.css";
export default function Detail() {
  const [title, setTitle] = useState("");
  const [imge, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const result = blogs.find((item) => item.id === parseInt(id));
    setTitle(result.title);
    setImage(result.image_url);
    setContent(result.content);
    setAuthor(result.author);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <h2 className="title">บทความ : {title}</h2>
      <img src={imge} alt={title} className="blog-imge"/>
      <div className="blog-detail">
        <strong>ผู็เขียน : </strong>
        <p>{content}</p>
      </div>
    </div>
  );
}
