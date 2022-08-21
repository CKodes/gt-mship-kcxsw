import ReactDom from 'react-dom';

function Greeting() {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Its KC.</h2>
      <h3>This is a wip, so I'll see you in abit!</h3>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById('root'));
