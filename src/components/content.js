import '../styles/content-styles.scss';
import Carousel from './carousel';
import KnifeOne from '../assets/knife-1.png';
import KnifeTwo from '../assets/knife-2.png';
import KnifeThree from '../assets/knife-3.png';

function Content () {
   

   return (
      <div className="content-wrapper">
         <div className='content-container'>
            <div className='slider-wrapper' >
               <Carousel>
                  <div className='item item-1'>
                     <img src={KnifeOne} alt='knife-one' />
                  </div>
                  <div className='item item-2'>
                     <img src={KnifeTwo} alt='knife-two' />
                  </div>
                  <div className='item item-3'>
                     <img src={KnifeThree} alt='knife-three' />
                  </div>
               </Carousel>
            </div>
            <div className='price-info-wrapper'>
               <div className='price-info-container'>
                  <div className='price-container'>497,25 грн</div>
                  <div className='button-container'>
                     <button className='order-button'>замовити</button>
                  </div>
                  <div className='description-wrapper'>
                     <div className='container-up'>
                        <div className='description-text-up'>Універсальний похідний ніж
                           у текстильній кобурі знадобиться Вам в дорозі, в туристичних походах, поїздках 
                           на природу як необхідний компактний атрибут.
                        </div>
                     </div>
                     <div className='container-down'>
                        <div className='description-text-down'>Леза виготовлені з нержавіючої сталі товщиною 
                           2,8 мм. Доступна швидка заміна леза на необхідне в будь-якій походній ситуації.
                           Рукоять має зручну ергономічну форму та
                           складається з міцних пластикових пластин і металевої серцевини.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='ytb-wrapper'>
               <div className='ytb-container'>
                  <iframe width="647" height="365" src="https://www.youtube.com/embed/3fO7cTS7A8o?si=MwKXQw6RYhQXlxyE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
               </div>
            </div>
            <div className='features-wrapper'>
               <div className='features-container'>
                  <div className='features-title'>Характеристики</div>
                  <div className='feature'>
                     Вид
                     <div className='line-one'></div>
                     туристичний
                  </div>
                  <div className='feature'>
                     Конструкція ножа
                     <div className='line-two'></div>
                     нескладний
                  </div>
                  <div className='feature'>
                     Матеpiaл леза
                     <div className='line-three'></div>
                     нержавіюча сталь
                  </div>
                  <div className='feature'>
                     Матеріал рукоятки
                     <div className='line-four'></div>
                     пластик
                  </div>
                  <div className='feature'>
                     Матеріал кобури
                     <div className='line-five'></div>
                     поліестр
                  </div>
                  <div className='feature'>
                     Довжина клинка
                     <div className='line-six'></div>
                     160мм
                  </div>
                  <div className='feature'>
                     Загальна довжина
                     <div className='line-seven'></div>
                     225мм
                  </div>
                  <div className='feature'>
                     Вага
                     <div className='line-eight'></div>
                     120г
                  </div>
                  <div className='feature'>
                     Країна виробник
                     <div className='line-nine'></div>
                     Китай
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Content;