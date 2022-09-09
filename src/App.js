import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import Fetch from './components/Fetch'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        //FILTER METHOD here "item" is like the variable "i" we used in for loop {for(int i = 0; i < 10; i++)}.
        setFeedback(feedback.filter((item) => item.id !== id))
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // "setFeedback" state is immutable we can't just like push on it, we basically make a copy of it and for this we use spread operator.
        setFeedback([newFeedback, ...feedback])
    }
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handelAdd={addFeedback} />
                            <FeedbackStats feedback={ feedback } />
                            <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} /> 
                        </>
                    }>
                        
                    </Route>

                    <Route path='/about' element={<About/>} />
                </Routes>
                <AboutIconLink />
            </div>
            <Fetch /> 
        </Router>
    
  ) 
}

export default App