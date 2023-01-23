import React, { memo } from 'react';
import { Content, Footer, HelperStyle, MainBackground, Text } from 'react-native-minerva';

const BackgroundScreen = () => (
    <MainBackground>
        <Content contentContainerStyle={HelperStyle.pa_6}>
            <Text style={[HelperStyle.white, HelperStyle.ta_c]}>Content</Text>
        </Content>
        <Footer>
            <Text style={[HelperStyle.white, HelperStyle.ta_c]}>Footer</Text>
        </Footer>
    </MainBackground>
);

export default memo(BackgroundScreen);
