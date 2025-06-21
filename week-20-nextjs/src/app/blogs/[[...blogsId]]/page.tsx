export default function ({ params }: {
    params: {
        blogsId: string[]
    }
}) {
    return (
        <div>
            <h1>Gopal here {JSON.stringify(params.blogsId)}</h1>
            <h2>Talk to me</h2>
        </div>
    )
}