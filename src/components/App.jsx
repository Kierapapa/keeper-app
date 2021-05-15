import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {HashRouter, Route} from 'react-router-dom'
import Home from './Home'
import MyContacts from './MyContacts'

const App = () => {
    return (
        <div>

            <HashRouter>
            <Header />
            <Route path="/" exact={true} component={Home} />
            <Route path="/my-contact" component={MyContacts} />
            <Footer />
            </HashRouter>
            
            
            
        </div>
    )
}
export default App;