import React from "react"

import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function App1() {
    return (
        <div>
            <input type="checkbox" />
            <p>Placeholder text here</p>
            
            <input type="checkbox" />
            <p>Placeholder text here</p>
            
            <input type="checkbox" />
            <p>Placeholder text here</p>
            
            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    )
}
export default App1

function App2() {
    const firstName = "Bob"
    const lastName = "Ziroll"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
      // color: "#FF8C00",
      backgroundColor: "#FF2D00",
      fontSize: "20px"
    }
    if (hours < 12) {
      timeOfDay = "morning"
      styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      styles.color = "#2E0927"
    } else {
      timeOfDay = "night"
      styles.color = "#D90000"
    }

    return (
        <div>
          {/* {}: inside is JS */}
            <h1>Hello {firstName + " " + lastName}!</h1>
            <h1>Hello {`${firstName} ${lastName}`}!</h1>
            <h1>It is currently abour {date.getDate() % 12} o'clock!</h1>
            <h1>Good {timeOfDay}!</h1>
            {/* <h1 style={{color: "#FF8C00", 'background-color': "#FF2D00"}}>Good {timeOfDay}!</h1> */}
            <h1 style={styles}>Good {timeOfDay}!</h1>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
export default App2

function App() {
  return (
      <div className="todo-list">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
      </div>
  )
}

export default App