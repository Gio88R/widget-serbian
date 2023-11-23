import Script from "next/script";
import { useEffect, useState } from "react";
import SpiderWidget from "@/components/spiderWidget";
import Navigation from "@/components/navigationBtn";
import XWidget from "@/components/xWidget";
<script src="https://kit.fontawesome.com/8cf7a5f73e.js" crossorigin="anonymous"></script>
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
export function initPlaymakerWidget() {
  (function (w, d, s, o, f, js, fjs) {
    w["PlaymakerWidget"] = o;
    w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments);};
    js = d.createElement(s);
    fjs = d.getElementsByTagName(s)[0];
    js.id = o;
    js.src = f;
    js.async = true;
    fjs.parentNode.insertBefore(js, fjs);
  })(window, document, "script", "PM", "/playmaker-widget.bundle.js");
}
export function initPlaymakerXWidget() {
  (function (w, d, s, o, f, js, fjs) {
    w["PlaymakerWidget"] = o;
    w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments);};
    js = d.createElement(s);
    fjs = d.getElementsByTagName(s)[0];
    js.id = o;
    js.src = f;
    js.async = true;
    fjs.parentNode.insertBefore(js, fjs);
  })(window, document, "script", "PM", "/playmaker-widget.bundle.js");
}
export default function Test() {
  const [isPlaymakerInitialized, setPlaymakerInitialized] = useState(false);
  const [isPlaymakerXInitialized, setPlaymakerXInitialized] = useState(false);

  useEffect(() => {
    initPlaymakerWidget();
    setPlaymakerInitialized(true);
    initPlaymakerXWidget();
    setPlaymakerXInitialized(true);
  }, []);

  return (
    <>
      <Script
        src="/playmaker-widget.bundle.js"
        strategy="lazyOnload"
        onLoad={() => console.log("script loaded correctly, window.FB has been populated")}
      />
      
      <Navigation/> {}
      <div id="Spider-W">
     
        {isPlaymakerInitialized && <SpiderWidget />}
      </div>
      <div id="X-widget">
    
        {isPlaymakerXInitialized && <XWidget/>}
      
      </div>
    </>
  );
}
