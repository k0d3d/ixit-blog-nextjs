import React from "react";
import parse, {
  attributesToProps,
  DOMNode,
  HTMLReactParserOptions,
} from "html-react-parser";

const MediaElement = (ele: DOMNode) => {
  const { attribs, name } = ele;

  const media = {
    img: (attribs) => {
      if (attribs && attribs.src && attribs.src.length > 0) {
        const props = attributesToProps(attribs);
        props.src = `${props.src.replace(
          process.env.NEXT_PUBLIC_API_HOST,
          process.env.NEXT_PUBLIC_MEDIA_HOST
        )} `; //<name>?tr=w-1200,h-630,fo-auto
        return <img {...props} />;
      }
    },
    a: (attribs) => {
      if (attribs && attribs.href && attribs.href.length > 0 && attribs.href.indexOf('.mp4') > -1) {
        const props = attributesToProps(attribs);
        const src = `${props.href.replace(
          process.env.NEXT_PUBLIC_API_HOST,
          process.env.NEXT_PUBLIC_MEDIA_HOST
        )} `;
        return (
          <video
          width="100%"
          autoPlay
          loop
            children={
              <source src={src} type="video/mp4" />
            }
          />
        );
      }
    },
  };

  return media[name] && media[name](attribs);
};

export function PostContent(props: { content: string }) {
  const options: HTMLReactParserOptions = {
    replace: (domDode) => {
      return MediaElement(domDode);
    },
  };
  return (
    <div className="post-full-content">{parse(props.content, options)}</div>
  );
}
