Modal창에 PDF파일 띄워보기 
=============

![p1](./img/p1.jpg)



* 요구사항 
  1. 클릭하면 Modal 창이 나타나고 PDF 파일이 표출되도록 해야한다. 
  2.  PDF JS 와 PDF Object JS 를 사용하여 표출하도록 한다.
  3.  언어별로 다른 PDF 파일이 나타나야 된다.  



## Controller 

```java
	@RequestMapping(value = "temsPmPdfPop.do")
	public ModelAndView temsPdfPop() {
		ModelAndView mv = new ModelAndView();
		try {
			mv.addObject("viewName", "../../tems/pm/pdfpop/temsPmPdfPop");
			mv.setViewName("/custom/cwa/common/layout/mng_modal");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return mv;
	}
```

1. Modal 창을 띄워줄 MV를 하나 만들도록 한다. 



## JSP(1)

```javascript
function onPdfPop(){
	var lang = "${lang_cd_val}".toUpperCase();
	ClPopup.fnOnClickModalOpen('/custom/temsPmPdfPop.do','lang='+lang,800);
}
<p><a href="#" class="crsr-def" onclick="onPdfPop();"><span>HELP</span></a></p>
```

1. Modal 창을 불러낼 function을 하나 만든다. 

2.  var lang = "${lang_cd_val}".toUpperCase();  

   (언어별 다른 PDF 파일이 나타나야 하므로  ClPopup.fnOnClickModalOpen에 넘겨줄 언어코드를 담아주자)

3.  ClPopup.fnOnClickModalOpen('/custom/temsPmPdfPop.do','lang='+lang,800);

    (Url,넘겨 주고싶은 파라미터, 모달창의 크기) 값을 설정하면 자동으로 생성된다. 

4. onPdfPop() 을 연결해 줄  태그를 하나 만든다.







## JSP(2)

![p1](./img/p2.jpg)

1. Controller에서 작성한 경로로 .jsp / Js.jsp 파일 2개를 만들어 준다. 



### 1. temsPmPdfPop.jsp

![p1](./img/p3.jpg)

1. Modal 을 작성한다. 
2. id = "PDF"  태그에 PDF 파일이 보여질 예정이다. 

### 2. PDF JS & PDF Object JS 경로 

![p4](C:\Daily_TIL\Modal창에 PDF 띄워보기\img\p4.JPG)



1.  PDF JS 다운받는다. 경로(https://mozilla.github.io/pdf.js/getting_started/)

   (Example에 사용법까지 친절하게 나와있다. ) 

2. PDF Object.Js와 PDF Object.min.js 두개를 다운받는다 ( https://pdfobject.com/)

   (마찬가지로 해당페이지에 API가 자세하게 나와있다.)

3. 압축을 푼 뒤 Webcontent / resource / 경로에  맞게 PDF JS 및 PDF Object.Js 그리고 PDF Object.min.js 를 넣어준다. 

4. PDF 뷰어는 viewer.html 파일이고  pdfobject.min.js를 통해 컨트롤 하여 사용할 것이다. 
