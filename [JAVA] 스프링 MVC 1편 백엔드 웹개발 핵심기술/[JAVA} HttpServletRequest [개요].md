# HttpServletRequest - 개요

강의출처 - 스프링 MVC 1편 백엔드 웹개발 핵심기술(인프런 김영한)



##### HttpServletRequest 역할 


HTTP 요청 메시지를 개발자가 직접 파싱해서 사용해도 되지만, 매우 불편하니까 서블릿을 사용

개발자가 HTTP 요청 메시지를 편리하게 사용할 수 있도록 개발자 대신에 HTTP 요청 메시지를 

파싱한다. 그리고 그결과를 HttpServletRequest 객체에 담아서 자바에서 사용할 수 있게 

제공해 준다. 



```java

public class ServletRoot{
    
  public void servletMain(HttpServletRequest  request) {
 		request.setAttribute(name,value);
        request.getAttribute(name,value);   
  }
    
}

```

-> 요런 객체 형태로 사용할 수 있다.



##### HTTP 요청 메시지  예시 

POST/ save HTTP / 1.1

Host: localhost:8080

Content-Type : application/x-www-form-urlencoded

username=kim&age=20





1.  POST / save HTTP / 1.1

    스타트 라인 이라고 하며 담긴 정보는 HTTP 메소드, URL, 쿼리스트링,  스키마와 프로토콜 

2.  Host: localhost:8080 Content-Type : application/x-www-form-urlencoded

    헤더정보 라고 한다. 

3.  username=kim&age=20

    바디 form 파라미터 형식 조히,  message body 데이터 직접 조히 



HttpServletRequest 객체는 추가로 여러가지 부가기능도 함께 제공한다. 



##### 임시 저장소 기능 

- 해당 HTTP 요청이 시작 부터 끝날 때 까지 유지되느 임시 저장소 기능 
- 저장 : request.setAttribute(name.value);
- 조회 : request.getAttribute(name);



##### 세션 관리 기능 

- request.getSession(create:true);



#### 중요 

HttpServletRequest , HttpServletResponse 를 사용할 때 가장 중요한 점은 이 객체들이 HTTP 요청 메시지, HTTP 응답 메시지 를 

편리하게 사용할 수 있도록 도와주는 객체라는 점이다. 따라서 기능에 대한 이해를 위해 HTTP 스펙이 제공하는 요청, 응답 메시지

에 대한 이해가 필요하다 





