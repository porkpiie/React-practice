let visibility = false;

const onToggleClick = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const visible = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggleClick}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && <h3>Conditionally rendering somit</h3>}
    </div>
  );

  ReactDOM.render(visible, document.getElementById("app"));
};

render();
