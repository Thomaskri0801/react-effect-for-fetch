function UserListItem(props) {
    console.log(props)
    props = props.userItem
    return (
        <li style={{ background: `${props.favouriteColour}` }}>
            <img
            src={props.profileImage}
            alt={props.firstName}
            />
            <h3>{props.firstName} {props.lastName}</h3>
            <p>Email: {props.email}</p>
      </li>
    )
}

export default UserListItem;