const heading1 = React.createElement("h1", {id:"heading"}, " Hello from React");
// console.log(heading1) -- it will return an Object 

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(heading1); //  here the heading1 will convert into a HTML
/*
<div id="parent">
     <div id="child">
          <h1> I'm H1 </h1>
          <h2> I'm h2 </h2>
     </div>
     <div id="child2">
           <h3> I'm H3 </h3>
           <h4> I'm H4 >/h4>
     </div>
 </div> 
 
 --- This is a HTML structure 
 */

//  --- This is how HTML  create with the Core React JS
 const parent = React.createElement("div",{ id: "parent" }, [
    React.createElement("div", { id:"child"}, [
        React.createElement("h1", {}, "I'm H1 "),
        React.createElement("h2", {}, "I'm H2 ")
    ]),
    React.createElement("div", { id:"child2"}, [
        React.createElement("h3", {}, "I'm H3 "),
        React.createElement("h4", {}, "I'm H4 ")
    ])
 ],
 );
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(parent);