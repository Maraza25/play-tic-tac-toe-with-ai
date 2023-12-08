import { FullPageSections, Fullpage, FullpageNavigation, FullpageSection } from '@ap.cx/react-fullpage'
import React, { useEffect, useState } from 'react'

function index() {
  const [username, setUsername] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [boardSize, setBoardSize] = useState(3);

  useEffect(() => {
    setUsername(localStorage.getItem('username') ?? '');
    setBackgroundColor(localStorage.getItem('backgroundColor') ?? '');
    const size = parseInt(localStorage.getItem("boardSize"));
    console.log(size);

    setBoardSize(size || 3);

  })

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    localStorage.setItem('username', event.target.value);
  };

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
    localStorage.setItem('backgroundColor', event.target.value);
  };

  const handleBoardSizeChange = (val) => {
    setBoardSize(val);
    console.log(val * val);
    localStorage.setItem('boardSize', String(val));

  }
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <div className="flex flex-col items-center justify-center h-screen bg-slate-900 relative">
            <div id="myDiv" className="p-8 text-center">
              <img src="/img1.svg" alt="Görsel" className="mx-auto mb-4" />
              <h1 className="text-white font-extrabold scale-150 mb-2">I Got Great News For You</h1>
              <p className="text-white font-normal scale-150 w-2/3 mx-auto mt-10">You can play "Tic Tac Toe," one of the oldest games in the world, with the newest technology in the world, artificial intelligence!</p>
            </div>

            <img src='/dawn.svg' className='w-10 h-auto animate-bounce absolute bottom-10'></img>
          </div>



        </FullpageSection>


        <FullpageSection style={{ display: 'flex' }}>
          <div className='w-1/2 h-full bg-slate-700'>
            <div className='flex flex-col items-center justify-center h-full mt-10'>
              <label htmlFor='username' className='mb-2 font-bold text-white'>
                Enter Username:
              </label>
              <input
                type='text'
                id='username'
                value={username}
                onChange={handleUsernameChange}
                placeholder='Enter username'
                className='mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
              />
              <label htmlFor='backgroundColor' className='mb-2 font-bold text-white'>
                Select Background Color:
              </label>
              <input
                type='color'
                id='backgroundColor'
                value={backgroundColor}
                onChange={handleColorChange}
                className='w-10 h-8 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
              />
              <div className='flex  '>
                <svg onClick={() => {
                  handleBoardSizeChange(3);
                }} className='w-14 h-auto m-5 hover:cursor-pointer' version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill={backgroundColor} stroke="none">
                    <path d="M115 5061 c-11 -5 -29 -19 -40 -31 -20 -22 -20 -36 -20 -677 l0 -655
33 -29 32 -29 641 0 c695 0 682 -1 707 55 9 19 12 191 12 665 l0 640 -29 32
-29 33 -644 2 c-354 1 -652 -2 -663 -6z"/>
                    <path d="M1898 5054 c-15 -8 -32 -23 -38 -34 -6 -12 -10 -244 -10 -669 l0
-650 24 -28 24 -28 662 0 662 0 24 28 24 28 0 650 c0 427 -4 657 -10 670 -27
49 -24 49 -702 49 -539 -1 -637 -3 -660 -16z"/>
                    <path d="M3704 5060 c-12 -4 -31 -21 -43 -36 -21 -27 -21 -28 -21 -665 0 -473
3 -645 12 -664 25 -56 12 -55 707 -55 l641 0 32 29 33 29 0 656 0 656 -28 27
-27 28 -643 2 c-353 1 -652 -2 -663 -7z"/>
                    <path d="M97 3259 c-47 -27 -47 -27 -47 -699 0 -676 0 -673 49 -700 13 -6 243
-10 670 -10 l650 0 28 24 28 24 3 657 2 656 -29 30 -29 29 -654 0 c-425 -1
-659 -4 -671 -11z"/>
                    <path d="M1877 3242 l-27 -28 0 -654 0 -654 27 -28 27 -28 656 0 656 0 27 28
27 28 0 655 0 655 -28 27 -28 27 -655 0 -655 0 -27 -28z"/>
                    <path d="M3669 3241 l-29 -29 0 -652 0 -652 29 -29 29 -29 652 0 c428 0 658 4
671 10 49 27 49 24 49 700 0 676 0 673 -49 700 -13 6 -243 10 -671 10 l-652 0
-29 -29z"/>
                    <path d="M88 1451 l-33 -29 0 -656 0 -656 28 -27 27 -28 656 0 656 0 29 33 29
32 0 641 c0 695 1 682 -55 707 -19 9 -191 12 -665 12 l-640 0 -32 -29z"/>
                    <path d="M1879 1451 l-29 -29 0 -652 c0 -428 4 -658 10 -671 27 -49 24 -49
700 -49 676 0 673 0 700 49 6 13 10 243 10 671 l0 652 -29 29 -29 29 -652 0
-652 0 -29 -29z"/>
                    <path d="M3691 1466 c-51 -28 -50 -15 -51 -703 l0 -643 29 -32 29 -33 656 0
656 0 27 28 28 27 0 656 0 656 -33 29 -32 29 -643 0 c-514 -1 -647 -3 -666
-14z"/>
                  </g>
                </svg>
                <svg onClick={() => {
                  handleBoardSizeChange(4)
                }} className='w-14 h-auto m-5 hover:cursor-pointer' version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill={backgroundColor} stroke="none">
                    <path d="M115 5061 c-11 -5 -29 -19 -40 -31 -19 -21 -20 -38 -23 -439 -3 -371
-1 -419 13 -447 9 -18 28 -37 41 -43 17 -7 157 -11 445 -11 l421 0 29 29 29
29 0 421 c0 304 -3 427 -12 446 -25 54 -32 55 -475 54 -224 0 -417 -4 -428 -8z"/>
                    <path d="M1455 5058 c-56 -30 -55 -17 -55 -481 l0 -429 29 -29 29 -29 426 0
426 0 32 29 33 29 3 419 c2 404 2 419 -18 451 -11 18 -32 37 -46 42 -37 14
-833 13 -859 -2z"/>
                    <path d="M2803 5060 c-13 -5 -32 -24 -43 -42 -20 -32 -20 -47 -18 -451 l3
-419 33 -29 32 -29 426 0 426 0 29 29 29 29 0 429 c0 466 1 452 -57 482 -27
14 -826 14 -860 1z"/>
                    <path d="M4138 5053 c-14 -9 -31 -27 -37 -40 -7 -16 -11 -166 -11 -444 l0
-421 29 -29 29 -29 421 0 c288 0 428 4 445 11 13 6 32 25 41 43 14 28 16 76
13 448 l-3 418 -28 27 -27 28 -423 2 c-380 3 -425 1 -449 -14z"/>
                    <path d="M94 3702 c-12 -9 -27 -27 -33 -39 -14 -28 -16 -820 -1 -857 5 -14 24
-35 42 -46 32 -20 47 -20 451 -18 l419 3 29 33 29 32 0 426 0 426 -29 29 -29
29 -429 0 c-390 0 -430 -2 -449 -18z"/>
                    <path d="M1429 3691 l-29 -29 0 -429 c0 -422 0 -430 21 -452 11 -12 32 -26 46
-32 14 -5 199 -9 424 -9 439 0 443 1 474 60 13 24 15 91 15 429 0 225 -4 410
-9 424 -6 14 -20 35 -32 46 -22 21 -30 21 -452 21 l-429 0 -29 -29z"/>
                    <path d="M2781 3699 c-12 -11 -26 -32 -32 -46 -5 -14 -9 -199 -9 -424 0 -338
2 -405 15 -429 31 -59 35 -60 475 -60 437 0 454 2 479 56 8 17 11 152 11 445
l0 421 -29 29 -29 29 -429 0 c-422 0 -430 0 -452 -21z"/>
                    <path d="M4119 3691 l-29 -29 0 -426 0 -426 29 -32 29 -33 419 -3 c404 -2 419
-2 451 18 18 11 37 32 42 46 15 37 13 829 -1 857 -30 58 -16 57 -482 57 l-429
0 -29 -29z"/>
                    <path d="M102 2360 c-18 -11 -37 -32 -42 -46 -15 -37 -13 -829 1 -857 30 -58
16 -57 482 -57 l429 0 29 29 29 29 0 426 0 426 -29 32 -29 33 -419 3 c-404 2
-419 2 -451 -18z"/>
                    <path d="M1456 2365 c-57 -30 -55 -15 -56 -478 l0 -429 29 -29 29 -29 421 0
c293 0 428 3 445 11 54 25 56 42 56 479 0 440 -1 444 -60 475 -43 22 -821 22
-864 0z"/>
                    <path d="M2798 2364 c-57 -31 -58 -36 -58 -474 0 -437 2 -454 56 -479 17 -8
152 -11 445 -11 l421 0 29 29 29 29 0 421 c0 293 -3 428 -11 445 -25 54 -42
56 -481 56 -337 -1 -407 -3 -430 -16z"/>
                    <path d="M4154 2370 c-12 -4 -31 -21 -43 -36 -21 -26 -21 -33 -21 -451 l0
-425 29 -29 29 -29 430 0 429 0 26 24 c14 13 29 35 32 48 3 12 4 209 3 435
l-3 413 -28 27 -27 28 -418 2 c-229 1 -427 -2 -438 -7z"/>
                    <path d="M103 1018 c-11 -5 -28 -24 -38 -42 -14 -28 -16 -75 -13 -448 l3 -418
28 -27 27 -28 417 -3 c302 -2 425 1 446 9 56 24 57 29 57 489 l0 422 -29 29
-29 29 -424 -1 c-271 0 -431 -4 -445 -11z"/>
                    <path d="M1429 1001 l-29 -29 0 -429 c0 -466 -1 -452 57 -482 28 -14 820 -16
857 -1 14 5 35 24 46 42 20 32 20 47 18 451 l-3 419 -33 29 -32 29 -426 0
-426 0 -29 -29z"/>
                    <path d="M2778 1001 l-33 -29 -3 -419 c-2 -404 -2 -419 18 -451 11 -18 32 -37
46 -42 37 -15 829 -13 857 1 58 30 57 16 57 482 l0 429 -29 29 -29 29 -426 0
-426 0 -32 -29z"/>
                    <path d="M4119 1001 l-29 -29 0 -421 c0 -288 4 -428 11 -445 6 -13 25 -32 43
-41 28 -14 76 -16 448 -13 l418 3 27 28 28 27 3 418 c3 372 1 420 -13 448 -9
18 -28 37 -41 43 -17 7 -157 11 -445 11 l-421 0 -29 -29z"/>
                  </g>
                </svg>
                <svg onClick={() => {
                  handleBoardSizeChange(5)
                }} className="w-14 h-auto m-5 hover:cursor-pointer" version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill={backgroundColor} stroke="none">
                    <path d="M115 5061 c-11 -5 -29 -19 -40 -31 -19 -21 -20 -38 -23 -298 -2 -153
0 -287 3 -300 3 -13 18 -35 32 -48 l26 -24 294 0 295 0 29 29 29 29 0 294 c0
317 -1 318 -57 347 -26 13 -556 15 -588 2z"/>
                    <path d="M1178 5053 c-14 -9 -31 -27 -37 -40 -7 -15 -11 -127 -11 -309 l0
-286 29 -29 29 -29 294 0 c262 0 295 2 314 18 42 33 44 50 44 341 l0 281 -29
32 -29 33 -289 2 c-255 3 -291 1 -315 -14z"/>
                    <path d="M2253 5050 c-50 -30 -55 -62 -51 -363 l3 -269 33 -29 32 -29 290 0
290 0 32 29 33 29 3 269 c4 301 -1 333 -51 363 -30 19 -52 20 -307 20 -255 0
-277 -1 -307 -20z"/>
                    <path d="M3344 5060 c-12 -4 -31 -21 -43 -36 -20 -26 -21 -36 -21 -306 0 -290
2 -307 44 -340 19 -16 52 -18 314 -18 l294 0 29 29 29 29 0 286 c0 200 -4 293
-12 311 -23 52 -43 55 -340 54 -150 0 -283 -4 -294 -9z"/>
                    <path d="M4415 5059 c-55 -31 -55 -31 -55 -347 l0 -294 29 -29 29 -29 295 0
294 0 26 24 c14 13 29 35 32 48 3 13 5 148 3 300 l-3 278 -28 27 -27 28 -288
2 c-198 2 -293 -1 -307 -8z"/>
                    <path d="M103 3978 c-11 -5 -29 -24 -38 -42 -14 -27 -16 -65 -13 -314 l3 -284
33 -29 32 -29 281 0 c291 0 308 2 341 44 16 19 18 52 18 314 l0 294 -29 29
-29 29 -289 -1 c-178 0 -296 -4 -310 -11z"/>
                    <path d="M1159 3961 l-29 -29 0 -287 c0 -310 3 -329 55 -353 18 -8 110 -12
306 -12 l281 0 34 34 34 34 0 281 c0 196 -4 288 -12 306 -24 52 -43 55 -353
55 l-287 0 -29 -29z"/>
                    <path d="M2238 3961 l-33 -29 -3 -279 c-2 -250 -1 -281 15 -313 30 -58 40 -60
343 -60 303 0 313 2 343 60 16 32 17 63 15 313 l-3 279 -33 29 -32 29 -290 0
-290 0 -32 -29z"/>
                    <path d="M3331 3976 c-48 -27 -50 -42 -51 -344 l0 -284 34 -34 34 -34 281 0
c306 0 326 3 349 55 8 18 12 111 12 311 l0 286 -29 29 -29 29 -289 0 c-220 -1
-294 -4 -312 -14z"/>
                    <path d="M4389 3961 l-29 -29 0 -295 0 -294 24 -26 c13 -14 35 -29 48 -32 13
-3 148 -5 300 -3 l278 3 27 28 28 27 3 283 c4 308 0 331 -54 356 -17 7 -121
11 -310 11 l-286 0 -29 -29z"/>
                    <path d="M113 2906 c-60 -27 -63 -45 -63 -348 0 -253 2 -275 20 -305 30 -50
62 -55 363 -51 l269 3 29 33 29 32 0 290 0 290 -29 32 -29 33 -279 2 c-222 2
-284 0 -310 -11z"/>
                    <path d="M1203 2913 c-12 -2 -34 -18 -48 -34 l-25 -31 0 -289 0 -289 29 -32
29 -33 279 -3 c250 -2 281 -1 313 15 58 30 60 40 60 343 0 303 -2 313 -60 342
-31 16 -66 18 -295 17 -143 -1 -270 -4 -282 -6z"/>
                    <path d="M2273 2909 c-66 -19 -68 -31 -68 -345 0 -218 3 -287 14 -306 26 -50
43 -53 341 -53 298 0 315 3 341 53 20 36 20 567 1 603 -28 52 -37 54 -327 56
-151 1 -284 -2 -302 -8z"/>
                    <path d="M3340 2903 c-58 -30 -60 -40 -60 -343 0 -303 2 -313 60 -342 31 -16
67 -18 293 -18 276 0 308 5 341 51 14 20 16 61 16 311 l0 288 -29 32 -29 33
-279 3 c-250 2 -281 1 -313 -15z"/>
                    <path d="M4433 2913 c-12 -2 -34 -18 -48 -34 l-25 -31 0 -289 0 -289 29 -32
29 -33 269 -3 c301 -4 333 1 363 51 18 30 20 52 20 305 0 228 -3 278 -16 303
-28 54 -55 59 -341 58 -142 -1 -268 -4 -280 -6z"/>
                    <path d="M88 1811 l-33 -29 -3 -284 c-4 -309 0 -332 54 -357 17 -7 121 -11
310 -11 l286 0 29 29 29 29 0 294 c0 262 -2 295 -18 314 -33 42 -50 44 -341
44 l-281 0 -32 -29z"/>
                    <path d="M1181 1826 c-48 -27 -50 -41 -51 -349 l0 -289 29 -29 29 -29 287 0
c310 0 329 3 353 55 8 18 12 110 12 306 l0 281 -34 34 -34 34 -283 0 c-217 -1
-290 -4 -308 -14z"/>
                    <path d="M2260 1827 c-14 -7 -33 -28 -43 -47 -16 -32 -17 -63 -15 -313 l3
-279 33 -29 32 -29 288 0 c250 0 291 2 311 16 46 33 51 65 51 341 0 282 -5
313 -60 340 -36 18 -564 18 -600 0z"/>
                    <path d="M3314 1806 l-34 -34 0 -281 c0 -306 3 -326 55 -349 18 -8 111 -12
311 -12 l286 0 29 29 29 29 0 286 c0 200 -4 293 -12 311 -23 52 -43 55 -349
55 l-281 0 -34 -34z"/>
                    <path d="M4415 1828 c-54 -30 -55 -30 -55 -346 l0 -294 29 -29 29 -29 286 0
c189 0 293 4 310 11 54 25 58 48 54 357 l-3 284 -33 29 -32 29 -283 0 c-186
-1 -289 -4 -302 -12z"/>
                    <path d="M87 736 c-14 -13 -29 -35 -32 -48 -3 -13 -5 -148 -3 -300 l3 -278 28
-27 27 -28 278 -3 c152 -2 287 0 300 3 13 3 35 18 48 32 l24 26 0 294 0 295
-29 29 -29 29 -295 0 -294 0 -26 -24z"/>
                    <path d="M1159 731 l-29 -29 0 -286 c0 -189 4 -293 11 -310 25 -54 48 -58 356
-54 l283 3 27 28 28 27 3 278 c2 152 0 287 -3 300 -3 13 -18 35 -32 48 l-26
24 -294 0 -295 0 -29 -29z"/>
                    <path d="M2238 731 l-33 -29 -3 -269 c-4 -301 1 -333 51 -363 30 -19 52 -20
307 -20 255 0 277 1 307 20 50 30 55 62 51 363 l-3 269 -33 29 -32 29 -290 0
-290 0 -32 -29z"/>
                    <path d="M3324 742 c-42 -33 -44 -50 -44 -341 l0 -281 29 -32 29 -33 283 -3
c201 -2 291 1 311 9 55 23 58 41 58 354 l0 287 -29 29 -29 29 -294 0 c-262 0
-295 -2 -314 -18z"/>
                    <path d="M4389 731 l-29 -29 0 -295 0 -294 24 -26 c13 -14 35 -29 48 -32 13
-3 148 -5 300 -3 l278 3 27 28 28 27 3 278 c2 152 0 287 -3 300 -3 13 -18 35
-32 48 l-26 24 -294 0 -295 0 -29 -29z"/>
                  </g>
                </svg>



              </div>
              <div className=' h-20 flex items-end'>
              <button onClick={() => {
                window.location.href = '/play'
              }} className="  bg-slate-800 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded animate-bounce">
                Let's Play
              </button>
              </div>
            </div>
          </div>
          <div className='w-1/2 h-full bg-slate-800'>
            <div className='flex flex-col items-center justify-center h-full'>
              <div>
                {[...Array(boardSize)].map((_, rowIndex) => (
                  <div key={rowIndex} className='flex flex-row'>
                    {[...Array(boardSize)].map((_, colIndex) => (
                      <div key={colIndex} className='w-20 h-20 m-2 ' style={{ backgroundColor, borderRadius: '10px' }}></div>
                    ))}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
}

export default index