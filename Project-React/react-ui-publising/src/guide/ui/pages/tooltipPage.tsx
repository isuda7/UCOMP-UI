'use client';

import React from 'react';

const TooltipPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Tooltip</h1>
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
											<td className="align-l"><code className="g-code-label">tooltip</code></td>
										</tr>
										<tr>
											<th className="align-l">모듈</th>
											<td className="align-l"><code className="g-code-label">module-*</code></td>
										</tr>
									</tbody>
								</table>
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
						<h3 className="g-h3">tooltip</h3>
							<h4 className="g-h4">module-a</h4>
							<button type="button" className="btn module-c secondary" data-bs-toggle="tooltip" data-bs-custom-class="module-a" data-bs-title="This top tooltip is themed via CSS variables.">
								<span>Custom tooltip</span>
							</button>
							
						</div>
					</section>
					{/* // section */}
				</div>
			</div>
		</main>
        // Container
    );
};

export default TooltipPage;