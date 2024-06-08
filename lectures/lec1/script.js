// const heading = React.createElement("h1", {id:"heading"  , class:"bg-red"}, "hello world form react !!!")


// const heading = React.createElement("h1", {id:"heading"  , class:"bg-red"},
//     React.createElement("h1", {}, React.createElement("h1", {}, "this is the innerest h1 tag"))
// )

//  ! if you have to make the sbiling , 3rd property -- as [ ]
// const heading = React.createElement("h1", {id:"heading"  , class:"bg-red"},
//     React.createElement("h3", {}, [React.createElement("h3", {}, "this is the innerest h3 tag") ,React.createElement("h3", {}, "this is the innerest h3 tag 1")])
// )


const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);