import React, { useEffect, useState } from "react";
import LogoTodo from "../../assets/icons/todoLogo.svg";
import TaskForm from "../form/TaskForm";
import "./Header.css";

const Header = (/*{handleAddTask}*/) => {
    return (
        <header className="header-container">
            <img src={LogoTodo} />
            {<TaskForm 
             /*handleAddTask = {handleAddTask}*/
            />}
        </header>
    );
};

export default Header;