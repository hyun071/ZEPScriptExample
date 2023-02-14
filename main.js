
// 배포 : ZEP 홈페이지> 로그인> 이름> 나의앱> 압축한거넣기


/** (1) 플레이어 조작하기 */
App.onJoinPlayer.Add(function (player) {

    /** 접속시 뜨는 메세지 */
    App.showCenterLabel("Hello Word !")

    /** 이동속도 */
    player.moveSpeed = 300;

    /** 캐릭터 위 이름 (무조건 이걸로 뜸) */
    // player.title = "히횬";

    /** 캐릭터 위 이름 랜덤변경 */
    // let mbtis = ["FNFP", "ESTJ", "INFP", "INTP"];
    // let nth = Math.floor(Math.random() * mbtis.lenth);  /** Math.floor: 정수 */
    // player.title = mbtis[nth];

    /** 캐릭터 이미지 변경 (좌, 우만 바꿈) */
    player.sprite = spartan;

    player.sendUpdated();
})


/** (2) 캐릭터 이미지 변경 (좌, 우만 바꿈) */
// let spartan = App.loadSpritesheet('spartan.png', 64, 96, {
// left: [0, 1, 2, 3],
// up: [0],
// down: [0],
// right: [0,1,2,3]
// }, 8); 


/** (3) 채팅기능 */
// App.onsay.Add(function (player, text) {

//     App.showCenterLabel(text); //화면에 채팅내용 띄우기

//     let message = palyer.name + '님이' + text + '라고 말했습니다';
//     App.showCenterLabel(message); //화면에 채팅내용 띄우기

//     /** 사용자가 스피드 업/다운 명령어(채팅)을 입력 시 플레이어의 스피드 변경 */
//     if(text == 'speed up'){
//         player.moveSpeed = 400;
//     }
//     if(text == 'speed down'){
//         player.moveSpeed = 30;
//     }
//     player.sendUpdated();
// })


/** (4) 맵 조작하기 */

// 구름 이미지 띄우기
let cloud = App.loadSpritesheet('cloud.png', 659, 400, [0], 16);

App.onJoinPlayer.Add(function (player) {

    // 구름 이미지를 x좌표 5, y좌표 5 영역에 배치하기
    Map.putObject(5, 5, cloud);

    // x좌표 5, y좌표 5에 있는 구름 이미지를 x좌표 100, y좌표 5로 34초 동안 이동시키기
    Map.moveObject(5, 5, 100, 5, 34);
})