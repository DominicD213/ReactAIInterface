import './App.css';
import Header from './components/header/header';
import History from './components/History/History';
import Login from './components/login/login';

function App() {
  return (
    <div class="w-screen h-screen bg-dark-grey ">
      <div class="grid grid-cols-4 h-screen">
        <div class="col-span-1 bg-black ml-5 mt-5 mb-5 rounded">
              <div class = 'flex flex-col h-full rounded'>
                <div class = 'flex-1/2 bg-black rounded'>
                    <Header/>
                </div>
                <div class = 'flex-1 mt-5'>
                    <History/>
                </div>
                <div class = 'flex-1/2 m-1 bg-black rounded'>
                    <Login/>
                </div>
              </div>
        </div>
        <div class="col-span-3 bg-black m-5 rounded">
      
        </div>
      </div>
    </div>
  );
}

export default App;
