import { useEffect, useMemo, useRef, useState } from 'react';
import { Bell, Menu, RotateCw } from '@tamagui/lucide-icons';
import {
    XStack,
    YStack,
    Text,
    Button,
    Circle,
    Spinner,
    Separator,
} from 'tamagui';

type HeaderProps = {
    userName: string;
    balance: number;
    currency?: string;
    onRefresh?: () => void;
    isRefreshing?: boolean;
    refreshError?: string | null;
    hasNotifications?: boolean;
    onNotificationsPress?: () => void;
    onMenuPress?: () => void;
    showMenu?: boolean;
};

type HeaderActionButtonProps = {
    onPress?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
};

function HeaderActionButton({
    onPress,
    disabled = false,
    children,
}: HeaderActionButtonProps) {
    return (
        <Button
            size="$md"
            circular
            backgroundColor="$surfaceHover"
            borderWidth={1}
            borderColor="$surface"
            onPress={onPress}
            disabled={disabled}
            hoverStyle={{
                backgroundColor: '$surface',
                borderColor: '$accent',
            }}
            pressStyle={{
                backgroundColor: '$surface',
                scale: 0.96,
            }}
            focusStyle={{
                borderColor: '$accent',
            }}
        >
            {children}
        </Button>
    );
}

function getGreetingByHour() {
    const hour = new Date().getHours();

    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
}

function formatBalance(value: number, currency: string) {
    return `${currency}${value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })}`;
}

export function Header({
    userName,
    balance,
    currency = '$',
    onRefresh,
    isRefreshing = false,
    refreshError = null,
    hasNotifications = false,
    onNotificationsPress,
    onMenuPress,
    showMenu = true,
}: HeaderProps) {
    const safeUserName = userName?.trim() || 'User';
    const userInitial = safeUserName.charAt(0).toUpperCase() || 'U';
    const greeting = useMemo(() => getGreetingByHour(), []);

    const [displayBalance, setDisplayBalance] = useState(balance);
    const animatedValueRef = useRef(balance);

    useEffect(() => {
        const from = animatedValueRef.current;
        const to = balance;

        if (from === to) return;

        const durationMs = 500;
        const startTs = Date.now();
        let frameId = 0;

        const tick = () => {
            const progress = Math.min((Date.now() - startTs) / durationMs, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const next = from + (to - from) * eased;

            animatedValueRef.current = next;
            setDisplayBalance(next);

            if (progress < 1) {
                frameId = requestAnimationFrame(tick);
            }
        };

        frameId = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(frameId);
    }, [balance]);

    return (
        <YStack
            backgroundColor="$background"
            borderRadius="$xl"
            padding="$lg"
            gap="$md"
        >
            <XStack justifyContent="space-between" alignItems="center" gap="$md">
                <XStack alignItems="center" gap="$md" flex={1}>
                    <Circle
                        size={56}
                        backgroundColor="$textPrimary"
                        borderWidth={1}
                        borderColor="$textPrimary"
                    >
                        <Text color="$secondBackground" fontSize="$xl" fontWeight="800">
                            {userInitial}
                        </Text>
                    </Circle>

                    <YStack flex={1} gap={2}>
                        <Text color="$textSecondary" fontSize="$sm">
                            {greeting}
                        </Text>

                        <Text
                            color="$color"
                            fontSize="$7"
                            fontWeight="800"
                            numberOfLines={1}
                        >
                            {safeUserName}
                        </Text>
                    </YStack>
                </XStack>

                <XStack alignItems="center" gap="$md">
                    <HeaderActionButton onPress={onRefresh} disabled={isRefreshing}>
                        {isRefreshing ? (
                            <Spinner size="small" color="$textPrimary" />
                        ) : (
                            <RotateCw size={18} color="$textPrimary" />
                        )}
                    </HeaderActionButton>

                    <Button
                        size="$md"
                        circular
                        backgroundColor="$surfaceHover"
                        borderWidth={1}
                        borderColor="$surface"
                        position="relative"
                        onPress={onNotificationsPress}
                        hoverStyle={{
                            backgroundColor: '$surface',
                            borderColor: '$accent',
                        }}
                        pressStyle={{
                            backgroundColor: '$surface',
                            scale: 0.96,
                        }}
                        focusStyle={{
                            borderColor: '$accent',
                        }}
                    >
                        <Bell size={18} color="$textPrimary" />

                        {hasNotifications ? (
                            <Circle
                                size={10}
                                backgroundColor="$danger"
                                position="absolute"
                                top={8}
                                right={8}
                            />
                        ) : null}
                    </Button>

                    {showMenu ? (
                        <HeaderActionButton onPress={onMenuPress}>
                            <Menu size={16} color="$textPrimary" />
                        </HeaderActionButton>
                    ) : null}
                </XStack>
            </XStack>

            <Separator borderColor="$surfaceHover" />

            <XStack justifyContent="space-between" alignItems="flex-end" gap="$md">
                <YStack gap={4}>
                    <Text
                        color="$textSecondary"
                        fontSize="$sm"
                        textTransform="uppercase"
                        letterSpacing={1}
                    >
                        Wallet Balance
                    </Text>

                    <Text color="$accent" fontSize="$9" fontWeight="900">
                        {formatBalance(displayBalance, currency)}
                    </Text>
                </YStack>

                <YStack alignItems="flex-end" minHeight={18} justifyContent="flex-end">
                    <Text color={refreshError ? '$danger' : '$textSecondary'} fontSize="$sm">
                        {refreshError || 'Ready'}
                    </Text>
                </YStack>
            </XStack>
        </YStack>
    );
}