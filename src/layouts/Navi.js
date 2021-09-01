import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { Button, Container, Dropdown, Menu, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()
    function handleSignOut() { //isAuthenticated bilgisini false çekmek için kullanılacak fonksiyon
        setIsAuthenticated(false)
        history.push("/")
    }
    function handleSignIn() {
        setIsAuthenticated(true)
    }
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to="/" name='home' />
                <Menu.Item name='messages' />

                <Menu.Menu position='right'>
                   <CartSummary/>
                    {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}              
                </Menu.Menu>
            </Container>
        </Menu>// SignedIn componentinin içerisinde signOut fonksiyonuna erişilebilir.SignedOut componentinin içerisinde signIn fonksiyonuna erişilebilir.
    )
}
