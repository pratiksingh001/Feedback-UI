import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is feedback number 1",
            rating: 10
        },
        {
            id: 2,
            text: "This is feedback number 2",
            rating: 8
        },
        {
            id: 3,
            text: "This is feedback number 3",
            rating: 6
        },
        {
            id: 4,
            text: "This is feedback number 4",
            rating: 7
        },
        {
            id: 5,
            text: "This is feedback number 5",
            rating: 10
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Delete feedback from the list
    const deleteFeedback = (id) => {
        //FILTER METHOD here "item" is like the variable "i" we used in for loop {for(int i = 0; i < 10; i++)}.
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    // Add feedback to the list
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // "setFeedback" state is immutable we can't just like push on it, we basically make a copy of it and for this we use spread operator.
        setFeedback([newFeedback, ...feedback])
    }

    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
            
        })
    }

    //Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem} : item))
        console.log(id, updItem);
    }


    return (
        <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, updateFeedback, feedbackEdit }}>
            {children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext