import React from 'react'

const CreateTask = () => {
  return (
    <div className="card m-3" id="create-task-card">
        <header className="card-header has-background-info">
            <p className="card-header-title has-text-white">Create New Task</p>
        </header>
        <div className="card-content">
            <div className="field">
                <label className="label">Task Name</label>
                {/* {{!--========= task input area =========--}} */}
                <div className="control">
                    <input className="input" name="task-name" type="text" placeholder="name of task here" />
                </div>
            </div>
        </div>
        {/* {{!--========= create button =========--}} */}
        <div className="card-content">
            <div className="field">
                <button className="button is-info" id="create-task-btn">
                    Create
                </button>
            </div>
        </div>
        <div className='card-content'>
        </div>
    </div>
  )
};

export default CreateTask;
