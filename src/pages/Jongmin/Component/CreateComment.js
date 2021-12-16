import React from "react";
import "./Review.scss";

function CreateComment({ comment, onChange, onCreate }) {
  return (
    <>
      <input
        id="reviewMessage"
        type="text"
        name="comment"
        placeholder="리뷰를 입력해주세요."
        onChange={onChange}
        value={comment}
        onKeyPress={onCreate}
      />
    </>
  );
}

export default CreateComment;
