'use client';

import React from 'react';

const PrototypePage = () => {
	return (
		// Container
		<main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Prototype</h1>
					</div>

					{/* Section */}
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
											<td className="align-l"><code className="g-code-label">모듈명-*</code></td>
										</tr>
										<tr>
											<th className="align-l">모듈</th>
											<td className="align-l"><code className="g-code-label">module-*</code></td>
										</tr>
										<tr>
											<th className="align-l">옵션</th>
											<td className="align-l"><code className="g-code-label">[강조]</code>, <code className="g-code-label">[방향]</code></td>
										</tr>
									</tbody>
								</table>
							</div>
							<h3 className="g-h3">옵션</h3>
							<h4 className="g-h4">강조</h4>
							<h5 className="g-h5">Case</h5>
							<h4 className="g-h4">방향</h4>
							<h5 className="g-h5">Case</h5>
						</div>
					</section>
					{/* Section */}

					{/* Section */}
					<section className="g-section inner">
						<div className="g-section-header">
							<h2 className="g-h2">Modules</h2>
						</div>
						<div className="g-section-body">
							<h3 className="g-h3">모듈명</h3>
							<h4 className="g-h4">module-a</h4>
							<h5 className="g-h5">상세구분</h5>
							<ul className="g-desc">
								<li>목록</li>
							</ul>
						</div>
					</section>
					{/* Section */}
				</div>


				{/* <section>
          <h2>Button</h2>
          <Button />
        </section>

        <section>
          <h2>Accordion</h2>
          <Accordion />
        </section>

        <section>
          <h2>Icon</h2>
          <Icon />
        </section> */}
			</div>

		</main>
		// Container
	);
};

export default PrototypePage;