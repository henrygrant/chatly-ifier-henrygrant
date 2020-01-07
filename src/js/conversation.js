// formats date string as dddd, MMMM DD, YYYY (ex. Monday, December 30, 2019)
function formatDate(date) {
    const months = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
    ]
    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ]

    let dateObj = new Date(date)

    return [
        days[dateObj.getDay()],
        months[dateObj.getMonth()] + ' ' + dateObj.getDate(),
        dateObj.getFullYear()
    ].join(', ')
}

export function getConversationEl(conversationData) {
    return `
        <div class="conversation">
            <header class="header">
                <div class="title">${conversationData.title.toUpperCase()}</div>
                <div class="date">${formatDate(conversationData.date)}</div>
            </header> 
        </div>
    `
}
