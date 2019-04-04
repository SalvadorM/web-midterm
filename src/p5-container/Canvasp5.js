import React, {Component} from 'react'
import p5 from 'p5'


class Canvasp5 extends Component {
    constructor(){
        super() 

        this.state = {
            Diameter: 44,
            Alpha: 12,
        }
        this.renderRef = new React.createRef()
    }

    componentDidMount(){
        console.log(this.props)

        
        
        this.sketch = new p5( p => {

            p.setup = () => {
                p.createCanvas(200, 200)
                    .parent(this.renderRef.current)
                p.noStroke()
            }

            p.draw = () => {
                
                // p.background(0)
                // p.fill(255)
                // p.rect(this.props.x, this.props.y, 50, 50 )
       
                p.fill(0, this.state.Alpha)
                p.rect(0,0,640, 480)
                p.fill(255)
                p.ellipse(p.mouseX, p.mouseY, this.state.Diameter)
            }
        })
    }

    render(){

        // console.log(this.props)
        return(
            <div ref={this.renderRef}>
            </div>
        )
    }
}

export default Canvasp5