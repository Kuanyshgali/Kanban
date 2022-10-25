import React from 'react';
import {Dashboard} from "../../components/Dashboard";
import styles from './style.module.scss'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export const TodoLists = () => {
    return (
        <div className={styles.content}>
            <DndProvider backend={HTML5Backend}>
                <Dashboard status={'To do'}/>
                <Dashboard status={'Doing'}/>
                <Dashboard status={'Done'}/>
            </DndProvider>
        </div>
    );
};
