import {NextResponse} from "next/server";
import React from 'react';

export const GET=()=>{
    return NextResponse.json({
        messgae:"Hello,this is the API route!",
        status:"success"
    }
        
    );
};

