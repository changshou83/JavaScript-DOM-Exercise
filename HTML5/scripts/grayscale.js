function convertToGS(img) {
  img.color = img.src;
  img.grayscale = createGSCanvas(img);
  const mouseoutFn = () => (img.src = img.grayscale);
  img.addEventListener("mouseover", () => (img.src = img.color));
  img.addEventListener("mouseout", mouseoutFn);
  mouseoutFn();
}
function createGSCanvas(img) {
  // 创建canvas元素
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  // 获取canvas上下文
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  // 处理为灰度图
  const imgData = ctx.getImageData(0, 0, img.width, img.height);
  for (let y = 0; y < imgData.height; y++) {
    for (let x = 0; x < imgData.width; x++) {
      const pos = (x * imgData.width + y) * 4;
      const r = imgData.data[pos];
      const g = imgData.data[pos + 1];
      const b = imgData.data[pos + 2];
      imgData.data[pos] =
        imgData.data[pos + 1] =
        imgData.data[pos + 2] =
          (r + g + b) / 3;
    }
  }
  // 返回灰度图
  ctx.putImageData(imgData, 0, 0, 0, 0, imgData.width, imgData.height);
  return canvas.toDataURL();
}

addLoadEvent(() => convertToGS(document.querySelector("#avatar")));
