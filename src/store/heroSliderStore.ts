import { create } from 'zustand';

interface CarouselState {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

export const useCarouselStore = create<CarouselState>((set) => ({
  activeIndex: 0,
  setActiveIndex: (index) => set({ activeIndex: index }),
  nextSlide: () =>
    set((state) => ({ activeIndex: (state.activeIndex + 1) % 3 })),
  prevSlide: () =>
    set((state) => ({
      activeIndex: (state.activeIndex - 1 + 3) % 3,
    })),
}));