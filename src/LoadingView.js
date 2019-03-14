/*
 * @Description: loading
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2018-10-10 17:23:34
 * @LastEditTime: 2019-03-14 11:52:09
 * <LoadingView ref={r=>{this.Loading = r}} hide = {true} /> //放在布局的最后即可
 * 在需要显示的地方调用this.Loading.show();
 * 在需要隐藏的地方调用this.Loading.close();
 */

import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    loadingBg: {
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 100,
        height: 100,
        alignItems: 'center',
    },
    loading: {
        marginTop: 20,
        width: 60,
        height: 60,
    },
});

export default class LoadingView extends Component {
    static propTypes = {
        hide: PropTypes.bool,
    };

    static defaultProps = {
        hide: true,
    };

    constructor(props) {
        super(props);
        const { hide } = props;
        this.state = {
            isLoading: !hide,
        };
    }

    close() {
        this.setState({ isLoading: false });
    }

    show() {
        this.setState({ isLoading: true });
    }

    render() {
        const { isLoading } = this.state;
        return (
            isLoading === true ? (
                <View style={styles.loadingContainer}>
                    <View style={styles.loadingBg}>
                        <ActivityIndicator
                            size="large"
                            animating
                            color="white"
                            style={styles.loading}
                        />
                    </View>
                </View>
            ) : (null)
        );
    }
}
