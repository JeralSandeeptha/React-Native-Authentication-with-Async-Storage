import 'react-native-gesture-handler';
import MainStackNavigator from './routes/MainStackNavigator';
import AuthProvider from './providers/AuthProvider';

export default function App() {

  return (
    <AuthProvider>
      <MainStackNavigator />
    </AuthProvider>
  );

}

