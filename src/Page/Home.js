import React from "react";
import {Controller,Scene} from 'react-scrollmagic';
import {Timeline,Tween} from 'react-gsap';
export default function Home() {
    return (
        <div>
<Controller>
    <Scene duration={1000} pin={true} indicators={true} triggerHook="onLeave">
        {
            (progress)=>(
                <div style={{background:'#FDA172', display:'flex',alignItems:'center',
                justifyContent:'center',width:'100%',height:'100vh',overflow:'hidden'}}>

<Timeline totalProgress={progress} paused>
    <Tween 
    from={{y:'-1110vh'}}
    to={{y:'-90vh'}}
    duration={1000}
    >
    <img  alt='cc' src='https://res.cloudinary.com/iplus/image/upload/v1671698429/new/conffeti_um2nml.png' style={{width:'100%',transition:'transform .4s ease-out',position:'absolute',zIndex:1,left:0,top:0}}/>
    
    </Tween>
    <Tween
                                    from={{y: '11vh'}}
                                    to={{y: '12vh'}}
                                    duration={1000} 
                                >
                                    <img alt='' src='' style={{width: '30%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 2}} />
                                </Tween>
                                <Tween
                                    from={{y: '0vh', scale: 1}}
                                    to={{y: '1vh', scale: 1.3}}
                                    duration={1000} 
                                >
                                    <img alt='light' src='https://res.cloudinary.com/iplus/image/upload/v1671696051/new/light_copy_segat6.png' style={{width: '100%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 1, left: 0, top: 0}} />
                                </Tween>
                                <Tween
                                    from={{y: '85vh'}}
                                    to={{y: '55vh'}}
                                    duration={1000} 
                                >
                                    <img alt='cloud' src='https://res.cloudinary.com/iplus/image/upload/v1671696798/new/digital-illustration-brian-edward-miller-1280x720_copy_arkkdk.png' style={{width: '100%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 1}} />
                                </Tween>

</Timeline>

                </div>
                
            )
        }
    </Scene>
   </Controller>
   <h1>HEllo</h1>

        </div>
    );
}