import React from 'react'

const Post = ({article}) => {
    console.log(article)
    const {name, picture, description } = article.fields
  return (
    <div className='post'>
        <h2 className= 'title'> {name} </h2>
        {picture && <img className='picture' src={picture.fields.file.url} alt={name} title={name} />}
        <section> {description} </section>
    </div>
  )
}
export default Post