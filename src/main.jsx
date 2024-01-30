import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import { BrowserRouter } from 'react-router-dom'
import DataFetchProvider from '@/store/DataFetchProvider'
import ArrCRUDProvider from '@/store/ArrCRUDProvider'
import ApiReqProvider from '@/store/ApiReqProvider'
import ErrorBoundery from './components/ErrorBoundery'



ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <ErrorBoundery fallback={<p>Error</p>} >
      <BrowserRouter>
        <DataFetchProvider>
          <ArrCRUDProvider>
            <ApiReqProvider>
              <App />
            </ApiReqProvider>
          </ArrCRUDProvider>
        </DataFetchProvider>
      </BrowserRouter>
    </ErrorBoundery>
  )
