import React from "react"
import ReactDOM from "react-dom"
import MyInfo from "./components/MyInfo.js"
import App from "./components/App"

// ReactDOM.render(<div><h1>Hello world!</h1><p>This is a ...</p></div>, document.getElementById("root"))
// var myNewP = document.createElement("p")
// myNewP.innerHTML  = "This is a paragrap"

function MyApp() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}


ReactDOM.render(
    <div>
        <MyInfo />
        <App />
    </div>
  ,
  document.getElementById("root")
)