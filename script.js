// ⚙️ [깃허브 보안 우회형 100% 완전 자동화 엔진 - 오류 수정 버전]
// 이제 이 파일과 index.html은 평생 절대 수정하지 마세요!
// 올리지 않은 빈 사진(작품 5, 작품 6 등)이 화면에 뜨는 현상을 완벽하게 해결했습니다.

const USER_ID = 'hyeryungkim'; 
const REPO_NAME = 'portfolio';  

const images = [];

async function scanImagesAutomatically() {
    // 깃허브 저장소의 실제 images 폴더 정보를 실시간으로 조회합니다.
    const targetURL = `https://github.com{USER_ID}/${REPO_NAME}/contents/images`;
    
    try {
        const response = await fetch(targetURL);
        if (!response.ok) throw new Error();
        const files = await response.json();
        
        // 확장자가 이미지인 파일만 자동으로 솎아내기
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'JPG', 'JPEG', 'PNG'];
        const validImages = files
            .filter(f => {
                const ext = f.name.split('.').pop();
                return allowedExtensions.includes(ext) && f.name !== '.gitkeep';
            })
            // 001.jpg, 002.jpg 순으로 이름 정렬
            .sort((a, b) => a.name.localeCompare(b.name, undefined, {numeric: true, sensitivity: 'base'}));

        // 💡 [핵심 교정] 실제로 폴더에 존재하는 이미지만 배열에 담습니다. (예비 칸 생성 가드 제거)
        validImages.forEach(file => {
            images.push(file.path);
        });

    } catch (e) {
        console.error("이미지를 불러오는 중 오류가 발생했습니다.", e);
        // 에러 발생 시 빈 칸을 강제로 만들지 않고 에러 메시지만 콘솔에 출력하도록 변경
    } finally {
        // index.html에게 사진 수집이 완료되었음을 알림
        window.imagesReady = true;
        document.dispatchEvent(new Event('ImagesLoaded'));
    }
}

// 자동 스캔 즉시 실행
scanImagesAutomatically();
