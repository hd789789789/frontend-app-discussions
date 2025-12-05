import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  allPosts: {
    id: 'discussions.posts.filter.showALl',
    defaultMessage: 'Hiển thị tất cả',
    description: 'Option in dropdown to filter to all posts',
  },
  filterDiscussions: {
    id: 'discussions.posts.filter.discussions',
    defaultMessage: 'Thảo luận',
    description: 'Option in dropdown to filter to all discussions',
  },
  filterQuestions: {
    id: 'discussions.posts.filter.questions',
    defaultMessage: 'Câu hỏi',
    description: 'Option in dropdown to filter to all questions',
  },
  filterBy: {
    id: 'discussions.posts.filter.message',
    defaultMessage: 'Trạng thái: {filterBy}',
    description: 'Display text used to indicate what post status is being filtered',
  },
  filterAnyStatus: {
    id: 'discussions.posts.status.filter.anyStatus',
    defaultMessage: 'Mọi trạng thái',
    description: 'Option in dropdown to filter to all post statuses',
  },
  filterUnread: {
    id: 'discussions.posts.status.filter.unread',
    defaultMessage: 'Chưa đọc',
    description: 'Option in dropdown to filter to unread posts',
  },
  filterFollowing: {
    id: 'discussions.posts.status.filter.following',
    defaultMessage: 'Đang theo dõi',
    description: 'Option in dropdown to filter to followed posts',
  },
  filterReported: {
    id: 'discussions.posts.status.filter.reported',
    defaultMessage: 'Đã báo cáo',
    description: 'Option in dropdown to filter to reported posts',
  },
  filterUnanswered: {
    id: 'discussions.posts.status.filter.unanswered',
    defaultMessage: 'Chưa trả lời',
    description: 'Option in dropdown to filter to unanswered posts',
  },
  filterUnresponded: {
    id: 'discussions.posts.status.filter.unresponded',
    defaultMessage: 'Chưa phản hồi',
    description: 'Option in dropdown to filter to unresponded posts',
  },
  myPosts: {
    id: 'discussions.posts.filter.myPosts',
    defaultMessage: 'Bài viết của tôi',
    description: 'Option in dropdown to filter to all a user\'s posts',
  },
  myDiscussions: {
    id: 'discussions.posts.filter.myDiscussions',
    defaultMessage: 'Thảo luận của tôi',
    description: 'Option in dropdown to filter to all a user\'s discussions',
  },
  myQuestions: {
    id: 'discussions.posts.filter.myQuestions',
    defaultMessage: 'Câu hỏi của tôi',
    description: 'Option in dropdown to filter to all a user\'s questions',
  },
  sortedBy: {
    id: 'discussions.posts.sort.message',
    defaultMessage: 'Sắp xếp theo {sortBy}',
    description: 'Display text used to indicate how posts are sorted',
  },
  lastActivityAt: {
    id: 'discussions.posts.sort.lastActivity',
    defaultMessage: 'Hoạt động gần đây',
    description: 'Option in dropdown to sort posts by recent activity',
  },
  commentCount: {
    id: 'discussions.posts.sort.commentCount',
    defaultMessage: 'Nhiều hoạt động nhất',
    description: 'Option in dropdown to sort posts by most activity',
  },
  voteCount: {
    id: 'discussions.posts.sort.voteCount',
    defaultMessage: 'Nhiều lượt thích nhất',
    description: 'Option in dropdown to sort posts by most votes',
  },
  sortFilterStatus: {
    id: 'discussions.posts.sort-filter.sortFilterStatus',
    defaultMessage: `{own, select,
      false {Tất cả}
      true {Của tôi}
      other {{own}}
    } {status, select,
      statusAll {}
      statusUnread {chưa đọc}
      statusFollowing {đang theo dõi}
      statusReported {bị báo cáo}
      statusUnanswered {chưa được trả lời}
      statusUnresponded {chưa phản hồi}
      other {{status}}
    } {type, select,
      discussion {thảo luận}
      question {câu hỏi}
      all {bài viết}
      other {{type}}
    } {cohortType, select,
        all {}
        group {trong {cohort}}
        other {{cohortType}}
    } sắp xếp theo {sort, select,
      lastActivityAt {hoạt động gần đây}
      commentCount {nhiều hoạt động nhất}
      voteCount {nhiều lượt thích nhất}
      other {{sort}}
    }`,
    description: 'Status message showing current sorting and filtering status',
  },
});

export default messages;
