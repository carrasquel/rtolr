import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {

  let greetings = "Welcome to the Road to learn React"
  return (
    <div className="App">
      <h2>{greetings}</h2>
      <div>
        <ul>
          {list.map(item =>
            <div key={item.objectID}>
              {item.title}({item.points}) - {item.url}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
