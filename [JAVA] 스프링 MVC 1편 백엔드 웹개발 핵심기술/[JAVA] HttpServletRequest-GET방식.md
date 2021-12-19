# HTTP 요청 데이터 - 개요 

 HTTP 요청 메시지를 통해 클라이언트에서 서버로  데이터를 전달하는 방법은? 



#### 주로 다음 3가지 방법은 사용함

- ##### GET - 쿼리 파라미터 

- /url?username=chanho&age=30 

- 메시지 바디없이  URL 쿼리 파라미터에 데이터를 포함해서 전달 

- 예) 검색, 필터, 페이징에 GET 방식 많이 사용 



- ##### POST-HTML Form 

- content-type : application/x-www-from-urlencoded

- 메시지 바디에 쿼리 파라미터 형식으로 전달 username=chanho&age=30 

- 예) 회원가입, 상품주문, HTML Form 사용시 

- Body에 다양한 항목의 데이터를 전달할 시에 사용 



- ##### HTTP message body 에 데이터를 직접 담아서 요청 

- HTTP API에서 주로 사용, JSON, XML, TEXT 

- 데이터 형식은 주로 JSON 사용 

- POST, PUT, PATCH 







## HTTP 요청데이터 - GET 쿼리 파라미터 



데이터를 클라이언트에서 서버로 전송해보자 



전달 데이터 

- username = chanho
- age = 30 



메시지 바디 없이 URL의  쿼리 파라미터를 사용해서 데이터를 전달한다. 

예) 검색, 필터 페이징 에서 많이 사용하는 방식 



쿼리 파라미터는 URL 다음과 같이 ? 를 시작으로 보낸다. 추가적인 파라미터는 & 로 사이사이 구분한다.

http://localhost:8080/request-param?username=chanho&age=30 



서버에서는 HttpServletReqeust 객체를 통해 제공하는 메서드로 쿼리 파라미터를 편리하게 조회 가능! 





###  예제

```java
package hello.servlet.basic.request;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Enumeration;

/**
 * 1. 파라미터 전송 기능
 * http://localhost:8080/request-param?username=hello&age=20
 *
 */
@WebServlet(name = "requestParamServlet", urlPatterns = "/request-param")
public class RequestParamServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


       System.out.println("[전체 파라미터 조회] - start");

        request.getParameterNames().asIterator()
                .forEachRemaining(paramName -> System.out.println(paramName + "=" + 	request.getParameter(paramName)));

        System.out.println("[전체 파라미터 조회] - end");
        System.out.println();

        System.out.println("[단일 파라미터 조회]");
        String username = request.getParameter("username");
        String age = request.getParameter("age");

        System.out.println("username = " + username);
        System.out.println("age = " + age);
        System.out.println();

        System.out.println("[이름이 같은 복수 파라미터 조회]");
        String[] usernames = request.getParameterValues("username");
        for (String name : usernames) {
            System.out.println("username = " + name);
        }

        response.getWriter().write("ok");

    }
}

```



#####  실행 - 동일 파라미터 전송 

http://localhost:8080/request-param?username=chanho&age=30&username=kim



결과 

```
[전체 파라미터 조회] - start
username=chanho
age=30
[전체 파라미터 조회] - end

[단일 파라미터 조회]
username = chanho
age = 30

[이름이 같은 복수 파라미터 조회]
username = chanho
username = kim
```



#####  복수 파라미터에서 단일 파라미터 조회 

username=chanho&username=kim 과 같이 파라미터 이름은 하나인데 값이 중복 될 경우? 

reqeust.getParameter() 의 경우 하나의 파라미터 이름에 대해서 값은 하나만 있을 때 사용한다. 

지금처럼 중복일 때는 request.getParameterValues() 를 사용해야한다. 

참고로 이렇게 중복일 때 reqeust.getParamter() 를 사용하면 무조건 첫 번째 값을 반환한다. 