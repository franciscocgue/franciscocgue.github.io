import React from 'react';
import styles from 'Button.module.css';

interface Props {
    children: React.ReactNode,
    type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, type }: Props) => {

    return (
        <button type={type}>
            {children}
        </button>
    )
}

export default Button;