import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPencil,faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faPencil, faPlus);


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
          <span>
            {item.task}
            <FontAwesomeIcon className="plus-button" icon={faPlus} />
          </span>
          
          <div className="item-button edit-button">
            <FontAwesomeIcon className="edit-icon" icon={faPencil} />
          </div>
          <div className="item-button delete-button">
            <FontAwesomeIcon className="delete-icon" icon={faTrash} />
          </div>
        </li>
       ))}
    </>
  )
}
export default Card
