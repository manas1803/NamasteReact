import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("h1",{id:"header",className:"heading",key:"1"},"Welcome to my World!")
const elementSibling = React.createElement("h2",{id:"header2",className:"heading-sibling",key:"2"},"Welcome to world of Siblings!")

const parent = React.createElement("div",{id:"parent",className:"parents"},[element,elementSibling])

const mainContainer = React.createElement("main",{id:"container"},parent)

const rootElement = document.querySelector("#root")
const root = ReactDOM.createRoot(rootElement)

root.render(mainContainer)