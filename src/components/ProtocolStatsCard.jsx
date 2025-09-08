import React from "react";
import { useAccount } from "wagmi";
import { useProtocolStats } from "../hooks/useProtocolStats.js";
import { useTransactionHistory } from "../hooks/useTransactionHistory.js";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { formatTokenAmount } from "../utils/formatters.js";
import LoadingSpinner from "./LoadingSpinner.jsx";

const ProtocolStatsCard = () => {
  const { isConnected } = useAccount();
  const { data: stats, isLoading } = useProtocolStats();
  const { totalRewardsClaimed } = useTransactionHistory();

  if (!isConnected) {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Protocol Statistics
        </h3>
        <div className="text-center py-8">
          <p className="text-gray-500">
            Connect your wallet to view protocol statistics
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Protocol Statistics
        </h3>
        <div className="text-center py-8">
          <LoadingSpinner text="Loading stats..." />
        </div>
      </div>
    );
  }

  // Calculate total rewards including claimed rewards
  const totalRewardsWithClaimed = stats?.totalRewards
    ? Number(formatTokenAmount(stats.totalRewards, false)) + totalRewardsClaimed
    : totalRewardsClaimed;

  return (
    <div className="card">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Protocol Statistics
        </h3>
        <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-amber-500 rounded-full"></div>
      </div>

      {/* Main Statistics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Staked */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gray-200 rounded-xl">
              <DollarSign className="w-6 h-6 text-gray-700" />
            </div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              TVL
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-gray-900 break-all">
              {stats?.totalStakedFormatted || "0"}
            </div>
            <div className="text-sm font-medium text-gray-600">
              Total Value Locked
            </div>
          </div>
        </div>

        {/* Current APR */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-200 rounded-xl">
              <TrendingUp className="w-6 h-6 text-green-700" />
            </div>
            <div className="text-xs font-medium text-green-600 uppercase tracking-wide">
              APR
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-green-700 break-all">
              {stats?.currentAPRFormatted || "0%"}
            </div>
            <div className="text-sm font-medium text-green-600">
              Current Annual Rate
            </div>
          </div>
        </div>

        {/* Total Rewards */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-all duration-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-amber-200 rounded-xl">
              <Users className="w-6 h-6 text-amber-700" />
            </div>
            <div className="text-xs font-medium text-amber-600 uppercase tracking-wide">
              REWARDS
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-amber-700 break-all">
              {totalRewardsWithClaimed.toFixed(6)}
            </div>
            <div className="text-sm font-medium text-amber-600">
              Total Rewards (incl. claimed)
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Configuration */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Protocol Configuration
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm font-medium text-gray-500 mb-1">
              Network
            </div>
            <div className="text-lg font-bold text-gray-900">Sepolia</div>
            <div className="text-xs text-gray-500">Testnet</div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm font-medium text-gray-500 mb-1">
              Lock Period
            </div>
            <div className="text-lg font-bold text-gray-900">90</div>
            <div className="text-xs text-gray-500">seconds</div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm font-medium text-gray-500 mb-1">
              Emergency Penalty
            </div>
            <div className="text-lg font-bold text-red-600">50%</div>
            <div className="text-xs text-gray-500">of staked amount</div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm font-medium text-gray-500 mb-1">
              Auto-refresh
            </div>
            <div className="text-lg font-bold text-green-600">10s</div>
            <div className="text-xs text-gray-500">interval</div>
          </div>
        </div>
      </div>

      {/* APR Information */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          APR Calculation Details
        </h4>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <span className="font-medium">Initial APR:</span>
            <span className="text-gray-900 font-bold">250%</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <span className="font-medium">APR Reduction:</span>
            <span className="text-gray-900 font-bold">
              0.5% per 1,000 tokens
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <span className="font-medium">Minimum APR:</span>
            <span className="text-gray-900 font-bold">10%</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="font-medium">Reward Frequency:</span>
            <span className="text-gray-900 font-bold">Every 10 seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolStatsCard;
