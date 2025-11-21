import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  anonymous: {
    id: 'discussions.post.author.anonymous',
    defaultMessage: 'ẩn danh',
    description: 'Author name displayed when a post is anonymous',
  },
  addResponse: {
    id: 'discussions.post.addResponse',
    defaultMessage: 'Thêm phản hồi',
    description: 'Button to add a response in a thread of forum posts',
  },
  lastResponse: {
    id: 'discussions.post.lastResponse',
    defaultMessage: 'Phản hồi cuối {time}',
  },
  postedOn: {
    id: 'discussions.post.postedOn',
    defaultMessage: 'Đã đăng {time} bởi {author} {authorLabel}',
  },
  contentReported: {
    id: 'discussions.post.contentReported',
    defaultMessage: 'Đã báo cáo',
    description: 'Content reported for staff review',
  },
  following: {
    id: 'discussions.post.following',
    defaultMessage: 'Đang theo dõi',
  },
  follow: {
    id: 'discussions.post.follow',
    defaultMessage: 'Theo dõi',
    description: 'Tooltip/alttext for button to follow a discussion post',
  },
  followed: {
    id: 'discussions.post.followed',
    defaultMessage: 'Đã theo dõi',
    description: 'Tooltip/alttext for follow icon showing user followed a post',
  },
  notFollowed: {
    id: 'discussions.post.notFollowed',
    defaultMessage: 'Chưa theo dõi',
    description: 'Tooltip/alttext for follow icon showing user not following a post',
  },
  answered: {
    id: 'discussions.post.answered',
    defaultMessage: 'Đã trả lời',
    description: 'Tooltip/alttext for button to unfollow a discussion post',
  },
  unFollow: {
    id: 'discussions.post.unFollow',
    defaultMessage: 'Bỏ theo dõi',
    description: 'Tooltip/alttext for button to unfollow a discussion post',
  },
  like: {
    id: 'discussions.post.like',
    defaultMessage: 'Thích',
    description: 'Tooltip/alttext for button to like a discussion post',
  },
  removeLike: {
    id: 'discussions.post.removeLike',
    defaultMessage: 'Bỏ thích',
    description: 'Tooltip/alttext for button to remove the like applied to a discussion post',
  },
  likedPost: {
    id: 'discussions.post.liked',
    defaultMessage: 'đã thích',
    description: 'Tooltip/alttext for like icon to tell user this post is liked by user',
  },
  postLikes: {
    id: 'discussions.post.likes',
    defaultMessage: 'lượt thích',
    description: 'Tooltip/alttext for like icon to tell user about like on the post',
  },
  viewActivity: {
    id: 'discussions.post.viewActivity',
    defaultMessage: 'Xem hoạt động',
    description: 'Tooltip/alttext for button to view the activity of a discussion post',
  },
  activity: {
    id: 'discussions.post.activity',
    defaultMessage: 'Hoạt động',
    description: 'Tooltip/alttext for icon for showing icon represents activity on a post',
  },
  postClosed: {
    id: 'discussions.post.closed',
    defaultMessage: 'Bài viết đã đóng để phản hồi và bình luận',
    description: 'Tooltip/alttext for icon displayed when post is closed',
  },
  relatedTo: {
    id: 'discussions.post.relatedTo',
    defaultMessage: 'Liên quan đến',
    description: 'Message followed the category and topic of post linking to in-course context',
  },
  deletePostTitle: {
    id: 'discussions.editor.delete.post.title',
    defaultMessage: 'Xóa bài viết',
  },
  deletePostDescription: {
    id: 'discussions.editor.delete.post.description',
    defaultMessage: 'Bạn có chắc chắn muốn xóa vĩnh viễn bài viết này không?',
  },
  deleteConfirmationDelete: {
    id: 'discussions.post.delete.confirmation.button.delete',
    defaultMessage: 'Xóa',
    description: 'Delete button shown on delete confirmation dialog',
  },
  reportPostTitle: {
    id: 'discussions.editor.report.post.title',
    defaultMessage: 'Báo cáo nội dung không phù hợp?',
    description: 'Title of confirmation dialog shown when reporting a post',
  },
  reportPostDescription: {
    id: 'discussions.editor.report.post.description',
    defaultMessage: 'Đội ngũ kiểm duyệt thảo luận sẽ xem xét nội dung này và thực hiện hành động thích hợp.',
    description: 'Text displayed in confirmation dialog when deleting a post',
  },
  closePostModalTitle: {
    id: 'discussions.post.closePostModal.title',
    defaultMessage: 'Đóng bài viết',
    description: 'Title for the close post reason modal',
  },
  closePostModalText: {
    id: 'discussions.post.closePostModal.text',
    defaultMessage: 'Nhập lý do đóng bài viết này. Điều này sẽ chỉ hiển thị cho những người kiểm duyệt khác.',
    description: 'Description for the close post reason modal',
  },
  closePostModalReasonCodeInput: {
    id: 'discussions.post.closePostModal.reasonCodeInput',
    defaultMessage: 'Lý do',
    description: 'Label for the close reason code selector input',
  },
  closePostModalButtonCancel: {
    id: 'discussions.post.closePostModal.cancel',
    defaultMessage: 'Hủy',
    description: 'Cancel button label for the close post reason modal',
  },
  closePostModalButtonConfirm: {
    id: 'discussions.post.closePostModal.confirm',
    defaultMessage: 'Đóng bài viết',
    description: 'Confirm button label for the close post reason modal',
  },
  newLabel: {
    id: 'discussions.post.label.new',
    defaultMessage: '{count} Mới',
    description: 'Label shown on the badge indicating new comments/posts like "3 new"',
  },
  editedBy: {
    id: 'discussions.post.editedBy',
    defaultMessage: 'Được chỉnh sửa bởi',
    description: 'Message shown to user to inform them who edited a post',
  },
  reason: {
    id: 'discussions.post.editReason',
    defaultMessage: 'Lý do',
    description: 'Message shown to user to inform them why a post was edited',
  },
  postWithoutPreview: {
    id: 'discussions.post.postWithoutPreview',
    defaultMessage: 'Không có bản xem trước',
    description: 'No preview available',
  },
  srOnlyFollowDescription: {
    id: 'discussions.post.follow.description',
    defaultMessage: 'bạn đang theo dõi bài viết này',
    description: 'tell screen readers if user is following a post',
  },
  srOnlyUnFollowDescription: {
    id: 'discussions.post.unfollow.description',
    defaultMessage: 'bạn không theo dõi bài viết này',
    description: 'tell screen readers if user is not following a post',
  },
});

export default messages;
