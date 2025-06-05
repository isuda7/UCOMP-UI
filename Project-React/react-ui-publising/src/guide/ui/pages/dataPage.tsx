'use client';

import React from 'react';

const DataPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Data</h1>
					</div>
                    {/* section */}
					<section className="g-section inner">
						<div className="g-section-header">
							<h2 className="g-h2">System</h2>
						</div>
						<div className="g-section-body">
							<h3 className="g-h3">규칙</h3>
							<div className="g-tbl-type1">
								<table>
									<colgroup>
                                    <col style={{ width: '20%' }} />
										<col />
									</colgroup>
									<tbody>
										<tr>
											<th className="align-l">기본</th>
											<td className="align-l">
												<code className="g-code-label">data-*</code>, 
												<code className="g-code-label">data-bui-*</code>, 
												<code className="g-code-label">tbl</code>
											</td>
										</tr>
										<tr>
											<th className="align-l">모듈</th>
											<td className="align-l"><code className="g-code-label">module-*</code></td>
										</tr>
										<tr>
											<th className="align-l">옵션</th>
											<td className="align-l">
											<code className="g-code-label">[기호]</code>,
												<code className="g-code-label">[숫자]</code>,
												<code className="g-code-label">[영문]</code>,
												<code className="g-code-label">[한글]</code>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h3 className="g-h3">옵션</h3>
							<h4 className="g-h4">텍스트 블릿</h4>
							<h5 className="g-h5">기호</h5>
							<ul className="data-bul-text dash">
								<li>블릿리스트: dash</li>
							</ul>
							<ul className="data-bul-text bill">
								<li>블릿리스트: bill</li>
							</ul>
							<ul className="data-bul-text star">
								<li>블릿리스트: star</li>
							</ul>
							<ul className="data-bul-text bar">
								<li>블릿리스트: bar</li>
							</ul>
							<h5 className="g-h5">숫자</h5>
							<ul className="data-bul-text num1">
								<li>블릿리스트: num1</li>
							</ul>
							<ul className="data-bul-text num2">
								<li>블릿리스트: num2</li>
							</ul>
							<ul className="data-bul-text num3">
								<li>블릿리스트: num3</li>
							</ul>
							<ul className="data-bul-text num4">
								<li>블릿리스트: num4</li>
							</ul>

							<h5 className="g-h5">영문</h5>
							<ul className="data-bul-text eng1">
								<li>블릿리스트: eng1</li>
							</ul>
							<ul className="data-bul-text eng2">
								<li>블릿리스트: eng2</li>
							</ul>
							<ul className="data-bul-text eng3">
								<li>블릿리스트: eng3</li>
							</ul>
							<ul className="data-bul-text eng4">
								<li>블릿리스트: eng4</li>
							</ul>

							<h5 className="g-h5">한글</h5>
							<ul className="data-bul-text kor1">
								<li>블릿리스트: kor1</li>
							</ul>
							<ul className="data-bul-text kor2">
								<li>블릿리스트: kor2</li>
							</ul>
							<ul className="data-bul-text kor3">
								<li>블릿리스트: kor3</li>
							</ul>
							
						</div>
					</section>
					{/* // section */}
					{/* section */}
					<section className="g-section inner">
						<div className="g-section-header">
							<h2 className="g-h2">Modules</h2>
						</div>
						<div className="g-section-body">
							{/* data-para */}
							<h3 className="g-h3">data-para</h3>
							<div>
								<h4 className="g-h4">module-a</h4>
								<div className="data-para module-a">
									<p>전용 색상은 포스코그룹의 브랜드 이미지를 차별화시키는 또 하나의 중요한 수단으로서 지정된 색상을 지속적으로 정확하게 사용하는 것이 중요합니다. 인쇄매체 적용 시 색상의 표현은 별색 인쇄를 원칙으로 하며 가이드에 수록된 Pantone Color 또는 4원색 Process Color를 표준으로 삼습니다.</p>
								</div>
							</div>
							{/* // data-para */}

							{/* data-bul-shape */}
							<h3 className="g-h3">data-bul-shape</h3>
							<h4 className="g-h4">module-a</h4>
							<ul className="data-bul-shape module-a">
								<li>블릿리스트 : shape module-a</li>
							</ul>
							{/* // data-bul-shape */}

							{/* data-bul-text */}
							<h3 className="g-h3">data-bul-text</h3>
							<h4 className="g-h4">module-a</h4>
							<ul className="data-bul-text num1 module-a">
								<li>
									블릿리스트: Number Type 1
									<ul className="data-bul-text dash module-a">
										<li>블릿리스트: Symbol Type Dash</li>
									</ul>
								</li>
							</ul>
							{/* // data-bul-text */}

							{/* data-bul-icon */}
							<h3 className="g-h3">data-bul-icon</h3>
							<h4 className="g-h4">module-a</h4>
							<ul className="data-bul-icon module-a">
								<li><i className="icn icn-14-demo-info-wh"></i>블릿리스트: Icon module-a</li>
							</ul>
							<h4 className="g-h4">module-b</h4>
							<ul className="data-bul-icon module-b">
								<li><i className="icn icn-16-demo-info-gr"></i>블릿리스트: Icon module-b</li>
							</ul>
							{/* // data-bul-icon */}

							<h3 className="g-h3">tbl</h3>
							<h4 className="g-h4">module-a</h4>
							<h5 className="g-h5">좌측제목</h5>
							<div className="tbl module-a">
								<table>
									<caption>
										<strong>제목 요약</strong>
										<p>이 표는 셀제목1, 셀제목2, 셀제목3, 셀제목4 로 구성되었습니다.</p>
									</caption>
									<colgroup>
										<col style={{ width: '25%' }} />
										<col style={{ width: 'auto%' }} />
									</colgroup>
									<tbody>
										<tr>
											<th scope="row">타이틀 1</th>
											<td>내용 왼쪽 정렬</td>
										</tr>
										<tr>
											<th scope="row">타이틀 2</th>
											<td>내용 왼쪽 정렬</td>
										</tr>
										<tr>
											<th scope="row">타이틀 3</th>
											<td>내용 왼쪽 정렬</td>
										</tr>
										<tr>
											<th scope="row">타이틀 4</th>
											<td>내용 왼쪽 정렬</td>
										</tr>
									</tbody>
								</table>
							</div>
							
						</div>
					</section>
					{/* // section */}
				</div>
			</div>
		</main>
        // Container
    );
};

export default DataPage;