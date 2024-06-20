// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello World from React!"
// );




/**
<div id="Parent">
    <div id="Child1">
        <h1>I am H1 Tag</h1>
         <h2>I am H2 Tag</h2>
    </div>
    <div id="Child2">
        <h1>I am H1 Tag</h1>
        <h2>I am H1 Tag</h2>
    </div>
</div>

**/

const parent  = React.createElement(
    'div', 
    {id: "Parent"}, 
    React.createElement('div', {id: "Child1"}, [
            [
                React.createElement('h1', {}, "I'm H1 Tag"), 
                React.createElement('h2', {}, "I'm H2 Tag")
            ]
    ]),
    React.createElement('div', {id: "Child2"}, 
        [
            React.createElement('h1', {}, "I'm H1 Tag"), 
            React.createElement('h2', {}, "I'm H2 Tag")
        ])
    );

console.log(parent); // Object

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent);





