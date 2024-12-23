```javascript
import * as Linking from 'expo-linking';

async function getInitialURLWithRetry(retries = 3, delay = 100) {
  try {
    const url = await Linking.getInitialURL();
    return url;
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return getInitialURLWithRetry(retries - 1, delay * 2);
    } else {
      console.error('Failed to get initial URL after multiple retries:', error);
      return null; // Or handle the error appropriately
    }
  }
}

export default getInitialURLWithRetry; 
```