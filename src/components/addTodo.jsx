import React, { useState } from 'react';
import "../App.css"
import { Button, Form, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState(0);
    const [date, setDate] = useState(Date());

    const onTextChange = (value) => {
        setText(value);
    };

    const onPriorityChange = (value) => {
        setPriority(value);
    }

    const onDateChange = (value) => {
        setDate(value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const todoItem = {
            key: Math.random(),
            text: text,
            priority: priority,
            date: date
        }
        submitHandler(todoItem);
        setText('');
        setPriority(0)
        setDate(Date())
    }


    return (
        <div className="App-form">
            <Form onSubmit={(event) => handleOnSubmit(event)}>
                <Form.Group >
                    <Form.Control
                        type="text"
                        placeholder="new todo..."
                        value={text}
                        onChange={(event) => onTextChange(event.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Priority</Form.Label>
                    <ToggleButtonGroup
                        type="radio"
                        name="priority"
                        onChange={(event) => onPriorityChange(event)}
                        value={priority}
                        required
                    >
                        <ToggleButton value={1}>1</ToggleButton>
                        <ToggleButton value={2}>2</ToggleButton>
                        <ToggleButton value={3}>3</ToggleButton>
                    </ToggleButtonGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="date"
                        onChange={(event) => onDateChange(event.target.value)}
                        required
                        value={date}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
}