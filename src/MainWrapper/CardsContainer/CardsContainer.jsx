import './CardsContainer.css'

const CardsContainer = ({ tasks }) => (
   
  <section className="cards-container">
      
      <div className="cards-wrapper">

        <div className="card todo-card">
          <ul>
            {tasks.map((item, index) => (
              <li key={index}>
                <span>{item.task}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="gap-filler"></div>
        
        <div className="card done-card">
          <ul>
          </ul>
        </div>
      
      </div>
    </section>

);

export default CardsContainer
