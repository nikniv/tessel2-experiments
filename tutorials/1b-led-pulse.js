const Tessel = require('tessel-io')
const five = require('johnny-five')

const INTERVAL = process.argv[2] || 500;

const board = new five.Board({
	io: new Tessel()
})

board.on('ready', () => {
    const led = new five.Led('a5')
    console.log(process.argv)
	led.pulse(INTERVAL)
})
