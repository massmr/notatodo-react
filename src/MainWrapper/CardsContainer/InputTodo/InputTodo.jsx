import './InputTodo.css'

const InputTodo = ({
  handleAddTask,
  handleInputChange,
  handleInputFocus, 
  handleInputBlur,
  isFocused,
  newTask }) => {
  
  return(
    <div 
      className={`input-wrapper ${isFocused ? 'input-wrapper-focus' : ''}`}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
    >
      <label htmlFor="todo-input">Add a todo</label>
      <div className="textZone-wrapper">
        <input 
          type="text" 
          id="todo-input" 
          name="todo-input"
          value={newTask}
          onChange={handleInputChange}

        />
        <input 
          type="submit" 
          value="Post" 
          id="submit-todo-input"
          onClick={handleAddTask}
        />
      </div>
    </div>  
  );
};

export default InputTodo
