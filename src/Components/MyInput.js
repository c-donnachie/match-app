import {View, Text, TextInput} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 

export default function MyInput({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) {
  const [isFocused, setIsFocused] = React.useState(false)
  const [hidePassword, setHidePassword] = React.useState(password)
  return (
    <View>
      {/* <Text className="">{label}</Text> */}
      <View
        className={`mt-6 h-14 w-72 flex-row items-center rounded-3xl bg-white px-4 ${
          error
            ? 'border-2 border-red-700'
            : isFocused
            ? 'border-2 border-green-400 '
            : ''
        }`}
      >
        <FontAwesome
          className="flex-1 items-center"
          name={iconName}
          size={20}
          color={isFocused ? 'black' : 'gray'}
        />
        <TextInput
          className="ml-3 h-14 w-56 items-center"
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus()
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
          {...props}
        />
        {password && (
          <View className="absolute ml-64">
            <FontAwesome
              onPress={() => setHidePassword(!hidePassword)}
              className="mr-3 flex-1 items-center"
              name={hidePassword ? 'eye-slash' : 'eye'}
              size={14}
              color={hidePassword ? 'gray' : 'black'}
            />
          </View>
        )}
      </View>
      {error && (
        <Text className="ml-5 mt-1 font-semibold text-red-500">{error}</Text>
      )}
    </View>
  )
}
