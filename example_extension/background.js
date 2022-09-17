chrome.runtime.onMessage.addListener( data => {
  if ( data.type === 'notification' ) {
          chrome.notifications.create(
              '',
              {
                  type: 'basic',
                  title: 'Notify!',
                  message: data.message || 'Notify!',
                  iconUrl: './assets/icons/128.png',
              }
          );
  }
});

# onMessage event listener is used to find out when the push notifications
