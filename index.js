let arr = [136, 23, 56, 64, 68, 69, 96, 70];
let max = 0;
let min = arr[0];      
        for (let i=0; i<arr.length;i++){
            if (arr[i]>max){
                max = arr[i];
            }
            if (arr[i]<min){
                min = arr[i];
            }
        }
        alert(max + " " + min);
        