// splide-react.d.ts

declare module '@splidejs/react-splide' {
    import { ComponentType, HTMLAttributes } from 'react';
  
    interface SplideProps extends HTMLAttributes<HTMLDivElement> {
      options?: object;
    }
  
    interface SplideSlideProps extends HTMLAttributes<HTMLLIElement> {}
  
    export const Splide: ComponentType<SplideProps>;
    export const SplideSlide: ComponentType<SplideSlideProps>;
  }