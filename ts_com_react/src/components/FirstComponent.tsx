//Components
import React, { ReactElement } from 'react'

interface Props {

}

function FirstComponent({}: Props): ReactElement {
    return(
        <div>
            <h1>First Component</h1>
        </div>
    )
}

export default FirstComponent