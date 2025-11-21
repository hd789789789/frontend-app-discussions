import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  type: {
    id: 'discussions.post.editor.type',
    defaultMessage: 'Loại bài viết',
  },
  addPostHeading: {
    id: 'discussions.post.editor.addPostHeading',
    defaultMessage: 'Thêm bài viết',
  },
  editPostHeading: {
    id: 'discussions.post.editor.editPostHeading',
    defaultMessage: 'Chỉnh sửa bài viết',
  },
  typeDescription: {
    id: 'discussions.post.editor.typeDescription',
    defaultMessage: 'Câu hỏi đặt ra các vấn đề cần câu trả lời. Thảo luận chia sẻ ý tưởng và bắt đầu cuộc trò chuyện.',
  },
  required: {
    id: 'discussions.post.editor.required',
    defaultMessage: 'Bắt buộc',
  },
  questionType: {
    id: 'discussions.post.editor.questionType',
    defaultMessage: 'Câu hỏi',
  },
  questionDescription: {
    id: 'discussions.post.editor.questionDescription',
    defaultMessage: 'Đặt ra các vấn đề cần câu trả lời',
  },
  discussionType: {
    id: 'discussions.post.editor.discussionType',
    defaultMessage: 'Thảo luận',
  },
  discussionDescription: {
    id: 'discussions.post.editor.discussionDescription',
    defaultMessage: 'Chia sẻ ý tưởng và bắt đầu cuộc trò chuyện',
  },
  topicArea: {
    id: 'discussions.post.editor.topicArea',
    defaultMessage: 'Khu vực chủ đề',
  },
  topicAreaDescription: {
    id: 'discussions.post.editor.topicAreaDescription',
    defaultMessage: 'Thêm bài viết của bạn vào chủ đề liên quan để giúp người khác tìm thấy.',
  },
  cohortVisibility: {
    id: 'discussions.post.editor.cohortVisibility',
    defaultMessage: 'Hiển thị nhóm',
  },
  cohortVisibilityAllLearners: {
    id: 'discussions.post.editor.cohortVisibilityAllLearners',
    defaultMessage: 'Tất cả người học',
  },
  postTitle: {
    id: 'discussions.post.editor.title',
    defaultMessage: 'Tiêu đề bài viết',
  },
  titleDescription: {
    id: 'discussions.post.editor.titleDescription',
    defaultMessage: 'Thêm tiêu đề rõ ràng và mô tả để khuyến khích sự tham gia.',
  },
  titleError: {
    id: 'discussions.post.editor.title.error',
    defaultMessage: 'Tiêu đề bài viết không được để trống.',
  },
  commentError: {
    id: 'discussions.post.editor.content.error',
    defaultMessage: 'Nội dung bài viết không được để trống.',
  },
  questionText: {
    id: 'discussions.post.editor.questionText',
    defaultMessage: 'Câu hỏi hoặc ý tưởng của bạn (bắt buộc)',
  },
  preview: {
    id: 'discussions.post.editor.preview',
    defaultMessage: 'Xem trước',
  },
  followPost: {
    id: 'discussions.post.editor.followPost',
    defaultMessage: 'Theo dõi bài viết này',
  },
  anonymousPost: {
    id: 'discussions.post.editor.anonymousPost',
    defaultMessage: 'Đăng bài ẩn danh',
  },
  anonymousToPeersPost: {
    id: 'discussions.post.editor.anonymousToPeersPost',
    defaultMessage: 'Đăng bài ẩn danh với những người học khác',
  },
  submit: {
    id: 'discussions.editor.submit',
    defaultMessage: 'Gửi',
  },
  submitting: {
    id: 'discussions.editor.submitting',
    defaultMessage: 'Đang gửi',
  },
  cancel: {
    id: 'discussions.editor.cancel',
    defaultMessage: 'Hủy',
  },
  editReasonCode: {
    id: 'discussions.editor.posts.editReasonCode',
    defaultMessage: 'Lý do chỉnh sửa',
    description: 'Label for field visible to moderators that allows them to select a reason for editing another user\'s post',
  },
  editReasonCodeError: {
    id: 'discussions.editor.posts.editReasonCode.error',
    defaultMessage: 'Chọn lý do chỉnh sửa',
    description: 'Error message visible to moderators when they submit the post/response/comment without select reason for editing',
  },
  showPreviewButton: {
    id: 'discussions.editor.posts.showPreview.button',
    defaultMessage: 'Hiển thị xem trước',
    description: 'show preview button text to allow user to see their post content.',
  },
  showHelpIcon: {
    id: 'discussions.editor.posts.showHelp.icon',
    defaultMessage: 'Hiển thị trợ giúp',
    description: 'show help icon to allow user to see important documentation.',
  },
  discussionHelpHeader: {
    id: 'discussions.editor.posts.discussionHelpHeader',
    defaultMessage: 'Trợ giúp thảo luận',
    description: 'header text for post help section.',
  },
  discussionHelpDescription: {
    id: 'discussions.editor.posts.discussionHelpDescription',
    defaultMessage: 'Thảo luận khóa học cho bạn cơ hội để bắt đầu cuộc trò chuyện, đặt câu hỏi và tương tác với những người học khác. Xem các liên kết bên dưới để tìm hiểu thêm:',
    description: 'description message for post help section.',
  },
  discussionHelpCourseParticipation: {
    id: 'discussions.editor.posts.discussionHelpCourseParticipation',
    defaultMessage: 'Tham gia thảo luận khóa học',
    description: 'Documentation link title for participating in course discussions.',
  },
  discussionHelpMathExpressions: {
    id: 'discussions.editor.posts.discussionHelpMathExpressions',
    defaultMessage: 'Nhập biểu thức toán học trong thảo luận khóa học',
    description: 'Documentation link title for entering math expressions in course discussions.',
  },
  discussionHelpTooltip: {
    id: 'discussions.editor.posts.discussionHelpTooltip',
    defaultMessage: 'Tìm hiểu thêm về MathJax & LaTeX',
    description: 'Tooltip help message for documentation help.',
  },
  actionsAlt: {
    id: 'discussions.actions.label',
    defaultMessage: 'Menu thao tác',
    description: 'Button to see actions for a post or comment',
  },
  unnamedTopics: {
    id: 'discussions.topic.noName.label',
    defaultMessage: 'Danh mục chưa đặt tên',
    description: 'display string for topics with missing names',
  },
  unnamedSubTopics: {
    id: 'discussions.subtopic.noName.label',
    defaultMessage: 'Danh mục phụ chưa đặt tên',
    description: 'display string for topics with missing names',
  },
  noThreadFound: {
    id: 'discussion.thread.notFound',
    defaultMessage: 'Không tìm thấy chủ đề',
    description: 'message to show on screen if the request thread is not found in course',
  },
  archivedTopics: {
    id: 'discussions.topics.archived.label',
    defaultMessage: 'Đã lưu trữ',
    description: 'Heading for displaying topics that are archived.',
  },
});

export default messages;
