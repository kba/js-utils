const {EventEmitter} = require('eventemitter3')

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

  _logEvent(event, emitOrOn, color) {
    const timeStr = new Date().toISOString().slice(11)
    console.log([
      `\x1b[38;5;${color}m`,
      `[${emitOrOn}]`,
      this.constructor.name,
      `"${event}"`,
      timeStr,
      `\x1b[0m`,
    ].join(' '))
  }

  on(event, ...args) {
    if (this.LOGEVENTS) this._logEvent(event, 'on  ', 88)
    if (this.eventNames.has(event)) super.on(event, ...args)
    else throw new Error(`Event '${event}' not emitted by ${this.constructor.name}`)
  }

  once(event, ...args) {
    if (this.LOGEVENTS) this._logEvent(event, 'once', 91)
    if (this.eventNames.has(event)) super.once(event, ...args)
    else throw new Error(`Event '${event}' not emitted by ${this.constructor.name}`)
  }

  emit(event, ...args) {
    if (this.LOGEVENTS) this._logEvent(event, 'emit', 23)
    if (this.eventNames.has(event)) super.emit(event, ...args)
    else throw new Error(`Event '${event}' not emitted by ${this.constructor.name}`)
  }


}

