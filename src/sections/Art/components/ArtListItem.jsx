function ArtListItem(props) {
    console.log(props)
    props = props.artItem
    return (
        <li>
            <div className="frame">
                <img
                    src={`https://boolean-uk-api-server.fly.dev${props.imageURL}`}
                />
            </div>
            <h3>{props.title}</h3>
            <p>Artist: {props.artist}</p>
            <h4>Publication History:</h4>
            <ul>
                <li>{props.publicationHistory[0]}</li>
                <li>{props.publicationHistory[1]}</li>
                <li>{props.publicationHistory[2]}</li>
            </ul>
        </li>
    )
}

export default ArtListItem;