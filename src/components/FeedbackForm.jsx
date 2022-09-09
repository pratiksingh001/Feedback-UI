import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handelAdd}) {
    
  const [text, setText] = useState("")
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  
  const handelTextChange = (event) => {
    
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    }else if(text !== '' && text.trim().length <= 10){
      setBtnDisabled(true)
      setMessage('Text must be more than 10 character')
    }else{
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(event.target.value)
  }

  const handelSubmit = (event) => {
    event.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }
      console.log(newFeedback)
      handelAdd(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handelSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <RatingSelect select={(rating) => setRating(rating)} />
          <div className="input-group">
            <input onChange={handelTextChange} type="text" placeholder='Write a review' value={text} />
            <Button type='submit' isDisabled = {btnDisabled}>Send</Button>
          </div>
          {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm