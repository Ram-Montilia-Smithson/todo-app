import React, { useState } from "react"
import AddTodo from "./addTodo"
import TodoModal from "./todoModal"
import Header from "./header"
import TodoItem from "./todoItem"
import DoneItem from "./doneItem.jsx"
import {Modal, Card} from "react-bootstrap"

export default function TodoApp({ userName }) {

  const [item, setItem] = useState({})

  const [todos, setTodos] = useState([
    { text: 'write examples', priority: 3, date: "2021-02-26", key: '4' },
    { text: 'create an app', priority: 2, date: "2021-02-25", key: '5' },
    { text: 'make a todo list', priority: 1, date: "2021-02-24", key: '6' },
  ]);

  const [dones, setDones] = useState([
    { text: 'go to school', priority: 3, date: "2021-02-18", key: '1' },
    { text: 'do the dishes', priority: 1, date: "2021-02-17", key: '2' },
    { text: 'call the doctor', priority: 2, date: "2021-02-19", key: '3' },
  ])

  const [todoModalOpen, setTodoModalOpen] = useState(false)

  const closeModal = () => setTodoModalOpen(false)
  const showModal = () => setTodoModalOpen(true);

  const clickOnTodoHandler = (item) => {
    setItem(item)
    showModal()
  }

  const submitHandler = (item) => {
    todos.push(item)
    setTodos([...todos.sort((a, b) => {
      if (b.priority > a.priority) { return 1 }
      else if (b.priority < a.priority) { return -1 }
      else {
        if (b.date > a.date) { return -1 }
        else {return 1}
      }
    })])
  }

  const editHandler = (item) => {
    for (let i = 0; i < todos.length; i++){
      if (todos[i].key === item.key) {
        todos[i]=item
      }
    }
    setTodos([...todos.sort((a, b) => {
      if (b.priority > a.priority) { return 1 }
      else if (b.priority < a.priority) { return -1 }
      else {
        if (b.date > a.date) { return -1 }
        else { return 1 }
      }
    })])
    closeModal()
  }

  const doneHandler = (item) => {
    item.priority = 0
    setTodos(todos.filter(todo => todo.key !== item.key))
    setDones([item, ...dones])
    closeModal()
  }

  const deleteHandler = () => {
    setTodos(todos.filter(todo => todo.key !== item.key))
    closeModal()
  }

  return (
    <div className="App">
      <Header userName={userName}/>
      <AddTodo
        submitHandler={submitHandler}
      />
      <h1>Todo List</h1>
      {todos.map(item => {
        return (
          <TodoItem
            key={item.key}
            item={item}
            handleClickOnTodo={clickOnTodoHandler}
          />
        )
      })}

      <h1>Done</h1>
      {dones.map(item => {
        return (
          <DoneItem
            item={item}
            key={item.key}
          />
        )
      })}
      <Modal
        show={todoModalOpen}
        onHide={closeModal}>
        <Card>
          <TodoModal
            closeModal={closeModal}
            deleteHandler={deleteHandler}
            doneHandler={doneHandler}
            editHandler={editHandler}
            item={item}
          />
        </Card>
      </Modal>
    </div>
  );
}

