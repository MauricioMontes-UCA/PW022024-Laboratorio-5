import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
//import ViewTasks from "../../components/viewTask/container/ViewTasks"
import "./Home.css"

const Home = () => {

    return (
        <div className="home-container">
            {<Header /*handleAddTask={addTask}*/ />}
            {/*<ViewTasks 
            tasks = {tasks}
            deleteTaskById = {deleteTaskById}
            onCompletedTask = {toggleTaskCompletedById}
            />} */}
        </div>
    );
};

export default Home;