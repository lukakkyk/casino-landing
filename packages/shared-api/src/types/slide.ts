export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  imageUrl: string;
  ctaColor: string;
};

export type HeroSlidesResponse = {
  slides: HeroSlide[];
};
