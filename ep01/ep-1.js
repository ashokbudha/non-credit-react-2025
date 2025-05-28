const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Title-1"),React.createElement("h2",{},"Title-2")]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);