import logo from './logo.svg';
import './App.css';
import MyList from './MyList';

function App() {
  const toDos= ['Homework', 'Gym', 'Eat', 'Sleep'];

  return (
    <div class= "App">
      <MyList theList={toDos}/>
    </div>
  );
}



export default App;
