import { camelCaseObject } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

import { getApiBaseUrl } from '../../../data/constants';

export const getCourseMetadataApiUrl = (courseId) => `${getApiBaseUrl()}/api/course_home/course_metadata/${courseId}`;

function normalizeCourseHomeCourseMetadata(metadata) {
  const data = camelCaseObject(metadata);
  const courseId = data.courseId || data.id;
  
  // Map và xử lý tabs
  let tabs = data.tabs.map(tab => {
    let title = tab.title;
    // Đổi tên tab "Dates" thành "Ngày"
    if (tab.tabId === 'dates' || title === 'Dates') {
      title = 'Ngày';
    }
    // Đổi tên tab "Discussion" thành "Thảo luận"
    if (tab.tabId === 'discussion' || title === 'Discussion') {
      title = 'Thảo luận';
    }
    
    return {
      slug: tab.tabId === 'courseware' ? 'outline' : tab.tabId,
      title,
      url: tab.url,
    };
  });
  
  // Thêm tab "Thành tích" nếu chưa có
  const hasBadgeTab = tabs.some(tab => tab.slug === 'badge');
  if (!hasBadgeTab && courseId) {
    // Tìm vị trí sau leaderboard để chèn tab "Thành tích"
    const leaderboardIndex = tabs.findIndex(tab => tab.slug === 'leaderboard');
    const badgeTab = {
      slug: 'badge',
      title: 'Thành tích',
      url: `/learning/course/${courseId}/badge`,
    };
    
    if (leaderboardIndex !== -1) {
      tabs.splice(leaderboardIndex + 1, 0, badgeTab);
    } else {
      tabs.push(badgeTab);
    }
  }
  
  return {
    ...data,
    tabs,
    isMasquerading: data.originalUserIsStaff && !data.isStaff,
  };
}

export async function getCourseHomeCourseMetadata(courseId) {
  const url = getCourseMetadataApiUrl(courseId);
  const { data } = await getAuthenticatedHttpClient().get(url);

  return normalizeCourseHomeCourseMetadata(data);
}
