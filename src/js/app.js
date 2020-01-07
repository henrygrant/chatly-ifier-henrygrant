import {getConversationEl} from './conversation.js'
import {getMessageEl} from './message.js'

const API_ENDPOINT_URL = 'https://api.myjson.com/bins/18ce70'

const get = async (url) => {
    let response = await fetch(url)
    let data = await response.json()
    return data
}

// executes on page load
(async () => { 
    // fetch data from endpoint
    const resp = await get(API_ENDPOINT_URL)
    
    // error if nothing comes back from API endpoint
    if(!resp.data) {
        console.error(`There was a problem getting data from the API endpoint at ${API_ENDPOINT_URL}`)
        return
    }

    // get conversation DOM element with fetched data, append the conversation to the document
    const conversationTemplate = document.createElement('template')
    conversationTemplate.innerHTML = getConversationEl({
        title: 'Chat Transcript',
        date: new Date(resp.data.conversationDate)
    })
    const containerEl = document.body.appendChild(conversationTemplate.content.firstElementChild)

    // get message DOM elements with fetched data, append to conversation container
    resp.data.messages.forEach(
        message => {
            const messageTemplate = document.createElement('template')
            messageTemplate.innerHTML = getMessageEl(message)
            containerEl.appendChild(messageTemplate.content.firstElementChild)
        }
    )
})()