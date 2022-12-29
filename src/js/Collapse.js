export default class Collapse {
  constructor() {
    this.collapseButtons = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
  }

  init() {
    this.collapseButtons.forEach((item) => {
      const dataTarget = item.dataset.target;
      const target = document.getElementById(dataTarget);

      item.addEventListener('click', () => {
        const coords = target.querySelector('.collapse-body').getBoundingClientRect();
        if (target.style.maxHeight) {
          target.style.maxHeight = '';
          return;
        }
        target.style.maxHeight = `${coords.height}px`;
      });
    });
  }
}
