declare module 'react-responsive-carousel' {
    import { ComponentType } from 'react';
  
    export interface CarouselProps {
      showArrows?: boolean;
      showIndicators?: boolean;
      showThumbs?: boolean;
      showStatus?: boolean;
      infiniteLoop?: boolean;
      selectedItem?: number;
      interval?: number;
      transitionTime?: number;
      swipeable?: boolean;
      stopOnHover?: boolean;
      dynamicHeight?: boolean;
      emulateTouch?: boolean;
      autoPlay?: boolean;
      onClickItem?: (index: number, item: React.ReactNode) => void;
      onClickThumb?: (index: number, item: React.ReactNode) => void;
      onChange?: (index: number, item: React.ReactNode) => void;
      axis?: 'horizontal' | 'vertical';
      width?: string | number;
      useKeyboardArrows?: boolean;
      children?: React.ReactNode;
    }
  
    export const Carousel: ComponentType<CarouselProps>;
  }
  