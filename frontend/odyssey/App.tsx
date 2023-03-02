import { AppNavigator } from './navigation/app-navigator';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports.js'

Amplify.configure(awsconfig)


export default function App() {
  return (
    <AppNavigator />
  );
}
