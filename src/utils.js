/**
 * 生成 UUID (Universally Unique IDentifier, 通用唯一标识符)
 */
export function generateUUID() {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16);
  });
  return uuid;
}

/**
 * 以 id 获取 DOM
 */
export function $id(id) {
  return document.getElementById(id);
}

/**
 * 设置子元素样式
 */
export function setChildStyle(parent, key, val) {
  const { children } = parent;
  for (let i = 0; i < children.length; i++) {
    children[i].style[key] = val;
  }
}
