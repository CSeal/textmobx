import * as React from "react";
import "./App.css";
import Display from "./components/Display";
import ButtonField  from "./containers/ButtonsField";


import logo from "./logo.svg";

interface IAppProps {
    u?: string;
}

class App extends React.Component<IAppProps, {}> {
  public render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2>{this.props.u}</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Display/>
        <ButtonField/>
      </div>
    );
  }
}

export default App;
