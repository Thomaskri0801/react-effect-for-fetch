function publicationHistory(props) {

    const artItem = props.artItem
    console.log(artItem.publicationHistory)

    return (
        <>
            <h4>Publication History:</h4>
                <ul>
                {artItem.publicationHistory.map((publicationHistory, index) => {
                    return (
                        <li key={index}>
                            {publicationHistory}</li>
                    )
                    })}
                </ul>
        </>
    )
}

export default publicationHistory;
