import { View, Text, Modal, Button } from "react-native"
import React from "react"

const ModalScreen = ({ isOpen, setisOpen }) => {
  return (
    <>
     <Modal visible={isOpen} transparent={true} animationType="slide">
        <View className="flex-1 items-center justify-center">
          <View className="flex h-64 w-64 items-center justify-center rounded-3xl bg-black">
            <Text className="text-white">Modal</Text>
            <View className="absolute right-3 top-3">
              <Button className="text-2xl font-bold" title="X" onPress={() => setisOpen(!isOpen)} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default ModalScreen
