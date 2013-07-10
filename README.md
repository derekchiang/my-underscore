# my-underscore

A reimplementation of underscore.js

## Why???

I'm learning JavaScript the hard way.  Basically I just look at the underscore.js function list and implement those functions one by one, according to their specifications.  Then I compare my implementation with underscore's implementation, and think about why they do it that way.

I've learned a lot.  Maybe you should do something like this too!

## Should I use this library?

Most likely not; unless you REALLY REALLY trust me :P  In any case, I've made sure to write tests, so it might actually be usable.

## Differences to underscore.js

### partial

My partial is inspired by that of Prototype.js.  It's smarter:

	var delay = _.partial(setTimeout, undefined, 100)
	delay(function() {
		console.log("Delaying 100 ms")
	})

Basically, my partial inspects the arguments and replace `undefined` with the arguments that you invoke with.  This allows you to create any kind of partial functions regardless of the original function's argument positions.