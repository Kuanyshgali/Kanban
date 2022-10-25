import React, {useState} from 'react';
import style from './style.module.scss'

const MyInput = (props) => {
    return (
        <input className={style.input} {...props}/>
    );
};

export default MyInput;