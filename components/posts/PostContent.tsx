import React from "react";
import parse, { attributesToProps, HTMLReactParserOptions } from 'html-react-parser';

export function PostContent(props: {
  content: string
}) {
  const options: HTMLReactParserOptions = {
    replace: (domDode) => {
      const {attribs} = domDode
      if (attribs && attribs.src && attribs.src.length > 0) {
        const props = attributesToProps(attribs);
        props.src = `${props.src.replace(process.env.NEXT_PUBLIC_API_HOST, process.env.NEXT_PUBLIC_MEDIA_HOST)} `  //<name>?tr=w-1200,h-630,fo-auto
        return <img {...props} />;
      }
    }
  }
  return (
    <div
      className="post-full-content"
    >
      {
        parse(props.content, options)
      }
    </div>
  );
}
