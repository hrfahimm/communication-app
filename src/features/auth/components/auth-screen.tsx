'use client'
import { useState } from 'react'
import { SignInFLow } from '../types'

const AuthScreen = () => {

    const [state, setState] = useState<SignInFLow>('signIn')



    return (

        <div className='h-full flex items-center justify-center bg-[#5c3B58]'>
            Auth   Screen
        </div>


    )
}

export default AuthScreen