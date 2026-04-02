export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  imageUrl: string;
};

export type HeroSlidesResponse = {
  slides: HeroSlide[];
};
