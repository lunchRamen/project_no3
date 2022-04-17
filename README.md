### 새로운 화장품을 살때마다 겪었던 고민들을 해결해주기 위해 화장품들의 특성을 보기 쉽게 알려주고, 원하는 화장품의 특징을 쉽게 알수 있게 도와주는 화장품 어드바이저입니다.

역할:BE

백엔드 파트 설명
- 새로운 Python Web Framework인 FastAPI를 사용하였습니다.
- Dockerfile, docker-compose(+dev)로 각 컨테이너단에 도커파일 작성과 그걸 통합해서 실행시켜주는 도커 컴포즈를 작성하였고, 배포환경과 개발환경의 분리까지 진행하였습니다.
- SQLAlchemy ORM을 이용, 데이터 테이블을 짰고,각 테이블별 relation설정 및 N:M 매핑이 된 테이블을 orm에서 쉽게 실행 할 수 있도록 assosication_table을 만들어 관리하였습니다.
- pydantic 라이브러리를 이용, serialize,deserialize,data validation, data custom을 자동 지원하게끔 schemas.py를 작성하여 request와 response JSON data들을 다뤘습니다.
- FastAPI의 DI를 이용, request와 response를 pydantic의 schema형태로 자동으로 검사해서 넘겨받고 자동으로 검사해서 넘겨주는 형태로 구현했습니다.
- SQLAlchemy에 get_db를 만든다음, orm의 Session타입을 DI로 만들어서 넣어줘 db의 sessionmaker(connection)을 자동으로 만들고, 자동으로 끊어주게끔 구현했습니다.
- routers와 repository 디렉토리로 라우터함수와 동작함수의 계층화를 만들었습니다. 그로인해 보다 클린코드를 구현하기 위해 노력했습니다.


개발 파트 설명
- 검색페이지,상세페이지,추천페이지를 구현하였습니다.
- 검색페이지의 경우 다양한 변인을 통한 상세한 검색기능(가격,출시일,이름순 정렬 , 키워드 검색 , 카테고리 검색, 성분검색)을 구현하였습니다.
- 상세페이지의 경우 해당 화장품에 포함된 여러개의 테이블을 묶어 데이터로 전달해줄 수 있도록 구현하였습니다.
- 추천페이지의 경우 AI에서 딥러닝을 통해 받아온 데이터를 DB에 맞게끔 가공한 후, FE가 원하는 데이터에 맞게끔 전달해 줄 수 있도록 구현하였습니다.
