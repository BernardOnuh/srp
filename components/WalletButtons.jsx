import React from "react";
import {
  useWallet,
  WalletReadyState,
  isRedirectable,
} from "@aptos-labs/wallet-adapter-react";

const WalletButtons = () => {
  const { wallets, connect } = useWallet();

  const walletView = (wallet) => {
    const isWalletReady =
      wallet.readyState === WalletReadyState.Installed ||
      wallet.readyState === WalletReadyState.Loadable;
    const mobileSupport = wallet.deeplinkProvider;

    if (!isWalletReady && isRedirectable()) {
      if (mobileSupport) {
        return (
          <button
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4 hover:bg-blue-700`}
            disabled={false}
            key={wallet.name}
            onClick={() => connect(wallet.name)}
          >
            <>{wallet.name}</>
          </button>
        );
      }
      return (
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4 opacity-50 cursor-not-allowed`}
          disabled={true}
          key={wallet.name}
        >
          <>{wallet.name} - Desktop Only</>
        </button>
      );
    } else {
      return (
        <button
          className={`bg-blue-500  text-white font-bold py-2 px-4 rounded mr-4 ${
            isWalletReady ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isWalletReady}
          key={wallet.name}
          onClick={() => connect(wallet.name)}
        >
          <>{wallet.name}</>
        </button>
      );
    }
  };

  return <>{wallets.map((wallet) => walletView(wallet))}</>;
};

export default WalletButtons;
