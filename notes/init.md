# Notes

## Experiment 1: Blinking an LED

1. To run a tessel program, you must be in the directory where tessel was initialized. 

That is, if your program exists in a subdirectory of the project root, you cannot use `t2 run program.js` to run the program from within the same subdirectory.

You must run the program from the root, like so:
```
cd <path to project root>
t2 run subdir/program.js
```

2. CLI arguments in `process.argv` seem to be unsupported. I wanted to use them to control pulse interval from the CLI, like this:

```
t2 run tutorials/1b-led-pulse.js 2000
```
Here `2000` is the interval in milliseconds, that was meant to be accessible in the program under process arguments:

```
const INTERVAL = process.argv[2] || 500
```
where `500` is the default value.

Logging all the process arguments from within the program only lists the following:

```
[ '/usr/bin/node',
  '/tmp/remote-script/tutorials/1b-led-pulse.js' ]
```

Need to look into the implementation of `t2-cli` tool to see if there's a way to make this work.
