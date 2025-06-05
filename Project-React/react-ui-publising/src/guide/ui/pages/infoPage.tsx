'use client';

import React from 'react';

const InfoPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Info</h1>
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
										<col style={{ width: '20%' }} />
										<col />
									</colgroup>
									
									<tbody>
										<tr>
											<th className="align-l">기본</th>
											<td className="align-l"><code className="g-code-label">info-*</code></td>
											<td className="align-l"></td>
										</tr>
										<tr>
											<th className="align-l" rowSpan={3}>유형</th>
											<td className="align-l">
												<p><code className="g-code-label">info-summary</code></p>
											</td>
											<td className="align-l">
												<p>본문 시작시 요약설명 제공</p>
											</td>
										</tr>
										<tr>
											<td className="align-l">
												<p><code className="g-code-label">info-tip</code></p>
											</td>
											<td className="align-l">
												<p>본문 중간에 부분설명 제공</p>
											</td>
										</tr>
										<tr>
											<td className="align-l">
												<p><code className="g-code-label">info-helper</code></p>
											</td>
											<td className="align-l">
												<p>본문 종료시 도움말 제공</p>
											</td>
										</tr>
										<tr>
											<th className="align-l">모듈</th>
											<td className="align-l"><code className="g-code-label">module-*</code></td>
											<td className="align-l"></td>
										</tr>
										<tr>
											<th className="align-l">옵션</th>
											<td className="align-l"><code className="g-code-label">[방향]</code></td>
											<td className="align-l"></td>
										</tr>
									</tbody>
								</table>
							</div>
							<h3 className="g-h3">옵션</h3>
							<h4 className="g-h4">방향</h4>
							<h5 className="g-h5">horizontal</h5>
							<div className="info-summary module-a horizontal">
								<div className="info-image">
									<span className="img-demo-dk" style={{ width: '80rem', height: '80rem', fontSize: '20rem'}}>80*80</span>
								</div>
								<div className="info-body">
									<div className="info-title">
										<strong>Info Title</strong>
									</div>
									<div className="info-content">
										<ul className="data-bul dot">
											<li>지금 월 통신요금으로 얼마를 내시나요?</li>
											<li>통신요금은 기기 할부금을 제외한 금액을 알려주세요.</li>
										</ul>
									</div>
								</div>
							</div>
							
						</div>
					</section>
					{/* // section */}
					{/* section */}
					<section className="g-section inner">
						<div className="g-section-header">
							<h2 className="g-h2">Modules</h2>
						</div>
						<div className="g-section-body">
							{/* info-summary */}
							<h3 className="g-h3">info-summary</h3>
							<div>
								<h4 className="g-h4">module-a</h4>
								<div className="info-summary module-a">
									<ul className="data-bul dot">
										<li>지금 월 통신요금으로 얼마를 내시나요?</li>
										<li>통신요금은 기기 할부금을 제외한 금액을 알려주세요.</li>
									</ul>
								</div>
								<br />
								<div className="info-summary module-a">
									<div className="info-title">
										<strong>Info Title</strong>
									</div>
									<div className="info-content">
										<p className="data-para">전용 색상은 포스코그룹의 브랜드 이미지를 차별화시키는 또 하나의 중요한 수단으로서 지정된 색상을 지속적으로 정확하게 사용하는 것이 중요합니다. 인쇄매체 적용 시 색상의 표현은 별색 인쇄를 원칙으로 하며 가이드에 수록된 Pantone Color 또는 4원색 Process Color를 표준으로 삼습니다.</p>
										<ul className="data-bul dot">
											<li>지금 월 통신요금으로 얼마를 내시나요?</li>
											<li>통신요금은 기기 할부금을 제외한 금액을 알려주세요.</li>
										</ul>
									</div>
								</div>
							</div>
							{/* // info-summary */}

							{/* info-tip */}
							<h3 className="g-h3">info-tip</h3>
							<div>
								<h4 className="g-h4">module-a</h4>
								<div className="info-tip module-a">
									<ul className="data-bul-icon module-a">
										<li><i className="icn icn-14-demo-info-wh"></i>전용 색상은 포스코그룹의 브랜드 이미지를 차별화시키는 또 하나의 중요한 수단으로서 지정된 색상을 지속적으로 정확하게 사용하는 것이 중요합니다. 인쇄매체 적용 시 색상의 표현은 별색 인쇄를 원칙으로 하며 가이드에 수록된 Pantone Color 또는 4원색 Process Color를 표준으로 삼습니다.</li>
									</ul>
								</div>
							</div>
							{/* // info-tip */}

							{/* info-helper */}
							<h3 className="g-h3">info-helper</h3>
							<div>
								<h4 className="g-h4">module-a</h4>
								<div className="info-helper module-a">
									<div className="info-title">
										<strong><i className="icn icn-16-demo-info-gr"></i>Info Title</strong>
									</div>
									<div className="info-content">
										<ul className="data-bul-text dash">
											<li>지금 월 통신요금으로 얼마를 내시나요?</li>
											<li>통신요금은 기기 할부금을 제외한 금액을 알려주세요.</li>
										</ul>
									</div>
								</div>

								<h4 className="g-h4">module-b</h4>
								<div className="info-helper module-b">
									<div className="info-title">
										<strong>Info Title</strong>
									</div>
									<div className="info-content">
										<ul className="data-bul-shape module-a">
											<li>지금 월 통신요금으로 얼마를 내시나요?</li>
											<li>통신요금은 기기 할부금을 제외한 금액을 알려주세요.</li>
										</ul>
									</div>
								</div>
							</div>
							{/* // info-helper */}
						</div>
					</section>
					{/* // section */}
				</div>
			</div>
		</main>
        // Container
    );
};

export default InfoPage;