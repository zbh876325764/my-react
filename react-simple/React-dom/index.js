class ReactDOM {
  constructor() {

  }
  appendChild(container, dom) {
    container.appendChild(dom)
  }
  setAttr(dom, key, value) {
    if (key === 'className') {
      // 如果key是className
      key = 'class'
    }
    if (/on\w+/.test(key)) {
      //如果key是事件绑定
      key = key.toLowerCase()
      dom[key] = value || ''
    } else if (key === 'style') {
      if (!value || typeof value === 'string') {
        dom.style.cssText = value || ''
      } else if (value && typeof value === 'object') {
        for (let k in value) {
          if (typeof value[k] === 'number') {
            dom.style.cssText = value[k] + 'px'
          } else {
            dom.style.cssText = value[k]

          }
        }
      }
    } else {
      if (key in dom) {
        dom[key] = value || ''
      }
      if (value) {
        dom.setAttribute(key, value)
      } else {
        dom.removeAttribute(key)
      }
    }
  }
  render(vnode, container) {
    if (container === undefined) return
    if (vnode === undefined) return
    if (typeof vnode === 'string') {
      const textNode = document.createTextNode(vnode)
      return this.appendChild(container, textNode)
    }
    console.log(vnode);
    const {
      tag,
      attrs
    } = vnode
    const dom = document.createElement(tag)
    if (attrs) {
      Object.keys(attrs).forEach(key => {
        const value = attrs[key]
        this.setAttr(dom, key, value)
      })
    }
    return this.appendChild(container, dom)
  }
}
export default ReactDOM