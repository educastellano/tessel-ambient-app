import React            from 'react'
import { connect }      from 'react-redux'
import nanoxhr          from 'nanoxhr'
import css              from './index.styl'

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            light: -1,
            sound: -1
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.getLight((light) => {
                this.setState({
                    light: light
                })
                this.getSound((sound) => {
                    this.setState({
                        sound: sound
                    })
                })
            })
        }, 500)
    }
    getLight(callback) {
         nanoxhr('/api/light')
            .call((res) => {
                let response = JSON.parse(res.responseText)
                callback(response.light)
            })
        // callback(Math.random()/10)
    }
    getSound(callback) {
         nanoxhr('/api/sound')
            .call((res) => {
                let response = JSON.parse(res.responseText)
                callback(response.sound)
            })
        // callback(Math.random()/10)
    }
    render() {
        let lightPercent = Math.round(this.state.light * 1000) 
        return (
            <div className='MainScreen' style={{backgroundColor: `hsla(50, 0%, ${lightPercent}%, 0.75)`}}>
                <style>{css}</style>
                <div className='graph-light' style={{width: this.state.light * 10000}}>
                    <label>light</label> {this.state.light}
                </div>
                <div className='graph-sound' style={{width: this.state.sound * 10000}}>
                    <label>sound</label> {this.state.sound}
                </div>
            </div>
        )
    }
}

let ReduxMainScreen = connect((state) => state)(MainScreen)
// TODO: Only user required state here
export { ReduxMainScreen as default }
