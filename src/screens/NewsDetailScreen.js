import React, { useCallback } from "react";
import { View } from "react-native";
import { Header } from "../components/header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Spacer } from "../components/Spacer";
import Webview from 'react-native-webview';
import { useDispatch, useSelector } from "react-redux";
import { clipNewsItem } from "../actions/news";

export const NewsDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();

    const onPressBack = useCallback(() => {
        navigation.goBack();
    })

    const onPressFavorite = useCallback(() => {
        dispatch(clipNewsItem(route.params.newsItem))
    }, []);

    const isClipped = useSelector((state) => state.news.favoriteNews.filter((item) => item.link === route.params.newsItem.link).length) > 0;

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

                <Header.Icon iconName={isClipped ? 'heart' : 'heart-outline'} onPress={onPressFavorite}/>
            </Header>

            <Webview
                style={{ flex:1 }}
                source={{uri:route.params.newsItem.link}}
            />
        </View>
    )
}