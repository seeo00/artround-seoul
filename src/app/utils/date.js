export const formatDate = (dateString) => {
  const date = new Date(dateString); // 문자열을 Date 객체로 변환
  return date
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\s/g, '') // 모든 공백 제거
    .replace(/-/g, '.') // '-'를 '.'로 변환
    .replace(/\.$/, ''); // 마지막에 있는 점 제거
};
