
    const  parent = React.createElement("div",{className:"parent"},
         [React.createElement("div",{className:"child"},
            [React.createElement("h1",{className:"heading"},"Welcome to React"),
                React.createElement("h2",{className:"heading"},"Start learning")]
         ),
         React.createElement("div",{className:"child2"},
            [React.createElement("h1",{className:"heading"},"Welcome to React"),
                React.createElement("h2",{className:"heading"},"Start learning")]
         )]);

         console.log(parent);
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
 