import { NextResponse } from "next/server";

export const GET = async () => {
    const result = await fetch(process.env.API_URL, {
        
        //I don't need to specify the GET Method
        
        headers: {
            "Content-Type": "application/json"
        }
    })
    const products = await result.json()
    return NextResponse.json({data: products})
}

//I need to use request because it's an optional parameter
export const POST = async (req) => {
    const product = await req.json()
    const result = await fetch(process.env.API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    })
    const newProduct = await result.json()
    return NextResponse.json({data: newProduct})
}


/* Note:

    When getting data, it will only display the pre-existing data of the api because it is fetched from a fake api. So in case anyone posts a product, that product will not be displayed while getting data from that fake api.

*/


