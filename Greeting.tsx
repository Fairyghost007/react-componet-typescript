import React from 'react'; 

interface GreetingProps {
    name: string; 
}

/**
 * A component that displays a greeting message to the user.
 * param name the name of the user to greet
 * returns a React component that displays a greeting message
 */
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};
export default Greeting;