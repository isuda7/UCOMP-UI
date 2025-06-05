'use client';

import React from 'react';

const TabPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Tab</h1>
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
											<td className="align-l"><code className="g-code-label">tab</code></td>
										</tr>
										<tr>
											<th className="align-l">모듈</th>
											<td className="align-l"><code className="g-code-label">module-*</code></td>
										</tr>
										<tr>
											<th className="align-l">옵션</th>
											<td className="align-l">
												<code className="g-code-label">[정렬]</code>
											</td>
										</tr>
										<tr>
											<th className="align-l">설명</th>
											<td className="align-l">
												<code className="g-code-label">tab-nav</code>, <code className="g-code-label">tab-content</code>는 동일한 <code className="g-code-label">module-*</code>로 각각 적용한다.
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<ul className="g-desc">
								<li>[참조] 부트스트랩 : <a href="https://getbootstrap.com/docs/5.3/components/navs-tabs/#javascript-behavior" target="_blank" className="g-link">https://getbootstrap.com/docs/5.3/components/navs-tabs/</a></li>
							</ul>
							<h3 className="g-h3">옵션</h3>
							<h4 className="g-h4">정렬</h4>
							<h5 className="g-h5">fluid</h5>
							<div className="tab-nav module-a fluid">
								<ul className="tab-list" role="tablist">
									<li className="tab-item" role="presentation">
										<button className="tab-link active" id="tab-option-11" data-bs-toggle="tab" data-bs-target="#tab-option-11-pane" type="button" role="tab" aria-controls="tab-option-11-pane" aria-selected="true">
											<span>Home Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-option-12" data-bs-toggle="tab" data-bs-target="#tab-option-12-pane" type="button" role="tab" aria-controls="tab-option-12-pane" aria-selected="false">
											<span>Profile Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-option-13" data-bs-toggle="tab" data-bs-target="#tab-option-13-pane" type="button" role="tab" aria-controls="tab-option-13-pane" aria-selected="false">
											<span>Contact Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-option-14" data-bs-toggle="tab" data-bs-target="#tab-option-14-pane" type="button" role="tab" aria-controls="tab-option-14-pane" aria-selected="false" disabled>
											<span>Disabled Tab</span>
										</button>
									</li>
								</ul>
							</div>
							<h5 className="g-h5">center</h5>
							<div className="tab-nav module-a center">
								<ul className="tab-list" role="tablist">
									<li className="tab-item" role="presentation">
										<button className="tab-link active" id="tab-option-21" data-bs-toggle="tab" data-bs-target="#tab-option-21-pane" type="button" role="tab" aria-controls="tab-option-21-pane" aria-selected="true">
											<span>Home Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-option-22" data-bs-toggle="tab" data-bs-target="#tab-option-22-pane" type="button" role="tab" aria-controls="tab-option-22-pane" aria-selected="false">
											<span>Profile Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-option-23" data-bs-toggle="tab" data-bs-target="#tab-option-23-pane" type="button" role="tab" aria-controls="tab-option-23-pane" aria-selected="false">
											<span>Contact Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-option-24" data-bs-toggle="tab" data-bs-target="#tab-option-24-pane" type="button" role="tab" aria-controls="tab-option-24-pane" aria-selected="false" disabled>
											<span>Disabled Tab</span>
										</button>
									</li>
								</ul>
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

						<h3 className="g-h3">tab-nav</h3>
							<h4 className="g-h4">module-a</h4>
							<div className="tab-nav module-a">
								<ul className="tab-list" role="tablist">
									<li className="tab-item" role="presentation">
										<button className="tab-link active" id="tab-11" data-bs-toggle="tab" data-bs-target="#tab-11-pane" type="button" role="tab" aria-controls="tab-11-pane" aria-selected="true">
											<span>Home Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-12" data-bs-toggle="tab" data-bs-target="#tab-12-pane" type="button" role="tab" aria-controls="tab-12-pane" aria-selected="false">
											<span>Profile Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-13" data-bs-toggle="tab" data-bs-target="#tab-13-pane" type="button" role="tab" aria-controls="tab-13-pane" aria-selected="false">
											<span>Contact Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-14" data-bs-toggle="tab" data-bs-target="#tab-14-pane" type="button" role="tab" aria-controls="tab-14-pane" aria-selected="false" disabled>
											<span>Disabled Tab</span>
										</button>
									</li>
								</ul>
							</div>
							<div className="tab-content module-a" id="myTabContent">
								<div className="tab-pane fade show active" id="tab-11-pane" role="tabpanel" aria-labelledby="tab-11" tabIndex={0}>
									Home Tabpanel
								</div>
								<div className="tab-pane fade" id="tab-12-pane" role="tabpanel" aria-labelledby="tab-12" tabIndex={0}>
									Profile Tabpanel
								</div>
								<div className="tab-pane fade" id="tab-13-pane" role="tabpanel" aria-labelledby="tab-13" tabIndex={0}>
									Contact Tabpanel
								</div>
								<div className="tab-pane fade" id="tab-14-pane" role="tabpanel" aria-labelledby="tab-14" tabIndex={0}>
									Disabled Tabpanel
								</div>
							</div>

							<h4 className="g-h4">module-b</h4>
							<div className="tab-nav module-b">
								<ul className="tab-list" role="tablist">
									<li className="tab-item" role="presentation">
										<button className="tab-link active" id="tab-21" data-bs-toggle="tab" data-bs-target="#tab-21-pane" type="button" role="tab" aria-controls="tab-21-pane" aria-selected="true">
											<span>Home Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-22" data-bs-toggle="tab" data-bs-target="#tab-22-pane" type="button" role="tab" aria-controls="tab-22-pane" aria-selected="false">
											<span>Profile Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-23" data-bs-toggle="tab" data-bs-target="#tab-23-pane" type="button" role="tab" aria-controls="tab-23-pane" aria-selected="false">
											<span>Contact Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-24" data-bs-toggle="tab" data-bs-target="#tab-24-pane" type="button" role="tab" aria-controls="tab-24-pane" aria-selected="false" disabled>
											<span>Disabled Tab</span>
										</button>
									</li>
								</ul>
							</div>
							<div className="tab-content module-b" id="myTabContent">
								<div className="tab-pane fade show active" id="tab-21-pane" role="tabpanel" aria-labelledby="tab-21" tabIndex={0}>
									Home Tabpanel
								</div>
								<div className="tab-pane fade" id="tab-22-pane" role="tabpanel" aria-labelledby="tab-22" tabIndex={0}>
									Profile Tabpanel
								</div>
								<div className="tab-pane fade" id="tab-23-pane" role="tabpanel" aria-labelledby="tab-23" tabIndex={0}>
									Contact Tabpanel
								</div>
								<div className="tab-pane fade" id="tab-24-pane" role="tabpanel" aria-labelledby="tab-24" tabIndex={0}>
									Disabled Tabpanel
								</div>
							</div>

							<h4 className="g-h4">module-c</h4>
							<div className="tab-nav module-c">
								<ul className="tab-list" role="tablist">
									<li className="tab-item" role="presentation">
										<button className="tab-link active" id="tab-31" data-bs-toggle="tab" data-bs-target="#tab-31-pane" type="button" role="tab" aria-controls="tab-31-pane" aria-selected="true">
											<span>Home Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-32" data-bs-toggle="tab" data-bs-target="#tab-32-pane" type="button" role="tab" aria-controls="tab-32-pane" aria-selected="false">
											<span>Profile Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-33" data-bs-toggle="tab" data-bs-target="#tab-33-pane" type="button" role="tab" aria-controls="tab-33-pane" aria-selected="false">
											<span>Contact Tab</span>
										</button>
									</li>
									<li className="tab-item" role="presentation">
										<button className="tab-link" id="tab-34" data-bs-toggle="tab" data-bs-target="#tab-34-pane" type="button" role="tab" aria-controls="tab-34-pane" aria-selected="false" disabled>
											<span>Disabled Tab</span>
										</button>
									</li>
								</ul>
							</div>
							<div className="tab-content module-c" id="myTabContent">
								<div className="tab-pane fade show active" id="tab-31-pane" role="tabpanel" aria-labelledby="tab-31" tabIndex={0}>
									Home Tabpanel
								</div>
								<div className="tab-pane fade" id="tab-32-pane" role="tabpanel" aria-labelledby="tab-32" tabIndex={0}>
									Profile Tabpanel
								</div>
								<div className="tab-pane fade" id="tab-33-pane" role="tabpanel" aria-labelledby="tab-33" tabIndex={0}>
									Contact Tabpanel
								</div>
								<div className="tab-pane fade" id="tab-34-pane" role="tabpanel" aria-labelledby="tab-34" tabIndex={0}>
									Disabled Tabpanel
								</div>
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

export default TabPage;