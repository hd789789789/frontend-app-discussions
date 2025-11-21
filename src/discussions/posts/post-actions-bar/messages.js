import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'discussions.app.title',
    defaultMessage: 'Thảo luận',
  },
  searchAllPosts: {
    id: 'discussions.posts.actionBar.searchAllPosts',
    defaultMessage: 'Tìm kiếm tất cả bài viết',
    description: 'Placeholder text in search box',
  },
  search: {
    id: 'discussions.posts.actionBar.search',
    defaultMessage: `{page, select,
      topics {Search topics}
      posts {Search all posts}
      learners {Search learners}
      myPosts {Search all posts}
      other {{page}}
    }`,
    description: 'Placeholder text in search box',
  },
  searchInfo: {
    id: 'discussions.actionBar.searchInfo',
    defaultMessage: 'Đang hiển thị {count} kết quả cho "{text}"',
    description: 'Message displayed when user performs a search',
  },
  searchRewriteInfo: {
    id: 'discussions.actionBar.searchRewriteInfo',
    defaultMessage: 'Không tìm thấy kết quả nào cho "{searchString}". Đang hiển thị {count} kết quả cho "{textSearchRewrite}".',
    description: 'Message displayed when user performs a search and search query is rewritten because matching results are not found',
  },
  searchInfoSearching: {
    id: 'discussions.actionBar.searchInfoSearching',
    defaultMessage: 'Đang tìm kiếm...',
    description: 'Message displayed when user performs a search',
  },
  clearSearch: {
    id: 'discussions.actionBar.clearSearch',
    defaultMessage: 'Xóa kết quả',
    description: 'Button to clear search',
  },
  addAPost: {
    id: 'discussion.posts.actionBar.add',
    defaultMessage: 'Thêm bài viết',
    description: 'Button to add a new discussion post',
  },
  close: {
    id: 'discussion.posts.actionBar.close',
    defaultMessage: 'Đóng',
    description: 'Alt description for close icon button for closing in-context sidebar.',
  },
});

export default messages;
