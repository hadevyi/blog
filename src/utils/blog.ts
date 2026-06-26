import type { CollectionEntry } from 'astro:content';

export type BlogSeries = {
  cover?: string;
  description: string;
  name: string;
  slug: string;
};

export type BlogTag = {
  en: string;
  ko: string;
  slug: string;
};

const seriesModules = import.meta.glob<BlogSeries>('../content/series/*.json', {
  eager: true,
  import: 'default'
});

export const blogSeries = Object.values(seriesModules);

export const blogTags: BlogTag[] = [
  { slug: 'review', ko: '후기', en: 'Review' },
  { slug: 'retrospective', ko: '회고', en: 'Retrospective' },
  { slug: 'project', ko: '프로젝트', en: 'Project' },
  { slug: 'education', ko: '교육', en: 'Education' },
  { slug: 'mentoring', ko: '멘토링', en: 'Mentoring' },
  { slug: 'tech-blog', ko: '기술블로그', en: 'Tech Blog' },
  { slug: 'jekyll', ko: 'Jekyll', en: 'Jekyll' },
  { slug: 'github-pages', ko: 'GitHub Pages', en: 'GitHub Pages' },
  { slug: 'markdown', ko: 'Markdown', en: 'Markdown' },
  { slug: 'backend', ko: '백엔드', en: 'Backend' },
  { slug: 'cloud', ko: '클라우드', en: 'Cloud' },
  { slug: 'settings', ko: '설정', en: 'Settings' },
  { slug: 'blog-operations', ko: '블로그 운영', en: 'Blog Operations' },
  { slug: 'analytics-search', ko: '분석·검색', en: 'Analytics & Search' },
  { slug: 'content-management', ko: '콘텐츠 관리', en: 'Content Management' },
  { slug: 'customization', ko: '커스터마이징', en: 'Customization' },
  { slug: 'presentation', ko: '발표', en: 'Presentation' },
  { slug: 'conference', ko: '컨퍼런스', en: 'Conference' },
  { slug: 'collaboration', ko: '협업', en: 'Collaboration' },
  { slug: 'side-project', ko: '사이드프로젝트', en: 'Side Project' },
  { slug: 'open-source', ko: '오픈소스', en: 'Open Source' },
  { slug: 'startup', ko: '창업', en: 'Startup' }
];

export const getPostUrl = (post: CollectionEntry<'blog'>) => `/blog/${post.data.number}/`;

const createFallbackSeriesSlug = (series: string) =>
  series
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, '-')
    .replace(/^-+|-+$/g, '');

const findSeries = (series: string) =>
  blogSeries.find((item) => item.slug === series || item.name === series);

export const getSeriesName = (series: string) => findSeries(series)?.name || series.trim();

export const getSeriesMeta = (series: string): Omit<BlogSeries, 'name' | 'slug'> =>
  findSeries(series) || {
    description: `${getSeriesName(series)} 시리즈에 포함된 글을 모아둔 페이지입니다.`
  };

export const getSeriesSlug = (series: string) => {
  const seriesMeta = findSeries(series);

  return seriesMeta?.slug || createFallbackSeriesSlug(series);
};

export const getSeriesUrl = (series: string) => `/blog/series/${getSeriesSlug(series)}/`;

const createFallbackTagSlug = (tag: string) =>
  tag
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const getTagMeta = (tag: string): BlogTag => {
  const normalizedTag = tag.trim();
  const tagMeta = blogTags.find(
    (item) => item.slug === normalizedTag || item.ko === normalizedTag || item.en === normalizedTag
  );

  return (
    tagMeta || {
      slug: createFallbackTagSlug(normalizedTag),
      ko: normalizedTag,
      en: normalizedTag
    }
  );
};

export const getTagSlug = (tag: string) => getTagMeta(tag).slug;

export const getTagUrl = (tag: string) => `/blog/tags/${getTagSlug(tag)}/`;
