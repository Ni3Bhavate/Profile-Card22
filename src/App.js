import React from 'react';
import ProfileCard from './ProfileCard';

const App = () => {
    return (
        <div>
            <ProfileCard 
                name="Santosh Kumar" 
                age={30} 
                location="New Delhi, India" 
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            />
        </div>
    );
};

export default App;

