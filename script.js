const markAsReadBtn = document.querySelector('.mark_as_read_btn')
const notifications = document.querySelectorAll('.notification')
const notifications_count = document.querySelector('.title-notification_number')

const markAsRead = (notification) => {
    notification.setAttribute('class', 'notification');
    notification.querySelector('.notification_status').textContent = "";
    checkUnreadMessages();
};

const markAllAsRead = () => {
    const unreadMessages = document.querySelectorAll('.unread')
    if (unreadMessages.length > 0) {
        unreadMessages.forEach(message => {
            markAsRead(message);
        })
    }
    checkUnreadMessages();
}

const checkUnreadMessages = () => {
    const unreadMessages = document.querySelectorAll('.unread')
    if (unreadMessages.length > 0) {
        markAsReadBtn.style.cursor = 'pointer';
        markAsReadBtn.style.color = 'hsl(224, 21%, 14%)';
        markAsReadBtn.addEventListener('click', markAllAsRead)
    } else {
        markAsReadBtn.style.cursor = 'default';
        markAsReadBtn.style.color = 'gray';
        markAsReadBtn.removeEventListener('click', markAllAsRead)
        notifications_count.style.visibility = 'hidden';
    }
    notifications_count.textContent = unreadMessages.length
}

//first of all check if there are any unread messages to switch on the button
checkUnreadMessages();

//add event listeners for unread notifications
notifications.forEach(notification => {
    if (notification.hasAttribute('class', 'unread')) {
        const clickHandler = () => {
            markAsRead(notification);
            notification.removeEventListener('click', clickHandler);
        };
        notification.addEventListener('click', clickHandler);
    }
});


