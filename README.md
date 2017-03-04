# virtual-dom
## usage
Include the bundle.js in your html
```
<script src="../dist/bundle.js"></script>
```

As you can see in build.js:
```
window.virtualDOM = require('./index.js');
```

virtualDOM is a global variable,with a method called ** createVtElement **.

```
<!DOCTYPE html>
<html>
<head>
    <title>Virtual DOM test</title>
    <script type="text/javascript" src='../dist/bundle.js'></script>
</head>
<body>
    <script type="text/javascript">
    var createDOM = virtualDOM.createVtElement;
    var ul = createDOM('ul', {id: 'list'}, [
        createDOM('li', {class: 'item'}, ['Item 1']),
        createDOM('li', {class: 'item'}, ['Item 2']),
        createDOM('li', {class: 'item'}, ['Item 3'])
    ]);
    var ulRoot = ul.render();
    document.body.appendChild(ulRoot);
</script>
</body>
</html>
```
