import './CardsContainer.css'
import React, { useState } from 'react'
import InputTodo from './InputTodo/InputTodo.jsx'
import Card from './Card/Card.jsx'

const CardsContainer = ({ tasks,
  newTask,
  handleInputChange, 
  handleAddTask,
  handleInputFocus,
  handleInputBlur,
  activeCategory,
  isFocused }) => {

    //takes all tasks and return a new arr filtered with item.done
  const filterTasks = (tasks, category) => {
    if (tasks.length !== 0) {
      return tasks.filter((item) => {
        return category === 'todo' ? item.done === false : item.done === true;
      })
    };
  };
  
  const todoTasks = filterTasks(tasks, 'todo');
  const doneTasks = filterTasks(tasks, 'done');
  const todoCategory = 'todo-card';
  const doneCategory = 'done-card';
  
  return( 
    <section className="cards-container">
      
      <div className="cards-wrapper">
        
        <Card 
          category={todoCategory}
          tasks={todoTasks}
                   
          inputComponent={
            <InputTodo
              handleAddTask={handleAddTask}
              handleInputChange={handleInputChange}
              handleInputFocus={handleInputFocus}
              handleInputBlur={handleInputBlur}
              isFocused={isFocused}
              newTask={newTask}
            />
          }
        />
        
        <Card 
          category={doneCategory} 
          tasks={doneTasks} 
        />
      
      </div>

    </section>
  );
};


export default CardsContainer
