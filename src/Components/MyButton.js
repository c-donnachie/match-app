import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

export default function MyButton({title, onPress = () => {}}) {
  return (
      <TouchableOpacity
          activeOpacity={0.7}
      onPress={onPress}
      className="flex h-14 w-40 items-center justify-center rounded-full bg-green-400"
    >
      <Text className="text-lg font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

