function addButton() {
  const toolbarDiv = document.querySelector('div[data-testid="toolBar"]');
  if (toolbarDiv && !toolbarDiv.hasAttribute('data-button-added')) {
    
    const button = document.createElement('button');
    button.textContent = 'Mahesh Tweets';

    if (toolbarDiv.parentNode) {
      toolbarDiv.parentNode.insertBefore(button, toolbarDiv);
      console.log('Selected toolbar div:', toolbarDiv);
      console.log("Button Added",button);
    }
    toolbarDiv.setAttribute('data-button-added', 'true');
  }
  setTimeout(addButton, 200); //delay added
}
addButton();