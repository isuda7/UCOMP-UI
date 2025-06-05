'use client';

import React from 'react';

const IconPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Icon</h1>
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
											<td className="align-l"><code className="g-code-label">icn</code></td>
										</tr>
										<tr>
											<th className="align-l">형식</th>
											<td className="align-l"><code className="g-code-label">icn-[크기]-[분류]-[이름/모양]-[컬러/상태]</code></td>
										</tr>
									</tbody>
								</table>
							</div>
							<h3 className="g-h3">옵션</h3>
							
						</div>
					</section>
					{/* // section */}
					{/* section */}
					<section className="g-section inner">
						<div className="g-section-header">
							<h2 className="g-h2">Demo</h2>
						</div>
						<div className="g-section-body">
							<h3 className="g-h3">icn-16</h3>
							<div className="g-icon-list">
								<div className="g-icon-item">
									<i className="icn icn-16-demo-info-gr" aria-hidden="true"></i>
									<p>icn-16-demo-info-gr</p>
								</div>
							</div>

							<h3 className="g-h3">icn-20</h3>
							<div className="g-icon-list">
								<div className="g-icon-item">
									<i className="icn icn-20-demo-remove-dk" aria-hidden="true"></i>
									<p>icn-20-demo-remove-dk</p>
								</div>
								<div className="g-icon-item">
									<i className="icn icn-20-demo-srch-bk" aria-hidden="true"></i>
									<p>icn-20-demo-srch-bk</p>
								</div>
							</div>

							<h3 className="g-h3">icn-24</h3>
							<div className="g-icon-list">
								<div className="g-icon-item">
									<i className="icn icn-32-demo-close-bk" aria-hidden="true"></i>
									<p>icn-32-demo-close-bk</p>
								</div>
								<div className="g-icon-item black">
									<i className="icn icn-32-demo-close-wh" aria-hidden="true"></i>
									<p>icn-32-demo-close-wh</p>
								</div>
							</div>
						</div>
					</section>
					{/* // section */}
					{/* section */}
					<section className="g-section inner">
						<div className="g-section-header">
							<h2 className="g-h2">Sizes</h2>
						</div>
						<div className="g-section-body">
							<h3 className="g-h3">icn-16</h3>
							<div className="g-icon-list">
								<div className="g-icon-item">
									<i className="icn icn-16-아이콘명" aria-hidden="true"></i>
									<p>icn-16-아이콘명</p>
								</div>
								<div className="g-icon-item">
									<i className="icn icn-16-아이콘명" aria-hidden="true"></i>
									<p>icn-16-아이콘명</p>
								</div>
								<div className="g-icon-item">
									<i className="icn icn-16-아이콘명" aria-hidden="true"></i>
									<p>icn-16-아이콘명</p>
								</div>
							</div>

							<h3 className="g-h3">icn-20</h3>
							<div className="g-icon-list">
								<div className="g-icon-item">
									<i className="icn icn-20-아이콘명" aria-hidden="true"></i>
									<p>icn-20-아이콘명</p>
								</div>
								<div className="g-icon-item">
									<i className="icn icn-20-아이콘명" aria-hidden="true"></i>
									<p>icn-20-아이콘명</p>
								</div>
							</div>

							<h3 className="g-h3">icn-24</h3>
							<div className="g-icon-list">
								<div className="g-icon-item">
									<i className="icn icn-24-아이콘명" aria-hidden="true"></i>
									<p>icn-24-아이콘명</p>
								</div>
								<div className="g-icon-item">
									<i className="icn icn-24-아이콘명" aria-hidden="true"></i>
									<p>icn-24-아이콘명</p>
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

export default IconPage;