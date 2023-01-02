## 对节点进行查找和创建

### 查找节点/修改属性

- 查找节点：getElementById/getElementsByClassName/getElementsByTagName/querySelector/querySelectorAll
- 获取节点属性：setAttribute/getAttribute
- 获取节点信息：element.nodeType/nodeValue/nodeName
- 获取与节点有关联的的其他节点
  - 兄弟节点：element.previousSibling/nextSibling
  - 父节点：element.parentNode
  - 子节点：element.firstChild/lastChild/childNodes

### 创建

- 修改：document.write/innerHTML
- 创建：createElement/createTextNode
- 插入：appendChild/inertBefore

## 经验

- DOM是一套编程接口，任何标记语言都可以使用它
- 向后兼容/防御性编程
- 性能：不要频繁访问DOM

## 不应该做什么

不应该使用JavaScript将重要内容添加到网页上(PS: 但是网页应用除外)

应该遵守两个原则：
1. 渐进增强
2. 平稳退化

## 用DOM为文档增强

### 步骤

1. 获取文档的信息(检索)
2. 通过获取到的信息对文档进行增强(创建+添加)

## 操作CSS

- style对象下的属性都是可读写的
- 主要应用于实现没有被实现或普及的CSS功能
- 建议通过更改类名来实现样式切换，而不是操作style对象

### 一些案例

- 根据元素在节点树里的位置设置它们的样式（styleElementSiblings）
- 遍历一个节点集合设置有关元素的样式（stripeTables）
- 在事件发生时设置有关元素的样式（highlightRows）

## Javascript 动画

- 这段建议去看红宝书，因为稍微过时了

## HTML5

- 新增内容
  - 结构层：添加了新的标记元素及交互/媒体元素，表单得到了加强
  - 样式层：CSS3新增的动画和选择器，虽然高级动画还是需要JS脚本，但是简单动画已经可以通过CSS实现
  - 行为层：Storage，Socket，Worker等

### HTML Video 自定义控件

- 常用DOM属性：currentTime，duration，paused
- 常用事件：play，paused，loadeddata，ended
- [demonstrates](https://www.w3.org/2010/05/video/mediaevents.html)
- [doc](http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#video)

### 表单增强

- 新的控件类型：email/tel/url/number/data/range/color/search
- 新的属性：autocomplete/autofocus/min/max/step/pattern/placeholder/required

## 附录

jQuery时代DOM库的五大主题

1. 选择元素通过CSS选择器选择
2. 操作DOM元素创建，删除，添加(前置后置)
3. 处理事件
4. 动画
5. Ajax

如何选择代码库

1. 是否和其他已使用的库冲突及如何解决
2. 功能太多还是太少，是否可以按需加载
3. 能否及时的得到技术支持

在选定了合适的库之后，要尽可能的发挥这个库的最大效用，与此同时，最好能够进一步理解库的工作原理，关键是不要只停留在简单的使用的表面上
