# Why Not?


## Why don't you put `build/` and/or `dist/` under version control?

Because the output build- and dist-files aren't always exactly the same if you work with multiple OS like Windows, Mac OS and Linux. This may cause conflicts or will end in commits with a large list of recurrently updated files.

Those are tasks for a release script, and should be made on a build server.


## Why don't you remove the prefix from page, main, nav, header, aside, footer classes?

Because if we would use .header as class for the header, it would influence other .header elements of other
blocks. For instance:

```
CSS

.page
.header
.main
	.b-article
		.header
		.content
.footer
```

If we set color for `.header` now, we would have to reset it on `.b-article .header`.

Don't even think about abusing `.header[role=banner]` as excuse! Count: 1 (increment if you tried!). ;)


## Why do you use Compass, do we need it at all?

At the moment I use Compass because of the feature to require SASS Globbing and SCSS Lint. If I could, I would use [grunt-sass](https://github.com/sindresorhus/grunt-sass) which ist based on [libsass](https://github.com/hcatlin/libsass) to get an immense performance boost in compiling SCSS to CSS. I hope the devs out there will implement a better partial-inclusion soon. Another issue: libsass won't properly compile @extends. :(


## Why `extends` instead of `placeholders` for the placeholders/extends folder?

Because `mixins` contains all `@mixin` definitions in single files.  
Usage: `@include mixin-name(param1, param2)`

Because `extends` contains all `%placeholder` definitions in single files.  
Usage: `@extend %placeholder-name`


## Why don't you put the breakpoints into the `_respond-to.scss`?

Since the breakpoints are project specific, it's better to have them in the `variables` folder. Otherwise you cannot
grap and copy the `_respond-to` mixin into your project, without modifiying it.