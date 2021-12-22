# (Lotte ON) 11번가 출점 RestAPI 개발 정리 (3일차)

#### JAVA 

1. Service.java  

   ```java
    
   public Object getXiSampleCategoryList(XiSampleSearchDTO xiSampleSearchDTO) throws Exception;
   
   ```
  - ServiceImpl 티어  Override 준비를 위해 메서드 작성해줍니다. 
  - 파라미터의 경우 기존 Controller에서 세팅한 DTO 객체를 받아줍니다 


2. ServiceImpl.java 

   ```java
     
    @Override
    public Object getXiSampleCategoryList(XiSampleSearchDTO xiSampleSearchDTO) throws Exception{

        Object object = null;

        String receiveMessage = RestAPIXiUtil.getInstance().sendRestCall(APIUrlXiConstant.XI_API_SAMPLE_CATEGORY_GET, HttpMethodXiType.GET, xiSampleSearchDTO, XiConstant.API_TIME_OUT, Constant.CONTEXT_TYPE_XML, XiConstant.XI_API_SAMLE_CATEGORY_KEY, XiConstant.XI_API_SAMPLE_GROUP_KEY);
        
        if(receiveMessage == null || receiveMessage.substring(0,100).indexOf("ErrorResponse") > 0 ){
            CommonXiResponseBody commonXiResponseBody = new CommonXiResponseBody();
            commonXiResponseBody.setResultCode("9000");
            commonXiResponseBody.setResultMessage("조회 에러입니다.");
            object = commonXiResponseBody;
        }else{
            System.out.println(receiveMessage);
            ObjectMapper objectMapper = new XmlMapper();
            XiSampleCategoryVOS xiSampleCategoryVOS = objectMapper.readValue(receiveMessage, XiSampleCategoryVOS.class);
            object = xiSampleCategoryVOS;
            return object;
    }
   ```
   - String recevieMessage의 경우 다음 개발정리에서 더 자세히 다룰 예정으로 11번가에 request 후 
     돌아오는 문자열을 할당해준다. 
   - 만약 receiveMessage가 null 이거나 해당 문자열에 "ErrorResponse" 가 포함되어 있을 경우 
     CommonXiResponseBody에 '9000' 코드번호와 '조회 에러입니다' 메시지를 세팅한다 
   - object 변수에 CommonXiResponseBody 객체 세팅 
   - 만약 에러가 나지 않고 값이 있을 경우에는 XiSampleCategoryVOS에 xml을 readValue 메서드를 통해 xml을 해당 클래스 객체로 변화 후 변수에 할당한다.
   - object 리턴 



3.CommonResponseBoyd.java  

```java
    
    public class CommonXiResponseBody implements Serializable {

    private static final long serialVersionUID = 7608359289475654913L;

    public CommonXiResponseBody(){

    }

    public CommonXiResponseBody(String resultCode, String resultMessage){
        this.resultCode = resultCode;
        this.resultMessage = resultMessage;
    }

    @Setter
    @Getter
    private String resultCode = "0000";

    @Setter
    @Getter
    private String resultMessage = "success";


}
   ```
 - 객체 직렬화에 대한 부분도 차 후에 더 자세히 다룰 예정 

<br>
<br>
<br>
<br>
<br>

##### - 개발정리 4일차에 XiSampleCategoryVOS, sendRestCall 이어서 작성 합니다. - 

