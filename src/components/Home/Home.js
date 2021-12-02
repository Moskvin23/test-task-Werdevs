import React from 'react'
import s from './Home.module.scss'
import Calendar from './Calendar/Calendar'


function Home() {
    return (
        
        <section className={s.сontainer}>
            <div className={s.сontainer__left}>
                <p className={s.header} >CHOOSE THE DAY FOR THE MEETING</p>
        <p className={s.text}>We encourage you to book your appointment online.<p>This will save you time.</p></p>
        </div>
            <div className={s.сontainer__right}>
            <Calendar />
            </div>
        </section>
    
    )
}

export default Home
