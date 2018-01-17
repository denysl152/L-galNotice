import React, { Component } from 'react';
import './App.css';


class App extends Component {

  render() {
    return (
  <div className="LEgN-Container">  
<fieldset className="Container-Information">
  <legend className="LégalNotice"><h3 className="Container-LégalNotice">Mentions Légales</h3></legend>
<div className="Display">
   <h3 className="Big-Title">LA MAISON DES ARTISTES</h3>
</div>
   <p className="Info-Business">Entreprise qui concoit des objets artisaux ;</p>
   <p className="Info-Business"><b>Adresse de l établissement :</b> Rue de la Savane 97112 Grand-Bourg</p>
   <p className="Info-Business"><b>N°Téléphone:</b> 000000000.</p>
   <p className="Info-Business"><b>Adresse Email:</b> lamaisondesartistes@gmail.com</p>
   <p className="Info-Business"><b>Numéro d immaculation pour les activités artisales :</b></p>
   <p className="Info-Business"><b>Directeur de publication:</b> Simplon MG. </p >
  <h3 className="Big-Title">HEBERGEMENT</h3>
   <p className="Info-Business"><b>Nom de l'Hébergeur du site : </b></p>
   <p className="Info-Business"><b>Adresse de l'Hébergeur :</b></p>
   <p className="Info-Business"><b>N° Téléphone de l'Hébergeur : </b></p>
</fieldset>
</div>

    );
  }
}

export default App;
