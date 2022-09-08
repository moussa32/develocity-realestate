import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser , selectCurrentEmail , selectCurrentPassword , selectCurrentToken } from "./DataFetch/AuthSlice";
import {Link} from "react-router-dom";

const Welcome=()=>{
    const user = useSelector(selectCurrentUser)
    const email = useSelector(selectCurrentEmail)
    const password = useSelector(selectCurrentPassword)
    const token = useSelector(selectCurrentToken)

   
    return(
        <Fragment>
        <h1>welcome</h1>
        </Fragment>
    )
}

export default Welcome;