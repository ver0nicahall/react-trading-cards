'use strict';

function Homepage(props) {
  return (
    <div>
      {props.message} 
      <a href="/cards">Cards</a>
      <div>
        <img src="/static/img/balloonicorn.jpg"></img>
      </div>
    </div>
  );
}

ReactDOM.render(<Homepage message="Welcome!" />, document.querySelector('#app'));
