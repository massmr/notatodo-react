import * as React from 'react'
import './App.css'
import Header from './Header_comp/Header.jsx'
import MainWrapper from './MainWrapper/MainWrapper.jsx'

const tasksList = [
  {
    task: "Code a foobar game",
    date: 10,
    done: false,
  },
  {
    task: "Go drink a beer",
    date: 1,
    done: true,
  },
  {
    task: "Go on holidays",
    date: 35,
    done: false,
  }
];

function App() {
  const [tasks, setTasks] = React.useState(tasksList);

  const [activeCategory, setActiveCategory] = React.useState('todo');
  
  //callback handler
  const handleButtonClick = (button) => {
    setActiveCategory(button);
  }

  return (
    <>
      <Header />
      
      <section  className="main-wrapper">
        
        <MainWrapper
          activeCategory={activeCategory}
          handleButtonClick={handleButtonClick} 
          tasks={tasks}
        />
      
      </section>
    </>
  );
};




export default App
