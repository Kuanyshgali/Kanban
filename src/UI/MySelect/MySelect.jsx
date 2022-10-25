import React from 'react';
import styles from './style.module.scss'

const MySelect = ({children , ...props}) => {

    return (
        <select {...props} name="select" className={styles.mySelect}>
            {children}
        </select>
    );
};

export default MySelect;