import React, { Component } from 'react'

import Canvasp5 from './p5-container/Canvasp5'

class App extends Component {
  constructor(){
    super()

    this.state = {
      Height: 20,
      Width: 20,
      x: 0,
      y: 100,
    }

    this.inputChange = this.inputChange.bind(this)
  }

  inputChange(e){
    const val = this.inputRef.current.value

    this.setState({x: val})
  }

  componentDidMount(){
    //setTimeout and setInterval
    //
    setTimeout(() =>
      setInterval(() => 
        this.setState({
          x: this.state.x + 1
        })
        ,20
      )
    ,1000)
  }
  render() {
    this.inputRef = React.createRef()
    this.renderRef = React.createRef()

    const { x, y, Height, Width} = this.state


    return (
      <div className="App">

       <Canvasp5 x={x} y={y} Width={Width} Height={Height}/>
        <input 
          ref={this.inputRef}
          // value={x}
          onChange={this.inputChange}
          />
      </div>
    )
  }
}

export default App;
