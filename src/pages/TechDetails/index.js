import React from 'react';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

export default function TechDetails() {
  const route = useRoute();

  const { tech } = route.params;

  return (
    <WebView style={{flex: 1}} source={{ uri: `https://www.google.com/search?q=${tech.id}`}} />
  );
}
