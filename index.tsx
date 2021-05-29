import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}



render(<App />, document.getElementById('root'));


class NXT extends React.Component{
  constructor(prop)
  {
    super(prop);
    this.state={
      value: prop.name
    }
  }
  render()
  {
    return <h1>{this.state.value}</h1>;
  }
}

render(<NXT name="deepak"/>,document.getElementById('root'));

function Name(props)
{
  return <h2>{props.name}</h2>;
}


function Appe()
{
  return(
    <div>
    <Name name="deepak" />
    <Name name="sharma" />
    <Name name="soni" />

    </div>
  );
}

render(<Appe />,document.getElementById('root'));


function Form()
{
  function handleSubmit(e)
  {
      e.preventDefault();
      alert("you submitted");
  }

  return(
    <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
    </form>

  );

}

render(<Form />,document.getElementById('root'));


class Fromcontrol extends React.Component{
  constructor(prop)
  {
    super(prop);
    this.state={
      value: "Submit",
      next: "Submitted"

    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e)
  {
     e.preventDefault();
    this.setState((state)=>({
      value: state.next,
      next: state.value
    }));
  }

  render()
  {
     return(
    <form onSubmit={this.handleSubmit}>
    <button type="submit">{this.state.value}</button>
    </form>

  );

  }
}

render(<Fromcontrol />,document.getElementById('root'));


var arr=[1,2,3,4,5,6];

function List(prop)
{
  var list=prop.list.map(n=> <li>{n}</li>);
  return <ul>{list}</ul>
}
render(<List list={arr} />,document.getElementById('root'));



class Form2 extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      value: ''
    }

    var m = ('abs acos asin atan atan2 ceil cos exp floor log max min ' + 'pow random round sin sqrt tan PI').split(' ');
      for (var i=0,l=m.length; i<l; i++) {
      window[ m[i] ] = Math[ m[i] ];
      }

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(event)
  {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(e)
  {
    
    e.preventDefault();
    
    alert("The Submitted name was "+this.state.value+" and type od "+ typeof(this.state.value)+" and eval() returns "+eval(this.state.value));
    
  }

  render()
  {
    return(
      <form onSubmit={this.handleSubmit}>
      <label>Name:</label>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      <input type="submit" value="Submit" />
      </form>
    )
  }

}

render(<Form2 />,document.getElementById('root'));