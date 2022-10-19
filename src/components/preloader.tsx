import React from "react";
import ReactLoading from 'react-loading'

import { useEffect, useState} from 'react'
function Preloader() {
    const [done, setDone] = useState([])

    return (
        <div>
            < ReactLoading type={"bars"} color={"green"} height={400} width={400}/>
        </div>
    )
}

export default Preloader;