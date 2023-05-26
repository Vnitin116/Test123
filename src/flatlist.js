import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

const MyFlatList = () => {
    const [data, setData] = useState([
        { id: 1, title: 'Item 1', description: 'Description 1', visible: false },
        { id: 2, title: 'Item 2', description: 'Description 2', visible: false },
        { id: 3, title: 'Item 3', description: 'Description 3', visible: false },
    ]);

    const toggleVisibility = (itemId) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === itemId ? { ...item, visible: !item.visible } : item
            )
        );
    };
    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity onPress={() => toggleVisibility(item.id)}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
            {item.visible && <Text>{item.description}</Text>}
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default MyFlatList;
