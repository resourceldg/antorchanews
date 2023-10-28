// @ts-nocheck
export const prerender = true;
import type { LayoutLoad } from './$types';

export const load = async ({ url }: Parameters<LayoutLoad>[0]) => {
  return {
    props: {
      path: url.pathname,
    },
  };
};
