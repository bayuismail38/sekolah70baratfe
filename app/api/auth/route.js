import { cookies } from "next/headers"

export const POST = async(req) => {
    const body = await req.json(); // Parse the JSON body
    const { Email, Password } = body;
    var send = new URLSearchParams;

    send.append('Email', Email )
    send.append('Password', Password )
    try {
        const data = await fetch('http://localhost:5231/v1/Auth/Login',{
            method:"POST",
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body: send,
        }).then(e => console.log(e.json))

        console.log(data.json())

       
    } catch (ex) {
        console.log(ex)
    }
   


    cookies().set('Authorization', '')
}