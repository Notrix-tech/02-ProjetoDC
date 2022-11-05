function showIframe() {
  let show = document.querySelector("#myIframe").hidden;
  if (show) {
    document.getElementById("myIframe").hidden = false;
    document.querySelector("button").innerText = "Hidde Iframe";
  } else {
    document.getElementById("myIframe").hidden = true;
    document.querySelector("button").innerText = "Show Iframe";
  }
}
