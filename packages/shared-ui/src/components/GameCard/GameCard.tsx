import { useState } from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { colors } from '@casino/config';
import { Image, Text, XStack, YStack, Circle } from 'tamagui';

type GameCardProps = {
    imageUrl: string;
    playersCount: number;
    onPress?: () => void;
};

export function GameCard({ playersCount, imageUrl, onPress }: GameCardProps) {
    const { width } = useWindowDimensions();
    const isWeb = Platform.OS === 'web';

    const isLargeDesktop = width >= 1440;
    const isDesktop = width >= 1024;
    const isTablet = width >= 768;

    const cardWidth = isLargeDesktop ? 220 : isDesktop ? 200 : isTablet ? 180 : 170;
    const cardHeight = isLargeDesktop ? 280 : isDesktop ? 252 : isTablet ? 228 : 214;

    const [hovered, setHovered] = useState(false);

    return (
        <YStack
            width={cardWidth}
            gap="$sm"
            alignItems="center"
            onPress={onPress}
            role={onPress ? 'button' : undefined}
            cursor={onPress ? 'pointer' : undefined}
            onMouseEnter={isWeb ? () => setHovered(true) : undefined}
            onMouseLeave={isWeb ? () => setHovered(false) : undefined}
            transition="quick"
            scale={hovered ? 1.03 : 1}
            y={hovered ? -6 : 0}
            opacity={hovered ? 1 : 0.98}
            pressStyle={{ opacity: 0.88, scale: 0.98 }}
        >
            <YStack
                width={cardWidth}
                height={cardHeight}
                borderRadius={24}
                overflow="hidden"
                position="relative"
                backgroundColor="#111"
                borderWidth={1}
                borderColor={hovered ? colors.glassBorder : colors.glassBorder}
                shadowColor={colors.background}
                shadowOpacity={hovered ? 0.35 : 0.18}
                shadowRadius={hovered ? 28 : 14}
                shadowOffset={{ width: 0, height: hovered ? 16 : 8 }}
            >
                <Image
                    src={imageUrl}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                />

                <YStack
                    position="absolute"
                    inset={0}
                    pointerEvents="none"
                    backgroundColor="rgba(0,0,0,0.06)"
                />

                <YStack
                    position="absolute"
                    left={0}
                    right={0}
                    bottom={0}
                    height="42%"
                    pointerEvents="none"
                    background="linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.12), transparent)"
                />

                {hovered && (
                    <YStack
                        position="absolute"
                        inset={0}
                        pointerEvents="none"
                        borderRadius={24}
                        borderWidth={1}
                        borderColor="rgba(159,45,216,0.35)"
                    />
                )}
            </YStack>

            <XStack
                alignItems="center"
                justifyContent="center"
                gap="$xs"
                paddingHorizontal="$xs"
            >
                <Circle size={8} backgroundColor={colors.success} />
                <Text
                    color={colors.secondBackground}
                    fontSize={isDesktop ? 15 : 10}
                    fontWeight="600"
                >
                    {playersCount} Playing
                </Text>
            </XStack>
        </YStack>
    );
}