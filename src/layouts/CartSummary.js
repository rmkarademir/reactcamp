import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Sepet'>
                <Dropdown.Menu>
                    <Dropdown.Item>Bilgisayar</Dropdown.Item>
                    <Dropdown.Item>Telefon</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/Cart">Sepete Git!</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
