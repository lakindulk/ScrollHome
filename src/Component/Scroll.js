import React from "react";
import {Controller,Scene} from 'react-scrollmagic';
import {Timeline,Tween} from 'react-gsap';

export default function Scroll() {
    return (
   <Controller>
    <Scene duration={1000} pin={true} indicators={true} triggerHook="onLeave">
        {
            (progress)=>(
                <div style={{background:'#000000', display:'flex',alignItems:'center',
                justifyContent:'center',width:'100%',height:'100vh',overflow:'hidden'}}>

<Timeline totalProgress={progress} paused>
    <Tween 
    from={{y:'-110vh'}}
    to={{y:'-90vh'}}
    duration={1000}
    >
    <img  alt='cc' src='https://res.cloudinary.com/iplus/image/upload/v1671691361/new/conffeti_e6wngv.png' style={{width:'100%',transition:'transform .4s ease-out',position:'absolute',zIndex:1,left:0,top:0}}/>
    
    </Tween>
    <Tween
                                    from={{y: '11vh'}}
                                    to={{y: '12vh'}}
                                    duration={1000} 
                                >
                                    <img alt='girl' src='https://res.cloudinary.com/iplus/image/upload/v1671691346/new/girl_icj110.png' style={{width: '30%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 2}} />
                                </Tween>
                                <Tween
                                    from={{y: '0vh', scale: 1}}
                                    to={{y: '1vh', scale: 1.3}}
                                    duration={1000} 
                                >
                                    <img alt='light' src='https://res.cloudinary.com/iplus/image/upload/v1671691333/new/light_x4vrwm.png' style={{width: '100%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 1, left: 0, top: 0}} />
                                </Tween>
                                <Tween
                                    from={{y: '85vh', opacity: 0.5}}
                                    to={{y: '70vh', opacity: 0.6}}
                                    duration={1000} 
                                >
                                    <img alt='cloud' src='https://res.cloudinary.com/iplus/image/upload/v1671691333/new/cloud_uebkj7.png' style={{width: '100%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 2}} />
                                </Tween>

</Timeline>

                </div>
            )
        }
    </Scene>
   </Controller>
    );
}