import { useReadContract } from "wagmi";
import { STAKING_CONTRACT_ADDRESS } from "../utils/constants.js";
import { STAKING_ABI } from "../utils/abis.js";
import { formatTokenAmount, formatAPR } from "../utils/formatters.js";
import { calculateCurrentAPR } from "../utils/calculations.js";

/**
 * Hook for reading protocol-wide statistics
 */
export function useProtocolStats() {
  // Read total staked amount
  const { data: totalStaked, isLoading: isLoadingTotal } = useReadContract({
    address: STAKING_CONTRACT_ADDRESS,
    abi: STAKING_ABI,
    functionName: "totalStaked",
    query: {
      refetchInterval: 10000,
    },
  });

  // Read current reward rate
  const { data: currentRewardRate, isLoading: isLoadingRate } = useReadContract(
    {
      address: STAKING_CONTRACT_ADDRESS,
      abi: STAKING_ABI,
      functionName: "currentRewardRate",
      query: {
        refetchInterval: 10000,
      },
    }
  );

  // Read total rewards
  const { data: totalRewards, isLoading: isLoadingRewards } = useReadContract({
    address: STAKING_CONTRACT_ADDRESS,
    abi: STAKING_ABI,
    functionName: "getTotalRewards",
    query: {
      refetchInterval: 10000,
    },
  });

  const isLoading = isLoadingTotal || isLoadingRate || isLoadingRewards;

  // Calculate dynamic APR
  const dynamicAPR = totalStaked ? calculateCurrentAPR(totalStaked) : 250;

  const formattedStats = {
    totalStaked: totalStaked || BigInt(0),
    totalStakedFormatted: formatTokenAmount(totalStaked || BigInt(0)),
    currentRewardRate: currentRewardRate || BigInt(0),
    currentAPR: dynamicAPR,
    currentAPRFormatted: formatAPR(BigInt(dynamicAPR)),
    totalRewards: totalRewards || BigInt(0),
    totalRewardsFormatted: formatTokenAmount(totalRewards || BigInt(0)),
  };

  return {
    data: formattedStats,
    isLoading,
  };
}
