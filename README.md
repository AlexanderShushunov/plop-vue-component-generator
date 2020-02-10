# plop-vue-component-generator

[Plop](https://plopjs.com/) generator to create [Vue Components](https://vuejs.org/v2/guide/single-file-components.html) 
with [jest test](https://jestjs.io/), [storybook](https://storybook.js.org/),
connected to [vuex](https://vuex.vuejs.org/guide/). 

## Commands are inherited from vue-cli 
```
npm install
npm run serve
npm run build
npm run test:unit
npm run lint
```

## Add new component 
```
npm run plop
```
Enter the answers and enjoy a new Vue Component!

The new component has a simple render test
```
npm run jest:unit
```
and a story
```
npm run storybook
```
