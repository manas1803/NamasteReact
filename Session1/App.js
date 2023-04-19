const heading = React.createElement("h1", { id: "header", key: "1" }, "Hello World from React!!")
const heading2 = React.createElement("h2", { id: "header2", key: "4" }, "This is the sibling")

const child = React.createElement("div", { id: "child", key: "2" }, heading,heading2)

const parent = React.createElement("div", { id: "parent", key: "3" }, child)

const documentRoot = document.querySelector("#root")
console.log("parent is ", parent)
console.log("child is ", child)
console.log("heading is ", heading)
const root = ReactDOM.createRoot(documentRoot)
root.render(parent)