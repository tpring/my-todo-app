import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
    const initialState = [{ id: 1, title: '입문주차 개인과제', content: ' My Todo List 만들기 ', completed: false }];
    const [todos, setTodos] = useState(initialState);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        // 제목과 내용이 비어있으면 경고 메시지 표시
        if (!newTitle || !newConten) {
            alert('제목과 내용 모두 입력해주세요.');
            return;
        }
        // 새로운 할 일을 목록에 추가하고 입력 상태 초기화
        setTodos([...todos, { id: Date.now(), title: newTitle, content: newContent, completed: false }]);
        setNewTitle('');
        setNewContent('');
    };

    return (
        <div>
            <TodoForm
                onSubmit={addTodo}
                newTitle={newTitle}
                newContent={newContent}
                setNewTitle={setNewTitle}
                setNewContent={setNewContent}
            />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default TodoContainer;
