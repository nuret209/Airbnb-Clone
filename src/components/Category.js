function Category({ logo, title }) {
    const image = require('./../images/categoryicons/' + logo);
    return (

        <>

           <div className="img"> <img src={image} /></div>
            <div className="text">{title}</div>        </>
    )


}
export default Category