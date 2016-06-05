import React         		from 'react'
import Router        		from 'tiny-react-router'
import { createStore }      from 'redux'
import { Provider }         from 'react-redux'
import reducers             from './redux'
import MainScreen 			from './screens/Main'

let store   = createStore(reducers)
let routes = {
    '/' : MainScreen
}

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router routes={routes} />
            </Provider>
        )
    }
}
