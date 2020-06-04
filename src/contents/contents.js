chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message === 'Replace') {
    const cells = document.querySelectorAll(':scope .p6n-bq-results-table-pb td div');

    for (const cell of cells) {
      console.log(cell.innerHTML);
      if (new RegExp('^https://.+\\.(jpeg|jpg|png|webp)(\\?.*)?$').test(cell.innerHTML)) {
        const img = document.createElement('img');
        img.src = cell.innerHTML;
        img.width = 50;
        img.height = 50;
        cell.innerHTML = '';
        cell.appendChild(img);
      }
    }
  }
});
