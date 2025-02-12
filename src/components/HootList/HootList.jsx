const HootList = (props) => {
    return (
        <>
            <h3>Hoot List</h3>
            <ul>
                {props.hoots.map((hoot) => (
                    <li key={hoot._id}>
                        <header>
                        <h3 >{hoot.title}</h3>
                        <p>{`${hoot.author.username} posted on ${new Date(hoot.createdAt).toLocaleDateString()}`}</p>
                        </header>
                    </li>

                ))}
            </ul>
        </>
    )
}

export default HootList