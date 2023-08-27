import React from 'react'
import style from './TopicTitle.module.css'
function TopicTitle(props) {
  const classes = `${style.content__topic} ${props.contentMargin ? props.contentMargin : ''}`
  return (
    <div className={classes}>
    <section className={`${style.section} ${props.sectionAfter ? props.sectionAfter : ''}`} >
            <h2 className={style.title}>{props.title} <span>{props.titleSpan}</span></h2>
            <a href='sddd' className={style.link}>View All</a>
    </section>
    {props.children}
  </div>
  )
}

export default TopicTitle