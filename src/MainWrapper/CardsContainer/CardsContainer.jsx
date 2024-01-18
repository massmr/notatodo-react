import './CardsContainer.css'

const CardsContainer = ({ tasks, activeCategory }) => {
  console.log(activeCategory)
  
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
          <ul>
            {todoTasks.map((item, index) => (
              <li key={index}>
                <span>{item.task}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="card done-card" value="done">
          <ul>
            {doneTasks.map((item, index) => (
              <li key={index}>
                <span>{item.task}</span>
              </li>
            ))}
          </ul>
        </div>
      
      </div>
    </section>
  );
};

export default CardsContainer
