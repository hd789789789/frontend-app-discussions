import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  actionsAlt: {
    id: 'discussions.actions.button.alt',
    defaultMessage: 'Menu thao tác',
    description: 'Alt-text for dropdown button for actions related to a post or comment',
  },
  copyLink: {
    id: 'discussions.actions.copylink',
    defaultMessage: 'Sao chép liên kết',
    description: 'Action to copy post link',
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
  unpinAction: {
    id: 'discussions.actions.unpin',
    defaultMessage: 'Bỏ ghim',
    description: 'Action to unpin a post',
  },
  deleteAction: {
    id: 'discussions.actions.delete',
    defaultMessage: 'Xóa',
    description: 'Action to delete a post or comment',
  },
  confirmationConfirm: {
    id: 'discussions.confirmation.button.confirm',
    defaultMessage: 'Xác nhận',
    description: 'Confirm button shown on confirmation dialog',
  },
  closeAction: {
    id: 'discussions.actions.close',
    defaultMessage: 'Đóng',
    description: 'Action to close a post',
  },
  reopenAction: {
    id: 'discussions.actions.reopen',
    defaultMessage: 'Mở lại',
    description: 'Action to reopen a post',
  },
  reportAction: {
    id: 'discussions.actions.report',
    defaultMessage: 'Báo cáo',
    description: 'Action to report a post or comment',
  },
  unreportAction: {
    id: 'discussions.actions.unreport',
    defaultMessage: 'Bỏ báo cáo',
    description: 'Action to unreport a post or comment',
  },
  endorseAction: {
    id: 'discussions.actions.endorse',
    defaultMessage: 'Xác nhận',
    description: 'Action to endorse a comment',
  },
  unendorseAction: {
    id: 'discussions.actions.unendorse',
    defaultMessage: 'Bỏ xác nhận',
    description: 'Action to unendorse a post or comment',
  },
  markAnsweredAction: {
    id: 'discussions.actions.markAnswered',
    defaultMessage: 'Đánh dấu là đã trả lời',
    description: 'Action to mark a comment as answering a post',
  },
  unmarkAnsweredAction: {
    id: 'discussions.actions.unMarkAnswered',
    defaultMessage: 'Bỏ đánh dấu đã trả lời',
    description: 'Action to unmark a comment as answering a post',
  },
  confirmationCancel: {
    id: 'discussions.modal.confirmation.button.cancel',
    defaultMessage: 'Hủy',
    description: 'Cancel button shown on delete confirmation dialog',
  },
  emptyAllTopics: {
    id: 'discussions.empty.allTopics',
    defaultMessage:
      'Tất cả hoạt động thảo luận cho các chủ đề này sẽ hiển thị ở đây.',
    description: 'Message shown on page when no posts found related to topic.',
  },
  emptyAllPosts: {
    id: 'discussions.empty.allPosts',
    defaultMessage:
      'Tất cả hoạt động thảo luận cho khóa học của bạn sẽ hiển thị ở đây.',
    description: 'Message shown on page when no posts found for the course.',
  },
  emptyMyPosts: {
    id: 'discussions.empty.myPosts',
    defaultMessage: "Các bài viết bạn đã tương tác sẽ hiển thị ở đây.",
    description: 'Message shown on page when no messages found for the user.',
  },
  emptyTopic: {
    id: 'discussions.empty.topic',
    defaultMessage: 'Tất cả hoạt động thảo luận cho chủ đề này sẽ hiển thị ở đây.',
    description: 'Message shown when visiting a topic with no comments.',
  },
  emptyTitle: {
    id: 'discussions.empty.title',
    defaultMessage: 'Chưa có gì ở đây',
    description: 'Title shown on empty pages below image.',
  },
  noPostSelected: {
    id: 'discussions.empty.noPostSelected',
    defaultMessage: 'Chưa chọn bài viết nào',
    description: 'Title on posts pages when user has yet to select a post to display.',
  },
  noTopicSelected: {
    id: 'discussions.empty.noTopicSelected',
    defaultMessage: 'Chưa chọn chủ đề nào',
    description: 'Title on topic pages when user has yet to select a topic.',
  },
  noResultsFound: {
    id: 'discussions.sidebar.noResultsFound',
    defaultMessage: 'Không tìm thấy kết quả',
    description: 'Title on the discussion sidebar when there are now results after filtering',
  },
  differentKeywords: {
    id: 'discussions.sidebar.differentKeywords',
    defaultMessage: 'Thử tìm kiếm với từ khóa khác',
    description: 'Message shown on discussion sidebar for topics and learners if user searched with keywords.',
  },
  removeKeywords: {
    id: 'discussions.sidebar.removeKeywords',
    defaultMessage: 'Thử tìm kiếm với từ khóa khác hoặc bỏ bớt bộ lọc',
    description: 'Message shown on discussion sidebar if user searched with keywords.',
  },
  removeKeywordsOnly: {
    id: 'discussions.sidebar.removeKeywordsOnly',
    defaultMessage: 'Thử tìm kiếm với từ khóa khác',
    description: 'Message shown on discussion sidebar if user searched with keywords only.',
  },
  removeFilters: {
    id: 'discussions.sidebar.removeFilters',
    defaultMessage: 'Thử bỏ bớt bộ lọc',
    description: 'Message shown on discussion sidebar if user filtered results.',
  },
  emptyIconAlt: {
    id: 'discussions.empty.iconAlt',
    defaultMessage: 'Trống',
    description: 'Alt-text for image showing empty state',
  },
  authorLabelStaff: {
    id: 'discussions.authors.label.staff',
    defaultMessage: 'Nhân viên',
    description: 'A label for staff users displayed next to their username.',
  },
  authorLabelModerator: {
    id: 'discussions.authors.label.moderator',
    defaultMessage: 'Trợ giảng',
    description: 'A label for moderators displayed next to their username.',
  },
  authorLabelTA: {
    id: 'discussions.authors.label.ta',
    defaultMessage: 'Trợ giảng cộng đồng',
    description: 'A label for community TAs displayed next to their username.',
  },
  loadMorePosts: {
    id: 'discussions.learner.loadMostPosts',
    defaultMessage: 'Tải thêm bài viết',
    description: 'Text on button for loading more posts by a user',
  },
  anonymous: {
    id: 'discussions.post.anonymous.author',
    defaultMessage: 'ẩn danh',
    description: 'Author name displayed when a post is anonymous',
  },
  blackoutDiscussionInformation: {
    id: 'discussion.blackoutBanner.information',
    defaultMessage: 'Đăng bài thảo luận đã bị vô hiệu hóa bởi đội ngũ khóa học',
    description: 'Informative text when discussion posting is disabled',
  },
  imageWarningMessage: {
    id: 'discussions.editor.image.warning.message',
    defaultMessage: 'Hình ảnh có chiều rộng hoặc chiều cao lớn hơn 999px sẽ không hiển thị khi bài viết, phản hồi hoặc bình luận được xem trong thảo luận khóa học nội tuyến',
    description: 'Modal message to tell image dimensions compatibility issue with legacy',
  },
  imageWarningModalTitle: {
    id: 'discussions.editor.image.warning.title',
    defaultMessage: 'Cảnh báo!',
    description: 'Modal message title',
  },
  imageWarningDismissButton: {
    id: 'discussions.editor.image.warning.dismiss',
    defaultMessage: 'OK',
    description: 'Modal dismiss button text',
  },
  contentUnavailableTitle: {
    id: 'discussions.content.unavailable.title',
    defaultMessage: 'Nội dung không khả dụng',
    description: 'Title on content page when the user has not logged into the MFE or not enrolled in the course.',
  },
  contentUnavailableSubTitle: {
    id: 'discussions.content.unavailable.subTitle',
    defaultMessage: 'Bạn có thể không xem được nội dung này vì bạn chưa đăng nhập, chưa ghi danh vào khóa học, hoặc quyền truy cập kiểm tra của bạn đã hết hạn.',
    description: 'Sub title on content page when the user has not logged into the MFE or not enrolled in the course.',
  },
  contentUnavailableAction: {
    id: 'discussions.content.unavailable.action',
    defaultMessage: 'Ghi danh',
    description: 'Action button on content page when the user has not logged into the MFE or not enrolled in the course.',
  },
});

export default messages;
