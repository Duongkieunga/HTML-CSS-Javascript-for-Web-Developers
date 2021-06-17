// JSX that allows you to write HTML directly within JavaScript. 
const JSX = <h1>Hello JSX!</h1>

// One important thing to know about nested JSX is that it must return a single element.
const JSX2 = <div>
    <h1></h1>
    <p></p>
    <ul>
        {/* */}
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>

// render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.

const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Change code below this line
  ReactDOM.render(JSX3,document.getElementById("challenge-node"));
  
//   Define an HTML Class in JSX
const JSX = (
    <div className='myDiv'>
      <h1>Add a class to this div</h1>
    </div>
  );

// Learn About Self-Closing JSX Tags: The text is considered a child of the div element, so you will not be able to use a self-closing tag.
const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
  );

//   Create a Stateless Functional Component
// There are two ways to create a React component.
// The first way: To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter.
const DemoComponent = function() {
    return (
      <div className='customClass' />
    );
  };

//   The other way to define a React component is with the ES6 class syntax.
class Kitten extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <h1>Hi</h1>
      );
    }
  }
// Create a Component with Composition: compose multiple React components together.
// parent component which renders each of these three components as children
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
        <ChildComponent />
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };

// Use React to Render Nested Components
const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
  <TypesOfFruit />
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
  <Fruits />
          { /* Change code above this line */ }
        </div>
      );
    }
  };