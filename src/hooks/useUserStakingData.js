import { useAccount } from "wagmi";
import {
  useUserDetails,
  usePendingRewards,
  useTimeUntilUnlock,
} from "./useStakingContract.js";
import {
  useTokenBalance,
  useTokenAllowance,
  useTokenSymbol,
} from "./useTokenContract.js";
import {
  calculateCurrentAPR,
  canWithdraw,
  formatDuration,
} from "../utils/calculations.js";
import { formatTokenAmount, formatAPR } from "../utils/formatters.js";

/**
 * Hook that aggregates all user staking data
 */
export function useUserStakingData() {
  const { address } = useAccount();

  // Contract data
  const {
    data: userDetails,
    isLoading: isLoadingDetails,
    error: detailsError,
  } = useUserDetails(address);
  const { data: pendingRewards, isLoading: isLoadingRewards } =
    usePendingRewards(address);
  const { data: timeUntilUnlock, isLoading: isLoadingTime } =
    useTimeUntilUnlock(address);
  const { data: balance, isLoading: isLoadingBalance } =
    useTokenBalance(address);
  const { data: allowance, isLoading: isLoadingAllowance } =
    useTokenAllowance(address);
  const { data: symbol } = useTokenSymbol();

  const isLoading =
    isLoadingDetails ||
    isLoadingRewards ||
    isLoadingTime ||
    isLoadingBalance ||
    isLoadingAllowance;

  // Process the data
  const stakingData = userDetails
    ? {
        stakedAmount: userDetails[0],
        lastStakeTimestamp: Number(userDetails[1]),
        pendingRewards: userDetails[2],
        timeUntilUnlock: Number(userDetails[3]),
        canWithdraw: userDetails[4],
      }
    : null;

  const formattedData = stakingData
    ? {
        stakedAmount: stakingData.stakedAmount,
        stakedAmountFormatted: formatTokenAmount(stakingData.stakedAmount),
        lastStakeTimestamp: stakingData.lastStakeTimestamp,
        pendingRewards: pendingRewards || BigInt(0),
        pendingRewardsFormatted: formatTokenAmount(pendingRewards || BigInt(0)),
        timeUntilUnlock: timeUntilUnlock ? Number(timeUntilUnlock) : 0,
        timeUntilUnlockFormatted: formatDuration(
          timeUntilUnlock ? Number(timeUntilUnlock) : 0
        ),
        canWithdraw: stakingData.canWithdraw,
        balance: balance || BigInt(0),
        balanceFormatted: formatTokenAmount(balance || BigInt(0)),
        allowance: allowance || BigInt(0),
        hasAllowance: allowance && allowance > BigInt(0),
        tokenSymbol: symbol || "TOKEN",
      }
    : null;

  return {
    data: formattedData,
    isLoading,
    error: detailsError,
    isConnected: !!address,
  };
}
