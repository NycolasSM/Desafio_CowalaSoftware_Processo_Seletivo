import GlobalStyle from './styles/global';
import Header from './components/Header/Header';
import FormUser from './pages/FormUser/FormUser';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <FormUser />
    </div>
  );
}

export default App;