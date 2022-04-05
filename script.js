import Toast from './Toast.js'

document.getElementById("normal").addEventListener('click', () => {
  new Toast({
    position: "top-right",
    text: "🦄 Basic toast, auto dismiss in 5 secs.",
    showProgress: true,
    progressColor: "  linear-gradient(" +
      "    90deg," +
      "    rgba(255, 0, 0, 1) 0%," +
      "    rgba(255, 154, 0, 1) 10%," +
      "    rgba(208, 222, 33, 1) 20%," +
      "    rgba(79, 220, 74, 1) 30%," +
      "    rgba(63, 218, 216, 1) 40%," +
      "    rgba(47, 201, 226, 1) 50%," +
      "    rgba(28, 127, 238, 1) 60%," +
      "    rgba(95, 21, 242, 1) 70%," +
      "    rgba(186, 12, 248, 1) 80%," +
      "    rgba(251, 7, 217, 1) 90%," +
      "    rgba(255, 0, 0, 1) 100%" +
      ")"
  })
})

document.getElementById("warning").addEventListener('click', () => {
  new Toast({
    position: "top-left",
    text: "Warning toast. Click to dismiss.",
    canClose: true,
    style: 'warning',
    autoClose: false,
  })
})


document.getElementById("error").addEventListener('click', () => {
  new Toast({
    position: "bottom-right",
    text: "Error toast with progress. Close disabled.",
    textColor: 'white',
    progressColor: 'white',
    canClose: false,
    style: 'error',
    showProgress: true,
  })
})


document.getElementById("success").addEventListener('click', () => {
  new Toast({
    position: "bottom-left",
    text: "Success toast. All mixed.",
    textColor: 'white',
    progressColor: 'white',
    canClose: true,
    style: 'success',
    showProgress: true,
    autoClose: 2000
  })
})

document.getElementById("normal-tc").addEventListener('click', () => {
  new Toast({
    position: "top-center",
    text: "Success toast. All mixed.",
    textColor: 'white',
    progressColor: 'white',
    canClose: true,
    style: 'success',
    showProgress: true,
    autoClose: 2000
  })
})

document.getElementById("normal-bc").addEventListener('click', () => {
  new Toast({
    position: "bottom-center",
    text: "Success toast. All mixed.",
    textColor: 'white',
    progressColor: 'white',
    canClose: true,
    style: 'success',
    showProgress: true,
    autoClose: 2000
  })
})
