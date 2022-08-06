/* A function that takes a list of selectors and removes the hidden attribute from the elements that match the selectors.
 * */
export const switchLoadClass = (type, selectorList, className) => {
  selectorList.forEach((selector) => {
    const nodeElement = document.querySelector(selector);
    nodeElement.classList[type](className);
  });
};

const loadSelectorList = [`body`];

/* Adding an event listener to the window object */
export const pageLoadEvents = () => {
  window.addEventListener(`load`, () => switchLoadClass(`add`, loadSelectorList, `load`));
};

