# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Links

- Solution URL: [Add solution URL here](https://github.com/princeiscoding/signup-component)
- Live Site URL: [Add live site URL here](https://fe-signup-component.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- vanilla js

### What I learned

i learnt how to use some new javascript tools like creating an element from the dom using creatElement, inserting an element before or after a node using insertBefore and nextSibling where necessary.

```js
document.createElement("p");
// to insert before a node
element.parentNode.insertBefore(element, newNode);

// to insert after a node
element.parentNode.insertBefore(element, newNode.nextSibling);
```

## Author

- Website - [Prince Chima](https://fe-signup-component.netlify.app/)
- Frontend Mentor - [@princeiscoding](https://www.frontendmentor.io/profile/yourusername)
