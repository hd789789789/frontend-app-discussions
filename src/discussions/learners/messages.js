import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  reported: {
    id: 'discussions.learner.reported',
    defaultMessage: '{reported} đã báo cáo',
  },
  previouslyReported: {
    id: 'discussions.learner.previouslyReported',
    defaultMessage: '{previouslyReported} đã báo cáo trước đó',
  },
  lastActive: {
    id: 'discussions.learner.lastLogin',
    defaultMessage: 'Hoạt động lần cuối {lastActiveTime}',
  },
  loadMore: {
    id: 'discussions.learner.loadMostLearners',
    defaultMessage: 'Tải thêm',
    description: 'Text on button for loading more learners',
  },
  back: {
    id: 'discussions.learner.back',
    defaultMessage: 'Quay lại',
    description: 'Text on button for back to learners list',
  },
  activityForLearner: {
    id: 'discussions.learner.activityForLearner',
    defaultMessage: 'Hoạt động của {username}',
    description: 'Text for learners post header',
  },
  mostActivity: {
    id: 'discussions.learner.mostActivity',
    defaultMessage: 'Nhiều hoạt động nhất',
    description: 'Text for learners sorting by most activity',
  },
  reportedActivity: {
    id: 'discussions.learner.reportedActivity',
    defaultMessage: 'Hoạt động bị báo cáo',
    description: 'Text for learners sorting by reported activity',
  },
  recentActivity: {
    id: 'discussions.learner.recentActivity',
    defaultMessage: 'Hoạt động gần đây',
    description: 'Text for learners sorting by recent activity',
  },
  sortFilterStatus: {
    id: 'discussions.learner.sortFilterStatus',
    defaultMessage: `Tất cả người học được sắp xếp theo {sort, select,
      flagged {reported activity}
      activity {most activity}
      other {{sort}}
    }`,
    description: 'Text for current selected learners filter',
  },
  allActivity: {
    id: 'discussion.learner.allActivity',
    defaultMessage: 'Tất cả hoạt động',
    description: 'Tooltip text for all activity icon',
  },
  posts: {
    id: 'discussion.learner.posts',
    defaultMessage: 'Bài viết',
    description: 'Tooltip text for all posts icon',
  },
});

export default messages;
