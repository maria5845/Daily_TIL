## HTTP 요청데이터 - POST HTML Form

출처 : 스프링 MVC 1편 - 백엔드 웹개발 핵심 기술 (김영한)

데이터를 클라이언트에서 서버로 전송해보자 



방법을 바꾸어서 GET 방식의 실습을 진행해 봤으니 form 형태에 

파라미터를 담아서 전송하는 Post 방식의 실습을 진행 해보자 



Post 방식은 주로 회원가입, 상품 주문 등에서 많이 사용합니다. 



##### 특징 

- content-type : application/x-www-form-urlencoded
- 메시지 바이뎅 쿼리 파라미터 형시으로 데이터를 전달한다. username=hello&age20 



###  src/main/webapp/basic/hello-form.html 생성 

```html
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <form action="/request-param" method="post">
        username : <input type="text" name="username"/>
        age : <input type="text" name="age"/>
        <button type="submit">전송</button>
    </form>
    </body>        
</html>
```



#####  실행해봅시다! 

http://localhost:8080/basic/hello-form.html



##### 주의 

웹 브라우저가 결과를 캐시하고 있어서, 과거에 작성했던 html 결과가 보이는 경우가 있습니다

웹 브라우저 재시작 하셔야 합니다 !! 



POST의 HTML Form을 전송하면 웹브라우저가 다음 형식으로 HTTP 메시지를 만든다. 

(개발자 모드에서 확인 가능!)













