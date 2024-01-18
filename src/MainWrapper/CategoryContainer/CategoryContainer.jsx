import './CategoryContainer.css'

const CategoryContainer = ({ activeCategory, handleButtonClick }) => (
  <section>

      <div className="category-container">
        <div
          onClick={() => handleButtonClick('todo')} 
          className={`category 
            ${activeCategory === 'todo' ? 'activeButton' : ''}`}>
          <p>TODO</p>
        </div>

        <div 
          onClick={() => handleButtonClick('done')} 
          className={`category 
            ${activeCategory === 'done' ? 'activeButton' : ''}`}>
          <p>DONE</p>
        </div>
      </div>

    </section>
);

export default CategoryContainer
