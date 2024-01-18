import './MainWrapper.css'
import CategoryContainer from './CategoryContainer/CategoryContainer.jsx'
import CardsContainer from './CardsContainer/CardsContainer.jsx'

const MainWrapper = ({ activeCategory, 
  isFocused,
  handleButtonClick, 
  tasks,
  newTask,
  handleInputChange,
  handleAddTask,
  handleInputFocus,
  handleInputBlur }) => (
  <>
    
    <CategoryContainer 
      activeCategory={activeCategory}
      handleButtonClick={handleButtonClick}
    />
    
    <CardsContainer 
      tasks={tasks}
      newTask={newTask}
      handleInputChange={handleInputChange}
      handleAddTask={handleAddTask}
      activeCategory={activeCategory} 
      isFocused={isFocused}
      handleInputFocus={handleInputFocus}
      handleInputBlur={handleInputBlur}
    />
     
  </>
);

export default MainWrapper
