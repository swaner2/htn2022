const text = document.getElementById( 'notify-text' );
const notify = document.getElementById( 'notify-button' );

notify.addEventListener( 'click', () => {
  chrome.runtime.sendMessage( '', {
    type: 'notification',
    message: text.value
  });
} );


const counter = document.getElementById( 'notify-count' );

chrome.storage.local.get( ['notifyCount'], data => {
  let value = data.notifyCount || 0;
  counter.innerHTML = value;
} );

chrome.storage.onChanged.addListener( ( changes, namespace ) => {
  if ( changes.notifyCount ) {
    let value = changes.notifyCount.newValue || 0;
    counter.innerHTML = value;
  }
});

const notify = message => {
  chrome.storage.local.get( ['notifyCount'], data => {
    let value = data.notifyCount || 0;
    chrome.storage.local.set({ 'notifyCount': Number( value ) + 1 });
  } );

  return chrome.notifications.create(
    '',
    {
      type: 'basic',
      title: 'Notify!',
      message: message || 'Notify!',
      iconUrl: '128.png',
    }
  );
};


// adapted from https://www.codeinwp.com/blog/how-to-write-a-chrome-extension/
