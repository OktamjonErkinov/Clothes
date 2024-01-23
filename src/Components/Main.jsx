import Trainer1 from '../Images/trainer2.png'
import Trainer2 from '../Images/trainer3.png'
import Trainer3 from '../Images/trainer4.png'
import rating from '../Images/rating.png'
import rectangle from '../Images/Rectangle1.png'
import rectangle2 from '../Images/Rectangle2.png'
import Vector7 from '../Images/Vector7.png'
import Logo from '../Images/Vector8.png'
import Face from '../Images/facebook.png'
import Twitt from '../Images/twitter.png'
import Insta from '../Images/insta.png'
import '../App.css'
import {motion} from "framer-motion"
function Main(){
    return(
        <>
        <div>

            <div id='part1' style={{marginTop:118, textAlign:'center', marginBottom:100}}>
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
            </div>

            <div id='part2' style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:100}}>
                <div>
                    <h1 className='maindivh1'>Telling your story with videos</h1>
                    <p className='maindivp'>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
                </div>
                <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} src={rectangle} alt="" />
            </div>

            <div id='part3' style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:100, gap:90}}>
                <motion.img
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }} src={rectangle2} alt="" />
                <div>
                    <h1 className='h13'>The best shoes for the best people.</h1>
                    <div>
                        <div style={{display:'flex', alignItems:'center', marginTop:30}}>
                            <img src={Vector7} alt="" />
                            <p className='pp'>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
                        </div>
                        <div style={{display:'flex', alignItems:'center', marginTop:30}}>
                            <img src={Vector7} alt="" />
                            <p className='pp'>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
                        </div>
                        <div style={{display:'flex', alignItems:'center', marginTop:30}}>
                            <img src={Vector7} alt="" />
                            <p className='pp'>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
                        </div>
                        <div style={{display:'flex', alignItems:'center', marginTop:30}}>
                            <img src={Vector7} alt="" />
                            <p className='pp'>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div id='part4' style={{width:1146, height:368, background:'#EBFFE4', textAlign:'center', margin: 'auto', paddingTop:120, marginBottom:100}}>
                <h1 >Get Started Now</h1>
                <p style={{marginTop:20}}>Now that you have a ready strategy to move forward, it’s time to come up with some ideas.</p>
                <button style={{marginTop:20}}>SUBESCRIBE</button>
            </div>


            <hr />

            <div style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', padding:30}}>
                <a href="#"><img src={Logo} alt="" /></a>
                <ul>
                    <li><a style={{textDecoration:'none', color:'black'}} href="#">Home</a></li>
                    <li><a style={{textDecoration:'none', color:'black'}} href="#">Product</a></li>
                    <li><a style={{textDecoration:'none', color:'black'}} href="#">About</a></li>
                    <li><a style={{textDecoration:'none', color:'black'}} href="#">Review</a></li>
                </ul>
                <div style={{display:'flex', alignItems:'center', gap:20}}>
                <p>Follow Us:</p>
                <div style={{display:'flex', alignItems:'center', gap:10}}>
                    {/* <div className='footera'> */}
                        <img className='footera' src={Face} alt="" />
                    {/* </div> */}
                    <img className='footera' src={Twitt} alt="" />
                    <img className='footera' src={Insta} alt="" />
                </div>
                </div>
            </div>
            



        </div>
        </>
    )
}
export default Main