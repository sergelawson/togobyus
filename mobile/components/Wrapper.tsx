import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {children}
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Wrapper;
