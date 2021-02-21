import React from 'react';

export default function Header({userName}) {
    return (
        <div>
            <span >{userName}'s Todo App</span>
        </div>
    );
}