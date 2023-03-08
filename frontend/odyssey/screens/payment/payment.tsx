import { StripeProvider } from '@stripe/stripe-react-native';
import { SafeAreaView } from 'react-native';

function Payment() {
  return (
    <SafeAreaView>
        <StripeProvider
        publishableKey="pk_test_TYooMQauvdEDq54NiTphI7jx"
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
        >
        
        </StripeProvider>
    </SafeAreaView>
  );
}

export default Payment;