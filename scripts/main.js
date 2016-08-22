var React = require("react");
var ReactDOM = require("react-dom");

/*
  StorePicker
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


ReactDOM.render(<StorePicker/>, document.querySelector("#main"));
