import './App.css';
import Navbar from './components/firstPage/Navbar'
import Categories from './components/firstPage/Categories'
import Tasks from './components/firstPage/Tasks'
import Addtasks from './components/firstPage/Addtasks';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className='hello_name'>What's up, Helen!</h1>
      <Categories/>
      <Tasks/>
      <Addtasks/>
    </div>
  );
}

export default App;
