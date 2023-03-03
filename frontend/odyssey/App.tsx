import { AppNavigator } from './navigation/app-navigator';
import { Amplify } from 'aws-amplify'
import awsconfig from './amplify/.config/aws-exports'

Amplify.configure(awsconfig)


export default function App() {
  return (
    <AppNavigator />
  );
}
