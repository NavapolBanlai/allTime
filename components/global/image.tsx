import Router from 'next/router'
import React from "react";

interface PropsTyep {
      alt?: string
      imgPath: string
      url?: string
      className?: string
}
interface optsObject {
      [key: string]: any
}

const Image = (props: PropsTyep) => {
      const { url, className, imgPath, alt } = props
      let opts: optsObject = {}
      if (url) {
            opts.onClick = Router.push(url)
      }
      if (alt) {
            opts["alt"] = alt
      }
      if (className) {
            opts.className = className
      }
      console.log("🚀 ~ file: image.tsx ~ line 22 ~ Image ~ opts", opts)

      return <><img src={imgPath} {...opts} /></>

}

export default Image