import { useState, useEffect, Children, cloneElement, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/carousel-styles.scss';

function Carousel ({children}){
   const [pages, setPages] = useState([]);
   const [offSet, setOffSet] = useState(0);
   const divBlock = useRef(null);

   const handleLeftClick =()=>{
      let currentWidth = (divBlock.current.getBoundingClientRect().width);
      setOffSet((currentOffset)=>{
         const newOffset = currentOffset + currentWidth;
         return Math.min(newOffset, 0);
      });
   };

   const handleRightClick =()=>{
      let currentWidth = (divBlock.current.getBoundingClientRect().width);
      setOffSet((currentOffset)=>{
         const newOffset = currentOffset - currentWidth;
         const maxOffset = -(currentWidth * (pages.length -1));
         return Math.max(newOffset, maxOffset);
      });
   }

   useEffect(()=>{
      let currentWidth = (divBlock.current.getBoundingClientRect().width);
      setPages(
         Children.map(children, child=> {
            return cloneElement(child,{
               style: {
                  height: '100%',
                  minWidth: `${currentWidth}px`,
                  maxWidth: `${currentWidth}px`
               }
            })
         })
      );
   }, []);
   return(
      <div className="main-container" ref={divBlock}>
         <FaChevronLeft className='arrow-left' onClick={handleLeftClick}/>
         <div className='window'>
            <div className='all-pages-container'
               style={{
                  transform: `translateX(${offSet}px)`
               }}
            >{pages}</div>
         </div>
         <FaChevronRight className='arrow-right' onClick={handleRightClick}/>
      </div>
   );
};

export default Carousel;