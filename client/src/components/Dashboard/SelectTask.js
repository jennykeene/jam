import React from 'react'

const SelectTask = () => {
  return (
    <div className="column">
        <div className="card" id="select-task-card">
            <header className="card-header has-background-success">
                <p className="card-header-title has-text-white">Select a Task to Add</p>
            </header>
            <div className="card-content">
                <div className="panel is-info is-flex-direction-row" id="task-panel">
                    <p className="panel-block has-background-success-light" onclick="addSelectedTask(this)" name="Work Out">
                        <span className="panel-icon">
                            <i className="fas fa-dumbbell" aria-hidden="true"></i>
                        </span>
                        Work out
                    </p>
                    <p className="panel-block has-background-success-light" onclick="addSelectedTask(this)">
                        <span className="panel-icon">
                            <i className="fas fa-shower" aria-hidden="true"></i>
                        </span>
                        Clean
                    </p>
                    <p className="panel-block has-background-success-light" onclick="addSelectedTask(this)">
                        <span className="panel-icon">
                            <i className="fas fa-book-reader" aria-hidden="true"></i>
                        </span>
                        Study
                    </p>
                    <p className="panel-block has-background-success-light" onclick="addSelectedTask(this)">
                        <span className="panel-icon">
                            <i className="fas fa-dog" aria-hidden="true"></i>
                        </span>
                        Walk pet
                    </p>
                    <p className="panel-block has-background-success-light" onclick="addSelectedTask(this)">
                        <span className="panel-icon">
                            <i className="fas fa-shopping-basket" aria-hidden="true"></i>
                        </span>
                        Shop
                    </p>
                    <p class="panel-block has-background-success-light" onclick="addSelectedTask(this)">
                        <span className="panel-icon">
                            <i className="fas fa-gamepad" aria-hidden="true"></i>
                        </span>
                        Play Games
                    </p>
                    <p class="panel-block has-background-success-light" onclick="addSelectedTask(this)">
                        <span className="panel-icon">
                            <i className="fas fa-basketball-ball" aria-hidden="true"></i>
                        </span>
                        Watch Game
                    </p>
                    <p class="panel-block has-background-success-light" onclick="addSelectedTask(this)">
                        <span className="panel-icon">
                            <i className="fas fa-tv" aria-hidden="true"></i>
                        </span>
                        Watch Show
                    </p>
                    <p className="panel-block has-background-success-light" onclick="addSelectedTask(this)">
                        <span className="panel-icon">
                            <i className="fas fa-mitten" aria-hidden="true"></i>
                        </span>
                        Cook
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectTask