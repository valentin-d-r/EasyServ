import '../style/OfferJob.css'

const Offer = () => (
    <div className="offer-wrapper">

        <div className="offer_title">Titre de l'annonce</div>
        <div className="offer_description">Description de l'annonce</div>
        <div className="offer_button">
            <input type="button" className="accepter_offre" value="Accepter" />
            <input type="button" className="refuser_offre" value="Refuser" />
        </div>
    </div>

)
export default Offer