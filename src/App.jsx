import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import CreateProduit from "./components/createProduit"
import Menu from "./components/menu"
import ListeProduit from "./components/listeProduit"
import UpdateProduit from "./components/updateProduit"
import DetailsProduit from "./components/detailsProduit"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {


  return (
    <>
    
    <BrowserRouter>
        <Menu/>
        <Routes>

              <Route  path="/produit/create" element={<CreateProduit/>} ></Route>
              <Route  path="/produit/liste" element={<ListeProduit/>} ></Route>
              <Route  path="/produit/update/:id" element={<UpdateProduit/>} ></Route>
              <Route  path="/produit/details/:id" element={<DetailsProduit/>} ></Route>
              <Route  path="/" element={<Navigate to={"/produit/liste"}/>} ></Route>


        </Routes>
    
    </BrowserRouter>
       
    </>
  )
}

export default App
