import logo from '../assets/logo-camilla.png'
// Componet that will render the top part of the web page
function HeadC(){
    // console.log(props.data)
    return (
        <div className='nav'>
            <img className="logo"  src={logo} />
            <h2> JUNIOR DEVELOPER ASSESSMENT</h2>
        </div>
    )
}

export default HeadC