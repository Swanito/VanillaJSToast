const DEFAULT_OPTIONS = {
  autoClose: 5000,
  position: 'top-right',
  onClose: () => { },
  canClose: true,
  showProgress: false,
  delay: 0,
  style: 'normal',
  textColor: '#383838',
  progressColor: '#383838'
}

export default class Toast {
  #toast
  #removeBinded
  #visibleSince
  #autoClose
  #toastStyles = ['normal', 'warning', 'error', 'success']

  constructor(options) {
    const delay = options.delay || DEFAULT_OPTIONS.delay
    setTimeout(() => {
      this.#toast = document.createElement("div")
      this.#toast.classList.add("toast")
      requestAnimationFrame(() => {
        this.#toast.classList.add("show")
      })
      this.#removeBinded = this.remove.bind(this)
      Object.entries({ ...DEFAULT_OPTIONS, ...options }).forEach(([key, value]) => {
        this[key] = value
      });
      this.#visibleSince = new Date()
    }, delay)
  };

  set position(position) {
    const currentContainer = this.#toast.parentElement
    const selector = `.toast-container[data-position="${position}"]`
    const container = document.querySelector(selector) || createContainer(position)
    container.append(this.#toast)
    if (currentContainer == null || currentContainer.hasChildNodes()) return
    currentContainer.remove()
  }

  set text(text) {
    this.#toast.textContent = text
  }

  set autoClose(value) {
    if (value === false) return
    this.#autoClose = value
    setTimeout(() => this.remove(), value)
  }

  set canClose(value) {
    if (typeof value === 'boolean') {
      this.#toast.classList.toggle('can-close', value)
      if (value === true) this.#toast.addEventListener("click", this.#removeBinded)
      if (value === false) this.#toast.removeEventListener("click", this.#removeBinded)
    }
  }

  set showProgress(value) {
    this.#toast.classList.toggle('progress', value)
    this.#toast.style.setProperty('--progress', 1)
    if (value) {
      setInterval(() => {
        const timeVisible = new Date() - this.#visibleSince
        this.#toast.style.setProperty('--progress', 1 - timeVisible / this.#autoClose)
      }, 10)
    }
  }

  set textColor(value) {
    this.#toast.style.color = value
  }

  set progressColor(value) {
    this.#toast.style.setProperty('--progressColor', value)
  }

  set style(value) {
    if (!this.#toastStyles.includes(value)) return
    switch (value) {
      case 'normal':
        this.#toast.style.backgroundColor = 'white'
        break;
      case 'warning':
        this.#toast.style.backgroundColor = '#fce77e'
        this.#toast.style.border = 'none'
        break;
      case 'error':
        this.#toast.style.backgroundColor = '#f24949'
        this.#toast.style.border = 'none'
        break;
      case 'success':
        this.#toast.style.backgroundColor = '#64b837'
        this.#toast.style.border = 'none'
        break;
      default:
        this.#toast.style.backgroundColor = 'white'
        break;
    }
  }

  remove() {
    const container = this.#toast.parentElement
    this.#toast.classList.remove('show')
    this.#toast.addEventListener("transitionend", () => {
      this.#toast.remove()
      if (container.hasChildNodes()) return
      container.remove()
    })
    this.onClose()
  }

}

function createContainer(position) {
  const container = document.createElement("div")
  container.classList.add("toast-container")
  container.dataset.position = position
  document.body.append(container)
  return container
}
