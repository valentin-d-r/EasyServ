import React from 'react';
import '../style/Parrainage.css';
import LogoParrainage from '../LogoParrainage.png';
import LogoMoney from '../LogoMoney.png';
export function MaterialSymbolsVisibilityRounded(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="#0095e7" d="M12 16q1.875 0 3.188-1.313T16.5 11.5q0-1.875-1.313-3.188T12 7q-1.875 0-3.188 1.313T7.5 11.5q0 1.875 1.313 3.188T12 16Zm0-1.8q-1.125 0-1.913-.788T9.3 11.5q0-1.125.788-1.913T12 8.8q1.125 0 1.913.788T14.7 11.5q0 1.125-.787 1.913T12 14.2Zm0 4.8q-3.475 0-6.35-1.838T1.3 12.2q-.075-.125-.1-.312t-.025-.388q0-.2.025-.388t.1-.312q1.475-3.125 4.35-4.963T12 4q3.475 0 6.35 1.838T22.7 10.8q.075.125.1.313t.025.387q0 .2-.025.388t-.1.312q-1.475 3.125-4.35 4.963T12 19Z"></path></svg>
    )
}
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
                    <MaterialSymbolsVisibilityRounded width={70} height={70} color="#0095e7" />
                    <p>Meilleure visibilité au près des prestataires </p>
                </div>
                <div className="parrainage-image">
                    <img src={LogoMoney} width={70} height={70} title="LogoMoney" alt="LogoMoney" />
                    <p>200 euros offers pour des services </p>
                </div>
            </div>

            <a href="#">Obtenir mon lien de parrainage</a>
        </div>
    );
};

export default Parrainage;