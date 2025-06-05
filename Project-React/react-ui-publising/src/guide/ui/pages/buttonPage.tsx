'use client';

import React from 'react';

const ButtonPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Button</h1>
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
											<td className="align-l"><code className="g-code-label">btn</code></td>
										</tr>
										<tr>
											<th className="align-l">모듈</th>
											<td className="align-l"><code className="g-code-label">module-*</code></td>
										</tr>
										<tr>
											<th className="align-l">옵션</th>
											<td className="align-l">
												<code className="g-code-label">[강조]</code>, <code className="g-code-label">[라인]</code>, <code className="g-code-label">[가변]</code>
											</td>
										</tr>
										<tr>
											<th className="align-l">구성</th>
											<td className="align-l">
												텍스트, 아이콘
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<h3 className="g-h3">옵션</h3>
							<h4 className="g-h4">강조</h4>
							<button type="button" className="btn module-a black">
								<span>black</span>
							</button>
							<button type="button" className="btn module-a primary">
								<span>primary</span>
							</button>
							<button type="button" className="btn module-a secondary">
								<span>secondary</span>
							</button>
							<h4 className="g-h4">라인</h4>
							<button type="button" className="btn module-a black outlined">
								<span>black</span>
							</button>
							<button type="button" className="btn module-a primary outlined">
								<span>primary</span>
							</button>
							<button type="button" className="btn module-a secondary outlined">
								<span>secondary</span>
							</button>
							<h4 className="g-h4">가변</h4>
							<button type="button" className="btn module-a primary fluid">
								<span>fluid</span>
							</button>
						</div>
					</section>
					{/* // section */}
					{/* section */}
					<section className="g-section inner">
						<div className="g-section-header">
							<h2 className="g-h2">Modules</h2>
						</div>
						<div className="g-section-body">
							<h3 className="g-h3">btn</h3>
							<h4 className="g-h4">module-a</h4>
							<button type="button" className="btn module-a">
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-a primary">
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-a primary outlined">
								<span>버튼</span>
							</button>
							<br />
							<br />
							<button type="button" className="btn module-a" disabled>
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-a primary" disabled>
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-a primary outlined" disabled>
								<span>버튼</span>
							</button>
							<br /><br />
							<button type="button" className="btn module-a primary outlined">
								<span>버튼</span>
								<i className="icn icn-20-demo-gr-b" aria-hidden="true"></i>
							</button>
							<button type="button" className="btn module-a primary outlined">
								<i className="icn icn-20-demo-gr-b" aria-hidden="true"></i>
								<span>버튼</span>
							</button>

							<h4 className="g-h4">module-b</h4>
							<button type="button" className="btn module-b">
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-b black">
								<span>버튼</span>
								<i className="icn icn-16-demo-gr-b" aria-hidden="true"></i>
							</button>

							<h4 className="g-h4">module-c</h4>
							<button type="button" className="btn module-c outlined">
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-c outlined black">
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-c outlined primary">
								<span>버튼</span>
							</button>
							<br /><br />
							<button type="button" className="btn module-c outlined">
								<span>버튼</span>
								<i className="icn icn-16-demo-gr-b" aria-hidden="true"></i>
							</button>
							<button type="button" className="btn module-c outlined black">
								<span>버튼</span>
								<i className="icn icn-16-demo-gr-b" aria-hidden="true"></i>
							</button>
							<button type="button" className="btn module-c outlined primary">
								<span>버튼</span>
								<i className="icn icn-16-demo-gr-b" aria-hidden="true"></i>
							</button>

							<h4 className="g-h4">module-d</h4>
							<button type="button" className="btn module-d">
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-d dark">
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-d black">
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-d primary">
								<span>버튼</span>
							</button>
							<br />
							<button type="button" className="btn module-d underlined">
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-d underlined dark">
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-d underlined black">
								<span>버튼</span>
							</button>
							<button type="button" className="btn module-d underlined primary">
								<span>버튼</span>
							</button>
							<br />
							<button type="button" className="btn module-d">
								<span>버튼</span>
								<i className="icn icn-12-demo-gr-b" aria-hidden="true"></i>
							</button>
							<button type="button" className="btn module-d dark">
								<span>버튼</span>
								<i className="icn icn-12-demo-dk-b" aria-hidden="true"></i>
							</button>
							<button type="button" className="btn module-d primary">
								<span>버튼</span>
								<i className="icn icn-12-demo-bl-b" aria-hidden="true"></i>
							</button>

							<h4 className="g-h4">module-e</h4>
							<button type="button" className="btn module-e">
								<span>버튼</span>
								<i className="icn icn-12-demo-dk-b" aria-hidden="true"></i>
							</button>
						</div>
					</section>
					{/* //setcion */}
				</div>
			</div>
		</main>



        // Container
    );
};

export default ButtonPage;