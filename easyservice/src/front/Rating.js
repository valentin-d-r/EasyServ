import React, { useState } from 'react';
import '../style/Rating.css';

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

    const renderStars = () => {
        const stars = [];
        for (let i = 5; i >= 1; i--) {
            const starClass = i <= rating ? 'star-icon filled' : 'star-icon';
            stars.push(
                <span
                    key={i}
                    className={starClass}
                    onClick={() => handleRating(i)}
                >
                    &#9733;
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="Rating">
            <h1>Noter un client ou un prestataire</h1>

            <div className="star-rate">{renderStars()}</div>

            <label>Commentaire
                <textarea
                    id="ratetxtarea"
                    rows="4"
                    cols="50"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </label>
            <button id='rate-button' onClick={handleSubmit}>Soumettre</button>
        </div>
    );
}

export default Rating;
