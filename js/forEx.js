function f_mun1() {

    let sum = 0;

    for (let i=1; i<=10; i++) {
        sum += i;
    }
    console.log("합 : "+ sum);
}

function f_mun2() {

    let sum = 0;

    for (let i=2; i<=200; i+=2) {
        sum += i;
    }
    console.log("결과 : "+ sum);
}

function f_mun3() {

    let str = ""; // 입력된 정보를 문자열로 저장    
    let sum = 0; // 입력된 값을 저장

    while (!0) {
        // type Srting 이므로 덧셈연산을 위해 정수변환 필요
        let input = parseInt(prompt("입력하세요"));

        // 무한루프의 경우 빠져나갈 조건 먼저 정의하기
        if (input == 0) break;

        
        sum += input;
        str += input + " ";
    }
        
        // 출력문 생성
        let rst = "입력된 항목 : " + str + "\r\n";
        rst += "더해진 값 : " + sum;

        console.log(rst);

}

function f_mun4() {

    let rst = "";

    for (let i=1; i<=10; i++) {
        for (let j=1; j<=10; j++) {
            if ( (i+j)%3 != 0 ) continue;

            // 콘솔로 출력시 줄넘김 기호
            // rst += "i : " + i + ", j : " + j + " = " + (i+j) + "\r\n";

            // body 출력시 줄넘김 태그 사용
            rst += "i : " + i + ", j : " + j + " = " + (i+j) + "<br>";
        } 
    }
    console.log(rst);
    // div 영역에 출력하기
    document.querySelector('div').innerHTML += rst;
}

function f_mun5() {

    let rst = "";
    for (let i=1; i<=100; i++) {
        if ( i%2==0 && i%3==0 ) {
            rst += i + ", ";
        }
    }
    console.log(rst);
    document.querySelector('div').innerText = rst;
}

function f_mun6() {

    let rst = "";

    // ;; 두개만 쓰면 무한반복됨
    // 0,0 치면 종료
    for (;;) {

        let su1 = parseInt(prompt("첫번째 수"));
        let su2 = prompt("두번째 수");

        // 빠져나갈 조건
        if ( su1==0 && su2==0 ) break;

        // 두수의 합이 100일 때만 저장
        let hap = su1 + parseInt(su2);

        if (hap < 100) continue;
        rst += su1 + "+" + su2 + " = " + hap + "<br>";
    }
    document.querySelector('div').innerHTML = rst;
}