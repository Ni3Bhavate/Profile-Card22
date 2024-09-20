import React, { useState } from 'react';

const ProfileCard = ({ name, age, location, bio }) => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(prevShowMore => !prevShowMore);
    };

    return (
        <div style={styles.card}>
            <h2 style={styles.name}>Name: {name}</h2>
            <p style={styles.info}><strong>Age:</strong> {age}</p>
            <p style={styles.info}><strong>Location:</strong> {location}</p>
            {showMore && <p style={styles.bio}><strong>Bio:</strong> {bio}</p>}
            <button style={styles.button} onClick={handleToggle}>
                {showMore ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};


const styles = {

   
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        margin: '16px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff'
      },
    
    name: {
        margin: '0',
        fontSize: '1.5em',
        color: '#cc1010'
    },
    info: {
        margin: '8px 0',
        fontSize: '1em',
        color: '#666'
    },
    bio: {
        margin: '16px 0',
        fontSize: '0.9em',
        color: '#05b841'
    },
    button: {
        padding: '8px 16px',
        fontSize: '1em',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default ProfileCard;