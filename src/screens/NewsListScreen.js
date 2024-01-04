import React from 'react';
import { View } from 'react-native';
import { Header } from '../components/header/Header';

export const NewsListScreen = () => {
    return (
        <View style={{ flex:1 }}>
            <Header>
                <Header.Title title={'NEWS_LIST'}></Header.Title>
            </Header>
        </View>
    )
}