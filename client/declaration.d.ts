declare module '*.png';
// src/assets/images/index.d.ts
declare module '*.png' {
    const content: React.FunctionComponent<React.ImgHTMLAttributes<HTMLImageElement>>;
    export default content;
  }
  