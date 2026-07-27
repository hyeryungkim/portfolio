// ⚙️ [100% 무오류 자동 연동 갤러리 관리실]
// 앞으로 사진을 추가할 때는 📁 images 폴더에 사진을 올린 뒤, 
// 아래 목록 맨 뒤에 { src: '...', title: '...', desc: '...' } 세트만 추가해 주시면 됩니다.
// 여기에 적는 순서가 홈페이지의 정렬 순서가 됩니다!

const galleryData = [
    {
        src: 'images/001.jpg',
        title: 'AZIT _ Deep Deep Deep 1',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/002.jpg',
        title: 'AZIT _ Deep Deep Deep 2',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/003.jpg',
        title: 'AZIT _ Deep Deep Deep 3',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/004.jpg',
        title: 'AZIT _ Deep Deep Deep 4',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/005.jpg',
        title: 'AZIT _ Deep Deep Deep 5',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/006.jpg',
        title: 'AZIT _ Tranquil shadow 1',
        desc: '31.8 x 31.8 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/007.jpg',
        title: 'AZIT _ Tranquil shadow 1 (Detail)',
        desc: '31.8 x 31.8 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/008.jpg',
        title: 'AZIT _ Tranquil shadow 2',
        desc: '31.8 x 31.8 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/009.jpg',
        title: 'AZIT _ Tranquil shadow 2 (Detail)',
        desc: '31.8 x 31.8 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/010.jpg',
        title: 'AZIT _ Tranquil shadow 3',
        desc: '31.8 x 31.8 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/011.jpg',
        title: 'AZIT _ Tranquil shadow 3 (Detail)',
        desc: '31.8 x 31.8 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/012.jpg',
        title: 'AZIT _ Tranquil shadow 4',
        desc: '31.8 x 31.8 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/013.jpg',
        title: 'AZIT _ Tranquil shadow 4 (Detail)',
        desc: '31.8 x 31.8 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/014.jpg',
        title: 'AZIT _ Tranquil shadow 5',
        desc: '31.8 x 31.8 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/015.jpg',
        title: 'AZIT _ Tranquil shadow 5 (Detail)',
        desc: '31.8 x 31.8 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/016.jpg',
        title: 'AZIT _ Tranquil shadow 6',
        desc: '31.8 x 31.8 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/017.jpg',
        title: 'AZIT _ Tranquil shadow 6 (Detail)',
        desc: '31.8 x 31.8 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/018.jpg',
        title: 'AZIT _ Step in shadow 1',
        desc: '24.2 x 24.2 cm\nAcrylic on wood panel'
    },
    {
        src: 'images/019.jpg',
        title: 'AZIT _ Step in shadow 2',
        desc: '24.2 x 24.2 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/020.jpg',
        title: 'AZIT _ Step in shadow 3',
        desc: '24.2 x 24.2 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/021.jpg',
        title: 'AZIT _ Step in shadow 4',
        desc: '24.2 x 24.2 cm\nAcrylic on wood panel'
    },
    {
        src: 'images/022.jpg',
        title: 'AZIT _  Black shadow 1',
        desc: '45 x 45 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/023.jpg',
        title: 'AZIT _  Black shadow 1 (Detail)',
        desc: '45 x 45 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/024.jpg',
        title: 'AZIT _  Black shadow 2',
        desc: '25 x 25 cm\nAcrylic on wood panel'
    },
    {
        src: 'images/025.jpg',
        title: 'AZIT _  Black shadow 2 (Detail)',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/026.jpg',
        title: 'AZIT _  Black shadow 3',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/027.jpg',
        title: 'AZIT _  Black shadow 4',
        desc: '25 x 25 cm\nAcrylic on wood panel'
    },
    {
        src: 'images/028.jpg',
        title: 'AZIT _ Yellow shadow 1',
        desc: '45 x 45 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/029.jpg',
        title: 'AZIT _ Yellow shadow 2',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/030.jpg',
        title: 'AZIT _ Yellow shadow 3',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/031.jpg',
        title: 'AZIT _ Yellow shadow 4',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/032.jpg',
        title: 'AZIT _ Yellow shadow 5',
        desc: '45 x 45 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/033.jpg',
        title: 'AZIT _ Yellow shadow 6',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/034.jpg',
        title: 'AZIT _ Yellow shadow 6 (Detail1)',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/035.jpg',
        title: 'AZIT _ Yellow shadow 6 (Detail2)',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/036.jpg',
        title: 'AZIT _ Yellow shadow 7',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/037.jpg',
        title: 'AZIT _ Yellow shadow 7 (Detail)',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/038.jpg',
        title: 'AZIT _ Yellow shadow 8',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    },
    {
        src: 'images/039.jpg',
        title: 'AZIT _ Yellow shadow 8 (Detail)',
        desc: '25 x 25 cm\nPorcelain, mixed media on wood panel'
    }
];
