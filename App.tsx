import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { idUserContext } from './context/Context'

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const [idUser, setIdUser] = useState(null);
    
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <idUserContext.Provider value={[idUser, setIdUser]}>
                <SafeAreaProvider>
                <Navigation colorScheme={'light'} />
                <StatusBar />
                </SafeAreaProvider>
            </idUserContext.Provider>
        );
    }
}