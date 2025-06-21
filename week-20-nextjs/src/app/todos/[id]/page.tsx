import axios from "axios"

export default async function Blogs({ params }: any) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const todos = response.data

    return (
        <div className="text-4xl text-orange-600 flex flex-col gap-4 items-center justify-center h-screen">
            <h1 className="bg-amber-50 px-8 py-4 rounded-md">
                {todos.id}
            </h1>

            <h1 className="bg-amber-50 px-8 py-4 rounded-md">
                {todos.title}
            </h1>
        </div>
    )
}



// [id] => params.id, to access the dynamic parameters