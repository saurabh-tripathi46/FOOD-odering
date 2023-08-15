import React from 'react';
import ReactDOM from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById("root"))
    const heading = React.createElement('div', {}, 
    [React.createElement('div', {}, [React.createElement('h1', {}, 'sibling one')]), React.createElement('div', {}, [React.createElement('h2', {}, 'sibling two')])])
    console.log(heading)
    root.render(heading)

    
    