## 진입 페이지
![image](https://github.com/yhyem/HYEFLIX/assets/65844764/30dbf74d-17d5-443e-9479-88088df4a78d)

# github의 API key 숨기는 방법

### 1) `apikey.js` file 만들고 key를 넣는다.

```
const config = {
	apikey: "APIkey 입력"
}
```

### 2) index.html 내에 apikey file 연결

```
<script type ="text/javascript" src="apikey.js"></scirpt>
```

### 3) `weather.js` (위치를 불러오고자 하는 파일)에 상수로 할당

```
const WEATHER_API = config.apikey;
```

### 4) .gitignore를 생성하고 apikey.js file 제외


Fetch 실습 예제

인자로써 URL을 필수적으로 가짐

**url**  : 어느 backend서버로 요청을 보낼건지

options로 option 값을 가짐 

**option** : 보내게 되는 method, 태그에는 어떤 값을 넣을지, 정보를 줘야한다면 body에 어떤 content를 넣어서 보내줄건지 정하는 인자

option은 안넣어도 가능! → get 메소드(정보 가져오기)만 가능

option을 통해 post로 바꾸게 된다면 body에 특정 content를 넣어 정보 전달도 가능

**fetch**는 **data를 주고 받는 과정**이다 보니 **시간**이 좀 걸리게 됨 → fetch를 쓰고나서 곧바로 진행 되는것이 아니기 때문에 fetch가 완료된 다음에 fetch의 response로 온 값을 보겠다. 

**“비동기적”**
