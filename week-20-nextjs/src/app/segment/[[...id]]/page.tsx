export default function ({ params }: {
    params: {
        id: string[]
    }
}) {
    return (
        <div>
            <h1>Gopal here {JSON.stringify(params.id)}</h1>
            <h2>Talk to me</h2>
        </div>
    )
}