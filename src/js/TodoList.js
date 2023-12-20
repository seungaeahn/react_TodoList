import React, {useState, useEffect} from 'react';
import '../css/App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


//const App = () => {
  //function App() { 
    // 위 두 개는 같은 의미이다.
function TodoList() { 
  // todos 초기값을 빈 배열로 생성하겠다는 의미
  //todos는 할 일 목록들을 저장하는 공간 
  //만약에 로컬 스토리지에 저장된 할일이 있으면 로컬 스토리지에 할일목록 데이터를 불러오기
  //만약 저장된 할일 없으면 빈 배열 가지고 옴 
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(savedTodos);

  //newTodo 새로운 할일을 추가 작성할 수 있는 공간 
  const [newTodo, setNewTodo] = useState('');

  //페이지가 실행될 때나 게시글이 업데이트 될 때 로컬 스토리지에 저장
  //JSON.stringify : 자바스크립트 객체나 배열을 JSON 문자열로 변환하는 함수
  // [todos] 할일 목록에 어떤 변화가 생길 때마다 갱신된 최신 데이터가 저장
  useEffect(() => {
      localStorage.setItem('posts', JSON.stringify(todos));
  }, [todos]);



  //할일이 추가될 때마다 추가할 수 있는 const 생성 
  const addTodo = () => {
    if(newTodo.trim() !== ''){
    //setTodos([...todos, newTodo]) : 현재 입력되어있는 할일 목록 배열인 todos를 복사해서 복사한 todos에 새로운 할일인 newTodos를 배열에 추가한 후
    //할 일 목록 설정에 newTodo가 추가된 목록으로 최종 설정해주기 위한 setTodos
    setTodos([...todos, newTodo]);

    //저장된 할일 목록을 초기화 시켜주기 위해 setNewTodo를 초기화 시켜준다.
    setNewTodo('');
    }
 

  //입력된 할일을 로컬 스토리지에 저장
  //localStorage 밑에 Item과 setItem이 존재함 
  //'todos' 키에 현재 게시글 목록과 새로운 게시글을 추가한 배열을 JSON 문자열로 변환해서 저장
  localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  }

  //할일을 삭제할 때마다 삭제할 수 있는 const 생성 
  const removeTodo = (index) => {
    //현재 할일 목록 배열을 복사
    const updateTodos=[...todos];
    //복사된 배열에서 지정된 자리값(index)를 1개 제거하겠다는 의미
    //updateTodos : 복사된 배열
   
    // slice, splice : 배열 조작
    // slice : 배열 일부분 복사해서 새로운 배열 반환
    // 원본에 있던 배열은 변경되지 않지만 시작 - 종료 인덱스

    //splice : 배열의 내용을 수정하거나 삭제하고, 필요에 따라 새로운 요소를 추가할 수 있음 

    updateTodos.splice(index,1);
    //내가 제거하고 싶은 할일을 제거한 후 setTodos를 활용해서 할일 목록을 재설정
    setTodos(updateTodos);

    localStorage.setItem('todos', JSON.stringify(updateTodos));
  };

  useEffect(() => {
    console.log('todos 변경됨 : ', todos);
  }, [todos]);



  const [editingIndex, setEditingIndex] = useState(null);
  const [editTodo, setEditTodo] = useState(''); 

  const startEditing = (index, todo) => {
    setEditingIndex(index);
    setEditTodo(todo);
  };

  const saveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = editTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditTodo('');
  };

  


  return (
    <div id='all'>
      <h2>To do List</h2>
      <div>
        <input 
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={addTodo}>Add todo</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)} />
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                </div>
              ) : ( 
                <div>
                  {todo}
                  <button onClick={() => startEditing(index, todo)}>Edit</button>
                  <button onClick={() => removeTodo(index)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

//my-app
// // map 배열 객체 메서드
// // 배열의 각 요소에서 함수를 호출하고, 그 함수의 반환값으로 새로운 배열을 생성 

// //예제코드 :
// const newArray = array.map((value, index, array) => {});

// //value : 현재 배열 안에 있는 배열의 요소
// //index : 배열 안에 있는 자리값
// //array : 배열의 원본
// //반환값{} : 새로운 배열에서 해당하는 인덱스에 들어갈 값
// {todos.map((todo, index) => (
//   //key={index} map 함수로 요소를 생성할 때
//   //각 요소에 고유한 key값을 지정
//   //react 각 값에 대한 번호를 부여함으로써 목록을 부여된 번호로 추적하기 위해 사용됨
//   <li key={index}> 
//     {todos}
//     <button onClick={() => removeTodo(index)}>삭제하기</button>
//   </li>
// ))};

// array.map((요소, 자리값, 만약 새로운 배열이 필요하다면 배열값 넣어줌) => {
//   //리턴값으로 새로운 배열을 구성
// });