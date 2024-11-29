function Avatar({person, size}) {
    return (
        <img 
            className="avatar"
            src="https://i.imgur.com/1bX5QH6.jpg"
            alt="Lin Lanying"
            width={100}
            height={100}
        />
    )
}

export function Profile(){

    return (
        <Avatar
            person={{name:'Lin', imageId:'1bx5QH6'}}
            size = {100} 
        />
    )
}