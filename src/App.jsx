import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import './App.css'

library.add(faGithub);

const tasksList = [
  {
    task: "Code a foobar game",
    date: 10,
    done: false,
  },
  {
    task: "Go drink a beer",
    date: 1,
    done: true,
  },
  {
    task: "Go on holidays",
    date: 35,
    done: false,
  }
];

function App() {
  const [tasks, setTasks] = React.useState(tasksList);

  const [activeCategory, setActiveCategory] = React.useState('todo');
  
  //callback handler
  const handleButtonClick = (button) => {
    setActiveCategory(button);
  }

  return (
    <>
      <Header />
      
      <section  className="main-wrapper">
        
        <MainWrapper
          activeCategory={activeCategory}
          handleButtonClick={handleButtonClick} 
          tasks={tasks}
        />
      
      </section>
    </>
  );
};

const Header = () => (
  <>
    <header>
      <div>
        <h1 className="logo">!TODO</h1>
      </div>
      <nav>
        <a target="blank" href="https://github.com">
          <FontAwesomeIcon className="nav-icon" icon="fa-brands fa-github" />
           <span>Repo</span>
        </a>
      </nav>
    </header>
  </>
);

const MainWrapper = ({ activeCategory, handleButtonClick, tasks }) => (
  <>

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

        <div className="card done-card">
          <ul>
          </ul>
        </div>
      
      </div>
    </section>
  
  </>
);

export default App
