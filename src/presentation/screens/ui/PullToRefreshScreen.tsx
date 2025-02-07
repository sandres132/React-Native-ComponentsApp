import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

import { CustomView, Title } from '../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../../config/theme/Theme';

export const PullToRefreshScreen = () => {

    const [isRefreshing, setIsRefreshing] = useState(false);
    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRefreshing(true);
        
        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    }

    return (
        <ScrollView
            refreshControl={ <RefreshControl
                refreshing={ isRefreshing }
                progressViewOffset={ top }
                onRefresh={ onRefresh }
                colors={[ colors.primary, 'red', 'orange', 'green' ]}
            />}
            style={ [ globalStyles.mainContainer, globalStyles.globalMargin ] }
        >
            <CustomView>
                <Title text='Pull to refresh' safe />
            </CustomView>
        </ScrollView>
        
    )
}