import LinkedIn from "../LinkedIn"
import GitBtn from "../GitBtn"
import styles from "./StickyNav.module.scss"
import { useEffect, useState } from "react";





export default function StickyNav(){

    const [isVisible,setIsVisible]=useState(false)

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        if(scrollPosition>50){
           setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    };

    useEffect(() => {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
      }, []);
  
    return (
    <div className={`${styles.container} ${isVisible? styles.isVisible:""}`}>
            <GitBtn/>
            <LinkedIn/>
        </div>
    )
}