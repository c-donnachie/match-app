import { View, Text } from 'react-native'
import React from 'react'

export default function MyButton({mTitleTitulo = () => {}}) {

  return (
    <View>
      <Text className="text-7xl font-bold text-gray-900">{mTitleTitulo}</Text>
    </View>
  )
}