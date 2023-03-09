import { AppNavigator } from './navigation/app-navigator';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports.js'
import { en, registerTranslation } from 'react-native-paper-dates';


registerTranslation("en", en)
Amplify.configure(awsconfig)


export default function App() {
  return (
    <AppNavigator />
  );
}
