import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const BreadCrumb = () => {
    const location = useLocation();

    let pageName = 'Home';

    switch(location) {
        case '/details/:id': 
            pageName = 'Home > Market Watch';
    }

    return (
        <>{pageName}</>
    )
    
}

export default BreadCrumb;