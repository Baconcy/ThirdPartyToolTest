/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//npm install react-native-scrollable-tab-view --save
//https://github.com/skv-headless/react-native-scrollable-tab-view

import ScrollableTabView from 'react-native-scrollable-tab-view'

import DefaultTabBar from './DefaultTabBar'

export default class ThirdPartyToolTest extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabNames: ['Tab1', 'Tab2', 'Tab3', 'Tab4'],
        };
    }
    render() {
        return (
            <ScrollableTabView style={{marginTop:20}}
                renderTabBar={() => <DefaultTabBar tabNames={this.state.tabNames}/>}//忽略这一行，为默认的样式

                tabBarPosition='top'//top、bottom、overlayTop、overlayBottom顶部底部悬浮
                onChangeTab= {(obj)=>{console.log('选中了：'+obj.i)}}//切换后调用此方法
                onScroll={(postion)=>{console.log('postion:'+postion)}}//正在滚动调用 0到length-1
                locked={false}//手指是否能拖动视图，默认为false（表示可以拖动）
                initialPage={0}//初始化时被选中的Tab下标，默认是0（即第一页）

                tabBarBackgroundColor="red"//背景色
                tabBarActiveTextColor="blue"//选中的tab的文字颜色
                tabBarInactiveTextColor="yellow"//没有选中的tab的文字颜色
                tabBarTextStyle={{fontSize:17}}//tab的字体的style
                scrollWithoutAnimation={false}//设置“点击”Tab时，视图切换是否有动画，默认为false（即：有动画效果）

            >
                {/*{每个被包含的子视图需要使用tabLabel属性，表示对应Tab显示的文字}*/}


                {/*默认的样式，上面是标题，下面有一条线，如果需要自定义的item，此方法不适用*/}

                <View tabLabel='Tab1' style={styles.container}>

                    <Text>1</Text>

                </View>

                <View tabLabel='Tab2' style={styles.container}>

                    <Text>2</Text>

                </View>

                <View tabLabel='Tab3' style={styles.container}>

                    <Text>3</Text>

                </View>

                <View tabLabel='Tab4' style={styles.container}>

                    <Text>4</Text>

                </View>

                <View tabLabel='Tab5' style={styles.container}>

                    <Text>5</Text>

                </View>

                <View tabLabel='Tab6' style={styles.container}>

                    <Text>6</Text>

                </View>



            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

AppRegistry.registerComponent('ThirdPartyToolTest', () => ThirdPartyToolTest);
