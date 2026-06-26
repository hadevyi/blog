export const siteMeta = {
  title: 'Blog',
  brand: '당현아 블로그',
  subtitle: '공유의 가치를 추구하는 개발자',
  tagline: '경험의 맥락과 기술적 판단을 길게 남기는 기록 공간',
  description:
    '기술 메모, 프로젝트 회고, 활동 기록을 사진과 맥락이 있는 글로 남기는 당현아의 블로그입니다.',
  siteUrl: 'https://hadevyi.github.io/blog/',
  rootPath: '/blog/',
  repoUrl: 'https://github.com/hadevyi/blog'
} as const;

export const mainNav = [
  {
    href: '/blog/',
    label: '목록',
    description: '블로그 글 목록'
  },
  {
    href: '/blog/series/',
    label: '시리즈',
    description: '블로그 시리즈'
  },
  {
    href: '/blog/tags/',
    label: '태그',
    description: '블로그 태그'
  }
] as const;

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/hadevyi'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hadevyi/'
  }
] as const;
