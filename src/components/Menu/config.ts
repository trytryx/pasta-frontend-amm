import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.epicswap.app/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.epicswap.app/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.epicswap.app/pools'
  },
  {
    label: 'EpicNetworkApp',
    icon: 'MoreIcon',
    href: 'https://play.google.com/store/apps/details?id=com.epicchain.epicnetwork&hl=en_US&gl=US&referrer=utm_source%3Dgoogle%26utm_medium%3Dorganic%26utm_term%3Depic+network+google+play&pcampaignid=APPU_1_rAP-Y9P7GZ-Mxc8P3ZGN6AQ'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xAB9D0Fae6eB062F2698C2D429a1BE9185A5D4F6E',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: "Github",
        href: "https://github.com/epicnetworkapp/",
      },
    ],
  }
]

export default config
