import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  addComment: {
    id: 'discussions.comments.comment.addComment',
    defaultMessage: 'Thêm bình luận',
    description: 'Button to add a comment to a response',
  },
  addResponse: {
    id: 'discussions.comments.comment.addResponse',
    defaultMessage: 'Thêm phản hồi',
    description: 'Button to add a response to a response',
  },
  abuseFlaggedMessage: {
    id: 'discussions.comments.comment.abuseFlaggedMessage',
    defaultMessage: 'Nội dung đã được báo cáo để nhân viên xem xét',
    description: 'Alert banner over comment that has been reported for abuse',
  },
  backAlt: {
    id: 'discussions.actions.back.alt',
    defaultMessage: 'Quay lại danh sách',
    description: 'Back to Posts list button text',
  },
  responseCount: {
    id: 'discussions.comments.comment.responseCount',
    defaultMessage: `{num, plural,
      =0 {No responses}
      one {Showing # response}
      other {Showing # responses}
    }`,
  },
  endorsedResponseCount: {
    id: 'discussions.comments.comment.endorsedResponseCount',
    defaultMessage: `{num, plural,
      =0 {No endorsed responses}
      one {Showing # endorsed response}
      other {Showing # endorsed responses}
    }`,
  },
  loadMoreComments: {
    id: 'discussions.comments.comment.loadMoreComments',
    defaultMessage: 'Tải thêm bình luận',
    description: 'Button to load more comments on responses',
  },
  loadMoreResponses: {
    id: 'discussions.comments.comment.loadMoreResponses',
    defaultMessage: 'Tải thêm phản hồi',
    description: 'Button to load more responses of forum posts',
  },
  postVisibility: {
    id: 'discussions.comments.comment.visibility',
    defaultMessage: `This post is visible to {group, select,
         null {Everyone}
         other {{group}}
    }.`,
    description: 'Message on comment mentioning the group a particular post is visible to',
  },
  postTime: {
    id: 'discussions.comments.comment.postedTime',
    defaultMessage: `{postType, select,
      discussion {Discussion}
      question {Question}
      other {{postType}}
    } posted {relativeTime} by`,
    description: 'Timestamp for when a user posted the message followed by username. The relative time is already translated.',
  },
  commentTime: {
    id: 'discussions.comments.comment.commentTime',
    defaultMessage: 'Đã đăng {relativeTime}',
    description: 'Message about how long ago a comment was posted. Appears as "username posted 7 minutes ago"',
  },
  answer: {
    id: 'discussions.comments.comment.answer',
    defaultMessage: 'Câu trả lời',
    description: 'Message above a comment that has been marked as the answer.',
  },
  answeredLabel: {
    id: 'discussions.comments.comment.answeredlabel',
    defaultMessage: 'Được đánh dấu là đã trả lời bởi',
    description: 'Message above a comment that has been marked as answered. Appears as "Marked as answered by Username"',
  },
  endorsed: {
    id: 'discussions.comments.comment.endorsed',
    defaultMessage: 'Đã xác nhận',
    description: 'Message above a comment that has been endorsed.',
  },
  endorsedLabel: {
    id: 'discussions.comments.comment.endorsedlabel',
    defaultMessage: 'Được xác nhận bởi',
    description: 'Message above a comment that has been endorsed. Appears as "Endorsed by Username"',
  },
  actionsAlt: {
    id: 'discussions.actions.label',
    defaultMessage: 'Menu thao tác',
    description: 'Button to see actions for a post or comment',
  },
  editAction: {
    id: 'discussions.actions.edit',
    defaultMessage: 'Chỉnh sửa',
    description: 'Action to edit a comment or post',
  },
  pinAction: {
    id: 'discussions.actions.pin',
    defaultMessage: 'Ghim',
    description: 'Action to pin a post',
  },
  deleteAction: {
    id: 'discussions.actions.delete',
    defaultMessage: 'Xóa',
    description: 'Action to delete a post or comment',
  },
  submit: {
    id: 'discussions.editor.submit',
    defaultMessage: 'Gửi',
    description: 'Button to submit a response or comment',
  },
  submitting: {
    id: 'discussions.editor.submitting',
    defaultMessage: 'Đang gửi',
  },
  cancel: {
    id: 'discussions.editor.cancel',
    defaultMessage: 'Hủy',
    description: 'Button to cancel posting a response or comment',
  },
  commentError: {
    id: 'discussions.editor.error.empty',
    defaultMessage: 'Nội dung bài viết không được để trống.',
    description: 'Error message displayed when post content is left empty',
  },
  deleteResponseTitle: {
    id: 'discussions.editor.delete.response.title',
    defaultMessage: 'Xóa phản hồi',
    description: 'Title of confirmation dialog shown when deleting a response',
  },
  deleteResponseDescription: {
    id: 'discussions.editor.delete.response.description',
    defaultMessage: 'Bạn có chắc chắn muốn xóa vĩnh viễn phản hồi này không?',
    description: 'Text displayed in confirmation dialog when deleting a response',
  },
  deleteCommentTitle: {
    id: 'discussions.editor.delete.comment.title',
    defaultMessage: 'Xóa bình luận',
    description: 'Title of confirmation dialog shown when deleting a comment',
  },
  deleteCommentDescription: {
    id: 'discussions.editor.delete.comment.description',
    defaultMessage: 'Bạn có chắc chắn muốn xóa vĩnh viễn bình luận này không?',
    description: 'Text displayed in confirmation dialog when deleting a comment',
  },
  deleteConfirmationDelete: {
    id: 'discussions.delete.confirmation.button.delete',
    defaultMessage: 'Xóa',
    description: 'Delete button shown on delete confirmation dialog',
  },
  reportResponseTitle: {
    id: 'discussions.editor.response.response.title',
    defaultMessage: 'Báo cáo nội dung không phù hợp?',
    description: 'Title of confirmation dialog shown when reporting a response',
  },
  reportResponseDescription: {
    id: 'discussions.editor.response.description',
    defaultMessage: 'Đội ngũ kiểm duyệt thảo luận sẽ xem xét nội dung này và thực hiện hành động thích hợp.',
    description: 'Text displayed in confirmation dialog when deleting a response',
  },
  reportCommentTitle: {
    id: 'discussions.editor.report.comment.title',
    defaultMessage: 'Báo cáo nội dung không phù hợp?',
    description: 'Title of confirmation dialog shown when reporting a comment',
  },
  reportCommentDescription: {
    id: 'discussions.editor.report.comment.description',
    defaultMessage: 'Đội ngũ kiểm duyệt thảo luận sẽ xem xét nội dung này và thực hiện hành động thích hợp.',
    description: 'Text displayed in confirmation dialog when deleting a response',
  },
  editReasonCode: {
    id: 'discussions.editor.comments.editReasonCode',
    defaultMessage: 'Lý do chỉnh sửa',
    description: 'Label for field visible to moderators that allows them to select a reason for editing another user\'s response',
  },
  editReasonCodeError: {
    id: 'discussions.editor.posts.editReasonCode.error',
    defaultMessage: 'Chọn lý do chỉnh sửa',
    description: 'Error message visible to moderators when they submit the post/response/comment without select reason for editing',
  },
  editedBy: {
    id: 'discussions.comment.comments.editedBy',
    defaultMessage: 'Được chỉnh sửa bởi',
    description: 'Text shown to users to indicate who edited a post. Followed by the username of editor.',
  },
  fullStop: {
    id: 'discussions.comment.comments.fullStop',
    defaultMessage: '•',
    description: 'Fullstop shown to users to indicate who edited a post. Followed by a reason.',
  },
  reason: {
    id: 'discussions.comment.comments.reason',
    defaultMessage: 'Lý do',
    description: 'Text shown to users to indicate why a post was edited, followed by a reason.',
  },
  closedBy: {
    id: 'discussions.post.closedBy',
    defaultMessage: 'Bài viết đã đóng bởi',
  },
  time: {
    id: 'discussion.comment.time',
    defaultMessage: '{time} trước',
    description: 'Time text for endorse banner',
  },
  noThreadFound: {
    id: 'discussion.thread.notFound',
    defaultMessage: 'Không tìm thấy chủ đề',
    description: 'message to show on screen if the request thread is not found in course',
  },
  commentSort: {
    id: 'discussions.comment.sortFilterStatus',
    defaultMessage: `{sort, select,
      false {Oldest first}
      true {Newest first}
      other {{sort}}
    }`,
    description: 'sort message showing current sorting',
  },
});

export default messages;
