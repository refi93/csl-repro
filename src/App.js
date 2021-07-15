import { Component } from 'react'

import Logo from './assets/altafino.svg'
import './app.styles.scss'
import * as csl from '@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib'

function test() {
  console.log(csl.Bip32PrivateKey)
  console.log(csl.TransactionBuilder)
  console.log(csl.TransactionHash)
  console.log(csl.TransactionOutput)
  console.log(csl.TransactionWitnessSet.new)
  console.log(csl.Vkeywitness)
  console.log(csl.Vkey)
  console.log(csl.Ed25519KeyHash)

  for (const x of Object.entries(csl)) {
    console.log(x)
  }

  return Buffer.from(
    csl.Bip32PublicKey.from_bytes(Buffer.from('00000000'.repeat(16), 'hex'))
      .derive(47)
      .as_bytes()
  ).toString('hex')
}

function test2() {
  return Buffer.from(
    csl.Bip32PublicKey.from_bytes(Buffer.from('00000000'.repeat(16), 'hex'))
      .derive(47)
      .as_bytes()
  ).toString('hex')
}

class App extends Component {
  render() {
    console.log(test())
    console.log(test2())
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-black font-bold rounded-lg border shadow-lg p-10 m-20'>
          <div>
            Webpack 5 boilerplate with React 17, Tailwind 2, using babel, sass,
            with a hot dev server and an optimized production build.
            <div className={'bg-red-500 text-white'}>
              process.env.API_URL:{process.env.API_URL} !!! Make sure to put
              both .env.* files in gitignore.
            </div>
            <div className={'container mx-auto px-4'}>
              <a href={'https://altafino.com'}>
                <Logo className={'mt-10 px-10'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
