// 리터럴 방식 배열 생성
function f_arr1() {

    let v_arr = ['사과', 12, "바나나", 12.34, null, "딸기", undefined, 123n, false];
    document.querySelector('div').innerText = v_arr;
  
  }

// 생성자 방식 배열 생성
function f_arr2() {

    let v_arr = new Array();
    v_arr[0] = '천혜향';
    v_arr[1] = '두리안';
    v_arr[2] = '샤인머스켓';
    v_arr[3] = '스타프롯트';
    v_arr[4] = '수박';

    let rst = "";

    for (let i=0; i<v_arr.length; i++) {
        if (i > 0) rst += "💕";
        rst += v_arr[i];
    }


}

function f_arr3() {
    
    let v_arr = new Array('덤보', '스티치', '미키마우스');

    let rst = "";

    // for-in문 (배열을 포함하는 객체를 대상으로 사용)
    // for (변수에 키 또는 인덱스 in 객체 또는 배열)

    for (let idx in v_arr) {
        if(idx > 0) rst += "/👍/";
        rst += v_arr[idx];
    }

    rst += "<hr>";

    // for-of문 (배열을 대상으로 사용)
    // for (변수에 배열의 값 of 배열)
    let count = 0; // index를 대체해서 구분자에 대한 조건으로 활용

    for (let arrVal of v_arr) {
        if (count) rst += ",,"; // 0일 때 false, 0 아닐 때 true
        rst += arrVal;
        count++;
    }

    document.querySelector('div').innerHTML = rst;
}