import React from "react"
export default function TodoItem({ item, handleClickOnTodo }) {

    const handleOnClick = () => {
        handleClickOnTodo(item)
    }

    return (
        <div onClick={handleOnClick}>
            <span >{item.text}</span>
            <span>{item.priority}</span>
            <span>{item.date}</span>
        </div>
    );

}