const App = (props) => {
  console.log(props);
  const [buttonText, setButtonText] = React.useState(props.buttonText);
  const [classesList, setClassesList] = React.useState('');

  const onButtonClick = () => {
    setButtonText('Hello from React');
    setClassesList('green-btn');
  };

  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App buttonText="Click me" />);
