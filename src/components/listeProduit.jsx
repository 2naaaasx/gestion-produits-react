import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListeProduit() {
    const [produits,setProduits]=useState([])
    const baseUrl="http://localhost:3000";

    useEffect(()=>{

            getAllProduit()


    },[])

    const getAllProduit=()=>{
        axios.get(baseUrl+"/produits").then((res)=>{

            console.log(res);
            setProduits(res.data)
        }).catch((err)=>{
            console.log(err);
            
        })
    }

    const supprimerProduit=(id)=>{

        if (confirm("merci de confirmer la suppression !")) {
            axios.delete(`${baseUrl}/produits/${id}`).then(()=>{
                alert("le produit est bien supprimé")
                getAllProduit()
            }).catch((err)=>{
                console.log(err);
                
            })
        }
      

    }

    return ( 
        <>
        
        <div className="row my-4 mx-4" >

            <h1>Liste des Produits</h1>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOM</th>
                        <th>DESCRIPTION</th>
                        <th>PRIX</th>
                        <th>QUANTITE</th>
                        <th>Image </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        produits.map((p,index)=>{
                            return(
                                <tr key={index}>
                                <td scope="row">  {p.id}  </td>
                                <td> {p.nom}  </td>
                                <td> {p.description}  </td>
                                <td> {p.prix}  </td>
                                <td> {p.quantite}  </td>
                                <td> <img src={p.imageUrl}  height={100} width={100} alt="" />  </td>
                                <td>  <Link className="btn btn-primary mx-1" to={`/produit/details/${p.id}`} >Consulter</Link> <Link className="btn btn-warning mx-1" to={`/produit/update/${p.id}`} >Modifier</Link>  <button type="button" className="btn btn-danger"  onClick={ ()=> supprimerProduit(p.id)}>Supprimer</button> </td>

                            </tr>
                            )
                        })
                    }
                   
                 
                </tbody>
            </table>






        </div>
        </>
     );
}

export default ListeProduit;