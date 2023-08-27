import React from 'react'
import Card from '../UI/Card'
import TopicTitle from '../UI/Topic__title/TopicTitle'
import style from './Deals.module.css'
function Deals(props) {
    return (
        <TopicTitle title="Grab the best deal on" titleSpan="Smartphones">
        <div className={style.deals__conteiner}>
            {props.deals.map((deals) => (
                <Card key={deals.id} nameClass={style.deals__card}>
                    <img src={require(`./image/phone${deals.id}.png`)} alt='f' className={style.deals__img}/>
                    <span className={`${style.deals__card_describe} ${style.main}`}>
                    <h3 className={style.deals__title}>{deals.mean}</h3>
                    <p className={style.deals__costs}><strong className={style.deals__newcost}>₹{deals.cost}</strong><del className={style.deals__oldcost}>₹{deals.oldcost}</del></p>
                    </span>
                    <span className={`${style.deals__card_describe} ${style.bonus}`}>
                        <p className={style.deals__save}>Save - ₹{deals.bonus}</p>
                    </span>
                </Card>
            ))}
        </div>
        </TopicTitle>
  )
}

export default Deals