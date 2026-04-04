import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { Platform, ScrollView, useWindowDimensions } from 'react-native';
import type {
    LayoutChangeEvent,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';
import { Button, Text, XStack, YStack } from 'tamagui';
import { Image as ExpoImage } from 'expo-image';
import { useHeroSlides, type HeroSlide } from '@casino/shared-api';
import { colors, tokenValues } from '@casino/config';

export type HeroSliderProps = {
    autoPlayInterval?: number;
    onCtaPress?: (slide: HeroSlide) => void;
};

const CARD_RADIUS = 20;
const MAX_CONTENT_WIDTH = 1200;
const AUTOPLAY_RESUME_DELAY = 6_000;

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

function getBreakpoint(width: number): Breakpoint {
    if (width >= 1024) return 'desktop';
    if (width >= 768) return 'tablet';
    return 'mobile';
}

function getSliderHeight(bp: Breakpoint): number {
    return bp === 'desktop' ? 600 : bp === 'tablet' ? 440 : 150;
}



function SliderSkeleton({ height }: { height: number }) {
    return (
        <YStack
            height={height}
            borderRadius={CARD_RADIUS}
            overflow="hidden"
            backgroundColor={colors.surface}
            padding="$xl"
            justifyContent="flex-end"
            gap="$md"
        >
            <YStack gap="$sm">
                <YStack
                    width="55%"
                    height={20}
                    borderRadius={12}
                    backgroundColor={colors.surfaceHover}
                    opacity={0.7}
                />
                <YStack
                    width="85%"
                    height={12}
                    borderRadius={8}
                    backgroundColor={colors.surfaceHover}
                    opacity={0.5}
                />
                <YStack
                    width="68%"
                    height={12}
                    borderRadius={8}
                    backgroundColor={colors.surfaceHover}
                    opacity={0.5}
                />
            </YStack>
            <YStack
                width={140}
                height={44}
                borderRadius={999}
                backgroundColor={colors.surfaceHover}
                opacity={0.6}
            />
        </YStack>
    );
}



function SliderError({
    height,
    message,
    onRetry,
}: {
    height: number;
    message: string;
    onRetry: () => void;
}) {
    return (
        <YStack
            height={height}
            borderRadius={CARD_RADIUS}
            backgroundColor={colors.surface}
            borderWidth={1}
            borderColor={colors.danger}
            padding="$xl"
            justifyContent="center"
            alignItems="center"
            gap="$md"
        >
            <Text color={colors.danger} fontSize="$lg" fontWeight="800">
                Failed to load
            </Text>
            <Text
                color={colors.textSecondary}
                textAlign="center"
                fontSize="$sm"
            >
                {message}
            </Text>
            <Button
                size="$sm"
                borderRadius={999}
                backgroundColor={colors.danger}
                onPress={onRetry}
            >
                <Text color="#fff" fontWeight="700" fontSize="$sm">
                    Try Again
                </Text>
            </Button>
        </YStack>
    );
}



function SlideIndicators({
    count,
    activeIndex,
}: {
    count: number;
    activeIndex: number;
}) {
    return (
        <XStack
            justifyContent="center"
            alignItems="center"
            gap={6}
            paddingVertical="$xs"
        >
            {Array.from({ length: count }, (_, i) => {
                const active = i === activeIndex;
                return (
                    <YStack
                        key={i}
                        height={6}
                        width={active ? 24 : 6}
                        borderRadius={3}
                        backgroundColor={
                            active ? colors.accent : colors.surfaceHover
                        }
                        opacity={active ? 1 : 0.45}
                        {...(Platform.OS === 'web'
                            ? ({
                                style: {
                                    transition:
                                        'width 0.3s ease, opacity 0.3s ease, background-color 0.3s ease',
                                },
                            } as any)
                            : {})}
                    />
                );
            })}
        </XStack>
    );
}







function HeroSlideCard({
    slide,
    width,
    height,
    breakpoint,
    onCtaPress,
    onImageLoad,
    onImageError,
    imageLoaded,
    imageFailed,
}: {
    slide: HeroSlide;
    width: number;
    height: number;
    breakpoint: Breakpoint;
    onCtaPress?: (slide: HeroSlide) => void;
    onImageLoad: (id: string) => void;
    onImageError: (id: string) => void;
    imageLoaded: boolean;
    imageFailed: boolean;
}) {
    const isDesktop = breakpoint === 'desktop';
    const isTablet = breakpoint === 'tablet';

    const ctaBg = slide.ctaColor || colors.accent;

    return (
        <YStack
            width={width}
            height={height}
            borderRadius={CARD_RADIUS}
            overflow="hidden"
            backgroundColor={colors.surface}
            {...(Platform.OS === 'web'
                ? ({
                    style: {
                        scrollSnapAlign: 'start',
                        flexShrink: 0,
                    },
                } as any)
                : {})}
        >

            {!imageFailed ? (
                <>
                    <ExpoImage
                        source={slide.imageUrl as string}
                        contentFit={isDesktop ? 'contain' : 'fill'}
                        transition={350}
                        cachePolicy="memory-disk"
                        recyclingKey={slide.id}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                        onLoad={() => onImageLoad(slide.id)}
                        onError={() => onImageError(slide.id)}
                    />
                    {!imageLoaded && (
                        <YStack
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            backgroundColor={colors.surfaceHover}
                        />
                    )}
                </>
            ) : (
                <YStack
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundColor={colors.surfaceHover}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text color={colors.textSecondary} fontSize="$sm">
                        Image unavailable
                    </Text>
                </YStack>
            )}



            <YStack
                flex={1}
                justifyContent='flex-start'
                padding={isDesktop ? '$3xl' : '$xl'}
                gap="$sm"
                zIndex={2}
            >
                <Text
                    color="#fff"
                    fontSize={isDesktop ? '$3xl' : isTablet ? '$2xl' : '$xl'}
                    fontWeight="900"
                    numberOfLines={2}
                    {...(Platform.OS === 'web'
                        ? ({
                            style: {
                                textShadow:
                                    '0 2px 12px rgba(0,0,0,0.6)',
                            },
                        } as any)
                        : {})}
                >
                    {slide.title}
                </Text>

                <Text
                    color={colors.muted}
                    fontSize={isDesktop ? '$md' : '$sm'}
                    numberOfLines={isDesktop ? undefined : 2}
                    maxWidth={isDesktop ? '55%' : '90%'}
                >
                    {slide.subtitle}
                </Text>

                <Button
                    alignSelf="flex-start"
                    size={isDesktop ? '$lg' : '$xs'}
                    borderRadius={999}
                    backgroundColor={ctaBg}
                    marginTop="$xs"
                    pressStyle={{ scale: 0.97, opacity: 0.88 }}
                    onPress={() => onCtaPress?.(slide)}
                >
                    <Text color="#fff" fontWeight="700" fontSize={isDesktop ? '$md' : '$sm'}>
                        {slide.ctaLabel}
                    </Text>
                </Button>
            </YStack>
        </YStack>
    );
}



export function HeroSlider({
    autoPlayInterval = 4000,
    onCtaPress,
}: HeroSliderProps) {
    const {
        data: heroSlides = [],
        isLoading,
        isError,
        error,
        refetch,
        isPlaceholderData,
    } = useHeroSlides();

    const { width: windowWidth } = useWindowDimensions();
    const scrollRef = useRef<ScrollView>(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [imageLoadedMap, setImageLoadedMap] = useState<
        Record<string, boolean>
    >({});
    const [imageErrorMap, setImageErrorMap] = useState<
        Record<string, boolean>
    >({});

    const userInteractingRef = useRef(false);
    const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const webScrollEndRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const breakpoint = getBreakpoint(windowWidth);
    const sliderHeight = getSliderHeight(breakpoint);
    const layoutReady = slideWidth > 0;
    const showSkeleton = (isLoading || isPlaceholderData) && !isError;


    const handleLayout = useCallback((e: LayoutChangeEvent) => {
        const w = Math.round(e.nativeEvent.layout.width);
        setSlideWidth((prev) => (prev === w ? prev : w));
    }, []);


    const handleImageLoad = useCallback((id: string) => {
        setImageLoadedMap((prev) => ({ ...prev, [id]: true }));
    }, []);

    const handleImageError = useCallback((id: string) => {
        setImageErrorMap((prev) => ({ ...prev, [id]: true }));
    }, []);


    useLayoutEffect(() => {
        if (slideWidth > 0 && heroSlides.length > 0) {
            scrollRef.current?.scrollTo({
                x: activeIndex * slideWidth,
                animated: false,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slideWidth]);


    useEffect(() => {
        if (
            showSkeleton ||
            isError ||
            heroSlides.length <= 1 ||
            slideWidth === 0
        )
            return;

        const timer = setInterval(() => {
            if (userInteractingRef.current) return;

            setActiveIndex((prev) => {
                const next = (prev + 1) % heroSlides.length;
                scrollRef.current?.scrollTo({
                    x: next * slideWidth,
                    animated: true,
                });
                return next;
            });
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [heroSlides.length, showSkeleton, isError, autoPlayInterval, slideWidth]);



    const scheduleAutoplayResume = useCallback(() => {
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
            userInteractingRef.current = false;
        }, AUTOPLAY_RESUME_DELAY);
    }, []);

    const pauseAutoplay = useCallback(() => {
        userInteractingRef.current = true;
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    }, []);

    const handleMomentumScrollEnd = useCallback(
        (e: NativeSyntheticEvent<NativeScrollEvent>) => {
            if (slideWidth === 0) return;
            const idx = Math.round(
                e.nativeEvent.contentOffset.x / slideWidth,
            );
            setActiveIndex(
                Math.max(0, Math.min(idx, heroSlides.length - 1)),
            );
            scheduleAutoplayResume();
        },
        [slideWidth, heroSlides.length, scheduleAutoplayResume],
    );

    const handleScroll = useCallback(
        (e: NativeSyntheticEvent<NativeScrollEvent>) => {
            if (Platform.OS !== 'web' || slideWidth === 0) return;
            const offsetX = e.nativeEvent.contentOffset.x;

            if (webScrollEndRef.current)
                clearTimeout(webScrollEndRef.current);
            webScrollEndRef.current = setTimeout(() => {
                const idx = Math.round(offsetX / slideWidth);
                setActiveIndex(
                    Math.max(0, Math.min(idx, heroSlides.length - 1)),
                );
                scheduleAutoplayResume();
            }, 120);
        },
        [slideWidth, heroSlides.length, scheduleAutoplayResume],
    );


    useEffect(() => {
        return () => {
            if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
            if (webScrollEndRef.current)
                clearTimeout(webScrollEndRef.current);
        };
    }, []);


    const renderBody = () => {
        if (showSkeleton || !layoutReady) {
            return <SliderSkeleton height={sliderHeight} />;
        }

        if (isError) {
            const msg =
                error instanceof Error
                    ? error.message
                    : 'Something went wrong.';
            return (
                <SliderError
                    height={sliderHeight}
                    message={msg}
                    onRetry={() => void refetch()}
                />
            );
        }

        if (!heroSlides.length) {
            return (
                <SliderError
                    height={sliderHeight}
                    message="No slides available."
                    onRetry={() => void refetch()}
                />
            );
        }

        return (
            <>
                <ScrollView
                    ref={scrollRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScrollBeginDrag={pauseAutoplay}
                    onMomentumScrollEnd={handleMomentumScrollEnd}
                    onScroll={handleScroll}
                    {...(Platform.OS !== 'web'
                        ? { pagingEnabled: true, decelerationRate: 'fast' }
                        : {})}
                    {...(Platform.OS === 'web'
                        ? ({
                            style: {
                                scrollSnapType: 'x mandatory',
                                overscrollBehaviorX: 'contain',
                            },
                        } as any)
                        : {})}
                >
                    {heroSlides.map((slide) => (
                        <HeroSlideCard
                            key={slide.id}
                            slide={slide}
                            width={slideWidth}
                            height={sliderHeight}
                            breakpoint={breakpoint}
                            onCtaPress={onCtaPress}
                            onImageLoad={handleImageLoad}
                            onImageError={handleImageError}
                            imageLoaded={!!imageLoadedMap[slide.id]}
                            imageFailed={!!imageErrorMap[slide.id]}
                        />
                    ))}
                </ScrollView>

                <SlideIndicators
                    count={heroSlides.length}
                    activeIndex={activeIndex}
                />
            </>
        );
    };

    const isWeb = Platform.OS === 'web';
    const parentPadding = tokenValues.space.md;

    return (
        <YStack
            width="100%"
            alignSelf="center"
            gap="$sm"
            onLayout={handleLayout}
            {...(isWeb
                ? ({
                    style: {
                        marginLeft: -parentPadding,
                        marginRight: -parentPadding,
                        width: `calc(100% + ${parentPadding * 2}px)`,
                    },
                } as any)
                : { maxWidth: MAX_CONTENT_WIDTH })}
        >
            {renderBody()}
        </YStack>
    );
}
