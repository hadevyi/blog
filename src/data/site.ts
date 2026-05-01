export const siteMeta = {
  title: 'Blog',
  brand: '당현아 블로그',
  subtitle: '독립 블로그 사이트',
  tagline: '긴 설명이 필요한 설계와 기술 메모를 쌓는 기록 아카이브',
  description:
    '기술 메모, 설계 이유, 콘텐츠 시스템 기록을 장기적으로 남기는 당현아의 독립 블로그 사이트입니다.',
  siteUrl: 'https://hadevyi.github.io/blog/',
  rootPath: '/blog/',
  repoUrl: 'https://github.com/hadevyi/blog'
} as const;

export const mainNav = [
  {
    href: '/blog/',
    label: '홈',
    description: '블로그 메인 페이지'
  },
  {
    href: 'https://hadevyi.github.io/',
    label: '공식 홈페이지',
    description: '공식 홈페이지로 돌아가기',
    external: true
  },
  {
    href: 'https://github.com/hadevyi/blog',
    label: '저장소',
    description: '이 사이트 저장소 보기',
    external: true
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
