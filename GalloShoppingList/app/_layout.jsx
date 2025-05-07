import { Stack } from "expo-rounter";
import {StatusBar} from "expo-status-bar";

export default function Root_layout() {
  return (
    <>
    <Stack>
        <Stack.Screan name="home" options={{headerShow: false }}/>
        <Stack.Screan name="index" options={{headerShow: false }}/>
    </Stack>
    <StatusBar style="height"/>
    </>

  )
}