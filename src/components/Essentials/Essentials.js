import React from 'react'
import TopicTitle from '../UI/Topic__title/TopicTitle'
import Card from '../UI/Card';
import style from './Essentials.module.css';
const essentials__data = [
    {
        img:41624,
        underTitle:'Daily Essentials',
    },
    {
        img:54018,
        underTitle:'Vegitables',
    },
    {
        img:4162444,
        underTitle:'Fruits',
    },
    {
        img:23410,
        underTitle:'Strawberry',
    },
    {
        img:22136,
        underTitle:'Mango',
    },
    {
        img:35763,
        underTitle:'Cherry',
    }
]
function Essentials() {
  return (
    <TopicTitle
      title="Daily"
      titleSpan="Essentials"
      sectionAfter={style.sectionAfter}
      >
      <div className={style.essential__conteiner}>
        {essentials__data.map((essential) => {
          return (
            <Card nameClass={style.essential__card} key={essential.img}>
              <span className={style.essential__imgCard}>
              <img src={require(`./image/${essential.img}.png`)} alt='photo' className={style.essential__img}/>
              </span>
                <h4 className={style.undertitle}>{essential.underTitle}</h4>
                <h3 className={style.discount}>UP to 50% OFF</h3>
            </Card>
          );
        })}
      </div>
    </TopicTitle>
  )
}

export default Essentials