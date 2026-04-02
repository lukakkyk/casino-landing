import { createContext } from "react";
import { createElement } from "./createElement/index.mjs";
import { AccessibilityUtil, canUseDOM, clickProps, createDOMProps, dismissKeyboard, flattenStyle, ImageLoader, InteractionManager, isWebColor, LocaleProvider, mergeRefs, normalizeColor, Platform, processColor, processStyle, StyleSheet, TextAncestorContext, UIManager, useEvent, useHover, useLayoutEffect, useMergeRefs, usePlatformMethods } from "@tamagui/react-native-web-internals";
import { render } from "./render/index.mjs";
import { NativeModules } from "./NativeModules/index.mjs";
import { default as default2 } from "./vendor/react-native/EventEmitter/NativeEventEmitter.mjs";
import { AccessibilityInfo } from "./AccessibilityInfo/index.mjs";
import { Alert } from "./Alert/index.mjs";
import { Appearance } from "./Appearance/index.mjs";
import { AppRegistry } from "./AppRegistry/index.mjs";
import { AppState } from "./AppState/index.mjs";
import { BackHandler } from "./BackHandler/index.mjs";
import { Clipboard } from "./Clipboard/index.mjs";
import { DeviceInfo } from "./DeviceInfo/index.mjs";
import { DeviceEmitter } from "./DeviceEmitter.mjs";
import { DeviceEmitter as DeviceEmitter2 } from "./DeviceEmitter.mjs";
import { Dimensions } from "./Dimensions/index.mjs";
import { I18nManager } from "./I18nManager/index.mjs";
import { Keyboard } from "./Keyboard/index.mjs";
import { Linking } from "./Linking/index.mjs";
import { PanResponder } from "./PanResponder/index.mjs";
import { PixelRatio } from "./PixelRatio/index.mjs";
import { Share } from "./Share/index.mjs";
import { Vibration } from "./Vibration/index.mjs";
import { UnimplementedView } from "./UnimplementedView.mjs";
import { UnimplementedView as UnimplementedView2 } from "./UnimplementedView.mjs";
import { UnimplementedView as UnimplementedView3 } from "./UnimplementedView.mjs";
import { UnimplementedView as UnimplementedView4 } from "./UnimplementedView.mjs";
import { UnimplementedView as UnimplementedView5 } from "./UnimplementedView.mjs";
import { UnimplementedView as UnimplementedView6 } from "./UnimplementedView.mjs";
import { UnimplementedView as UnimplementedView7 } from "./UnimplementedView.mjs";
import { TouchableOpacity, TouchableOpacity as TouchableOpacity2 } from "./TouchableOpacity.mjs";
import { TouchableWithoutFeedback } from "./TouchableWithoutFeedback.mjs";
import { ActivityIndicator } from "./ActivityIndicator/index.mjs";
import { Image } from "./Image/index.mjs";
import { ImageBackground } from "./ImageBackground/index.mjs";
import { KeyboardAvoidingView } from "./KeyboardAvoidingView/index.mjs";
import { Modal } from "./Modal/index.mjs";
import { Pressable } from "./Pressable/index.mjs";
import { RefreshControl } from "./RefreshControl/index.mjs";
import { SafeAreaView } from "./SafeAreaView/index.mjs";
import { ScrollView } from "./ScrollView/index.mjs";
import { StatusBar } from "./StatusBar/index.mjs";
import { Text } from "./Text/index.mjs";
import { TextInput } from "./TextInput/index.mjs";
import { View } from "./View/index.mjs";
import { LogBox } from "./LogBox/index.mjs";
import { useColorScheme } from "./useColorScheme/index.mjs";
import { useLocaleContext } from "./useLocaleContext/index.mjs";
import { useWindowDimensions } from "./useWindowDimensions/index.mjs";
export * from "@tamagui/react-native-web-internals";
import { View as _View } from "./View/index.mjs";
import { Text as _Text } from "./Text/index.mjs";
import { Image as _Image } from "./Image/index.mjs";
import { ScrollView as _ScrollView } from "./ScrollView/index.mjs";
import { unstable_batchedUpdates } from "react-dom";
function requireNativeComponent(name) {
  return function () {
    return null;
  };
}
class AnimatedValue {
  _value;
  _offset;
  _listeners;
  _nextId;
  constructor(value = 0) {
    this._value = value, this._offset = 0, this._listeners = {}, this._nextId = 0;
  }
  setValue(value) {
    this._value = value, this._notifyListeners();
  }
  setOffset(offset) {
    this._offset = offset;
  }
  flattenOffset() {
    this._value += this._offset, this._offset = 0;
  }
  extractOffset() {
    this._offset = this._value, this._value = 0;
  }
  addListener(callback) {
    const id = String(this._nextId++);
    return this._listeners[id] = callback, id;
  }
  removeListener(id) {
    delete this._listeners[id];
  }
  removeAllListeners() {
    this._listeners = {};
  }
  stopAnimation(callback) {
    callback?.(this._value);
  }
  resetAnimation(callback) {
    callback?.(this._value);
  }
  interpolate(config) {
    return new AnimatedValue(this._value);
  }
  _notifyListeners() {
    for (const key in this._listeners) this._listeners[key]({
      value: this._value
    });
  }
  __getValue() {
    return this._value + this._offset;
  }
}
class AnimatedValueXY {
  x;
  y;
  constructor(value) {
    this.x = new AnimatedValue(value?.x ?? 0), this.y = new AnimatedValue(value?.y ?? 0);
  }
  setValue(value) {
    this.x.setValue(value.x), this.y.setValue(value.y);
  }
  setOffset(offset) {
    this.x.setOffset(offset.x), this.y.setOffset(offset.y);
  }
  flattenOffset() {
    this.x.flattenOffset(), this.y.flattenOffset();
  }
  stopAnimation(callback) {
    callback?.({
      x: this.x._value,
      y: this.y._value
    });
  }
  addListener(callback) {
    const xId = this.x.addListener(() => {
      callback({
        x: this.x._value,
        y: this.y._value
      });
    });
    return this.y.addListener(() => {
      callback({
        x: this.x._value,
        y: this.y._value
      });
    }), xId;
  }
  removeAllListeners() {
    this.x.removeAllListeners(), this.y.removeAllListeners();
  }
  getLayout() {
    return {
      left: this.x,
      top: this.y
    };
  }
  getTranslateTransform() {
    return [{
      translateX: this.x
    }, {
      translateY: this.y
    }];
  }
}
const noopAnim = {
    start: cb => cb?.({
      finished: !0
    }),
    stop: () => {},
    reset: () => {}
  },
  Animated = {
    View: _View,
    Text: _Text,
    Image: _Image,
    ScrollView: _ScrollView,
    FlatList: _View,
    SectionList: _View,
    Value: AnimatedValue,
    ValueXY: AnimatedValueXY,
    timing: () => noopAnim,
    spring: () => noopAnim,
    decay: () => noopAnim,
    sequence: () => noopAnim,
    parallel: () => noopAnim,
    stagger: () => noopAnim,
    loop: () => noopAnim,
    event: () => () => {},
    add: (a, b) => new AnimatedValue(0),
    subtract: (a, b) => new AnimatedValue(0),
    multiply: (a, b) => new AnimatedValue(0),
    divide: (a, b) => new AnimatedValue(0),
    modulo: (a, b) => new AnimatedValue(0),
    diffClamp: (a, min, max) => new AnimatedValue(0),
    delay: () => noopAnim,
    createAnimatedComponent: c => c
  },
  Easing = {
    step0: () => 0,
    step1: () => 1,
    linear: t => t,
    ease: t => t,
    quad: t => t * t,
    cubic: t => t * t * t,
    poly: () => t => t,
    sin: t => t,
    circle: t => t,
    exp: t => t,
    elastic: () => t => t,
    back: () => t => t,
    bounce: t => t,
    bezier: () => t => t,
    in: fn => fn,
    out: fn => fn,
    inOut: fn => fn
  },
  findNodeHandle = component => {
    throw new Error("not supported - use ref instead");
  },
  RootTagContext = createContext(null);
export { AccessibilityInfo, AccessibilityUtil, ActivityIndicator, Alert, Animated, AppRegistry, AppState, Appearance, BackHandler, Clipboard, DeviceEmitter, DeviceEmitter2 as DeviceEventEmitter, DeviceInfo, Dimensions, UnimplementedView as DrawerLayoutAndroid, Easing, UnimplementedView4 as FlatList, I18nManager, Image, ImageBackground, ImageLoader, InteractionManager, Keyboard, KeyboardAvoidingView, Linking, LocaleProvider, LogBox, Modal, default2 as NativeEventEmitter, NativeModules, PanResponder, PixelRatio, Platform, Pressable, RefreshControl, RootTagContext, SafeAreaView, ScrollView, UnimplementedView7 as SectionList, Share, StatusBar, StyleSheet, UnimplementedView2 as Switch, Text, TextAncestorContext, TextInput, TouchableOpacity as Touchable, UnimplementedView5 as TouchableHighlight, UnimplementedView6 as TouchableNativeFeedback, TouchableOpacity2 as TouchableOpacity, TouchableWithoutFeedback, UIManager, Vibration, View, UnimplementedView3 as VirtualizedList, canUseDOM, clickProps, createDOMProps, dismissKeyboard, findNodeHandle, flattenStyle, isWebColor, mergeRefs, normalizeColor, processColor, processStyle, render, requireNativeComponent, unstable_batchedUpdates, createElement as unstable_createElement, useColorScheme, useEvent, useHover, useLayoutEffect, useLocaleContext, useMergeRefs, usePlatformMethods, useWindowDimensions };
//# sourceMappingURL=without-animated.mjs.map
