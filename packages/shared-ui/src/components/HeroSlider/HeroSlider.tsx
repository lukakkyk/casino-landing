import { useEffect, useMemo, useRef, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { Button, Circle, Image, Text, XStack, YStack } from 'tamagui';
import { useHeroSlides, type HeroSlide } from '@casino/shared-api';

const { width: screenWidth } = Dimensions.get('window');

type HeroSliderProps = {
    autoPlayInterval?: number;
    onCtaPress?: (slide: HeroSlide) => void;
};

const SLIDER_HEIGHT = 260;
const CARD_RADIUS = 24;

function SliderSkeleton() {
    return (
        <YStack
            height={SLIDER_HEIGHT}
            borderRadius={CARD_RADIUS}
            overflow="hidden"
            backgroundColor="$surface"
            padding="$lg"
            justifyContent="space-between"
        >
            <YStack gap="$sm">
                <YStack width="70%" height={28} borderRadius={12} backgroundColor="$surfaceHover" />
                <YStack width="90%" height={16} borderRadius={8} backgroundColor="$surfaceHover" />
                <YStack width="75%" height={16} borderRadius={8} backgroundColor="$surfaceHover" />
            </YStack>

            <YStack width={120} height={42} borderRadius={999} backgroundColor="$surfaceHover" />
        </YStack>
    );
}

function SliderError({ message, onRetry }: { message: string; onRetry: () => void }) {
    return (
        <YStack
            height={SLIDER_HEIGHT}
            borderRadius={CARD_RADIUS}
            backgroundColor="$surface"
            borderWidth={1}
            borderColor="$danger"
            padding="$lg"
            justifyContent="center"
            alignItems="center"
            gap="$sm"
        >
            <Text color="$danger" fontSize="$lg" fontWeight="800">
                Failed to load slides
            </Text>
            <Text color="$textSecondary" textAlign="center">
                {message}
            </Text>
            <Button size="$sm" borderRadius={999} backgroundColor="$danger" onPress={onRetry}>
                Retry
            </Button>
        </YStack>
    );
}

/**
 * Hero carousel powered by shared React Query slide data.
 */
export function HeroSlider({
    autoPlayInterval = 3500,
    onCtaPress,
}: HeroSliderProps) {
    const { data: heroSlides = [], isLoading, isError, error, refetch } = useHeroSlides();
    const scrollRef = useRef<ScrollView>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [imageLoadedMap, setImageLoadedMap] = useState<Record<string, boolean>>({});
    const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});
    const slides = useMemo(
        () =>
            heroSlides.map((slide) => ({
                id: slide.id,
                title: slide.title,
                subtitle: slide.subtitle,
                ctaLabel: slide.ctaLabel,
                imageUrl: slide.imageUrl,
                ctaColor: slide.ctaColor,
            })),
        [heroSlides],
    );

    const sliderWidth = useMemo(() => screenWidth - 32, []);

    useEffect(() => {
        if (isLoading || error || slides.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                const nextIndex = prev + 1 >= slides.length ? 0 : prev + 1;

                scrollRef.current?.scrollTo({
                    x: nextIndex * sliderWidth,
                    animated: true,
                });

                return nextIndex;
            });
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [slides, isLoading, error, autoPlayInterval, sliderWidth]);

    const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const nextIndex = Math.round(event.nativeEvent.contentOffset.x / sliderWidth);
        setActiveIndex(nextIndex);
    };

    if (isLoading) {
        return <SliderSkeleton />;
    }

    if (isError) {
        const message = error instanceof Error ? error.message : 'Something went wrong.';
        return <SliderError message={message} onRetry={() => void refetch()} />;
    }

    if (!slides.length) {
        return <SliderError message="No slides available." onRetry={() => void refetch()} />;
    }

    return (
        <YStack gap="$md">
            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={handleScrollEnd}
                scrollEventThrottle={16}
            >
                {slides.map((slide) => {
                    const imageLoaded = imageLoadedMap[slide.id];
                    const imageFailed = imageErrorMap[slide.id];

                    return (
                        <YStack
                            key={slide.id}
                            width={sliderWidth}
                            height={SLIDER_HEIGHT}
                            borderRadius={CARD_RADIUS}
                            overflow="hidden"
                            backgroundColor="$surface"
                            position="relative"
                        >
                            {!imageFailed ? (
                                <>
                                    <Image
                                        src={slide.imageUrl}
                                        width="100%"
                                        height="100%"
                                        position="absolute"
                                        top={0}
                                        left={0}
                                        objectFit="cover"
                                        onLoadStart={() => {
                                            setImageLoadedMap((prev) => ({ ...prev, [slide.id]: false }));
                                        }}
                                        onLoad={() => {
                                            setImageLoadedMap((prev) => ({ ...prev, [slide.id]: true }));
                                        }}
                                        onError={() => {
                                            setImageErrorMap((prev) => ({ ...prev, [slide.id]: true }));
                                        }}
                                    />

                                    {!imageLoaded ? (
                                        <YStack
                                            position="absolute"
                                            top={0}
                                            left={0}
                                            right={0}
                                            bottom={0}
                                            backgroundColor="$surfaceHover"
                                        />
                                    ) : null}
                                </>
                            ) : (
                                <YStack
                                    position="absolute"
                                    top={0}
                                    left={0}
                                    right={0}
                                    bottom={0}
                                    backgroundColor="$surfaceHover"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Text color="$textSecondary">Image unavailable</Text>
                                </YStack>
                            )}

                            <YStack
                                position="absolute"
                                top={0}
                                left={0}
                                right={0}
                                bottom={0}
                                backgroundColor="rgba(0,0,0,0.38)"
                            />

                            <YStack
                                flex={1}
                                justifyContent="flex-end"
                                padding="$lg"
                                gap="$sm"
                                zIndex={2}
                            >
                                <Text color="white" fontSize="$8" fontWeight="900">
                                    {slide.title}
                                </Text>

                                <Text color="rgba(255,255,255,0.88)" fontSize="$sm">
                                    {slide.subtitle}
                                </Text>

                                <Button
                                    alignSelf="flex-start"
                                    size="$md"
                                    borderRadius={999}
                                    backgroundColor={slide.ctaColor}
                                    pressStyle={{ scale: 0.97, opacity: 0.92 }}
                                    onPress={() => onCtaPress?.(slide)}
                                >
                                    {slide.ctaLabel}
                                </Button>
                            </YStack>
                        </YStack>
                    );
                })}
            </ScrollView>

            <XStack justifyContent="center" alignItems="center" gap="$sm">
                {slides.map((slide, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <Circle
                            key={slide.id}
                            size={isActive ? 10 : 8}
                            backgroundColor={isActive ? '$accent' : '$surfaceHover'}
                            opacity={isActive ? 1 : 0.7}
                        />
                    );
                })}
            </XStack>
        </YStack>
    );
}