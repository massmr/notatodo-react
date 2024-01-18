import './CardsContainer.css'
import React, { useState } from 'react';

const CardsContainer = ({ tasks, activeCategory }) => {

  const [isFocused, setIsFocused] = React.useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(false);
  };

  //takes all tasks and return a new arr filtered with item.done
  const filterTasks = (tasks, category) => {
    return tasks.filter((item) => {
      return category === 'todo' ? item.done === false : item.done === true;
    })
  };
  
  const todoTasks = filterTasks(tasks, 'todo');
  const doneTasks = filterTasks(tasks, 'done');

  return( 
    <section className="cards-container">
      
      <div className="cards-wrapper">
        
        <div className="card todo-card" value="todo">
          <div className="items-wrapper">
            <ul>
              {todoTasks.map((item, index) => (
                <li key={index}>
                  <span>{item.task}</span>
                </li>
              ))}
            </ul>
          </div>
          <div 
            className={`input-wrapper ${isFocused ? 'input-wrapper-focus' : ''}`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          >
            <label htmlFor="todo-input">Add a todo</label>
            <div className="textZone-wrapper">
              <input type="text" id="todo-input" name="todo-input"/>
              <input type="submit" value="Post" id="submit-todo-input"/>
            </div>
          </div>
        </div>
        
        <div className="card done-card" value="done">
          <div className="items-wrapper">
            <ul>
              {doneTasks.map((item, index) => (
                <li key={index}>
                  <span>{item.task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default CardsContainer
