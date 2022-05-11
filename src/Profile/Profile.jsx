import React from 'react'
import propTypes from 'prop-types'
const Profile = ({name,bio,profession, children,n}) => {
    n(name)

  return (
    <div>
        <h1 style={{color : "pink"}}>{name}</h1>
        <p style={{color:"blue"}}>{bio}</p>
        <h3>{profession}</h3>
        {children}

    </div>
  )
}
Profile.propTypes={
    name:propTypes.string
}
Profile.defaultProps={
    name:"aaa aaaaa",
    bio:"bbbb bbbb bbbbbbb bbbbb",
    profession:"ccccc   cccc  ccccc"
}
export default Profile