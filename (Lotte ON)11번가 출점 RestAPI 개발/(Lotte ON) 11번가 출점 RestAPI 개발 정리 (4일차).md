# (Lotte ON) 11번가 출점 RestAPI 개발 정리 (4일차)

#### JAVA 

1. URLConnection & HttpURLConnection 

  - 프로젝트를 진행하는 중 java.net.HttpURLConnection 클래스를 자주 볼수 있었다. 
    해당 클래스에 대해 조금 더 자세히 정리하고자 정리를 작성하게 되었다. 
  - URL(대부분 HTTP 프로토콜 사용)을 통해 서버와 통신하는 java프로그램을 개발 하기
    위해서 URLConnection 및 HttpURLConnection 클래스를 사용한다. 예를 들어 파일,웹페이지 업로드 및 
    다운로드 , HTTP 요청 및 응답 전송 및 검색 등을 위한 코드 작성이 가능하다.
  - URLConnection 은 URL 간의 연결관련한 모든 클래스의 슈퍼클래스이다.
    HttpURLConnection의 경우 HTTP 고유의 기능에 대한 추가지원을 제공한 서브클래스이다.
  - URLConnection과 HttpURLConnection의 경우 둘다 추상 클래스 이다. (새 인스턴스 생성 불가)

2. URL을 통해 서버와 통신할 때 따르는 단계 
 - URL 객체 만들기 
 - URL 에서 URLConnection 객체 얻기
 - URL 연결 구성
 - 헤더 필드 읽기 
 - 입력 스트립 가져오기 및 데이터 쓰기 
 - 연결 닫기 

3. URL 객체 생성

다음과 같이 주어진 URL 주소에 대해 새 URL 객체를 생성한다. 
``` java
    URL url = new URL("http://www.google.com");
```
 해당 생성자의 경우 URL 형식이 잘못된 경우 IOException 하위 클래스인 MalformedURLException을 throw 한다. 

4. URL에서 URLConnection 객체얻기 

   URLConnection 인스턴스는 URL 객체의 openConnection()  메소드 호출에 의해 얻어짐
``` java
    URLConnection urlCon = url.openConnection();
```








<br>
<br>
<br>
<br>
<br>
<br>



##### - 개발정리 4일차에 XiSampleCategoryVOS, sendRestCall 이어서 작성 합니다. - 

