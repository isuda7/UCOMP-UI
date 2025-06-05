'use client';

import React from 'react';

const ToastPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Toast</h1>
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
											<td className="align-l"><code className="g-code-label">toast</code></td>
										</tr>
										<tr>
											<th className="align-l">모듈</th>
											<td className="align-l"><code className="g-code-label">module-*</code></td>
										</tr>
										<tr>
											<th className="align-l">옵션</th>
											<td className="align-l">
												<code className="g-code-label">[효과]</code>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<ul className="g-desc">
								<li>[참조] 부트스트랩 : <a href="https://getbootstrap.com/docs/5.3/components/toasts/" target="_blank" className="g-link">https://getbootstrap.com/docs/5.3/components/toasts/</a></li>
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
						<h3 className="g-h3">toast</h3>
							<h4 className="g-h4">module-a</h4>
							<button type="button" className="btn module-c" id="liveToastBtn">Show live toast</button>

							<div className="toast-container">
								<div id="liveToast" className="toast fade module-a" role="alert" aria-live="assertive" aria-atomic="true" data-bs-animation="true">
									<div className="toast-body">
										<p>Hello, world! This is a toast message.</p>
										<button type="button" className="btn-close" data-bs-dismiss="toast">
											<i className="icn icn-32-demo-close-wh" aria-hidden="true"></i>
											<span className="blind">닫기</span>
										</button>
									</div>
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

export default ToastPage;