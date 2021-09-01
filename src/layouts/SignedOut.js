import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) //distract parametreleri objeye gerek kalmadan kullanmaya yarar. yeni gelen parametreler "," ile eklenebilir.
{
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={signIn}>Giriş Yap</Button>
                <Button primary style={{ marginLeft:10 }}>Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}
