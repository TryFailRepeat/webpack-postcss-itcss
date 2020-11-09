# POSTCSS with SASS like ITCSS
Dockerized css build with webpack and postcss using node 14.15.0 and webpack 5.4.0

## Use in development mode
```
    docker-compose  up -d
    docker-compose  logs -f
```


### ports
add `.env` with PORT_DEV or default to 9000

```
    PORT_DEV=9000
```

## Features
#### SASS like nested rules
https://github.com/postcss/postcss-nested

```
  .some-class {
    &--warning {
      color: red;
    }
  }

  outcome:
  .some-class--warning {
    color: red;
  }
```

#### SASS like Variables
https://github.com/postcss/postcss-simple-vars

```
  $color-black: #000;

  .some-class {
    color: $color-black
  }

  // outcome:
  .some-class {
    color: #000;
  }
```

#### SASS like Mixin usage
https://github.com/andyjansson/postcss-sassy-mixins
https://github.com/andyjansson/postcss-conditionals

```
  // src/css/tools/mixins/absolute
  .some-class {
    @include absolute('top-left');
  }

  // outcome:
  .some-class {
    position: absolute;
    top: 0;
    left: 0;
  }

  // src/mixins/hocus
  .some-class {
    @include hocus {
      text-decoration: none;
    }
  }

  // outcome:
  .some-class {
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
```

#### POSTCSSS JS Functions in CSS
https://github.com/andyjansson/postcss-functions

```
  // src/css/tools/functions/rem
  const px = (value) => {
    return (typeof value === 'string') ? value : value + 'px'
  }

  .some-class {
    fonst-size: px(20);
  }

  // outcome:
  .some-class {
    fonst-size: 20px;
  }
```

#### POSTCSSS calc for serverside calculations
https://github.com/postcss/postcss-calc

```
  .some-class {
    width: calc(20px - 10px);
    max-width: calc(100% - 10px);
  }

  outcome:
  .some-class {
    width: 10px;
    max-width: calc(100% - 10px);
  }
```

## Further Reading
- ITCCSS: https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
- BEM: http://getbem.com/introduction/
