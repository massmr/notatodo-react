import './MainWrapper.css'
import CategoryContainer from './CategoryContainer/CategoryContainer.jsx'
import CardsContainer from './CardsContainer/CardsContainer.jsx'

const MainWrapper = ({ activeCategory, handleButtonClick, tasks }) => (
  <>
    
    <CategoryContainer 
      activeCategory={activeCategory}
      handleButtonClick={handleButtonClick}
    />
    
    <CardsContainer 
      tasks={tasks} 
      activeCategory={activeCategory} 
    />
     
  </>
);

export default MainWrapper
