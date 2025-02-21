import React, { useEffect } from "react";

const AdSense: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4758250154385307";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    const adScript = document.createElement("script");
    adScript.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
    document.body.appendChild(adScript);

    return () => {
      document.head.removeChild(script);
      document.body.removeChild(adScript);
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4758250154385307"
      data-ad-slot="7700454671"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdSense;
