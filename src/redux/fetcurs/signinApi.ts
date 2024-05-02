import { baseApi } from "../api/baseApi"



const authApi= baseApi.injectEndpoints({
    endpoints: (builder:any) =>({
        signup:builder.query({
            query:()=>({
            url:'/user',
            })
        })
    })
})
export const {useSignupQuery}=authApi