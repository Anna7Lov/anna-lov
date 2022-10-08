

function showNotification({ top = 0, right = 0, html, className }) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.style.top = top + 'px';
    notification.style.right = right + 'px';
    notification.innerHTML = html;
    if (className) {
        notification.classList.add(className);
    }    
    document.body.prepend(notification);
    setTimeout(() => notification.remove(), 1500);
}

showNotification({
    top: 10,
    right: 10,
    html: "Hello!",
    className: "welcome"
});