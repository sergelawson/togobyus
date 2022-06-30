import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

export default function App() {
  const { loaded, hideSplash } = useCachedResources();

  if (loaded) {
    hideSplash();
  }
  if (!loaded) {
    return <></>;
  }
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
