class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;

    // Add event listeners for hover, focusout, and toggle
    this.mainDetailsToggle.addEventListener('mouseenter', this.onMouseEnter.bind(this));
    this.mainDetailsToggle.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
    
    // Initialize a timer to delay closing
    this.closeTimer = null;
  }

  onMouseEnter() {
    this.open();
  }

  onMouseLeave() {
    // Delay the closing of the mega menu by a few milliseconds
    this.closeTimer = setTimeout(() => {
      this.close();
    }, 100); // Adjust the delay time as needed
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) {
        this.close();
      }
    });
  }

  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach((animation) => animation.play());
    } else {
      this.animations.forEach((animation) => animation.cancel());
    }
  }

  open() {
    clearTimeout(this.closeTimer); // Clear the close timer
    this.mainDetailsToggle.setAttribute('open', '');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', true);
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector('.header-wrapper');
  }

  onToggle() {
    if (!this.header) return;
    this.header.preventHide = this.mainDetailsToggle.open;

    if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
    document.documentElement.style.setProperty(
      '--header-bottom-position-desktop',
      `${Math.floor(this.header.getBoundingClientRect().bottom)}px`
    );
  }
}

customElements.define('header-menu', HeaderMenu);
