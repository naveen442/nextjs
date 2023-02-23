import '../styles/globals.css';
import Layout from '../components/Layout';

import 'bootstrap/dist/css/bootstrap.css';


// const darkTheme = createTheme({
//   type: 'dark',
//   theme: {
//     colors: {NextUIProvider},
//   }
// })
function App({ Component, pageProps }) {
  return (
   
      <Layout>

        <Component {...pageProps} />

      </Layout>
    

  )

}
export default App