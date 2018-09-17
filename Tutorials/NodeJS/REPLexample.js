const repl = require('repl')
const m = 13
const r = repl.start('Mastahs commands? ')

Object.defineProperty(r.context, 'm', {
    configurable: false,
    enumerable: true,
    value: 55
})