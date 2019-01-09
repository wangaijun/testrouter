# mustdelete

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 传递参数的三种方式：
方式一
```
router：path: '/about/:topic'
```
this.$router.push({path:'/about/blog'})
```
this.topic = this.$route.params.topic
```

方式二
```
name: 'about'
```
this.$router.push({name: 'about', params: {topic: 'blog'}})
```
this.topic = this.$route.params.topic
```

方式三
```
path: '/about'
```
this.$router.push({path: '/about', query: {topic: 'blog'}})
```
this.topic = this.$route.query.topic
```
