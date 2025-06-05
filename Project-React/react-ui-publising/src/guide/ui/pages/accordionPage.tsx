'use client';

import React from 'react';

const AccordionPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Accordion</h1>
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
											<td className="align-l"><code className="g-code-label">accordion</code></td>
										</tr>
										<tr>
											<th className="align-l">모듈</th>
											<td className="align-l"><code className="g-code-label">module-*</code></td>
										</tr>
										<tr>
											<th className="align-l">선택기능</th>
											<td className="align-l">선언하면 동기화 설정됨 : .accordion-collapse<code className="g-code-label">[data-bs-parent="#아코디언 아이디"]</code></td>
										</tr>
									</tbody>
								</table>
							</div>
							<ul className="g-desc">
								<li>[참조] 부트스트랩 : <a href="https://getbootstrap.com/docs/5.3/components/accordion/" target="_blank" className="g-link">https://getbootstrap.com/docs/5.3/components/accordion/</a></li>
							</ul>
							<h3 className="g-h3">선택기능</h3>
							<h4 className="g-h4">속성</h4>
							<h5 className="g-h5">동기화 안할 시 : <code className="g-code-label">data-bs-parent=""</code> 삭제</h5>
							{/* module-a */}
							<div className="accordion module-b" id="syncDemo1">
								<div className="accordion-item">
									<h3 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#syncDemo11" aria-expanded="true" aria-controls="syncDemo11">
											<span>Accordion Item #1</span>
											<i className="icn icn-12-demo-dk-a" aria-hidden="true"></i>
										</button>
									</h3>
									<div id="syncDemo11" className="accordion-collapse collapse">
										<div className="accordion-body">
											<p>Accordion Panel #1</p>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#syncDemo12" aria-expanded="false" aria-controls="syncDemo12">
											<span>Accordion Item #2</span>
											<i className="icn icn-12-demo-dk-a" aria-hidden="true"></i>
										</button>
									</h3>
									<div id="syncDemo12" className="accordion-collapse collapse">
										<div className="accordion-body">
											<p>Accordion Panel #2</p>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#syncDemo13" aria-expanded="false" aria-controls="syncDemo13">
											<span>Accordion Item #3</span>
											<i className="icn icn-12-demo-dk-a" aria-hidden="true"></i>
										</button>
									</h3>
									<div id="syncDemo13" className="accordion-collapse collapse">
										<div className="accordion-body">
											<p>Accordion Panel #3</p>
										</div>
									</div>
								</div>
							</div>
							{/* // module-a */}
						</div>
					</section>
					{/* // section */}
					{/* section */}
					<section className="g-section inner">
						<div className="g-section-header">
							<h2 className="g-h2">Modules</h2>
						</div>
						<div className="g-section-body">
						<h3 className="g-h3">accordion</h3>
							{/* module-a */}
							<h4 className="g-h4">module-a</h4>
							<div className="accordion module-a" id="accordionDemo1">
								<div className="accordion-item">
									<h3 className="accordion-header">
										<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordionDemo11" aria-expanded="true" aria-controls="accordionDemo11">
											<span>Accordion Item #1</span>
											<i className="icn icn-12-demo-dk-a" aria-hidden="true"></i>
										</button>
									</h3>
									<div id="accordionDemo11" className="accordion-collapse collapse show" data-bs-parent="#accordionDemo1">
										<div className="accordion-body">
											<p>Accordion Panel #1</p>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionDemo12" aria-expanded="false" aria-controls="accordionDemo12">
											<span>Accordion Item #2</span>
											<i className="icn icn-12-demo-dk-a" aria-hidden="true"></i>
										</button>
									</h3>
									<div id="accordionDemo12" className="accordion-collapse collapse" data-bs-parent="#accordionDemo1">
										<div className="accordion-body">
											<p>Accordion Panel #2</p>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionDemo13" aria-expanded="false" aria-controls="accordionDemo13" disabled>
											<span>Accordion Item #3 (disaebled)</span>
											<i className="icn icn-12-demo-dk-a" aria-hidden="true"></i>
										</button>
									</h3>
									<div id="accordionDemo13" className="accordion-collapse collapse" data-bs-parent="#accordionDemo1">
										<div className="accordion-body">
											<p>Accordion Panel #3</p>
										</div>
									</div>
								</div>
							</div>
							{/* // module-a */}

							{/* module-b */}
							<h4 className="g-h4">module-b</h4>
							<div className="accordion module-b" id="accordionDemo2">
								<div className="accordion-item">
									<h3 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionDemo21" aria-expanded="true" aria-controls="accordionDemo21">
											<span>Accordion Item #1</span>
											<i className="icn icn-12-demo-dk-a" aria-hidden="true"></i>
										</button>
									</h3>
									<div id="accordionDemo21" className="accordion-collapse collapse" data-bs-parent="#accordionDemo2">
										<div className="accordion-body">
											<span>Accordion Panel #1</span>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionDemo22" aria-expanded="false" aria-controls="accordionDemo22">
											<span>Accordion Item #2</span>
											<i className="icn icn-12-demo-dk-a" aria-hidden="true"></i>
										</button>
									</h3>
									<div id="accordionDemo22" className="accordion-collapse collapse" data-bs-parent="#accordionDemo2">
										<div className="accordion-body">
											Accordion Panel #2
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionDemo23" aria-expanded="false" aria-controls="accordionDemo23">
											<span>Accordion Item #3</span>
											<i className="icn icn-12-demo-dk-a" aria-hidden="true"></i>
										</button>
									</h3>
									<div id="accordionDemo23" className="accordion-collapse collapse" data-bs-parent="#accordionDemo2">
										<div className="accordion-body">
											Accordion Panel #3
										</div>
									</div>
								</div>
							</div>
							{/* // module-b */}

							{/* module-c */}
							<h4 className="g-h4">module-c</h4>
							<div className="accordion module-c" id="accordionDemo3">
								<div className="accordion-item">
									<h3 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionDemo31" aria-expanded="true" aria-controls="accordionDemo31">
											<span>Accordion Item #1</span>
											<i className="icn icn-12-demo-dk-a" aria-hidden="true"></i>
										</button>
									</h3>
									<div id="accordionDemo31" className="accordion-collapse collapse" data-bs-parent="#accordionDemo3">
										<div className="accordion-body">
											<span>Accordion Panel #1</span>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionDemo32" aria-expanded="false" aria-controls="accordionDemo32">
											<span>Accordion Item #2</span>
											<i className="icn icn-12-demo-dk-a" aria-hidden="true"></i>
										</button>
									</h3>
									<div id="accordionDemo32" className="accordion-collapse collapse" data-bs-parent="#accordionDemo3">
										<div className="accordion-body">
											Accordion Panel #2
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h3 className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionDemo33" aria-expanded="false" aria-controls="accordionDemo33">
											<span>Accordion Item #3</span>
											<i className="icn icn-12-demo-dk-a" aria-hidden="true"></i>
										</button>
									</h3>
									<div id="accordionDemo33" className="accordion-collapse collapse" data-bs-parent="#accordionDemo3">
										<div className="accordion-body">
											Accordion Panel #3
										</div>
									</div>
								</div>
							</div>
							{/* // module-c */}
						</div>
					</section>
					{/* // section */}
				</div>
			</div>
		</main>
        // Container
    );
};

export default AccordionPage;