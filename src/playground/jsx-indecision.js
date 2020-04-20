const app = {
  title: "The Questionable Quarantine App",
  subtitle: "What are you gonna do today kiddo?",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";

    indecisionRender();
  }
};

const removeAll = () => {
  app.options = [];
  indecisionRender();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const numbers = [55, 101, 1000];

const indecisionRender = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should you do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((option) => (
          <li key={option}>Option: {option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");

indecisionRender();
