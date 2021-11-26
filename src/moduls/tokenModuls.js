const tokenList = [
     {
          id: 0,
          code: '0x4a0d6a08adf312z0fsf01051bsd065',
          titleShort: 'BNB',
          title: 'Binance Coin',
          founders: 'Via Synthetix',
          image: 'coins/eth.png',
     },
     {
          id: 1,
          code: '0x1051bsd0654a0d6a08adf312z0fsf0',
          titleShort: 'BUSD',
          title: 'Binance USD',
          founders: 'Via Synthetix',
          image: 'coins/eth.png',
     },
     {
          id: 2,
          code: '0x08adf312z1051bsd0654a0d6a0fsf0',
          titleShort: 'BKRW',
          title: 'Binance KRW',
          founders: 'Via Synthetix',
          image: 'coins/eth.png',
     },
     
];

export const searchToken = async () => {
     await new Promise((resolve, reject) => setTimeout(resolve, 300));
     return tokenList;
};

export const swapTokens = async () => {
     await new Promise((resolve, reject) => setTimeout(resolve, 300));
     return true;
};

export const getTokenById = async (id) => {
     await new Promise((resolve, reject) => setTimeout(resolve, 300));
     return tokenList.filter((token) => token.id === id)[0];
};
