declare module "expo-image" {
  import type { StyleProp, ViewStyle } from "react-native";

  interface ImageSource {
    uri: string;
    width?: number;
    height?: number;
    headers?: Record<string, string>;
  }

  interface ImageProps {
    source: string | number | ImageSource;
    contentFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
    transition?: number;
    placeholder?: string | { blurhash: string };
    placeholderContentFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
    style?: StyleProp<ViewStyle> | Record<string, unknown>;
    onLoad?: () => void;
    onError?: () => void;
    recyclingKey?: string;
    cachePolicy?: "none" | "disk" | "memory" | "memory-disk";
  }

  export function Image(props: ImageProps): JSX.Element;
}
