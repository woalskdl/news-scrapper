import React, { useCallback } from "react";
import { View } from "react-native";
import { Header } from "../components/header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Spacer } from "../components/Spacer";
import Webview from 'react-native-webview';

export const NewsDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const onPressBack = useCallback(() => {
        navigation.goBack();
    })

    console.log(route.params);

    return (
        <View style={{ flex:1 }}>
            <Header>
                <Header.Group>
                    <Header.Icon iconName='arrow-back' onPress={onPressBack}/>
                    <Spacer horizontal space={12}/>
                    <View style={{ maxWidth:200 }}>
                        <Header.Title title='NEWS_DETAIL'></Header.Title>
                    </View>
                </Header.Group>
            </Header>

            <Webview
                style={{ flex:1 }}
                source={{uri:route.params.newsItem.link}}
            />
        </View>
    )
}