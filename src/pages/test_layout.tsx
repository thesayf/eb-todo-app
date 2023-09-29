import React from "react";
import TestComponent from "../components/test_component";
import Logo from "../components/logo"

const TestLayout: React.FC = () => { 

    return(
        <div>
            <TestComponent/>
            <Logo/>
        </div>
    )
}

export default TestLayout