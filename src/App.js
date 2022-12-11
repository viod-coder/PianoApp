import { axisBottom } from 'd3'
import React, { useEffect, useState, useRef } from 'react'
import './app.css'
import key01 from './piano/key01.mp3'
import key02 from './piano/key02.mp3'
import key03 from './piano/key03.mp3'
import key04 from './piano/key04.mp3'
import key05 from './piano/key05.mp3'
import key06 from './piano/key06.mp3'
import key07 from './piano/key07.mp3'
import key08 from './piano/key08.mp3'
import key09 from './piano/key09.mp3'
import key10 from './piano/key10.mp3'
import key11 from './piano/key11.mp3'
import key12 from './piano/key12.mp3'
import key13 from './piano/key13.mp3'
import key14 from './piano/key14.mp3'
import key15 from './piano/key15.mp3'
import key16 from './piano/key16.mp3'
import key17 from './piano/key17.mp3'
import key18 from './piano/key18.mp3'
import key19 from './piano/key19.mp3'
import key20 from './piano/key20.mp3'
import key21 from './piano/key21.mp3'
import key22 from './piano/key22.mp3'
import key23 from './piano/key23.mp3'
import key24 from './piano/key24.mp3'

function App() {
  const whiteKeys = [
    { keyId: key01 }, //fa
    { keyId: key03 },
    { keyId: key05 },
    { keyId: key07 },
    { keyId: key08 }, //do
    { keyId: key10 },
    { keyId: key12 },
    { keyId: key13 }, //fa
    { keyId: key15 },
    { keyId: key17 },
    { keyId: key19 },
    { keyId: key20 }, //do
    { keyId: key22 },
    { keyId: key24 }, //mi
  ]

  const blackKeys = [
    { keyId: 1, key: key02 },
    { keyId: 2, key: key04 },
    { keyId: 3, key: key06 },
    { keyId: 5, key: key09 },
    { keyId: 6, key: key11 },
    { keyId: 8, key: key14 },
    { keyId: 9, key: key16 },
    { keyId: 10, key: key18 },
    { keyId: 12, key: key21 },
    { keyId: 13, key: key23 },
  ]

  function PlaySound(url) {
    const audio = new Audio(url)
    audio.play()
  }
  return (
    <>
      <h1>Grand Piano</h1>
      <div className='keys'>
        <div className='white-keys'>
          {whiteKeys.map((k, index) => (
            <button
              key={index}
              className='white-key'
              onClick={() => PlaySound(k.keyId)}
            />
          ))}
        </div>
        <div className='black-keys'>
          {blackKeys.map((k, index) => (
            <div
              onClick={() => PlaySound(k?.key)}
              key={index}
              className='black-key'
              style={{ left: `${k.keyId * 50}px` }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
