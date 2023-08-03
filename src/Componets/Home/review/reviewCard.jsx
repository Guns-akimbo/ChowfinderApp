import React from 'react'

function ReviewCard(props) {
  return (
    <div className='reviewCard'>
        <main className='reviewCard-image'> <img src={props.imageUrl} alt="img"/></main>
        <main className='reviewCard-reviews'>
            <h4>{props.name}</h4>
            <p>{props.cuisine}</p>
        </main>
    </div>
  )
}

export default ReviewCard