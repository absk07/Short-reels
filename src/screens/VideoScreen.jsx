import React, { useState, useRef, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import VideoItem from '../components/VideoItem';

const VideoScreen = ({ videoData }) => {
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const { height, width } = useWindowDimensions();

    const scrollViewRef = useRef(null);

    const handleScroll = (event) => {
        const contentOffset = event.nativeEvent.contentOffset.y;
        const newIndex = Math.floor(contentOffset / height);

        if (newIndex !== activeVideoIndex) {
            setActiveVideoIndex(newIndex);
        }
    };

    useEffect(() => {
        if (activeVideoIndex === videoData.length) {
            setActiveVideoIndex(0);
            scrollViewRef.current.scrollToIndex({ index: 0, animated: false });
        }
    }, [activeVideoIndex]);

    return (
        <SwiperFlatList
            ref={scrollViewRef}
            vertical
            autoplayLoop={true}
            autoplayLoopKeepAnimation={true}
            data={videoData.concat({ ...videoData[0], id: videoData[0].id + videoData.length })}
            pagingEnabled
            renderItem={({ item, index }) => (
                <VideoItem data={item} isActive={activeVideoIndex === index} />
            )}
            onScroll={handleScroll}
        />
    );
};

export default VideoScreen;