var App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!")
  );
};
var container = document.getElementById("root");
var root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
