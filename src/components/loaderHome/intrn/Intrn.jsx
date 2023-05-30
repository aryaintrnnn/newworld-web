import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import photoBack from "../../../assets/imgs/photoback.jpg"
import "./intrn.css";

const Intrn = () => {
  const {scrollYProgress} = useScroll();
  const right = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const left = useTransform(scrollYProgress, [0, 1], [0, -800]);
  return (
    <section className="nextpage" id="home">
      <div className="containerIntrn">
        <div className="txtPertamma">
          <motion.h1 
          initial={{ x: -1800 }}
          animate={{
            x: 0,
            transition: {
              duration: 0.8,
              delay: 2
            }
          }}
          style={{ x: right }}
          className='txtAtas'>Web Developer</motion.h1>
          <motion.h1 
          initial={{ x: -1800 }}
          animate={{
            x: 0,
            transition: {
              duration: 0.8,
              delay: 2
            }
          }}
          style={{ x: right }}
          className='txtBawah'>Web Developer</motion.h1>
        </div>
        <div className="txtKedua">
          <motion.h1 
          initial={{ x: 1800 }}
          animate={{
            x: 0,
            transition: {
              duration: 0.8,
              delay: 2
            }
          }}
          style={{ x: left }}
          className='txtAtas'>Web Developer</motion.h1>
          <motion.h1 
          initial={{ x: 1800 }}
          animate={{
            x: 0,
            transition: {
              duration: 0.8,
              delay: 2
            }
          }}
          style={{ x: left }}
          className='txtBawah'>Web Developer</motion.h1>
        </div>
        <div className="intrnImg">
          <motion.img 
          initial={{ y: 200, opacity: 1 }}
          animate={{
            y: 0,
            transition: {
              duration: 1,
              delay: 2.1,
            },
          }}
          className="intrnPicture" src={photoBack} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Intrn