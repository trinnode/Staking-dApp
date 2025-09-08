# 🚀 Web3 Staking dApp

> **A Professional Decentralized Staking Application**  
> Built with React, Wagmi, Viem, and RainbowKit for Sepolia Testnet

---

## 📖 Table of Contents

- [🌟 Overview](#-overview)
- [👤 For Users](#-for-users)
- [👨‍💻 For Developers](#-for-developers)
- [🏗️ Architecture](#️-architecture)
- [🚀 Getting Started](#-getting-started)
- [📱 Usage Guide](#-usage-guide)
- [🔧 Technical Implementation](#-technical-implementation)
- [⚡ Protocol Details](#-protocol-details)
- [🛡️ Security Features](#️-security-features)
- [📊 Components Overview](#-components-overview)
- [🔗 Smart Contracts](#-smart-contracts)
- [🎨 UI/UX Features](#-uiux-features)
- [📋 Transaction History](#-transaction-history)
- [⚠️ Emergency Features](#️-emergency-features)
- [🧪 Testing](#-testing)
- [📦 Build & Deploy](#-build--deploy)
- [🤝 Contributing](#-contributing)

---

## 🌟 Overview

This is a **complete, production-ready Web3 staking application** that demonstrates modern decentralized finance (DeFi) development practices. The application allows users to stake tokens, earn rewards, and manage their positions through an intuitive web interface.

### **What This Project Demonstrates:**
- ✅ **Modern Web3 Stack**: React 18 + Wagmi v2 + Viem + RainbowKit
- ✅ **Professional UI/UX**: Clean, responsive design with excellent user experience
- ✅ **Complete DeFi Integration**: Full staking protocol implementation
- ✅ **Real-time Data**: Live updates and interactive feedback
- ✅ **Production Quality**: Error handling, loading states, and edge cases

---

## 👤 For Users

### **What Can You Do?**

#### **💰 Stake Your Tokens**
- Connect your Web3 wallet (MetaMask, WalletConnect, etc.)
- Approve and stake your tokens to start earning rewards
- Monitor your staking position in real-time

#### **🎁 Earn Rewards**
- **Initial APR**: 250% (reduces as more tokens are staked)
- **Reward Frequency**: Every 10 seconds
- **Dynamic Rate**: APR decreases by 0.5% per 1,000 tokens staked
- **Minimum APR**: 10% (never goes below this)

#### **💸 Withdraw Your Funds**
- **Normal Withdrawal**: After 90-second lock period (no penalty)
- **Emergency Withdrawal**: Immediate access with 50% penalty
- **Flexible Amounts**: Withdraw any amount you want

#### **📊 Track Everything**
- Real-time balance and rewards tracking
- Transaction history with all your activities
- Protocol statistics and live APR rates
- Time remaining until unlock

### **How to Get Started (User Guide):**

1. **🌐 Get Testnet Setup**
   - Add Sepolia Testnet to your wallet
   - Get Sepolia ETH from a faucet for gas fees
   - Get test tokens from the project

2. **🔗 Connect Your Wallet**
   - Visit the application
   - Click "Connect Wallet" button
   - Choose your preferred wallet
   - Approve the connection

3. **💰 Start Staking**
   - Enter the amount you want to stake
   - Click "Approve" (one-time permission)
   - Click "Stake" to deposit your tokens
   - Wait for transaction confirmation

4. **📈 Monitor & Manage**
   - Watch your rewards grow every 10 seconds
   - Claim rewards whenever you want
   - Check transaction history
   - Plan your withdrawal strategy

---

## 👨‍💻 For Developers

### **Tech Stack & Architecture**

#### **Frontend Framework**
```javascript
React 18.3.1          // Modern React with hooks and concurrent features
Vite 6.0.1           // Lightning-fast build tool and dev server
JavaScript (ES2022)   // Modern JavaScript without TypeScript complexity
```

#### **Web3 Integration**
```javascript
Wagmi 2.12.17        // React hooks for Ethereum (latest version)
Viem 2.21.49         // TypeScript interface for Ethereum
RainbowKit 2.1.7     // Beautiful wallet connection UI
```

#### **Styling & UI**
```javascript
Tailwind CSS 3.4.14  // Utility-first CSS framework
Lucide React 0.454.0 // Beautiful icon library
React Hot Toast 2.4.1 // Toast notifications
```

#### **State Management**
```javascript
TanStack Query 5.59.16 // Server state management
React Context API       // Global state for Web3 connections
localStorage           // Transaction history persistence
```

### **Project Structure**
```
src/
├── components/           # React components
│   ├── Header.jsx           # Wallet connection header
│   ├── StakingCard.jsx      # Token staking interface
│   ├── WithdrawalCard.jsx   # Withdrawal management
│   ├── RewardsCard.jsx      # Rewards claiming
│   ├── UserPositionCard.jsx # User's staking position
│   ├── ProtocolStatsCard.jsx # Protocol statistics
│   ├── EmergencyWithdrawCard.jsx # Emergency withdrawal
│   ├── TransactionHistoryCard.jsx # Transaction history
│   ├── LoadingSpinner.jsx   # Loading states
│   └── ErrorBoundary.jsx    # Error handling
├── hooks/                # Custom React hooks
│   ├── useStakingContract.js    # Staking contract operations
│   ├── useTokenContract.js      # ERC20 token operations
│   ├── useUserStakingData.js    # Aggregated user data
│   ├── useProtocolStats.js      # Protocol statistics
│   └── useTransactionHistory.js # Transaction tracking
├── utils/                # Utility functions
│   ├── constants.js         # Contract addresses and config
│   ├── abis.js             # Contract ABIs
│   ├── formatters.js       # Data formatting utilities
│   ├── calculations.js     # Mathematical calculations
│   ├── wagmi.js           # Wagmi configuration
│   └── rainbowkit.js      # RainbowKit configuration
├── types/                # Type definitions
│   ├── contracts.js        # Contract type definitions
│   └── user.js            # User data types
├── assets/               # Static assets
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

### **Key Development Patterns**

#### **Custom Hooks Pattern**
```javascript
// Example: useStakingContract.js
export function useStakingContract() {
  const { writeContract } = useWriteContract();
  
  const stake = async (amount) => {
    return writeContract({
      address: STAKING_CONTRACT_ADDRESS,
      abi: STAKING_ABI,
      functionName: 'stake',
      args: [amount],
    });
  };
  
  return { stake, isPending, error };
}
```

#### **Data Aggregation Pattern**
```javascript
// Example: useUserStakingData.js
export function useUserStakingData() {
  const userDetails = useUserDetails(address);
  const pendingRewards = usePendingRewards(address);
  const tokenBalance = useTokenBalance(address);
  
  // Combine and format all user data
  return {
    data: formattedData,
    isLoading: isLoadingAny,
    error: anyError
  };
}
```

#### **Error Boundary Pattern**
```javascript
// Graceful error handling throughout the app
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

---

## 🏗️ Architecture

### **Component Hierarchy**
```
App
├── ErrorBoundary
├── Header (Wallet Connection)
└── Main Grid Layout
    ├── UserPositionCard (User's staking data)
    ├── ProtocolStatsCard (Protocol statistics)
    ├── StakingCard (Stake tokens)
    ├── WithdrawalCard (Withdraw tokens)
    ├── RewardsCard (Claim rewards)
    ├── EmergencyWithdrawCard (Emergency withdrawal)
    └── TransactionHistoryCard (Transaction history)
```

### **Data Flow**
```
1. Wallet Connection (RainbowKit) 
   ↓
2. Contract Calls (Wagmi + Viem)
   ↓
3. Data Processing (Custom Hooks)
   ↓
4. UI Updates (React Components)
   ↓
5. User Feedback (Toast Notifications)
```

---

## 🚀 Getting Started

### **Prerequisites**
- **Node.js 18+** and npm
- **Web3 Wallet** (MetaMask recommended)
- **Sepolia Testnet ETH** for gas fees
- **Test tokens** for staking

### **Quick Setup**

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd web3-staking-dapp
   npm install
   ```

2. **Configure WalletConnect** (Optional)
   ```javascript
   // src/utils/rainbowkit.js
   const projectId = 'your-walletconnect-project-id';
   ```

3. **Start Development**
   ```bash
   npm run dev
   # Visit http://localhost:5173
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm run preview
   ```

### **Environment Setup**
No environment variables required! The app uses hardcoded Sepolia testnet configurations for simplicity.

---

## 📱 Usage Guide

### **1. Wallet Connection**
- Click "Connect Wallet" in the header
- Choose your preferred wallet provider
- Approve the connection request
- Switch to Sepolia Testnet if prompted

### **2. Staking Process**
1. **Check Your Balance**: View available tokens in UserPositionCard
2. **Enter Amount**: Type amount to stake in StakingCard
3. **Approve Tokens**: First-time approval for contract access
4. **Stake Tokens**: Confirm staking transaction
5. **Monitor Position**: Watch real-time updates

### **3. Rewards Management**
- **View Pending Rewards**: Updated every 10 seconds
- **Claim Anytime**: No restrictions on claiming
- **Compound Strategy**: Claim and restake for higher returns

### **4. Withdrawal Options**
- **Normal Withdrawal**: Wait for 90-second lock period
- **Emergency Withdrawal**: Immediate with 50% penalty
- **Partial Withdrawal**: Withdraw any amount you choose

---

## 🔧 Technical Implementation

### **Contract Integration**

#### **Staking Contract Functions**
```javascript
// Core staking operations
stake(uint256 amount)           // Stake tokens
withdraw(uint256 amount)        // Withdraw after lock period
claimRewards()                  // Claim pending rewards
emergencyWithdraw()             // Emergency withdrawal with penalty

// View functions
getUserDetails(address user)     // Get user's staking details
getPendingRewards(address user) // Calculate pending rewards
getTimeUntilUnlock(address user) // Time until withdrawal allowed
getTotalStaked()                // Total tokens staked in protocol
getCurrentRewardRate()          // Current APR rate
```

#### **Token Contract Functions**
```javascript
// ERC20 standard functions
balanceOf(address owner)        // Get token balance
approve(address spender, uint256 amount) // Approve token spending
allowance(address owner, address spender) // Check spending allowance
symbol()                        // Get token symbol
decimals()                      // Get token decimals
```

### **Real-time Data Updates**
```javascript
// Auto-refresh every 10 seconds
const { data, isLoading } = useQuery({
  queryKey: ['userStakingData', address],
  queryFn: fetchUserData,
  refetchInterval: 10000,
  enabled: !!address
});
```

### **Error Handling Strategy**
```javascript
// Comprehensive error handling
try {
  await stakingOperation();
  toast.success('Transaction successful!');
} catch (error) {
  if (error.code === 4001) {
    toast.error('Transaction cancelled by user');
  } else if (error.message.includes('insufficient funds')) {
    toast.error('Insufficient funds for transaction');
  } else {
    toast.error('Transaction failed. Please try again.');
  }
  console.error('Detailed error:', error);
}
```

---

## ⚡ Protocol Details

### **Staking Mechanics**
- **Lock Period**: 90 seconds (configurable)
- **Minimum Stake**: No minimum required
- **Maximum Stake**: Unlimited
- **Reward Calculation**: Continuous, updated every 10 seconds

### **APR Calculation**
```javascript
Initial APR: 250%
APR Reduction: 0.5% per 1,000 tokens staked
Minimum APR: 10%
Formula: max(250% - (totalStaked / 1000 * 0.5%), 10%)
```

### **Emergency Withdrawal**
- **Penalty**: 50% of staked amount
- **Processing**: Immediate (no lock period)
- **Use Case**: Emergency situations only

### **Reward Distribution**
- **Frequency**: Every 10 seconds
- **Calculation**: Pro-rata based on staked amount and time
- **Claiming**: No restrictions or fees

---

## 🛡️ Security Features

### **Input Validation**
- All user inputs validated before contract calls
- Amount limits checked against available balances
- Transaction parameters sanitized

### **Error Prevention**
- Approval flow prevents failed transactions
- Balance checks before operations
- Clear user warnings for risky actions

### **User Protection**
- Emergency withdrawal warnings with penalty calculations
- Transaction confirmations for all operations
- Clear feedback on transaction status

### **Contract Security**
- Read-only operations for data fetching
- Secure contract interaction patterns
- No direct ETH handling (tokens only)

---

## 📊 Components Overview

### **StakingCard**
- Token amount input with validation
- Approval flow for first-time users
- Balance checking and display
- Transaction status feedback

### **WithdrawalCard**
- Lock period countdown timer
- Available withdrawal amount display
- Conditional rendering based on lock status
- Emergency withdrawal option link

### **RewardsCard**
- Real-time pending rewards display
- One-click claiming functionality
- Rewards history tracking
- Compound staking suggestion

### **UserPositionCard**
- Complete staking position overview
- Lock period status and countdown
- Total staked amount and value
- Current APR display

### **ProtocolStatsCard**
- Total Value Locked (TVL) display
- Current protocol APR
- Total rewards distributed
- Protocol configuration details

### **EmergencyWithdrawCard**
- Clear penalty warnings
- Calculation breakdown display
- Confirmation flow for safety
- Alternative suggestion (wait for unlock)

### **TransactionHistoryCard**
- Filterable transaction list
- Transaction type categorization
- Etherscan links for verification
- Local storage persistence

---

## 🔗 Smart Contracts

### **Deployed Addresses (Sepolia Testnet)**
```javascript
Staking Contract: 0xb222356dc0e5b14ddB54b1caa21C248Cb969bE65
Token Contract:   0x28EEDebFE67Efa43e753A6E7DdB852186424283C
Network:          Sepolia Testnet (Chain ID: 11155111)
```

### **Contract Verification**
Both contracts are verified on Sepolia Etherscan for transparency and security auditing.

### **Gas Optimization**
- Batch operations where possible
- Efficient data structures in contracts
- Minimal external calls

---

## 🎨 UI/UX Features

### **Design Principles**
- **Minimalist**: Clean, uncluttered interface
- **Neutral Colors**: Professional gray-scale palette (no blue)
- **Responsive**: Mobile-first design approach
- **Accessible**: High contrast and clear typography

### **Interactive Elements**
- Hover effects on all interactive components
- Loading states for all async operations
- Progressive disclosure of complex information
- Clear visual feedback for all actions

### **User Experience**
- One-click operations where possible
- Clear error messages and recovery suggestions
- Contextual help and explanations
- Real-time data updates

---

## 📋 Transaction History

### **Features**
- **Session Persistence**: Tracks all transactions during session
- **Local Storage**: Saves history per wallet address
- **Filtering**: View by transaction type (stake, withdraw, claim, emergency)
- **Details**: Amount, timestamp, transaction hash, type
- **External Links**: Direct links to Etherscan for verification

### **Data Structure**
```javascript
{
  id: 'unique-id',
  type: 'stake|withdraw|claim|emergency',
  amount: 'token-amount',
  hash: 'transaction-hash',
  timestamp: 'unix-timestamp',
  tokenSymbol: 'TOKEN',
  penalty?: 'penalty-amount' // For emergency withdrawals
}
```

---

## ⚠️ Emergency Features

### **Emergency Withdrawal**
- **Purpose**: Immediate access to funds in emergencies
- **Penalty**: 50% of staked amount
- **Warning System**: Multiple confirmations required
- **Alternative Suggestion**: Wait for normal unlock period

### **Error Recovery**
- Graceful handling of failed transactions
- Clear error messages with suggested actions
- Automatic retry mechanisms where appropriate
- Fallback UI states for network issues

---

## 🧪 Testing

### **Development Testing**
```bash
# Run development server
npm run dev

# Build and test production build
npm run build
npm run preview

# Lint code
npm run lint
```

### **Manual Testing Checklist**
- [ ] Wallet connection/disconnection
- [ ] Token approval flow
- [ ] Staking with various amounts
- [ ] Reward claiming
- [ ] Normal withdrawal after lock period
- [ ] Emergency withdrawal with penalty
- [ ] Transaction history persistence
- [ ] Real-time data updates
- [ ] Mobile responsiveness
- [ ] Error handling scenarios

---

## 📦 Build & Deploy

### **Production Build**
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview

# Build artifacts in 'dist' folder
```

### **Deployment Options**
- **Vercel**: Zero-config deployment with domain
- **Netlify**: Drag-and-drop deployment from dist folder  
- **GitHub Pages**: Static hosting with GitHub Actions
- **IPFS**: Decentralized hosting option

### **Build Optimization**
- Tree-shaking for minimal bundle size
- Code splitting for faster loading
- Asset optimization and compression
- Modern browser targeting

---

## 🤝 Contributing

### **Development Workflow**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### **Code Standards**
- ESLint configuration enforced
- Consistent formatting with Prettier
- Component-based architecture
- Custom hooks for reusable logic
- Clear naming conventions

### **Areas for Contribution**
- Additional wallet integrations
- Enhanced error handling
- Performance optimizations
- UI/UX improvements
- Documentation updates

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Wagmi Team**: Excellent React hooks for Ethereum
- **RainbowKit Team**: Beautiful wallet connection UI
- **Viem Team**: Modern TypeScript interface for Ethereum
- **Tailwind CSS**: Utility-first CSS framework
- **React Team**: The foundation of modern UI development

---

**Built with ❤️ for the Web3 Community**

> *This project demonstrates production-ready Web3 development practices and serves as a comprehensive example for building decentralized applications with modern tooling.*
