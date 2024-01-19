import './Card.css'

const Card = ({ 
  tasks,
  category,
  inputComponent }) => {

  return(
    <div className={`card ${category}`} value="todo">
      <div className="items-wrapper">
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              <span>{item.task}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {inputComponent}
    </div>
  );
};

export default Card
