export const getUserData = async () => {
     await new Promise((resolve, reject) => setTimeout(resolve, 200));
     return {
          id: '0x0d1712343ecdb',
          dev: 37.23,
          eth: 70.42,
          image: 'coins/eth.png',
     };
};

export const getUserTokens = async () => {
     await new Promise((resolve, reject) => setTimeout(resolve, 200));
     return [
          {
               id: 1,
               titleShort: 'ETH',
               title: 'Ether',
               amount: '2.906',
               image: 'coins/eth.png',
          },
          {
               id: 2,
               titleShort: 'ZRX',
               title: 'Ox Protocol Token',
               amount: '1326',
               image: 'coins/eth.png',
          },
          {
               id: 3,
               titleShort: 'DAI',
               title: 'Dai Stanblecoin',
               amount: '3',
               image: 'coins/eth.png',
          },
          {
               id: 4,
               titleShort: 'WBTC',
               title: 'Wrapped BtC',
               amount: '0.02831',
               image: 'coins/eth.png',
          },
          {
               id: 5,
               titleShort: 'USDT',
               title: 'Tether',
               amount: '3',
               image: 'coins/eth.png',
          },
          {
               id: 6,
               titleShort: 'WETH',
               title: 'Weth',
               amount: '0.02831',
               image: 'coins/eth.png',
          },
     ];
};
