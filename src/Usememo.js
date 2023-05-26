import { View, Text, Button } from 'react-native'
import React, { useState, useMemo } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const [item, setItem] = useState(10)
  const multiCount = useMemo(() => {
    console.log("clicked")
    return (
      count * 4
    )
  }, [count])
  return (
    <View>
      <Text style={{ fontSize: 25, marginLeft: 40, marginRight: 10 }}>{count}</Text>
      <Text style={{ fontSize: 25, marginLeft: 40, marginRight: 10 }}>{multiCount}</Text>
      <Button title='count' onPress={() => setCount(count + 1)} />
      <Text style={{ fontSize: 25, marginLeft: 25, marginRight: 10 }}>{item}</Text>
      <Button title='item' onPress={() => setItem(item * 10)} />
    </View>
  )
}
export default App;