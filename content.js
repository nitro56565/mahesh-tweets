function addButton() {
  const toolbarDiv = document.querySelector('div[data-testid="toolBar"]');
  if (toolbarDiv && !toolbarDiv.hasAttribute('data-button-added')) {
    const button = document.createElement('img');
    button.src = 'https://i.ibb.co/CP1gchy/icon.png';
    button.classList.add('fetch-button');
    button.style.backgroundColor = 'yellow';
    button.style.width = '32px';
    button.style.height = '32px';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '50%';
    button.style.position = 'relative';
    button.style.left = '32.5rem';

    button.addEventListener('click', () => {
      const tweetSections = document.querySelectorAll('article[role="article"][tabindex="-1"]');
      tweetSections.forEach(section => {
        const tweetTextElement = section.querySelector('div[data-testid="tweetText"]');
        if (tweetTextElement) {
          const tweetText = tweetTextElement.textContent.trim();
            if (tweetText) {
              alert(tweetText);
            }
          pasteMessage(tweetText); 
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

function pasteMessage(text) {
  const replyTextarea = document.querySelector('div[aria-label="Post text"]')
  console.log('Reply textarea:', replyTextarea);

  if (replyTextarea) {
    replyTextarea.focus();
    document.execCommand('insertText', false, text);
    console.log('Text inserted:', text);
  } else {
    console.error("Reply textarea not found");
  }
}


addButton();
