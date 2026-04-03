import { useEffect, useRef, useState } from 'react'
import { Platform } from 'react-native'
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

/* ---------- UI ნაწილები ---------- */

function BrandBlock({ brandName, isWeb }: { brandName: string; isWeb: boolean }) {
    return (
        <XStack alignItems="center" gap="$sm">
            <Circle size={36} backgroundColor={colors.textPrimary}>
                <Text color={colors.secondBackground} fontSize={18} fontWeight="800">
                    ♠
                </Text>
            </Circle>

            {isWeb && (
                <Text
                    color={colors.secondBackground}
                    fontSize={17}
                    fontWeight="800"
                    letterSpacing={-0.3}
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
    isWeb,
    onRefreshPress,
}: {
    balance: number
    currency: string
    status: 'idle' | 'loading' | 'success' | 'error'
    error: string | null
    isWeb: boolean
    onRefreshPress?: () => void
}) {
    const isError = status === 'error' || Boolean(error)
    const isLoading = status === 'loading'

    return (
        <XStack
            alignItems="center"
            gap={6}
            paddingHorizontal={isWeb ? 14 : 10}
            paddingVertical={6}
            backgroundColor={colors.glassBg}
            borderWidth={1}
            borderColor={isError ? colors.danger : colors.glassBorder}
            borderRadius={999}
        >
            <Text
                color={isError ? colors.danger : colors.secondBackground}
                fontSize={isWeb ? 14 : 13}
                fontWeight="700"
            >
                {formatBalance(balance, currency)}
            </Text>

            {isLoading && <Spinner size="small" color={colors.textSecondary} />}

            {isError && <AlertCircle size={isWeb ? 16 : 13} color={colors.danger} />}

            <Button
                size="$xs"
                circular
                backgroundColor="transparent"
                borderWidth={0}
                padding={2}
                onPress={onRefreshPress}
                hoverStyle={{ opacity: 0.7 }}
                pressStyle={{ scale: 0.9, opacity: 0.7 }}
            >
                <RotateCw size={isWeb ? 18 : 13} color={colors.muted} />
            </Button>
        </XStack>
    )
}

function ProfileButton({
    userName,
    isWeb,
    onPress,
}: {
    userName?: string
    isWeb: boolean
    onPress?: () => void
}) {
    if (isWeb) {
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

                    {userName && (
                        <Text color={colors.secondBackground} fontSize="$md" fontWeight="600">
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

/* ---------- MAIN ---------- */

export function Header({
    brandName = 'Nuke',
    notificationCount = 0,
    onNotificationsPress,
    onRefreshPress,
    onProfilePress,
}: HeaderProps) {
    const isWeb = Platform.OS === 'web'

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
            justifyContent="space-between"
            alignItems="center"
            paddingHorizontal={isWeb ? 32 : 16}
            paddingVertical={isWeb ? 14 : 10}
            backgroundColor={colors.background}
        >
            <BrandBlock brandName={brandName} isWeb={isWeb} />

            <XStack alignItems="center" gap={isWeb ? 10 : 8}>
                <NotificationButton
                    count={notificationCount}
                    onPress={onNotificationsPress}
                />

                <BalancePill
                    balance={displayBalance}
                    currency={currencyCode}
                    status={balanceStatus}
                    error={balanceError}
                    isWeb={isWeb}
                    onRefreshPress={handleRefresh}
                />

                <ProfileButton
                    userName={displayName}
                    isWeb={isWeb}
                    onPress={onProfilePress}
                />
            </XStack>
        </XStack>
    )
}