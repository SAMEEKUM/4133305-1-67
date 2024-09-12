async function getBlog(){
    const host = "http://localhost:3000/"
    const res = await fetch(`${host}/api/blog/055`)

    if(!res.ok) throw new Error("Can't gecth")

    return res.json()
}

export default async function Blog({params}) {
     const data = await getBlog()

    return (
        <div>
            Blog
            {params.user}
            {data.name}
            {data.major}
            {data.id}
        </div>
    )
}