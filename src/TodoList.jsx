// TodoList.jsx
import React from "react";
import "./TodoList.css";

function TodoList({ todos,setTodos }) {

      // 할 일 삭제 함수
    const removeTodo = (id) => {
    // 해당 id를 가진 할 일을 목록에서 제거
    setTodos(todos.filter(todo => todo.id !== id));
    };

  // 할 일 완료 처리 함수
    const completeTodo = (id) => {
    // 해당 id를 가진 할 일의 완료 상태를 true로 변경
    setTodos(todos.map(todo => {
        if (todo.id === id) {
        return { ...todo, completed: true };
        }
        return todo;
    }));
    };

  // 할 일 완료 취소 함수
    const undoComplete = (id) => {
    // 해당 id를 가진 할 일의 완료 상태를 false로 변경
    setTodos(todos.map(todo => {
        if (todo.id === id) {
        return { ...todo, completed: false };
        }
        return todo;
    }));
    };

    const incompleteTodos = todos.filter(todo => !todo.completed);
    const completedTodos = todos.filter(todo => todo.completed);
    

    return (
        <div className="list">
            <div className="unconplete">
                <h3>미완료</h3>
                <div className="card">
                {incompleteTodos.map(todo => (
                    <div key={todo.id}>
                        <h4>{todo.title}</h4>
                        <p>{todo.content}</p>
                        <button className="buttons" onClick={() => removeTodo(todo.id)}>삭제</button>
                        <button className="button" onClick={() => completeTodo(todo.id)}>완료</button>
                    </div>
                ))}
                </div>
            </div>
            <div className="conplete">
                <h3>완료</h3>
                <div className="card">
                {completedTodos.map(todo => (
                    <div key={todo.id}>
                        <h4>{todo.title}</h4>
                        <p>{todo.content}</p>
                        <button className="button" onClick={() => removeTodo(todo.id)}>삭제</button>
                        <button className="button"onClick={() => undoComplete(todo.id)}>되돌리기</button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default TodoList;

