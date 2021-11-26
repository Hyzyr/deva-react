export const getWalletsList = async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 200));
    return [
        {
            id: 1,
            title: 'WalletConnect',
            image: 'coins/dg.svg',
        },
        {
            id: 2,
            title: 'DeGe Wallet',
            image: 'coins/dg.svg',
        },
        {
            id: 3,
            title: 'Coinbase Wallet',
            image: 'coins/dg.svg',
        },
        {
            id: 4,
            title: 'Portis',
            image: 'coins/dg.svg',
        },
    ];
}