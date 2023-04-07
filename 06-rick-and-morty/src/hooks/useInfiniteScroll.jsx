export function useInfiniteScroll(loadMore, hasMore) {
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight &&
      hasMore
    ) {
      loadMore();
    }
  }

  return { handleScroll }
}