import React from 'react';
import styles from './style.module.scss'

const MyButton = ({children , ...props}) => {

    return (
        <button {...props} className={styles.butt}>
            {children}
        </button>
    );
};

export default MyButton;