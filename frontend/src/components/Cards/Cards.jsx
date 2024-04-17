import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
  return (
    <div className='cards'>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="src/images/deadlift.jpg"
                    text="Explore the workout library"
                    label='Fitness'
                    path='/fitness'
                    />
                    <CardItem 
                    src="src/images/nutrition.webp"
                    text="Explore the nutrition library"  
                    label='Nutrition'
                    path='/nutrition'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="src/images/Messaging.webp"
                    text="Keep in touch with your trainer. Ask questions and get feedback."
                    label='Messages'
                    path='/messages'
                    />
                    <CardItem 
                    src="src/images/calendar.jpg"
                    text="Book and manage your training sessions"  
                    label='Calendar'
                    path='/calendar'
                    />
                    <CardItem 
                    src="src/images/payment.png"
                    text="View and manage your payments"  
                    label='payments'
                    path='/invoices'
                    />
                    
                </ul>
            </div>
            </div>
    </div>
  )
}

export default Cards