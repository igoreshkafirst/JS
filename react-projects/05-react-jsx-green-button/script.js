// Учебные попытки 02–06. Неудачные варианты сохранены
// в комментариях, чтобы не мешать работе приложения.

// 02. Изменение обычной переменной через inline-обработчик.
// Значение меняется, но React не перерисовывает компонент.
//
/* let buttonText = 'Click me';
   const App = (
     <div className="app">
       <button onClick={() => (buttonText = 'Hello from React')}>
         {buttonText}
       </button>
     </div>
   ); */

// 03. Вынос обработчика в отдельную функцию и добавление console.log().
// Проблема остаётся: вывод в консоль не запускает повторную отрисовку.
//
/* let buttonText = 'Click me';
   const onButtonClick = () => {
     buttonText = 'Hello from React';
     console.log(buttonText);
   }; */

// 04. Перенос переменной и обработчика внутрь функционального компонента.
// Прямое изменение локальной переменной также не запускает render.
//
/* const App = () => {
     console.log('Called');
     let buttonText = 'Click me';
     const onButtonClick = () => {
       buttonText = 'Hello from React';
       console.log(buttonText);
     };
     return (
       <div className="app">
         <button onClick={onButtonClick}>{buttonText}</button>
       </div>
     );
   }; */

// 05. useState уже добавлен, но значение изменяется напрямую.
// Поскольку buttonText объявлен через const, присваивание вызывает ошибку.
//
/* const [buttonText, setButtonText] = React.useState('Click me');
   const onButtonClick = () => {
     buttonText = 'Hello from React';
   }; */

// 06. let позволяет переназначить buttonText, но React всё равно
// не узнаёт об изменении. Необходимо использовать setButtonText().
//
/* let [buttonText, setButtonText] = React.useState('Click me');
   const onButtonClick = () => {
     buttonText = 'Hello from React';
   }; */

const App = () => {
  console.log('Called');
  let [buttonText, setButtonText] = React.useState('Click me');

  const onButtonClick = () => {
    setButtonText('Hello from React');
  };
  return (
    <div className="app">
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
