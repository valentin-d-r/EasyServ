import React, { useState } from 'react'
import '../style/Rating.css'

function Rating() {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleRating = (stars) => {
        setRating(stars);
    };

    const handleSubmit = () => {
        console.log('Note : ' + rating);
        console.log('Commentaire : ' + comment);

        setRating(0);
        setComment('');
    };

    return (
        <div className="Rating">
            <h1>Noter un client ou un prestataire</h1>

            <h3>Évaluation en étoiles</h3>
            <div className="star-rate">
                <span onClick={() => handleRating(5)}>&#9733;</span>
                <span onClick={() => handleRating(4)}>&#9733;</span>
                <span onClick={() => handleRating(3)}>&#9733;</span>
                <span onClick={() => handleRating(2)}>&#9733;</span>
                <span onClick={() => handleRating(1)}>&#9733;</span>
            </div>

            <h3>Commentaire</h3>
            <textarea
                id="ratetxtarea"
                rows="4"
                cols="50"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>

            <button onClick={handleSubmit}>Soumettre</button>
        </div>
    );
}

export default Rating