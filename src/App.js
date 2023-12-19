import React, {useState} from 'react';
import './App.css';

//const App = () => {
function App() { 
  // todos 초기값을 빈 배열로 생성하겠다는 의미
  //todos는 할 일 목록들을 저장하는 공간 
  const [todos, setTodos] = useState([]);

  //newTodo 새로운 할일을 추가 작성할 수 있는 공간 
  const [newTodo, setNewTodo] = useState('');

  //할일이 추가될 때마다 추가할 수 있는 const 생성 
  const addTodo = () => {
    if(newTodo.trim() !== ''){
    //setTodos([...todos, newTodo]) : 현재 입력되어있는 할일 목록 배열인 todos를 복사해서 복사한 todos에 새로운 할일인 newTodos를 배열에 추가한 후
    //할 일 목록 설정레 newTodo가 추가된 목록으로 최종 설정해주기 위한 setTodos
    setTodos([...todos, newTodo]);

    //저장된 할일 목록을 초기화 시켜주기 위해 setNewTodo를 초기화 시켜준다.
    setNewTodo('');
    }
  }

  //할일을 삭제할 때마다 삭제할 수 있는 const 생성 
  const removeTodo = (index) => {
    //현재 할일 목록 배열을 복사
    const updateTodos=[...todos];
    //복사된 배열에서 지정된 자리값(index)를 1개 제거하겠다는 의미
    //updateTodos : 복사된 배열
    //slice : 제거
    updateTodos.slice(index,1);
    //내가 제거하고 싶은 할일을 제거한 후 setTodos를 활용해서 할일 목록을 재설정
    setTodos(updateTodos);
  }


  return (
    <div>
      <h2>useState를 활용한 To do List</h2>
      <div>
        <input 
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={addTodo}>할일 추가하기</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>삭제하기</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
