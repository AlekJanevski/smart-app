# smart-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Helpful info
Tech stack used for this project: VueJS, TailwindCSS, vue-round-slider and vue-router.

1. DetailsBox.vue
- Made as a reusable component 
- Receives data through props for the title, the numbers data and the percentage/symbols

2. ActionBox.vue
- Also a reusable component 
- Receives data through props for the dynamic icon name (the icon file should be named the same as the name provided) and for the title. 
- Has an active class that is called 'active-box' which changes the color of the background, icon and the text.

3. TempSlider.vue
- The circular slider is imported from ( https://github.com/soundar24/vue-round-slider ) and is customized for our needs.
- Receives data through props for the temperature value, current ane minimal temperature.
- The warm/cold icon is changing depending on the minimal temperature value set, the default value is 18 degrees.

4. Navbar.vue
- A shared component with functional Home and User buttons (first and last) which redirects to the corresponding screens.
- Has an active class called 'active' which changes the color of the icon and adds a bottom border.
