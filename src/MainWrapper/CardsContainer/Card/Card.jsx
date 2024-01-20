import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);


import './Card.css'

const Card = ({ 
  tasks,
  category,
  inputComponent }) => {

  return(
    <div className={`card ${category}`} value="todo">
      <div className="items-wrapper">
        <ul>
      
          <Items tasks={tasks} />

        </ul>
      </div>
      
      {inputComponent}
    </div>
  );
};

const Items = ({ tasks }) => {
   return(
    <>
       {tasks.map((item, index) => (
        <li key={index}>
          <span>{item.task}</span>

          <div className="delete-button">
            <FontAwesomeIcon className="delete-icon" icon={faTrash} />
          </div>
        </li>
       ))}
    </>
  )
}
export default Card
