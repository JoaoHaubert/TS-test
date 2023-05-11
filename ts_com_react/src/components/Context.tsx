import React, { useContext } from 'react'
import { AppContext } from '../App'


const Context = () => {

    const details = useContext(AppContext)

    return(
        <>
        {details && (
            <div>
                <h1>Language: {details.language}</h1>
                <h3>Framework: {details.framework}</h3>
                <h4>Projects: {details.projects}</h4>
            </div>
        )}
        </>
    )
}

export default Context