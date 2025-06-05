'use client';

import React from 'react';

const LayerPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Modal</h1>
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
											<td className="align-l"><code className="g-code-label">modal</code></td>
										</tr>
										<tr>
											<th className="align-l">분류</th>
											<td className="align-l"><code className="g-code-label">*-modal</code></td>
										</tr>
										<tr>
											<th className="align-l">모듈</th>
											<td className="align-l"><code className="g-code-label">module-*</code></td>
										</tr>
										<tr>
											<th className="align-l">옵션</th>
											<td className="align-l">
												<code className="g-code-label">[효과]</code>, 
												<code className="g-code-label">[방향]</code>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<ul className="g-desc">
								<li>[참조] 부트스트랩 : <a href="https://getbootstrap.com/docs/5.3/components/modal/" target="_blank" className="g-link">https://getbootstrap.com/docs/5.3/components/modal/</a></li>
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
							
						</div>
					</section>
					{/* // section */}
				</div>
			</div>
		</main>
        // Container
    );
};

export default LayerPage;