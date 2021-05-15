import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {HashRouter, Route} from 'react-router-dom'
import Home from '../routes/Home'
import MyContacts from '../routes/MyContacts'
import EmojiPedia from '../routes/EmojiPedia'

const App = () => {
    return (
        <div>

            <HashRouter>
            <Header />
            <Route path="/" exact={true} component={Home} />
            <Route path="/my-contact" component={MyContacts} />
            <Route path="/emoji-pedia" component={EmojiPedia} />
            <Footer />
            </HashRouter>
            
            
            
        </div>
    )
}
export default App;