import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailsProduit() {

    const {id} =useParams()
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
    return ( 
        <>
        
     
        <div className="container">
            <div className="row my-4">
                <div className="col-md-8 mx-auto">
                    <h1>Informations du  Produit N° : {id} </h1>

                    <div className="form-group">
                      <label htmlFor="">Nom du Produit</label>
                      <input type="text" name="" id="" className="form-control" onChange={(e)=>setNom(e.target.value)} value={nom} placeholder="" aria-describedby="helpId"  disabled />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Description du Produit</label>
                      <input type="text" name="" id="" className="form-control" onChange={(e)=>setDescription(e.target.value)} value={description} placeholder="" disabled aria-describedby="helpId"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Prix du Produit</label>
                      <input type="number" name="" id="" className="form-control" onChange={(e)=>setPrix(e.target.value)} value={prix}  placeholder="" disabled aria-describedby="helpId"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Quantité du Produit</label>
                      <input type="number" name="" id="" className="form-control" placeholder=""  onChange={(e)=>setQuantite(e.target.value)} value={quantite} disabled aria-describedby="helpId"/>
                    </div>


                </div>
            </div>
        </div>
        </>
     );
}

export default DetailsProduit;