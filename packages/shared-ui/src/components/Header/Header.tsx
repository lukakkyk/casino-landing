import { useEffect, useMemo, useRef, useState } from 'react'
import { useWindowDimensions } from 'react-native'
import {
    AlertCircle,
    Bell,
    ChevronDown,
    RotateCw,
    User,
} from '@tamagui/lucide-icons'
import {
    Button,
    Circle,
    Spinner,
    Text,
    XStack,
} from 'tamagui'

import { colors } from '@casino/config'
import { useUserBalance } from '@casino/shared-api'
import {
    useBalance,
    useBalanceError,
    useBalanceStatus,
    useUser,
    useUserStore,
} from '@casino/shared-stores'

export type HeaderProps = {
    brandName?: string
    notificationCount?: number
    onNotificationsPress?: () => void
    onRefreshPress?: () => void
    onProfilePress?: () => void
}

function formatBalance(value: number, currencyCode: string): string {
    return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value)
}

function useAnimatedBalance(target: number) {
    const [display, setDisplay] = useState(target)
    const fromRef = useRef(target)

    useEffect(() => {
        const from = fromRef.current
        if (from === target) return

        const duration = 500
        const start = Date.now()
        let frameId = 0

        const tick = () => {
            const progress = Math.min((Date.now() - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            fromRef.current = from + (target - from) * eased
            setDisplay(fromRef.current)
            if (progress < 1) frameId = requestAnimationFrame(tick)
        }

        frameId = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frameId)
    }, [target])

    return display
}

type HeaderViewport = {
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
    showBrandText: boolean
    showProfileName: boolean
    outerPx: number
    innerPx: number
    actionsGap: number
    balanceMaxWidth: number
    containerMaxWidth: number
}

function getViewport(width: number): HeaderViewport {
    const isMobile = width < 768
    const isTablet = width >= 768 && width < 1200
    const isDesktop = width >= 1200

    return {
        isMobile,
        isTablet,
        isDesktop,
        showBrandText: width >= 900,
        showProfileName: width >= 1100,
        outerPx: isMobile ? 16 : isTablet ? 24 : 32,
        innerPx: isMobile ? 10 : 14,
        actionsGap: isMobile ? 8 : 10,
        balanceMaxWidth: isMobile ? 150 : isTablet ? 200 : 240,
        containerMaxWidth: 1280,
    }
}

function BrandBlock({
    brandName,
    showBrandText,
}: {
    brandName: string
    showBrandText: boolean
}) {
    return (
        <XStack alignItems="center" gap="$sm" flexShrink={0}>
            <Circle size={36} backgroundColor={colors.textPrimary}>
                <Text color={colors.secondBackground} fontSize={18} fontWeight="800">
                    ♠
                </Text>
            </Circle>

            {showBrandText && (
                <Text
                    color={colors.secondBackground}
                    fontSize={28}
                    fontWeight="800"
                    letterSpacing={-0.4}
                >
                    {brandName}
                </Text>
            )}
        </XStack>
    )
}

function NotificationButton({
    count,
    onPress,
}: {
    count: number
    onPress?: () => void
}) {
    const clampedCount = Math.min(count, 99)

    return (
        <Button
            size="$2xl"
            circular
            backgroundColor={colors.glassBg}
            borderWidth={1}
            borderColor={colors.glassBorder}
            onPress={onPress}
            position="relative"
            hoverStyle={{ backgroundColor: colors.glassHoverBg }}
            pressStyle={{ scale: 0.95, opacity: 0.85 }}
        >
            <Bell size={17} color={colors.secondBackground} />

            {clampedCount > 0 && (
                <Circle
                    size={18}
                    backgroundColor={colors.danger}
                    position="absolute"
                    top={-8}
                    right={-8}
                    zIndex={10}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text color={colors.secondBackground} fontSize={10} fontWeight="700">
                        {clampedCount > 9 ? '9+' : String(clampedCount)}
                    </Text>
                </Circle>
            )}
        </Button>
    )
}

function BalancePill({
    balance,
    currency,
    status,
    error,
    maxWidth,
    compact,
    onRefreshPress,
}: {
    balance: number
    currency: string
    status: 'idle' | 'loading' | 'success' | 'error'
    error: string | null
    maxWidth: number
    compact: boolean
    onRefreshPress?: () => void
}) {
    const isError = status === 'error' || Boolean(error)
    const isLoading = status === 'loading'

    return (
        <XStack
            alignItems="center"
            gap={8}
            paddingLeft={compact ? 10 : 14}
            paddingRight={compact ? 6 : 8}
            paddingVertical={6}
            backgroundColor={colors.glassBg}
            borderWidth={1}
            borderColor={isError ? colors.danger : colors.glassBorder}
            borderRadius={999}
            maxWidth={maxWidth}
            flexShrink={1}
            minWidth={0}
        >
            <Text
                color={isError ? colors.danger : colors.secondBackground}
                fontSize={compact ? 13 : 14}
                fontWeight="700"
                numberOfLines={1}
                ellipsizeMode="tail"
                flexShrink={1}
            >
                {formatBalance(balance, currency)}
            </Text>

            {isLoading && <Spinner size="small" color={colors.textSecondary} />}

            {isError && (
                <AlertCircle size={compact ? 14 : 16} color={colors.danger} />
            )}

            <Button
                circular
                backgroundColor="transparent"
                borderWidth={0}
                padding={0}
                onPress={onRefreshPress}
                hoverStyle={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    opacity: 1,
                }}
                pressStyle={{
                    scale: 0.94,
                    opacity: 0.8,
                }}
            >
                <RotateCw
                    size={compact ? 16 : 20}
                    color={isError ? colors.danger : colors.secondBackground}
                />
            </Button>
        </XStack>
    )
}

function ProfileButton({
    userName,
    showProfileName,
    onPress,
}: {
    userName?: string
    showProfileName: boolean
    onPress?: () => void
}) {
    if (showProfileName) {
        return (
            <Button
                backgroundColor={colors.glassBg}
                borderWidth={1}
                borderColor={colors.glassBorder}
                borderRadius={999}
                paddingHorizontal={12}
                paddingVertical={6}
                height="auto"
                onPress={onPress}
                hoverStyle={{ backgroundColor: colors.glassHoverBg }}
                pressStyle={{ scale: 0.95, opacity: 0.85 }}
            >
                <XStack alignItems="center" gap={7}>
                    <User size={18} color={colors.secondBackground} />

                    {!!userName && (
                        <Text
                            color={colors.secondBackground}
                            fontSize="$md"
                            fontWeight="600"
                            numberOfLines={1}
                            maxWidth={120}
                        >
                            {userName}
                        </Text>
                    )}

                    <ChevronDown size={18} color={colors.muted} />
                </XStack>
            </Button>
        )
    }

    return (
        <Button
            size="$2xl"
            circular
            backgroundColor={colors.glassBg}
            borderWidth={1}
            borderColor={colors.glassBorder}
            onPress={onPress}
            hoverStyle={{ backgroundColor: colors.glassHoverBg }}
            pressStyle={{ scale: 0.95, opacity: 0.85 }}
        >
            <User size={17} color={colors.secondBackground} />
        </Button>
    )
}

export function Header({
    brandName = 'Nuke',
    notificationCount = 0,
    onNotificationsPress,
    onRefreshPress,
    onProfilePress,
}: HeaderProps) {
    const { width } = useWindowDimensions()
    const viewport = useMemo(() => getViewport(width), [width])

    const user = useUser()
    const balance = useBalance()
    const balanceStatus = useBalanceStatus()
    const balanceError = useBalanceError()
    const triggerRefresh = useUserStore((state) => state.triggerRefresh)

    const currencyCode = user?.currency ?? 'USD'
    const displayName = user?.name

    useUserBalance()

    const displayBalance = useAnimatedBalance(balance)

    const handleRefresh = () => {
        triggerRefresh()
        onRefreshPress?.()
    }

    return (
        <XStack
            width="100%"
            justifyContent="center"
            paddingHorizontal={viewport.outerPx}
            paddingVertical={viewport.isMobile ? 10 : 14}
            backgroundColor="transparent"
        >
            <XStack
                width="100%"
                maxWidth={viewport.containerMaxWidth}
                alignItems="center"
                justifyContent="space-between"
                gap={12}
            >
                <BrandBlock
                    brandName={brandName}
                    showBrandText={viewport.showBrandText}
                />

                <XStack
                    alignItems="center"
                    gap={viewport.actionsGap}
                    flexShrink={1}
                    minWidth={0}
                >
                    <NotificationButton
                        count={notificationCount}
                        onPress={onNotificationsPress}
                    />

                    <BalancePill
                        balance={displayBalance}
                        currency={currencyCode}
                        status={balanceStatus}
                        error={balanceError}
                        maxWidth={viewport.balanceMaxWidth}
                        compact={viewport.isMobile}
                        onRefreshPress={handleRefresh}
                    />

                    <ProfileButton
                        userName={displayName}
                        showProfileName={viewport.showProfileName}
                        onPress={onProfilePress}
                    />
                </XStack>
            </XStack>
        </XStack>
    )
}