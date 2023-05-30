import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import "./service.css"

const Service = () => {
    const {scrollYProgress} = useScroll();
    const frontend = useTransform(scrollYProgress, [0, 1], [0, 600]);
    const backend = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const photography = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
    <section id='service'>
        <div className="serviceText">
            <motion.span style={{ x: frontend }}>
                Frontend <span className="luaranText">Developer</span> - Frontend 
                <span className="luaranText">Developer</span> - Frontend 
                <span className="luaranText">Developer</span> - 
            </motion.span>
            <motion.span style={{ x: backend }}>
                Backend <span className="luaranText">Developer</span> - Backend 
                <span className="luaranText">Developer</span> - Backend 
                <span className="luaranText">Developer</span> - 
            </motion.span>
            <motion.span style={{ x: photography }}>
                <span className="luaranText">Photog</span>rahpy - 
                <span className="luaranText">Photog</span>rahpy - 
                <span className="luaranText">Photog</span>rahpy - 
                <span className="luaranText">Photog</span>rahpy
            </motion.span>
        </div>
        <div className="serviceSayatxt">
            <div className="serviceSaya">
                <span>Mysql</span>
                <span>React Js</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Photoshoot</span>
            </div>
            <div className="serviceSaya">
                <span>PHP</span>
                <span>Javascript</span>
                <span>LUA</span>
                <span>Videography</span>
            </div>
        </div>
    </section>
  )
}

export default Service