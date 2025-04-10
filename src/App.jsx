
import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'

function App() {


  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Bienvenidos a mi primer app'} ></ItemListContainer>
    </>
  )
}

export default App
