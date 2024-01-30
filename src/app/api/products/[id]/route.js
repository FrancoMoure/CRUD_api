import { NextResponse } from "next/server";

//GET a specific product
export const GET = async (request, {params}) => {
    const id = params.id 
    const result = await fetch(`${process.env.API_URL}/${id}`, {
        headers: {
            "Content-Type": "application/json",
        }
    })
    const product = await result.json()
    return NextResponse.json({data: product})
}


//delete a specific product
export const DELETE = async (request, {params}) => {
    const id = params.id
    const result = await fetch(`${process.env.API_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            //I don't create an API_KEY here beacuse the fake api doesn't require it, but most api's will require it
        }
    })
    const product = await result.json()
    return NextResponse.json({data: `Product ${id} was removed`})
}


//update a specific product
export const PUT = async (request, {params}) => {
    const id = params.id 
    const product = await request.json()
    const result = await fetch(`${process.env.API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    })

    const productUpdate = await result.json()
    return NextResponse.json({data: product})
}