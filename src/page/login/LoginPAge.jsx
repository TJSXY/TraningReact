import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom';

export default function LoginPAge() {
    const history = useHistory();
    const handleLogin = () => {
        history.push('/home')
    }

    return (
    <Button variant='contained'
        onClick={handleLogin}
        >
            Login
        </Button>
  )
}
