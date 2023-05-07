

// 🔷 서버 기초 설정
    // express 모듈 가져오기
        const express = require("express");

    // 서버 인스턴스 만들기 
        const app = express();


// 🔷 서버사이드 렌더링(?) 위한 기본 설정? 
    // 내장모듈 path 
        const path = require("path");

    // view 엔진이 '렌더링 할 템플릿 파일'의 '소스 경로 변경'
        app.set("views" , path.join(__dirname , "page"))

        // [view 엔진 설명]
            // express에서 서버사이드 렌더링을 지원하기위해 view엔진을 사용한다.
            // view엔진이 템플릿 파일을 보여주는 역할을 해줌
            // 템플릿 폴더를 가져오는 기본값은 views: 'C:\\Users\\KGA\\Desktop\\20230504\\views'로 경로가 지정
                // 어떻게 확인 ❓❓❓ 서버를 돌려서 확인했던 것 같은데 

        // [템플릿 파일 이란?] ❓❓❓❓❓
            // 음.. ejs 도 하나 인거 같은데 음. 

    // 'view 엔진'으로 'ejs' 를 사용할 수 있게 설정 
        app.set("view engine" , "ejs");
            // [사전 작업] : ejs 설치 
                // npm install ejs
            // [주의할 점]
                // 처음 ejs 를 사용하므로, npm install ejs 설치 해야 함  
    
    // express 에서 body-Parser 를 지원 -> 따라서, body-Parser 생략 
        // body-Parser 가 어떤 기능을 하지❓❓❓❓❓ 

    // 이게 어디에 왜 쓰이지❓❓❓❓❓ 
        app.use(express.urlencoded({extended : false}));
            // 깊은 객체를 지원할지, 안 할지. 
            // 확장된 모듈 사용할지 여부 : false 는 기본만 사용하기 
            // 권장은 false ! 


// 🔷 sql 연결 
    // 모듈 가져오기
        const mysql2 = require("mysql2");

    // mysql 과 연결 
        const _mysql = mysql2.createConnection({
            user : "root",  // 별일 없으면 root 로 작성
            password : "mysqlpwdj",  // mysql pw 기재
            database : "test2",  // 연결할 스키마 이름 기재
        
            multipleStatements : true 
                // 다중 쿼리문 사용할 수 있는 옵션 
                // 각각의 쿼리문을 ; 로 구분하게 됨.  
        })



// 📚 페이지, 요청타입 별 처리 

    // '/' 페이지 | GET 요청 | render 처리  
    app.get('/' , (req, res) => {
        res.render("main")
    })
        // [구문 해석]
            // app | 서버라는 프로그램이 있다.  
            // get | 누군가, app 한테 get 이라는 형태의 요청을 한다. 
                // 요청을 한다는게, 컴퓨터 상에서는 어떻게 이루어지는거지?
            // '/' | 어떤 주소에 대해서? 어떤 데이터에 대해서? 주소가 맞나? 
                // / 이라는 주소에 대해서 
            // (req, res) | 구체적으로 요청 내용이 뭐야? 
                // req 는 요청한 쪽의 구체적인 요청 내용을 표현하는 매개변수임. 
                // res 는 요청을 처리하고, 난 다음, 이 변수(객체?) 를 활용해서 보냄 
                    // res 자체는 보내는데 활용 ❓❓ 
            // res.render("main")
                // res 라는 객체가 어딘가에서 만들어짐 
                // 그 안에 res.render 라는 메소드가 있음. 
                // res.render 메소드의 기능 
                    // 1) Express에게 (⭐ 서버사이드의 근거)
                    // 2) views 파일에 해당하는 "main"  를 찾아 렌더링하고 
                    // 3) 필요한 경우 템플릿을 동적 데이터와 결합 하고 
                    // 4) 그 결과를 HTML을 다음과 같이 클라이언트에 전송하도록 지시함. 

        // [그 다음 벌어지는 일]
            // 1) 렌더링 시켜야 하는 main 파일 이 어디있는지 찾아야 한다. 
            // 2) 그러면, '찾을 수 있는 뭔가' 가 있어야 한다. 어떻게 main 파일을 찾지? 
                // a) app.set("views" , path.join(__dirname , "page")) 으로 렌더할 파일 찾을 경로를 'views 폴더' 에서 'page 폴더'로 변경 
                // b) 


    // signup 페이지 들어왔을 때 > 000 보이게 하기 
    app.get('/signup' , (req, res) => {
        res.render("signup");
    })
    
    // login 페이지 들어왔을 때 > 000 보이게 하기 
    app.get('/login' , (req, res) => {
        res.render("login");
    })

    // list 페이지 들어왔을 때 > 000 보이게 하기 
    app.get('/list' , (req, res) => {
        res.render("list")
    })

    // insert(게시판 등록 페이지) 들어왔을 때 > 000 보이게 하기 
    app.get('/insert' , (req, res) => {
        res.render("insert")
    })
    
    // edit(게시판 편집 페이지) 들어왔을 때 > 000 보이게 하기 
    app.get('/edit' , (req, res) => {
        res.render("edit")
    })
    
    // delete(게시판 삭제 페이지) 들어왔을 때 > 000 보이게 하기 
    // app.get('/delete' , (req, res) => {
    //     // delete 페이지가 있어야 할거 같은데 없네? ❓❓❓❓❓ 
    // })




// 🔷 서버 대기 상태 
    // 포트 지정
        const PORT = 8090; 

    // app.listen
        app.listen(PORT, () => {

            console.log("서버 열림 🙌🙌")

        })



