import React from 'react';
import '../style/Parrainage.css';
import LogoParrainage from '../LogoParrainage.png';
import LogoMoney from '../LogoMoney.png';
import LogoEye from '../LogoEye.png';

const Parrainage = () => {
    return (
        <div className="parrainage-container">
            <h1>Programme de Parrainage</h1>
            <div className="parrainage-images">
                <div className="parrainage-image">
                    <img src={LogoParrainage} width={70} height={70} title="LogoParrainage" alt="LogoParrainage" />

                    <p>Devenez parrain d’un ami pour des magnifiques avantages</p>
                </div>
                <div className="parrainage-image">
                    <img src={LogoEye} title="LogoEye" alt="LogoEye" />
                    <p>Meilleure visibilité au près des prestataires </p>
                </div>
                <div className="parrainage-image">
                    <img src={LogoMoney} title="LogoMoney" alt="LogoMoney" />
                    <p>200 euros offers pour des services </p>
                </div>
            </div>

            <a href="#">Obtenir mon lien de parrainage</a>
        </div>
    );
};

export default Parrainage;