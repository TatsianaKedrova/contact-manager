import React from "react";

export const isIE = (WrappedComponent) => {

    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);


    return  (props) => {
        return <WrappedComponent isIE={isChrome} {...props}/>
    }
}

