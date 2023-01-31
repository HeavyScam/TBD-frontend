import React from 'react'
import { redirect } from 'react-router-dom';

import Keys from '../assets/Keys.svg'
import Logo from '../assets/Logo.svg'

function Home() {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoading(false), 2500);
    }, []);
    if (loading) {
        return(
        <div className="loader bounce2">
            
            <img src={Logo} alt="Loading..." className='load' />
            <h1 style={{color:'white',paddingTop:'230px', fontWeight:'700'}} className="txt">The Best Date</h1>
            
        </div>)
    }
    
    const redirect = (e) => {
        window.location.href = "/register"

    }
    return (
        <>
            <header className="sticky fade-in-down top-0 z-50 grid grid-cols-3 drop-shadow-md p-5 md:px-10 " style={{ display: "flex", marginTop:'1%' }}>
                <a href='/'>
                <div>
                    <img src={Logo} alt="Loading..." className='load load1' style={{height:'60px',width:'60px', marginRight:'300px', marginTop:'-1%'}} />
                    <span className="text-white nav" style={{ fontSize:"20px", marginLeft:'64px', fontWeight:'600' }}>The Best Date</span>
                    {/* <button className="btn-hover text-white flex-end font-bold py-2 px-10" style={{ backgroundColor: "#FD9910", borderRadius: "12px", float: "right", fontSize: "16px" }}>
                        <a href="/register">SIGN UP</a>
                    </button> */}
                </div>
                </a>
            </header>

            <div className="grid grid-cols-3 drop-shadow-md p-5 md:px-10 fade-in-left top" style={{ display: "flex", marginTop:"15%" }}>
                <div className='bodytxt'>
                    <span className="text-white sml-txt"style={{ fontSize:"24px", fontWeight:"300"}}>BORED OF DATING APPS?</span>
                    <h2 className="text-white grad" style={{ fontSize:"60px",marginTop:"-0.5%" }}>YOUR IDEAL MATCH</h2>
                    <h2 className=" grad" style={{ fontSize:"72px",marginTop:"-2%" }}>IN 3 SIMPLE STEPS</h2>
                    <button className=" text-white btn1 flex-end font-bold py-2 " style={{fontSize: "16px", marginTop:"1%"}} onClick={redirect}>DOWNLOAD</button>
                    <div className=" text-white flex-end font-bold" style={{ borderRadius: "12px", float: "right", fontSize: "16px" }}>
                    </div>
                </div>
                <img src={Keys} alt="image1" className="keys"  style={{position:'absolute', right:'100px', marginTop:'-10%'}}/>
            </div>


        </>

    )
}

export default Home