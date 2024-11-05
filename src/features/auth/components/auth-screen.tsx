
"use client"

import { useState } from 'react';
import { SignInFlow } from "../types"
import SignIn from './sign-in';
import SignUp from './sign-up';



export const AuthScreen = () => {


    const [state, setState] = useState<SignInFlow>('signIn')



    return (
        <div className='h-full flex text-4xl items-center justify-center bg-[#5C3B58]'>

            <div className="md:h-auto md:w-[420px]  s">
                {state === 'signIn' ? <SignIn /> : <SignUp />}
            </div>

        </div>
    )
}
