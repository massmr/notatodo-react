import * as React from 'react'
import { useState, useEffect } from 'react';
import './App.css'
import Header from './Header_comp/Header.jsx'
import MainWrapper from './MainWrapper/MainWrapper.jsx'


const previewTask = [
  {
    task: "Log-in to the App",
    done: false,
  },
];

function App() {
  const [tasks, setTasks] = React.useState(previewTask);
  const [newTask, setNewTask] = React.useState('');

  useEffect(() => {
    fetch('http://localhost:5500/tasks')
      .then(response => response.json())
      .then((data) => setTasks(data))
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }
  
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        task: newTask,
        done: false,
      } 
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
      setIsFocused(false);

      fetch('http://localhost:5500/tasks', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTaskObject)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Error', error));
    }
  }

  const [isFocused, setIsFocused] = React.useState(false);
  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(false);
  };



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
          isFocused={isFocused}
          handleInputFocus={handleInputFocus}
          handleInputBlur={handleInputBlur}
          handleAddTask={handleAddTask}
          handleButtonClick={handleButtonClick}
          handleInputChange={handleInputChange}
          tasks={tasks}
          newTask={newTask}
        />
      
      </section>
    </>
  );
};




export default App
