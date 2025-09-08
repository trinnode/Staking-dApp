import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Components
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import Header from "./components/Header.jsx";
import StakingCard from "./components/StakingCard.jsx";
import WithdrawalCard from "./components/WithdrawalCard.jsx";
import RewardsCard from "./components/RewardsCard.jsx";
import UserPositionCard from "./components/UserPositionCard.jsx";
import ProtocolStatsCard from "./components/ProtocolStatsCard.jsx";
import EmergencyWithdrawCard from "./components/EmergencyWithdrawCard.jsx";
import TransactionHistoryCard from "./components/TransactionHistoryCard.jsx";

// Styles
import "@rainbow-me/rainbowkit/styles.css";

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <UserPositionCard />
            </div>

            {/* Protocol Stats Card */}
            <div className="lg:col-span-1">
              <ProtocolStatsCard />
            </div>

            {/* Staking Card */}
            <div className="lg:col-span-1 xl:col-span-1">
              <StakingCard />
            </div>

            {/* Withdrawal Card */}
            <div className="lg:col-span-1 xl:col-span-1">
              <WithdrawalCard />
            </div>

            {/* Rewards Card */}
            <div className="lg:col-span-1 xl:col-span-1">
              <RewardsCard />
            </div>

            {/* Emergency Withdraw Card */}
            <div className="lg:col-span-2 xl:col-span-1">
              <EmergencyWithdrawCard />
            </div>

            {/* Transaction History Card */}
            <div className="lg:col-span-2 xl:col-span-3">
              <TransactionHistoryCard />
            </div>
          </div>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
