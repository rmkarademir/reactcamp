import React from 'react'
import { Button, Dropdown, DropdownItem, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://image.flaticon.com/icons/png/128/4861/4861914.png"/>
                <Dropdown pointing="top right" text="Rüstem">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Item>
        </div>
    )
}
