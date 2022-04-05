# Vanilla JS toast
## _A customizable toast made in vanilla JS_

This project has been created for learning purposes. Feel free to use it as you want 🧘🏽

## Features

- Customizable text
- Multiple positioning
- Auto closing
- Progress bar
- Custom visible time
- Delay option

## Installation

Just clone the repo and start playing around. 🙂

## Options

There are several options that can be passed to the Toast.

| Option | Description |
| ------ | ------ |
| text | the text inside the toast|
| textColor | the color of the text |
| autoClose | false or duration in ms |
| position | 'top-right', 'top-left', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center' |
| onClose | Function to be executing when the toast is closed |
| canClose | boolean flag indicating if the toast is dismissable |
| showProgress | boolean flag indicating whether the progress bar should be shown or not  |
| progressColor | the color of the progress bar|
| delay | delay in ms |
| style | 'normal', 'warning', 'success', 'error' |

## How to use it

Simply import the toast in your file and instantiate a Toast. Check the `script.js` file for more info on how to use it.

```js
import Toast from './Toast.js'
new Toast({ text: "Hello!" })
```

## License

**Free, Hell Yeah!**
