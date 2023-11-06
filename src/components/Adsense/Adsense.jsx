import React, { useEffect } from 'react'

const Adsense = ({ dataAdds }) => {
  const addsByGoogle = () => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});

    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    addsByGoogle();
  }, [dataAdds])
  return (
    <div>
      <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
        data-ad-slot={dataAdds}
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    </div>
  )
}

export default Adsense