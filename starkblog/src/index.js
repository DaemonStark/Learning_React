import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    //Javascript stuff goes here!
    const message = 'Javascript is so cool!!'

    return(
        <div align="center">
            <h1>Hello Reactive World!!</h1>
            <br />
            <h2>Hi I'm in a Fancy Component now!!!</h2>
            <h3>{message}</h3>
            Using React State from here on out!

        </div>
    ); 
}

function App2() {
    const [message, setMessage] = React.useState("JAVASCRIPT IS SO COOL");

    return (
        <div align="center">
        <h2>Using States Here</h2>
        <h2>{message}</h2>
        <button onClick={() => setMessage("My New Message")}>
            Update the message!
        </button>
        </div>
    );
}



ReactDOM.render(
       <div> 
           <App />
           <App2 />
        </div>,    
        document.getElementById('root')
    )

