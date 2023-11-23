import Script from "next/script";
import { useEffect, useState } from "react";
import GoalWidget from "@/components/goalWidget";
import Navigation from "@/components/navigationBtn";

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

export default function Test() {
  const [isPlaymakerInitialized, setPlaymakerInitialized] = useState(false);

  useEffect(() => {
    initPlaymakerWidget(); 
    setPlaymakerInitialized(true);
  }, []);

  return (
      
    <>
      <Script
        src="/playmaker-widget.bundle.js"
        strategy="lazyOnload"
        onLoad={() => console.log("script loaded correctly, window.FB has been populated")}
      />
        <Navigation/> {}
  
      
      {isPlaymakerInitialized && <GoalWidget />} {/* Använd GoalWidget-komponenten här */}
      </>
  );
}

