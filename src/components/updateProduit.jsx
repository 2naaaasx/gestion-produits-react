import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduit() {

    const {id} =useParams()
    const navigate=useNavigate()
    const [nom,setNom]=useState("");
    const [description,setDescription]=useState("");
    const [prix,setPrix]=useState(0);
    const [quantite,setQuantite]=useState(0);
    const baseUrl="http://localhost:3000";



    useEffect(()=>{

        axios.get(`${baseUrl}/produits/${id}`).then((res)=>{

            const fetchedProduit=res.data;
            setNom(fetchedProduit.nom);
            setDescription(fetchedProduit.description);
            setPrix(fetchedProduit.prix);
            setQuantite(fetchedProduit.quantite);
        })

         
    },[])


    const modifierProduit=()=>{

        const updatedProduit={
            nom,
            description,
            prix,
            quantite
        }

        axios.put(`${baseUrl}/produits/${id}`,updatedProduit).then(()=>{

            alert("le produit est bien modifié")
            navigate("/produit/liste")

        })


    }


    return ( 
        <>
        
     
        <div className="container">
            <div className="row my-4">
                <div className="col-md-6 mx-auto">
                    <h1>Modification du  Produit N° : {id} </h1>

                    <div className="form-group">
                      <label htmlFor="">Nom du Produit</label>
                      <input type="text" name="" id="" className="form-control" onChange={(e)=>setNom(e.target.value)} value={nom} placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Description du Produit</label>
                      <input type="text" name="" id="" className="form-control" onChange={(e)=>setDescription(e.target.value)} value={description} placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Prix du Produit</label>
                      <input type="number" name="" id="" className="form-control" onChange={(e)=>setPrix(e.target.value)} value={prix}  placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Quantité du Produit</label>
                      <input type="number" name="" id="" className="form-control" placeholder=""  onChange={(e)=>setQuantite(e.target.value)} value={quantite} aria-describedby="helpId"/>
                    </div>

                    <button type="button" className="btn btn-warning text-dark my-2" onClick={modifierProduit} >Modifier</button>

                </div>
            </div>
        </div>
        </>
     );
}

export default UpdateProduit;