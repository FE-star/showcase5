# 模版

### 没有模版的日子

* 手写字符串拼接，难以维护

```
container.innerHTML = '<div>' + word + '</div>'
```

### 最早的前端模版

> 来自 jQuery 作者的微型模版实现：[JavaScript Micro-Templating](https://johnresig.com/blog/javascript-micro-templating/)

* 刚开始的模版是直接使用正则替换做到的(看，正则多牛逼)
* 由于当时没有线下构建能力，所以模版一般写在HTML里，比如：

```html
<script type="text/html" id="user_tmpl">
  <% for ( var i = 0; i < users.length; i++ ) { %>
    <li><a href="<%=users&#91;i&#93;.url%>"><%=users&#91;i&#93;.name%></a></li>
  <% } %>
</script>
```

* 当时模版是：

```
template string -> template function -> html string
```

* 试着解释下那段正则是啥意思？