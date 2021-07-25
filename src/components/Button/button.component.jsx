import React from 'react'
import './button.styles.scss'

const Button = ({title, size}) => (
    <button className={size}>{title}</button>
)

export default Button