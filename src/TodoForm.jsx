// TodoForm.jsx
import React from "react";
import "./TodoForm.css";

function TodoForm({ onSubmit, newTitle, newContent, setNewTitle, setNewContent }) {

  return (
    <>
      <h2 >오늘 중 처리해야 할 일</h2>
      <div className="container">
      <form className="todo-form" onSubmit={onSubmit}>
        <div className="input-group">
          <label className="label">제목</label>
          <input
            type="text"
            id="title"
            placeholder="제목"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
            className="titleInput"
          />
          <label className="label">내용</label>
          <input
            type="text"
            id="content"
            placeholder="내용"
            value={newContent}
            onChange={(event) => setNewContent(event.target.value)}
            className="contentInput"
          />
        </div>
        <button type="submit" className="button">추가하기</button>
      </form>
    </div>
    </>
  );
}

export default TodoForm;

