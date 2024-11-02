'use client'
import React, { useState } from 'react';
import { SignInFLow } from "../types"

export const AuthScreen = () => {


    const [date, setDate] = useState<SignInFLow>('signIn')



    return (

        <div className='h-full flex text-4xl  items-center justify-center bg-[#5C3B58]'>


            Auth


        </div>
    )
}
