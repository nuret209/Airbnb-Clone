import { useState } from "react";
function Tab({ children , a }) { 

 const [active, setactive] = useState(a);
    return (
        <>
            {children.map((tab , index)=><div className={tab.props.class} id={active == index&&"active"} onClick={()=> setactive(index)}>{tab.props.children}</div>)}
        </>
    )
}
Tab.Panel = function () {
   
    return (
        <>

        </>
    )
}
export default Tab
