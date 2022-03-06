# Trustana Front-end Engineer Assignment

## Task 2 - Mobile Responsive

1.  Adapt the webpage created in Task 1 for devices with smaller screen sizes such as tablets and smartphones.
2.  The webpage needs to be displayed without any layout issues on screen sizes as small as 375px width.

## Demo

https://trustana-assignment-task2-nwb.netlify.app

## Task approach

#### UI

Most of the UI are already responsive in task 1 by default with the exception of the tab bar.

As the cards are already under-sized based on the required 375px width, the only change required is to suppress line breaks and enable overflow in the tab bar.

1. Suppress linebreaks ensures button stays inline, reducing clutter.
2. Overflow in x enables horizontal scrolling.
3. Horizontal scrollbar is also hidden to reduce clutter.
4. A media query of max-width 480px is added to center the single column items horizontally. It is not necessary for additional larger breakpoints since columns will exceed 2 which will be flushed left.

#### Task fulfillment

- ✅ ReactJS
- ✅ CSS (Without framework)
- ✅ TypeScript
- ✅ Compatible with screens of min-width 375px
- ❌ Bonus Tasks
