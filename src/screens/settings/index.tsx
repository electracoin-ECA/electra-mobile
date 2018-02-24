import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  }
})

export default class SettingsScreen extends React.Component {
  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    )
  }
}
