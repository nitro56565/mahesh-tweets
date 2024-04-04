function addButton() {
  const toolbarDiv = document.querySelector('div[data-testid="toolBar"]');
  if (toolbarDiv && !toolbarDiv.hasAttribute('data-button-added')) {

    const button = document.createElement('img');
    button.src = 'https://i.ibb.co/CP1gchy/icon.png';
    button.classList.add('fetch-button');
    button.style.backgroundColor = 'yellow';
    button.style.width = '36px';
    button.style.height = '36px';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '50%';
    button.style.position = 'relative';
    button.style.left = '32rem';

    button.addEventListener('click', function() {
      const replySections = document.querySelectorAll('article[role="article"][tabindex="-1"]');
      replySections.forEach(section => {
        const tweetTextElement = section.querySelector('div[data-testid="tweetText"] > span');
        if (tweetTextElement) {
          const tweetText = tweetTextElement.innerText;
          if (tweetText) {
            alert(tweetText);
          }
        }
      });
    });

    if (toolbarDiv.parentNode) {
      toolbarDiv.parentNode.insertBefore(button, toolbarDiv);
      console.log('Selected toolbar div:', toolbarDiv);
      console.log("Button Added", button);
    }
    toolbarDiv.setAttribute('data-button-added', 'true');
  }
  setTimeout(addButton, 200); // delay added
}
addButton();
