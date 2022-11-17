import React, {useState} from 'react';

const ParentComponent=()=>{
    const [userDetails,setUserDetails]=useState({
        firstName:"emma",
        lastName:"watson",
        email:"emma@gmail.com"
    });

    return(
        <div>
            <h1>useContext Parent Component</h1>
            <ChildComponent userDetails={userDetails}/>
        </div>
    );
};

const ChildComponent=(props)=>{
    return(
        <div>
            <h1>Child Component</h1>
            <SubChildComponent userDetails={props.userDetails}/>
        </div>
    )
}

const SubChildComponent=({userDetails})=>{
    return(
        <div>
            <h1>SubChild Component</h1>
            <div>
                name: {userDetails.firstName}
            </div>
            <div>
                name: {userDetails.lastName}
            </div>
            <div>
                name: {userDetails.email}
            </div>
        </div>
    )
}

export default ParentComponent;