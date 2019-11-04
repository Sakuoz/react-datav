const htmlDom = document.documentElement

// 获取窗口宽度
const getHtmlFontSize = () => {
  // let htmlFontSize = htmlDom.clientWidth / 100
  let htmlFontSize = (htmlDom.clientWidth * 10) / 384
  console.log(htmlFontSize)
  if (htmlFontSize < 12) htmlFontSize = 12

  return htmlFontSize
}

htmlDom.style.fontSize = `${getHtmlFontSize()}px`

if (window.addEventListener) {
  window.addEventListener(
    'resize',
    function() {
      htmlDom.style.fontSize = `${getHtmlFontSize()}px`
    },
    false
  )
}

// px 转 rem
const px2rem = (x: number) => {
  return `${x / getHtmlFontSize()}rem`
}

export default px2rem
