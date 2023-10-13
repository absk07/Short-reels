import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

const SearchContent = () => {
    const searchData = [
        {
            id: 0,
            images: [
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
            ]
        },
        {
            id: 1,
            images: [
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
            ]
        },
        {
            id: 2,
            images: [
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
                require('../../assets/demo1.jpeg'),
            ]
        },
    ];

    return (
        <View style={{ marginBottom: 60 }}>
            {
                searchData.map((data, index) => (
                    <View key={data.id}>
                        {
                            data.id === 0 ?
                                (
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        {
                                            data.images.map((img, imgIndex) => (
                                                <TouchableOpacity key={imgIndex} style={{ paddingBottom: 2 }}>
                                                    <Image
                                                        source={img}
                                                        style={{ width: 119, height: 119 }}
                                                    />
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </View>
                                ) : null
                        }
                        {
                            data.id === 1 ?
                                (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 240, justifyContent: 'space-between' }}>
                                            {
                                                data.images.slice(0, 4).map((img, imgIndex) => (
                                                    <TouchableOpacity key={imgIndex} style={{ paddingBottom: 2 }}>
                                                        <Image
                                                            source={img}
                                                            style={{ width: 119, height: 119 }}
                                                        />
                                                    </TouchableOpacity>
                                                ))
                                            }
                                        </View>
                                        <TouchableOpacity style={{ marginLeft: 2 }}>
                                            <Image
                                                source={data.images[5]}
                                                style={{ width: 120, height: 240 }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                ) : null
                        }
                        {
                            data.id === 2 ?
                                (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <TouchableOpacity style={{ paddingRight: 2 }}>
                                            <Image
                                                source={data.images[2]}
                                                style={{ width: 240, height: 240 }}
                                            />
                                        </TouchableOpacity>
                                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 240, justifyContent: 'space-between' }}>
                                            {
                                                data.images.slice(0, 3).map((img, imgIndex) => (
                                                    <TouchableOpacity key={imgIndex} style={{ paddingBottom: 2 }}>
                                                        <Image
                                                            source={img}
                                                            style={{ width: 119, height: 119 }}
                                                        />
                                                    </TouchableOpacity>
                                                ))
                                            }
                                        </View>
                                    </View>
                                ) : null
                        }
                    </View>
                ))
            }
        </View>
    );
}

export default SearchContent;