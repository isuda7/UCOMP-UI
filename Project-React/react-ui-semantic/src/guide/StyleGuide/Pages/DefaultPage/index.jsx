import React, {Component} from 'react'
import {Accordion, Icon} from "semantic-ui-react";

class DefaultPage extends Component {
    state = { activeIndex: null }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state
        return (
            <>
                {/*Rule*/}
                <Accordion className='g_accordion'>
                    <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                    >
                        <h2 className='g_h2'>기본환경 <Icon name='dropdown' /></h2>

                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <h3 className='g_h3'>프로젝트 환경</h3>
                        <div className='g_info_grid'>
                            <p className='g_info'>웹유형 : 모바일 하이브리드 웹, REACT 환경</p>
                            <p className='g_info'>웹언어 : HTML5, CSS3, ECMA6</p>
                            <p className='g_info'>마크업 : <a href='https://react.semantic-ui.com/' target='_blank' rel='noopener noreferrer' className='link'>semantic-ui-react 사용 (바로가기)</a></p>
                            <p className='g_info'>호환성 : 모바일 삼성, 크롬, 사파리 호환성 적용</p>
                            <p className='g_info'>디자인 : 360 해상도 기준</p>
                        </div>

                        <h3 className='g_h3'>폴더/파일 구조</h3>
                        <ul className='g_info_grid'>
                            <li className='g_info'>/assets/ : 기본파일
                                <ul className='g_info_list'>
                                    <li className='g_info'>./fonts/ : 웹폰트</li>
                                    <li className='g_info'>./images/ : 이미지
                                        <ul className='g_info_list'>
                                            <li className='g_info'>./ : 모든 이미지</li>
                                            <li className='g_info'>./demo/ : 데모 이미지</li>
                                            <li className='g_info'>./temp/ : 임시 이미지</li>
                                        </ul>
                                    </li>
                                    <li className='g_info'>./scss/ : 스타일</li>
                                </ul>
                            </li>
                            <li className='g_info'>/components/ : 전역공통 컴포넌트
                                <ul className='g_info_list'>
                                    <li className='g_info'>[...사용자정의 컴포넌트]</li>
                                </ul>
                            </li>
                            <li className='g_info'>/guide/ : 퍼블리싱 가이드
                                <ul className='g_info_list'>
                                    <li className='g_info'>./PageList/ : IA 현환판</li>
                                    <li className='g_info'>./Prototype/ : 유형별 템플릿</li>
                                    <li className='g_info'>./StyleGuide/ : 유형별 컴포넌트</li>
                                </ul>
                            </li>
                            <li className='g_info'>/layout/ : 사이트 레이아웃
                                <ul className='g_info_list'>
                                    <li className='g_info'>./components/ : 레이아웃 공통 컴포넌트</li>
                                    <li className='g_info'>./LayoutGuide/ : 가이드 레이아웃</li>
                                    <li className='g_info'>./LayoutMain/ : 메인 레이아웃</li>
                                    <li className='g_info'>./LayoutSub/ : 서브 레이아웃</li>
                                </ul>
                            </li>
                            <li className='g_info'>/semantic-ui/ : 프레임워크 UI
                                <ul className='g_info_list'>
                                    <li className='g_info'>[...유형별 컴포넌트 스타일]</li>
                                </ul>
                            </li>
                            <li className='g_info'>/view/ : 페이지
                                <ul className='g_info_list'>
                                    <li className='g_info'>./Login/ : 로그인</li>
                                    <li className='g_info'>./Onboard/ : 온보드</li>
                                    <li className='g_info'>./MyHome/ : 마이홈</li>
                                    <li className='g_info'>./Category/ : 학습전체</li>
                                    <li className='g_info'>./Recom/ : 추천</li>
                                    <li className='g_info'>./Community/ : 커뮤니티</li>
                                    <li className='g_info'>./More/ : 더보기</li>
                                    <li className='g_info'>./Search/ : 검색</li>
                                    <li className='g_info'>./Learning/ : 학습</li>
                                </ul>
                            </li>
                        </ul>

                    </Accordion.Content>

                    <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                    >
                        <h2 className='g_h2'>표준규칙 <Icon name='dropdown' /></h2>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <h3 className='g_h3'>기본규칙</h3>
                        <p className="g_info">HTML5 버전으로 작성한다.</p>
                        <p className="g_info">UTF-8 인코딩을 사용한다.</p>
                        <p className="g_info">W3C Validator 표준 규칙을 준수한다.</p>

                        <h3 className='g_h3'>특수기호</h3>
                        <table className='ui table'>
                            <caption>주의 해야할 특수기호</caption>
                            <tbody>
                                <tr>
                                    <td>&middot;&nbsp;&nbsp;:&nbsp;&nbsp;&amp;middot;</td>
                                    <td>&#47;&nbsp;&nbsp;:&nbsp;&nbsp;&amp;#47;</td>
                                    <td>&quot;&nbsp;&nbsp;:&nbsp;&nbsp;&amp;quot;</td>
                                    <td>&amp;&nbsp;&nbsp;:&nbsp;&nbsp;&amp;amp;</td>
                                </tr>
                                <tr>
                                    <td>&lt;&nbsp;&nbsp;:&nbsp;&nbsp;&amp;lt;</td>
                                    <td>&gt;&nbsp;&nbsp;:&nbsp;&nbsp;&amp;gt;</td>
                                    <td>&#40;&nbsp;&nbsp;:&nbsp;&nbsp;&amp;#40;</td>
                                    <td>&#41;&nbsp;&nbsp;:&nbsp;&nbsp;&amp;#41;</td>
                                </tr>
                                <tr>
                                    <td>&#91;&nbsp;&nbsp;:&nbsp;&nbsp;&amp;#91;</td>
                                    <td>&#93;&nbsp;&nbsp;:&nbsp;&nbsp;&amp;#93;</td>
                                    <td>&#123;&nbsp;&nbsp;:&nbsp;&nbsp;&amp;#123;</td>
                                    <td>&#125;&nbsp;&nbsp;:&nbsp;&nbsp;&amp;#125;</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>HTML Validator 및 React Code를 고려한 최소 항목임.</p>
                        <p>특수문자 참조 URL <a href="http://kor.pe.kr/util/4/charmap2.htm" className='g_link' target='_blank' rel='noopener noreferrer'>새창 바로가기</a> </p>

                        <h3 className='g_h3'>마크업/컴포넌트</h3>
                        <h4 className='g_h4'>Heading</h4>
                        <ul>
                            <li className='g_info'>h1 : 헤더 제목</li>
                            <li className='g_info'>h2 : 본문 섹션단위 상위 제목</li>
                            <li className='g_info'>h3 ~ h5 : 작업자의 판단으로 사용함.</li>
                            <li className='g_info'>본문에서 h2로 시작하여 스크롤시 헤더에 적용되는 케이스를 주의한다.</li>
                        </ul>
                        <h4 className='g_h4'>Section</h4>
                        <ul>
                            <li className='g_info'>&lt;section&gt; 태그는 반드시 Heading이 포함되어야 한다.</li>
                        </ul>
                        <h4 className='g_h4'>Button</h4>
                        <ul>
                            <li className='g_info'>type='button'(기본) / type='submit' 선택적으로 반드시 적용한다.</li>
                        </ul>
                        <h4 className='g_h4'>Icon Button</h4>
                        <ul>
                            <li className='g_info'>Icon대신 button::before, button::after에 적용</li>
                            <li className='g_info'>고정 사이즈 또는 패딩을 통해 터치영역을 확보한다.</li>
                        </ul>
                        <h4 className='g_h4'>Icon Only</h4>
                        <ul>
                            <li className='g_info'>버튼이 아닌 경우에 Icon 사용함</li>
                        </ul>
                        <h4 className='g_h4'>Segment</h4>
                        <ul>
                            <li className='g_info'>PC에서 섹션개념으로 사용하였는데, 글상자 UI 용도로 사용되어야 함.</li>
                        </ul>
                        <h4 className='g_h4'>Image</h4>
                        <ul>
                            <li className='g_info'>alt 를 반드시 적용한다.</li>
                        </ul>
                        <h4 className='g_h4'>Anchor</h4>
                        <ul>
                            <li className='g_info'>도매인 내 링크는 라우터와 연동되어야 하므로 &lgt;Link&gt; 로 사용한다.</li>
                            <li className='g_info'>도매인 외 링크는 &lgt;a&gt;태그 사용시 rel='noopener noreferrer'를 적용한다.</li>
                        </ul>
                    </Accordion.Content>

                    <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                    >
                        <h2 className='g_h2'>코드규칙 <Icon name='dropdown' /></h2>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <h3 className='g_h3'>공통</h3>
                        <ul>
                            <li className='g_info'>들여쓰기 : 1탭 - 공백 4칸 으로 맞춘다.</li>
                            <li className='g_info'>공백삭제 : Trim Trailing Whitespace 항목을 체크한다.</li>
                            <li className='g_info'>빈줄추가 : 가독성을 위해 빈 줄을 추가할 수 있으나 1줄을 초과하지 않는다.</li>
                        </ul>
                        <h3 className='g_h3'>HTML</h3>
                        <h4 className='g_h4'>주석표기</h4>
                        <ul className='g_info_grid'>
                            <li className='g_info'>기본주석
                                <code className='g_code'>
                                    &#123;/* 영역주석 */&#125;<br/>
                                    &lt;div&gt;<br/>
                                    <i />주석이 시작과 끝에 있고, 영역을 표시한다.<br/>
                                    &lt;/div&gt;<br/>
                                    &#123;/* // 영역주석 */&#125;
                                </code>
                            </li>
                            <li className='g_info'>조건주석
                                <code className='g_code'>
                                    &#123;/* Case 로그인후 */&#125;<br/>
                                    &lt;div&gt;<br/>
                                    <i />Case 를 표기한다.<br/>
                                    &lt;/div&gt;<br/>
                                    &#123;/* //Case 로그인후 */&#125;
                                </code>
                            </li>
                            <li className='g_info'>기록주석
                                <code className='g_code'>
                                    &#123;/* 22-04-10 구조수정 상세내용 */&#125;<br/>
                                    &lt;div&gt;<br/>
                                    <i />날짜 형식을 맞추고 내용을 표시한다.<br/>
                                    &lt;/div&gt;<br/>
                                    &#123;/* //22-04-10 구조수정 상세내용 */&#125;
                                </code>
                            </li>
                            <li className='g_info'>설명주석
                                <code className='g_code'>
                                    &#123;/* 한 줄 설명 */&#125;<br/>
                                    &#123;/*<br />
                                    <i />제목 : 닫기 주석이 없다.<br />
                                    <i />제목 : 여러 줄은 들여쓰기 적용한다.<br />
                                    */&#125;<br/>
                                </code>
                            </li>
                        </ul>
                        <h4 className='g_h4'>속성 선언순서</h4>
                        <ul className='g_info_list'>
                            <li className='g_info'>필수속성 : href, src, type 등 반드시 선언하는 속성</li>
                            <li className='g_info'>중요속성 : name, id, title, alt, target 등 값이 고정되는 속성</li>
                            <li className='g_info'>상태속성 : aria-, class, checked 등 꾸미거나 자주 변하는 속성</li>
                            <li className='g_info'>중요도의 우선순위 분류이며 순서대로 권장한다.</li>
                        </ul>

                        <h3 className='g_h3'>CSS</h3>
                        <h4 className='g_h4'>코드작성</h4>
                        <ul>
                            <li className='g_info'>코드정렬 : 속성별로 선형화 한다.</li>
                            <li className='g_info'>기록주석 : 날짜형식 22-04-10 으로 적용한다.</li>
                            <li className='g_info'>작은따옴표 : 폰트명, 이미지경로 등 표기시 사용한다.</li>
                            <li className='g_info'>공통선택자 : * 는 가급적 사용하지 않는다.</li>
                        </ul>
                        <h4 className='g_h4'>속성 선언순서</h4>
                        <ul>
                            <li className='g_info'>레이아웃 : position, display, float 등 배치 스타일</li>
                            <li className='g_info'>크기간격 : width, height, margin, padding 등 사이즈 스타일 </li>
                            <li className='g_info'>박스모양 : background, border 등 영역 스타일</li>
                            <li className='g_info'>문단모양 : 글자, 문단 등 Context 스타일</li>
                            <li className='g_info'>인터렉션 : Opacity, Transform, Transition, Animteiton 등</li>
                            <li className='g_info'>중요도의 우선순위 분류이며 순서대로 권장한다.</li>
                        </ul>

                    </Accordion.Content>

                    <Accordion.Title
                    active={activeIndex === 3}
                    index={3}
                    onClick={this.handleClick}
                    >
                        <h2 className='g_h2'>설계규칙 <Icon name='dropdown' /></h2>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                        <h3 className='g_h3'>React</h3>
                        <h4 className='g_h4'>공통</h4>
                        <ul>
                            <li className='g_info'>함수방식, 클래스방식 선택적이라면 함수방식을 기본으로 한다.</li>
                            <li className='g_info'>라이브러리 사용시에는 가이드 되어있는 방식을 따른다.</li>
                            <li className='g_info'>함수방식이 가벼우며 React Hook등 가급적 동일한 방식으로 한다.</li>
                        </ul>
                        <h4 className='g_h4'>Layout</h4>
                        <ul>
                            <li className='g_info'>메인, 서브메인, 서브(대메뉴별) 기준으로 템플릿을 구분한다.</li>
                            <li className='g_info'>헤더 구성은 다양하므로 props를 통해서 적용 한다.</li>
                        </ul>
                        <h4 className='g_h4'>Pages</h4>
                        <ul>
                            <li className='g_info'>한 페이지에 모든 케이스를 제작한다. </li>
                            <li className='g_info'>테스트 케이스는 파라미터로 구분한다.</li>
                            <li className='g_info'>중복파일, 컴파일, 유지관리 등을 간결하게 한다.</li>
                            <li className='g_info'>참고 블로그 <a href='https://velog.io/@wjd489898/ReactURL-%EC%A0%95%EB%B3%B4%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0matchuseParams' target='_blank' rel='noopener noreferrer' className='g_link'>새창 바로가기</a></li>
                        </ul>
                        <h4 className='g_h4'>Components</h4>
                        <ul>
                            <li className='g_info'>프레임웍 컴포넌트 : Semantic-UI</li>
                            <li className='g_info'>전역공통 컴포넌트 : /src/conponents/ (하단버튼, 검색형인풋, NoData 등)</li>
                            <li className='g_info'>지역공통 컴포넌트 : /src/views/메뉴별/components/ (메뉴별 공통 컨텐츠)</li>
                            <li className='g_info'>페이지별 컴포넌트 : 페이지폴더 내에 섹션단위로 컨텐츠별 컴포넌트 제작</li>
                        </ul>
                        <h3 className='g_h3'>SCSS</h3>
                        <ul>
                            <li className='g_info'>모든 폰트 스타일은 부모의 상속을 받아야 한다.</li>
                            <li className='g_info'>@Import 되는 파일명은 _(언더바)로 시작한다. (예: _variables.scss)</li>
                            <li className='g_info'>@Import 할때는 이름만 호출한다. (예: @import '../../assets/scss/variables';)</li>
                            <li className='g_info'>변수는 수동으로 호출해야 하는 환경이므로 모든 scss 파일에서 @import 한다.</li>
                            <li className='g_info'>variables, mixins 두 개를 호출한다. (/layouts/LayoutSub/style.scss 참고)</li>
                        </ul>
                    </Accordion.Content>

                    <Accordion.Title
                    active={activeIndex === 4}
                    index={4}
                    onClick={this.handleClick}
                    >
                        <h2 className='g_h2'>네임규칙 <Icon name='dropdown' /></h2>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4}>
                        <h3 className='g_h3'>표기법</h3>
                        <h4 className='g_h4'>Page/Folder/Component</h4>
                        <p className='g_info'>카멜표기법 : 대문자로 시작하는 카멜표기법 사용 (예: CamelName)</p>
                        <h4 className='g_h4'>Image</h4>
                        <p className='g_info'>디자인팀에서 스케치에 정의한 파일명 그대로 사용한다.</p>
                        <h4 className='g_h4'>ClassName</h4>
                        <p className='g_info'>Semantic UI : Single Naming (예: ui button primary)</p>
                        <p className='g_info'>Librarys UI : Hyphen Naming (예: swiper-container)</p>
                        <p className='g_info'>Custom UI : Underbar Naming (예: main_event_sec)</p>
                        <h4 className='g_h4'>ID</h4>
                        <p className='g_info'>카멜표기법 : 소문자로 시작하는 카멜표기법 사용 (예: camelName)</p>
                        <h4 className='g_h4'>SCSS Variable</h4>
                        <p className='g_info'>카멜표기법 : 소문자로 시작하는 카멜표기법 사용 (예: camelName)</p>

                        <h3 className='g_h3'>방법론</h3>
                        <ul>
                            <li className='g_info'>기본적으로 SMACSS 방식을 사용한다. (참고 URL <a href="https://blog.illunex.com/20201106-2/" target='_blank' rel='noopener noreferrer' className='g_link'>새창 바로가기</a>)</li>
                            <li className='g_info'>예외적으로 OOCSS 방식을 사용하며 유틸리티로 부르겠음. (참고 URL <a href="https://blog.illunex.com/css-%eb%b0%a9%eb%b2%95%eb%a1%a0-oocss/" target='_blank' rel='noopener noreferrer' className='g_link'>새창 바로가기</a>)</li>
                        </ul>

                        <h3 className='g_h3'>표기형식</h3>
                        <ul>
                            <li className='g_info'>체인선택자 조건으로만 사용되는 클래스는 [Single] 형식으로 사용한다. (예: primary)</li>
                            <li className='g_info'>독립적으로 선언할 수 있는 클래스는 [Prefix]_[Suffix] 형식으로 사용한다. (예: myhome_wrapper)</li>
                            <li className='g_info'>반복되는 것과, 변경되는 것을 구분하여 표기법을 적용한다.
                                <ul className='g_info_list'>
                                    <li className='g_info'>올바른 예: .sec, .sec_head, .sec_body</li>
                                    <li className='g_info'>올바른 예: .m_0, .m_t0, .ma_t0, .mar_b0</li>
                                    <li className='g_info'>잘못된 예: .m0, .mt_0, .mat_0, .marb_0</li>
                                </ul>
                            </li>
                            <li className='g_info'>상태 클래스는 [Prefix]_[Suffix] 형식으로 사용한다.
                                <ul className='g_info_list'>
                                    <li className='g_info'>존재여부: has_[Suffix] (예: has_btn)</li>
                                    <li className='g_info'>상태유무: is_[Suffix] (예: is_active)</li>
                                </ul>
                            </li>
                        </ul>
                        <h3 className='g_h3'>예약어</h3>
                        <h4 className='g_h4'>Layout</h4>
                        <ul>
                            <li className='g_info'>[예약어]_wrapper [카테고리명]_wrapper
                                <ul className='g_info_list'>
                                    <li className='g_info'>main_wrapper</li>
                                    <li className='g_info'>sub_wrapper</li>
                                    <li className='g_info'>sub_wrapper myhome_wrapper</li>
                                    <li className='g_info'>sub_wrapper category_wrapper</li>
                                </ul>
                            </li>
                            <li className='g_info'>header</li>
                            <li className='g_info'>container [페이지명]_container
                                <ul className='g_info_list'>
                                    <li className='g_info'>content_head (필요여부에 따라 사용)</li>
                                    <li className='g_info'>content_body (다수의 컨텐츠섹션을 포함)</li>
                                    <li className='g_info'>content_foot (필요여부에 따라 사용)</li>
                                </ul>
                            </li>
                            <li className='g_info'>footer</li>
                        </ul>
                        <h4 className='g_h4'>Division</h4>
                        <ul>
                            <li className='g_info'>전체영역: _wrapper, _wrap (예: myhome_wrapper)</li>
                            <li className='g_info'>본문영역: _container (예: profile_container)</li>
                            <li className='g_info'>섹션영역: _sec (예: main_event_sec)</li>
                            <li className='g_info'>지역영역: _area (예: btn_area)</li>
                            <li className='g_info'>반복영역: _list, _group (예: ul.card_list, div.btn_group)</li>
                        </ul>
                    </Accordion.Content>
                </Accordion>
            </>
        )
    }
}
export default DefaultPage
