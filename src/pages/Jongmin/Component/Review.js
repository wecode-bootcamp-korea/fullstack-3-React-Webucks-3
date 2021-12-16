import React, { useState, useRef } from "react";
import "./Review.scss";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";

function Review() {
  const [inputs, setInputs] = useState({
    comment: "",
  });

  const { comment } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [comments, setComments] = useState([]);

  console.log(comments);

  const nextId = useRef(1);
  const onCreate = (e) => {
    if (e.key === "Enter") {
      const data = {
        id: nextId.current,
        comment,
      };

      setComments([...comments, data]);

      setInputs({
        comment: "",
      });
      nextId.current += 1;
    }
  };

  const onRemove = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <div id="reviewContainer">
        <div id="reviewTitle">리뷰</div>
        <div id="reviewDetail">
          <CommentList comments={comments} onRemove={onRemove} />
        </div>
        <CreateComment
          comment={comment}
          onChange={onChange}
          onCreate={onCreate}
        />
      </div>
    </div>
  );
}

export default Review;
