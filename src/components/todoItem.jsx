import React from "react"

export default function TodoItem({ item, handleClickOnTodo }) {

    const handleOnClick = () => {
        handleClickOnTodo(item)
    }
    
    return (
        <div onClick={handleOnClick}>
            <span>You need to {item.text} by {item.date}</span>
        </div>
    );

}