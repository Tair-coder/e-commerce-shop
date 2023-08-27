import React from 'react'
import TopicTitle from '../UI/Topic__title/TopicTitle'
import style from './TopCategories.module.css';
import Card from '../UI/Card';
const dataTopCategories = [
  {
    productName:'Mobile',
    id:'00'
  },
  {
    productName:'Cosmetics',
    id:'01'
  },
  {
    productName:'Electronics',
    id:'02',
    st:true,
  },
  {
    productName:'Furniture',
    id:'03'
  },
  {
    productName:'Watches',
    id:'04'
  },
  {
    productName:'Decor',
    id:'05'
  },
  {
    productName:'Accessories',
    id:'06'
  },

]
function TopCategories() {
  return (
    <TopicTitle 
      title="Shop From" 
      titleSpan="Top Categories" 
      sectionAfter={style.sectionAfter}>
        <div className={style.categ__conteiner}>
        {dataTopCategories.map((categ)=> {
          return <Card key={categ.id} nameClass={style.categ__card}>
            <span className={style.categImg}>
              <img src={require(`./image/img${categ.id}.png`)} alt='photo' className={`${style.img} ${categ.st ? style.electr : ''}`}/>
            </span>
            <h3 className={style.categName}>{categ.productName}</h3>
          </Card>
          
        })}
    </div>
    </TopicTitle>
  )
}

export default TopCategories