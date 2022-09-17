chrome.runtime.onMessage.addListener( data => {
  if ( data.type === 'notification' ) {
          chrome.notifications.create(
              '',
              {
                  type: 'basic',
                  title: 'Notify!',
                  message: 'Drink some water!',
                  iconUrl: '128.png',
              }
          );
  }
});