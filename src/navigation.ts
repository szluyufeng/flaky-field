import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '关于我们',
      href: getPermalink('/about'),
    },
    {
      text: '核心服务',
      links: [
        {
          text: '服务概览',
          href: getPermalink('/services'),
        },
        {
          text: 'TikTok实训营',
          href: getPermalink('/#training'),
        },
        {
          text: '精品课程',
          href: getPermalink('/#courses'),
        },
        {
          text: '企业官网建站',
          href: getPermalink('/landing/enterprise-website'),
        },
      ],
    },
    {
      text: '成功案例',
      href: getPermalink('/#cases'),
    },
    {
      text: '新闻',
      href: getBlogPermalink(),
    },
    {
      text: '联系我们',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: '免费咨询', href: getPermalink('/contact'), icon: 'tabler:message-circle' }],
};

export const footerData = {
  links: [
    {
      title: '核心服务',
      links: [
        { text: 'TikTok实训营', href: '/#training' },
        { text: '精品课程', href: '/#courses' },
        { text: '品牌孵化', href: '/services' },
        { text: '跨境咨询', href: '/services' },
        { text: '多国语言企业官网建站', href: '/landing/enterprise-website' },
      ],
    },
    {
      title: '关于巨星',
      links: [
        { text: '公司简介', href: '/about' },
        { text: '发展历程', href: '/about#history' },
        { text: '荣誉资质', href: '/about#honors' },
        { text: '导师团队', href: '/about#team' },
      ],
    },
    {
      title: '成功案例',
      links: [
        { text: '美甲好物', href: '/#cases' },
        { text: '家居好物', href: '/#cases' },
        { text: '母婴商品', href: '/#cases' },
        { text: '工厂设备', href: '/#cases' },
      ],
    },
    {
      title: '联系我们',
      links: [
        { text: '深圳市沙井总部', href: '/contact' },
        { text: '免费咨询', href: '/contact' },
        { text: '合作洽谈', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '服务条款', href: getPermalink('/terms') },
    { text: '隐私政策', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: '微信公众号', icon: 'tabler:brand-wechat', href: '#' },
    { ariaLabel: '抖音', icon: 'tabler:brand-tiktok', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `
    © ${new Date().getFullYear()} <a class="text-blue-600 underline dark:text-muted" href="https://juxingchuhai.com">巨星出海</a> · 版权所有 · 助力中国品牌出海
  `,
};
