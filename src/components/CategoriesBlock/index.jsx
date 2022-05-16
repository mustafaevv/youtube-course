import React from 'react'
import Container from '../../layout/Container'
import categories from '../../routes/categories'
import classes from './CategoriesBlock.module.scss'

const CategoriesBlock = () => {
  return (
    <Container className={classes['categories']}>
      {categories.map(category=>(
        <div className={classes['categories__item']}>
          <img className={classes['categories__image']} src={category.image} alt={category.text} />
          <a className={classes['categories__button']} href={category.link}>{category.text}</a>
        </div>
      ))}
    </Container>
  )
}

export default CategoriesBlock