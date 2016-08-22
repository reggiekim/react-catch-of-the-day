var React = require("react");
var ReactDOM = require("react-dom");

/*
  App component
*/
var App = React.createClass({

  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
      )
  }
});


/*
  Header component
  <Header />
*/
var Header = React.createClass({

  render: function() {
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
        Day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
        {/* 'this' refers to the Header function. 'this.props' is an object that refers to the properties the Header function, which has a tagline passed to it by the App component  */}
      </header>
      )
  }
});


/*
  Order component
  <Order />
*/
var Order = React.createClass({

  render: function() {
    return (
      <p>Order</p>
      )
  }
});


/*
  Inventory component
  <Inventory />
*/
var Inventory = React.createClass({

  render: function() {
    return (
      <p>Inventory</p>
      )
  }
});



/*
  StorePicker component
  This will let us make <StorePicker/>
*/
var StorePicker = React.createClass({

  render: function() {
    var name = "Reggie"
    // dbl backslashes or backslash-star can be used for comments, just like in regular JS
    return (
      <form className="store-selector">
        {/*when commenting in JSX you have to use string interprolation with curly braces then backslash-star */}
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" required />
        <input type="submit" />
      </form>
    )
  }
});


ReactDOM.render(<App/>, document.querySelector("#main"));
