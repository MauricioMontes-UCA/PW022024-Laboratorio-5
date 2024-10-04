import React, {useState} from "react";
import { MdExposurePlus1 } from "react-icons/md";
import "./TaskForm.css";

const TaskForm = ({/* handleAddTask */}) => {

    return (
        <>
            <form /*onSubmit={handleSubmit}*/ className="newTask-Form">
                <input
                required
                placeholder="Add a new task"
                type="text"
                //onChange={onChangeTitle}
                //value={title}
                />  
                <button className="newTask-button">
                    Create <MdExposurePlus1 size={20} />
                </button>
            </form>
        </>
    );
};

export default TaskForm;