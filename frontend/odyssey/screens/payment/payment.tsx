import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const Payment = () => {
  const [sessionURL, setSessionURL] = useState(null);
  //var sessionURL = ""; //TODO: replace with payment cancelled screen url
  useEffect(() => {
    const fetchData = async () => {
      fetch('https://ajk17v39ec.execute-api.us-west-1.amazonaws.com/test/checkout', {
        method: 'GET'
      }).then(response => response.json())
        .then(data => {
          setSessionURL(data.body);
          console.log(data.statusCode);
          console.log(sessionURL);
        })
        .catch(error=>console.error(error))
    };

    fetchData();
  }, []);

  return (
      <WebView
        source = {{ uri: sessionURL }}
        style={{ flex:1}}
      />
  );
};

export default Payment;