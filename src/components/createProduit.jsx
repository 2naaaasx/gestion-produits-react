import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function CreateProduit() {

    const inputNom=useRef(null);
    const inputDescription=useRef(null);
    const inputPrix=useRef(null);
    const inputQuantite=useRef(null);
    const inputFile=useRef(null);

    const baseUrl="http://localhost:3000";
    const navigate=useNavigate()

 // Stockge de l'image dans un Cloud Storage Service (Cloudinary)
    const ajouterProduit=()=>{
      const file=inputFile.current.files[0]

      if (file) {

        const data=new FormData()
        data.append("file",file)
        data.append("upload_preset","universia_app_images"),
        data.append("cloud_name","dmwogfl2d"),

        axios.post("https://api.cloudinary.com/v1_1/dmwogfl2d/image/upload",data).then((res)=>{
          console.log(res.data.url);

          const newProduit={
            nom:inputNom.current.value,
            description:inputDescription.current.value,
            prix:inputPrix.current.value,
            quantite:inputQuantite.current.value,
            imageUrl:res.data.url
          }
          axios.post(`${baseUrl}/produits`,newProduit).then(()=>{

            alert("le produit est bien ajouté");
            navigate("/produit/liste");
          })


          
        })


        
      }else{
        alert("Veuillez choisir un fichier")
      }

    }


    /*
    // Stockge de l'image en format Base64 dans LocalStorage
    const ajouterProduit=()=>{

      const file=inputFile.current.files[0]

     if (file) {
                const newProduit={
                  nom:inputNom.current.value,
                  description:inputDescription.current.value,
                  prix:inputPrix.current.value,
                  quantite:inputQuantite.current.value
                }

              axios.post(`${baseUrl}/produits`,newProduit).then((res)=>{
                  alert("le produit est ajouté");
                  const addedProduit=res.data
                  console.log(addedProduit);

                  const reader=new FileReader()

                  reader.onload=()=>{

                    const image64=reader.result
                    
                    localStorage.setItem(String(addedProduit.id), image64)
                  }

                  reader.readAsDataURL(file)
                  inputNom.current.value="";
                  inputDescription.current.value="";
                  inputPrix.current.value="";
                  inputQuantite.current.value="";
                  inputNom.current.focus()

                navigate("/produit/liste")

              })
      
      
     }else{
      alert("Veuillez choisir un fichier")
     }
      

     
    }
*/
    return ( 
        <>
        
        <div className="container">
            <div className="row my-4">
                <div className="col-md-6 mx-auto">
                    <h1>Nouveau Produit</h1>
           
                    <div className="form-group">
                      <label htmlFor="">Nom du Produit</label>
                      <input type="text" ref={inputNom} name="" id="" className="form-control"  placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Description du Produit</label>
                      <input type="text" name="" id="" className="form-control"  ref={inputDescription} placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Prix du Produit</label>
                      <input type="number" name="" id="" className="form-control"  ref={inputPrix}   placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Quantité du Produit</label>
                      <input type="number" name="" id="" className="form-control" placeholder=""  ref={inputQuantite} aria-describedby="helpId"/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Importer une image</label> <br/>
                      <input type="file" ref={inputFile} className="form-control-file" name="" id="" placeholder="" aria-describedby="fileHelpId"/>
                    </div>

                    <button type="button" className="btn btn-warning text-dark my-2" onClick={ajouterProduit} >Sauvegarder</button>

                </div>
            </div>
        </div>
        </>
     );
}

export default CreateProduit;