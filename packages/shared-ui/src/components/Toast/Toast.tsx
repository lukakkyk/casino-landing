import { Toast as TamaguiToast, useToastState, useToastController, Text, Button } from 'tamagui';

export function ToastDemo() {
    const toast = useToastController();

    return (
        <Button
            backgroundColor="$textPrimary"
            borderRadius="$md"
            onPress={() =>
                toast.show('Toast is working!', {
                    message: 'Everything looks good.',
                    duration: 3000,
                })
            }
        >
            <Text color="$secondBackground">Test Toast</Text>
        </Button>
    );
}

type ErrorToastProps = {
    error: string | null | undefined;
};

export function ErrorToast({ error }: ErrorToastProps) {
    if (!error) return null;

    return (
        <TamaguiToast
            open
            duration={4000}
            enterStyle={{ opacity: 0, scale: 0.95, y: -8 }}
            exitStyle={{ opacity: 0, scale: 0.95, y: -8 }}
            backgroundColor="$danger"
            borderRadius="$md"
            paddingHorizontal="$lg"
            paddingVertical="$md"
        >
            <TamaguiToast.Title color="$secondBackground" fontWeight="700">
                Something went wrong
            </TamaguiToast.Title>
            <TamaguiToast.Description color="$secondBackground" opacity={0.8}>
                {error}
            </TamaguiToast.Description>
        </TamaguiToast>
    );
}

export function CurrentToast() {
    const currentToast = useToastState();

    if (!currentToast || currentToast.isHandledNatively) return null;

    return (
        <TamaguiToast
            key={currentToast.id}
            duration={currentToast.duration}
            viewportName={currentToast.viewportName}
            enterStyle={{ opacity: 0, scale: 0.95, y: -8 }}
            exitStyle={{ opacity: 0, scale: 0.95, y: -8 }}
            backgroundColor="$surface"
            borderRadius="$md"
            paddingHorizontal="$lg"
            paddingVertical="$md"
        >
            <TamaguiToast.Title color="$color" fontWeight="700">
                {currentToast.title}
            </TamaguiToast.Title>
            {currentToast.message ? (
                <TamaguiToast.Description color="$textSecondary">
                    {currentToast.message}
                </TamaguiToast.Description>
            ) : null}
        </TamaguiToast>
    );
}
