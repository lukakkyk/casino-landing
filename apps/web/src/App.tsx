import { Button, Paragraph, Text, XStack, YStack } from 'tamagui';
import { Header, HeroSlider } from '@casino/shared-ui';

function App() {
  return (
    <YStack backgroundColor="$background" gap="$md" minHeight="100%" paddingBottom="$xl">
      <Header brandName="Nuke" notificationCount={2} />

      <YStack paddingHorizontal="$md" gap="$md">
        <YStack
          backgroundColor="$surface"
          borderRadius="$lg"
          borderWidth={1}
          borderColor="$surfaceHover"
          padding="$lg"
          gap="$sm"
        >
          <Text color="$color" fontSize="$8" fontWeight="800">
            Shared Tamagui Theme Check
          </Text>
          <Paragraph color="$textSecondary">
            This panel should use the same shared token colors on web and mobile.
          </Paragraph>
          <XStack gap="$sm">
            <Button backgroundColor="$accent">
              <Text color="$color">Accent</Text>
            </Button>
            <Button backgroundColor="$success">
              <Text color="$color">Success</Text>
            </Button>
            <Button backgroundColor="$danger">
              <Text color="$color">Danger</Text>
            </Button>
          </XStack>
        </YStack>

        <HeroSlider
          onCtaPress={(slide) => {
            console.log('CTA pressed:', slide.title);
          }}
        />
      </YStack>
    </YStack>
  );
}

export default App;