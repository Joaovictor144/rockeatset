import './styles/global.scss';
import RepositoryList from './components/RepositoryList';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <RepositoryList/>
      <Contador/>
    </div>
  );
}

export default App;
