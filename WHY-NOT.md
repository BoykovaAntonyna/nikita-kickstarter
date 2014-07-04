# Why Not?

## Why do you put `build/` under version control?

Wouldn't it be better to put them into `svn:ignore` or `.gitignore`?

Pre-build in VCS has the following advantages:

- You cannot guarantee, that the build will be exactly the same in the future (because of changing cli api's in node, grunt, sass etc.)
  - Another solution would be to put the distribution build on a build server.
- You have a pre build version in your version control system to show to the project manager / client.


## Why don't you put `dist/` under version control, too?

Because each committed version contains every source file and a fully updated build folder. The main difference between build and dist is, that dist has combined and minified css/js files, production ready images, no unnecessary files or code-comments.

Because you don't create releases that often, those are tasks for a release script, and should be made on a build server
or with an extra shell script.


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

At the moment I use Compass because of the feature to require SASS Globbing. If I could, I would use [grunt-sass](https://github.com/sindresorhus/grunt-sass) which ist based on [libsass](https://github.com/hcatlin/libsass) to get an immense performance boost in compiling SCSS to CSS. I hope the devs out there will implement a better partial-inclusion soon. Another issue: libsass won't properly compile @extends. :(


## Why `extends` instead of `placeholders` for the placeholders/extends folder?

Because `mixins` contains all `@mixin` definitions in single files.  
Usage: `@include mixin-name(param1, param2)`

Because `extends` contains all `%placeholder` definitions in single files.  
Usage: `@extend %placeholder-name`

## Why don't you put the breakpoints into the `_respond-to.scss`?

Since the breakpoints are project specific, it's better to have them in the `variables` folder. Otherwise you cannot
grap and copy the `_respond` mixin into your project, without modifiying it.