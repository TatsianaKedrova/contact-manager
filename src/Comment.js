import React from "react";
import PropTypes from 'prop-types';
import {putToTemplate} from "./hoc/putComponentToTemplate";
import {isIE} from "./hoc/isIEHoc";
import { compose } from 'redux';

const Comment = (props) => {

    return <div>{props.text}, {props.isChrome && "CHROME"}</div>
}

Comment.propTypes = {
    text: PropTypes.string.isRequired
}
export default compose(isIE, putToTemplate)(Comment);