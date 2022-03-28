self.addEventListener('push', () => {
    let reg = await navigator.serviceWorker.getRegistration();
    reg.showNotification('test message', {});
})