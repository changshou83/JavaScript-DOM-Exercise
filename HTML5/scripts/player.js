function createVideoControls() {
  const vids = document.querySelectorAll("video");
  for (const video of vids) {
    addControls(video);
  }
}

function addControls(video) {
  // 删除原来的controls属性，去除自带的控件
  video.removeAttribute("controls");
  // 设置样式
  video.height = video.videoHeight;
  video.width = video.videoWidth;
  video.parentNode.style.height = video.height + "px";
  video.parentNode.style.width = video.width + "px";
  // 创建自定义控件
  const controls = document.createElement("div");
  controls.setAttribute("class", "controls");
  const play = document.createElement("button");
  play.setAttribute("title", "Play");
  play.innerHTML = "&#x25BA";
  // 插入自定义控件
  controls.appendChild(play);
  video.parentNode.insertBefore(controls, video);
  // 控件逻辑
  play.addEventListener("click", () => {
    if (video.ended) {
      video.currentTime = 0;
    }
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
  video.addEventListener(
    "play",
    () => {
      play.innerHTML = "&#x2590;&#x2590;";
      play.setAttribute("paused", true);
    },
    false
  );
  video.addEventListener(
    "pause",
    () => {
      play.removeAttribute("paused");
      play.innerHTML = "&#x25BA";
    },
    false
  );
  video.addEventListener("ended", () => video.pause(), false);
}

addLoadEvent(createVideoControls);
