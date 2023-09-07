import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import  AppbarPage  from '@/components/AppbarPage'

export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot>  
    <AppbarPage />
      <Component {...pageProps} />
    </RecoilRoot>
}
