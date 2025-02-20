import React, { useState } from 'react';
import { Button, Form, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default function EditTodo({closeModal, deleteHandler, doneHandler, editHandler, item }) {

    const [text, setText] = useState(item.text);
    const [priority, setPriority] = useState(item.priority);
    const [date, setDate] = useState(item.date);

    const onTextChange = (value) => {
        setText(value);
    };

    const onPriorityChange = (value) => {
        setPriority(value);
    }

    const onDateChange = (value) => {
        setDate(value)
    }

    const handleOnEdit = (event) => {
        event.preventDefault()
        item = {
            key: item.key,
            text: text,
            priority: priority,
            date: date
        }
        editHandler(item);
        setText(item.text);
        setPriority(item.priority)
        setDate(item.date)
    }

    const handleOnDone = () => {
        doneHandler(item)
    }

    const handleOnDelete = () => {
        deleteHandler(item)
    }

    const handleOnClose = () => {
        closeModal()
    }

    return (
        <div>
            <Form onSubmit={(event) => handleOnEdit(event)}>
                <Form.Group>
                    <Form.Label>Edit Todo: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={item.text}
                        value={text}
                        onChange={(event) => onTextChange(event.target.value)}
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Priority: </Form.Label>
                    <ToggleButtonGroup
                        type="radio"
                        name="priority"
                        onChange={(event) => onPriorityChange(event)}
                        value={priority}
                    >
                        <ToggleButton value={1}>Low</ToggleButton>
                        <ToggleButton value={2}>Moderate</ToggleButton>
                        <ToggleButton value={3}>Urgent</ToggleButton>
                    </ToggleButtonGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="date"
                        onChange={(event) => onDateChange(event.target.value)}
                        value={date}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Edit</Button>
                <Button onClick={handleOnDone}>Done </Button>
                <Button onClick={handleOnDelete}>Delete</Button>
                <Button onClick={handleOnClose}>Close</Button>
            </Form>
        </div>
    );
}