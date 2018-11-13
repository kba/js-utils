const {EventEmitter} = require('eventemitter3')

const colorMap = {
  on: {node: 88, browser: '#870000'},
  once: {node: 91, browser: '#8700af'},
  emit: {node: 23, browser: '#005f5f'},
}
const isNode = typeof window === 'undefined'

module.exports = class StrictEventEmitter extends EventEmitter {

  constructor(eventNames=[], LOGEVENTS) {
    // console.log({eventNames})
    super()
    this.eventNames = new Set(eventNames)
    this.LOGEVENTS = LOGEVENTS
    // console.log({eventNames})
  }

  registerEvent(eventName) {
    this.eventNames.add(eventName)
  }

  _logEvent(event, emitOrOn, args) {
    const timeStr = new Date().toISOString().slice(11)
    if (isNode)
      console.log([
        `\x1b[38;5;${colorMap[emitOrOn].node}m`,
        timeStr,
        `[${emitOrOn}]`,
        this.constructor.name,
        `"${event}"`,
        `\x1b[0m`,
        args.map(a => a.toString())
      ].join(' '))
    else
      console.log([
        `%c[${emitOrOn}]`,
        timeStr,
        this.constructor.name,
        `"${event}"`,
        args.map(a => a.toString())
      ].join(' '), `color: ${colorMap[emitOrOn].browser}`)
  }

  on(event, ...args) {
    if (this.LOGEVENTS) this._logEvent(event, 'on', args)
    if (this.eventNames.has(event)) super.on(event, ...args)
    else throw new Error(`Event '${event}' not emitted by ${this.constructor.name}`)
  }

  once(event, ...args) {
    if (this.LOGEVENTS) this._logEvent(event, 'once', args)
    if (this.eventNames.has(event)) super.once(event, ...args)
    else throw new Error(`Event '${event}' not emitted by ${this.constructor.name}`)
  }

  emit(event, ...args) {
    if (this.LOGEVENTS) this._logEvent(event, 'emit', args)
    if (this.eventNames.has(event)) super.emit(event, ...args)
    else throw new Error(`Event '${event}' not emitted by ${this.constructor.name}`)
  }


}

