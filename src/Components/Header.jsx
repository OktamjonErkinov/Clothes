import Logo from '../Images/Vector.png'
import Logo1 from '../Images/Vector1.png'
import Vector2 from '../Images/Vector2.png'
import Vector3 from '../Images/Vector3.png'
import Trainer from '../Images/trainer.png'
import Discount from '../Images/discount.png'
import Discount2 from '../Images/discount2.png'
import Discount3 from '../Images/discount3.png'
import Arrow3 from '../Images/Arrow 3.png'
import Ellipse from '../Images/Ellipse 10.png'
import Ellipse2 from '../Images/Ellipse_21.png'
import Ellipse3 from '../Images/Ellipse_31.png'
import Trainer4 from '../Images/red.png'
import Trainer5 from '../Images/black.png'
import Logo2 from '../Images/logo2.png'
import Logo3 from '../Images/logo3.png'
import Arrow2 from '../Images/Arrow2.png'
import Arrow1 from '../Images/Arrow1.png'
import Trainer1 from '../Images/trainer2.png'
import Trainer2 from '../Images/trainer3.png'
import Trainer3 from '../Images/trainer4.png'
import rating from '../Images/rating.png'
import { useState } from 'react'
import {motion , useScroll} from 'framer-motion'
import '../App.css'
function Header() {
    const { scrollYProgress } = useScroll();
    const [img, setImg] = useState(Trainer)
    const changeImage = () =>{
        setImg(Trainer)
        
    }
    const changeImage1 = () =>{
        setImg(Trainer4)
        
    }
    const changeImage2 = () =>{
        setImg(Trainer5)
        
    }
    return (
        <>
            <div className={img == Trainer5 ? "header3" : img == Trainer4 ? "header2" : "header"}>
                <motion.nav className="progress-bar navbar" style={{ scaleX: scrollYProgress }} >
                    <a href="#"><img src={img == Trainer5 ? Logo : img == Trainer4 ? Logo2 : Logo} alt="" /></a>

                    <ul>
                        <li><a href='#part1' className={img == Trainer5 ? "a1" : img == Trainer4 ? "a1" : "aa"}>Home</a></li>
                        <li><a href='#part2' className={img == Trainer5 ? "a1" : img == Trainer4 ? "a1" : "aa"} >Product</a></li>
                        <li><a href='#part3' className={img == Trainer5 ? "a1" : img == Trainer4 ? "a1" : "aa"} >About</a></li>
                        <li><a href='#part4' className={img == Trainer5 ? "a1" : img == Trainer4 ? "a1" : "aa"} >Review</a></li>
                    </ul>

                    <button className={img == Trainer5 ? "blackbutton" : img == Trainer4 ? "redbutton" : ""}>SHOP NOW</button>
                </motion.nav>




                <div className='ad'>
                    <div className='ad1'>
                        <p className={img == Trainer5 ? "black_p" : img == Trainer4 ? "red_p" : "green_p"}>Bring power to your steps. <img   src={img == Trainer5 ? Vector3 : img == Trainer4 ? Vector2 : Logo1 } alt="" /></p>
                        <h1 className='ad1_h1'>Walk the line.</h1>
                        <p  className='ide'>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
                        <p style={{ marginTop: 11 }} className='ide'>Now that you have a <span style={img == Trainer5 ? {color: 'black'} : img == Trainer4 ? {color:'red'} : {color:'#5CBE3A'}}>ready strategy</span> to move forward, </p>
                        <p className={img == Trainer5 ? "price12" : img == Trainer4 ? "price11" : "price1"}>Price: $125 <span className={img == Trainer5 ? "price23" : img == Trainer4 ? "price22" : "price2"}>$169</span></p>
                        <button className={img == Trainer5 ? "blackbutton" : img == Trainer4 ? "redbutton" : ""}>SHOP NOW</button>
                        <button className={img == Trainer5 ? "learn3" : img == Trainer4 ? "learn2" : "learn"}>LEARN MORE</button>
                    </div>
                    <div className='ad2'>
                        <img className={img == Trainer5 ? "discount3" : img == Trainer4 ? "discount2" : "discount"} src={img == Trainer5 ? Discount3 : img == Trainer4 ? Discount2 : Discount} alt="" />
                        <img className='arrow' src={img == Trainer5 ? Arrow1 : img == Trainer4 ? Arrow2 : Arrow3} alt="" />
                        <img className={img == Trainer5 ? "qora_krasov animated-image2" : img == Trainer4 ? "qizil_krasov animated-image1": 'krasovka1 animated-image'}  src={img} alt="" />

                    </div>
                </div>




                <div style={{ marginRight: 144, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop:50 }}>
                    <div style={{ display: 'flex', marginLeft: 225, gap: 68 }}>
                        <div>
                            <h1 className={img == Trainer5 ? "k3" : img == Trainer4 ? "k2" : "k"}>70k</h1>
                            <p className='kp'>CUSTOMERS</p>
                        </div>
                        <div>
                            <h1 className={img == Trainer5 ? "k3" : img == Trainer4 ? "k2" : "k"}>17k</h1>
                            <p className='kp'>REVIEW</p>
                        </div>
                    </div>

                    <div style={{display:'flex', gap:35}}>
                        <div onClick={changeImage} style={{ background: '#B6E247' }} className='ellipse'>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div onClick={changeImage1} className='ellipse'>
                            <img className='ellipse2' src={Ellipse2} alt="" />
                        </div>
                        <div onClick={changeImage2} style={{ background: 'gray' }} className='ellipse'>
                            <img src={Ellipse3} alt="" />
                        </div>
                    </div>
                </div>


                {/* <div id='part1' style={{marginTop:118, textAlign:'center', marginBottom:100}}>
                <h2>Our Latest Product</h2>
                <p style={{marginTop:20, marginBottom:30}}>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:20}}>
                    <div>
                        <motion.img
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                          }} src={Trainer1} alt="" />
                        <p>Aliquam lobortis</p>
                        <img src={rating} alt="" />
                        <p>$75.00 – $85.00</p>
                        <button className='learn'>SHOP NOW</button>
                    </div>
                    <div>
                    <motion.img
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                      }}
                    src={Trainer2} alt="" />
                        <p style={{marginTop:30}}>FUSCE ALIQUAM</p>
                        <img src={rating} alt="" />
                        <p>$65.00 – $75.00</p>
                        <button className='learn'>SHOP NOW</button>
                    </div>
                    <div>
                    <motion.img
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                      }} src={Trainer3} alt="" />
                        <p style={{marginTop:30}}>AIR SUPERIORITY</p>
                        <img src={rating} alt="" />
                        <p>$35.00 – $45.00</p>
                        <button className='learn'>SHOP NOW</button>
                    </div>
                </div>
            </div> */}
                
            </div>
        </>
    )
}
export default Header