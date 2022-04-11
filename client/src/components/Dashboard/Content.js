import React from 'react'
// import CreateKast from './CreateKast';
import CreateTask from './CreateTask';
// import KastList from './KastList';
//import SelectTask from './SelectTask';
import ToDo from './ToDo';


const Content = () => {
  return (
    <>  

    <div className="Container">
        <div className='columns'>
            {/* {{!-- *********** Create New Task Card ***********--}} */}
            <div className='column is-3 mt-6'>
                <CreateTask />

            </div>
            {/* {{!--************** Little Boxes **************--}} */}
            <div className='column is-9 mt-6'>

                {/* {{!--*********** TASK TO DO ***********--}} */}
                <div className='columns'>
                    <div className='column is-6'>
                        <ToDo />
                        <div className='mt-3'>
                            
                        </div>
                        <div className='mt-3'>

                        </div>
                    </div>
                {/* {{!--*********** Select Task ***********--}} */}
                    <div className='column is-6'>
                        {/* <CreateKast />
                        <KastList /> */}
                    </div>
                </div>
          
            </div>
            
        </div>
    </div>
    </> 
  )
}

export default Content