import glob from 'fast-glob';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import path from 'path';

export async function getMdxContent(source: string) {
  const contentGlob = `${source}/**/*.mdx`;
  const files = glob.sync(contentGlob);

  if (!files.length) return [];

  const content = await Promise.all(
    files.map(async (filepath) => {
      const slug = filepath
        .replace(source, '')
        .replace(/^\/+/, '')
        .replace(new RegExp(path.extname(filepath) + '$'), '');

      const mdxSource = await fs.readFile(filepath);
      const { content, data } = matter(mdxSource);
      const mdx = await renderToString(content, { scope: data });

      return {
        filepath,
        slug,
        content,
        data,
        mdx,
      };
    })
  );
  return content;
}
