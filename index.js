import { Counter } from './modules/Counter'
import { createElement } from './modules/createElement'

const counter = new Counter()

const decrementButton = createElement('div', {
    className: 'button center decrement',
    onClick: () => {
        counter.decrement()
    }
}, [
    "-"
])

const reset = createElement('div', {
    className: 'button center reset',
    onClick: () => {
        counter.reset()
    }
}, [
    "__"
])

const incrementButton = createElement('div', {
    className: 'button center increment',
    onClick: () => {
        counter.increment()
    }
}, [
    "+"
])

const counterContainer = createElement('div', {
    className: 'counter center',   
}, [
    counter.getCurrentCounter()
])

const buttonsPanel = createElement('div', {
    className: 'buttons-panel center',   
}, [
    incrementButton,
    reset,
    decrementButton
])

const container = createElement('div', {
    className: 'container center',   
}, [
    counterContainer,
    buttonsPanel
])

document.body.appendChild(container)

counter.subscribe((counter) => {   
    counterContainer.innerHTML = counter
})