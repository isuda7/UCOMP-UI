'use client';

import React from 'react';

const DropdownPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Dropdown</h1>
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
											<td className="align-l"><code className="g-code-label">dropdown</code></td>
										</tr>
										<tr>
											<th className="align-l">모듈</th>
											<td className="align-l"><code className="g-code-label">module-*</code></td>
										</tr>
									</tbody>
								</table>
							</div>
							<ul className="g-desc">
								<li>[참조] 부트스트랩 : <a href="https://getbootstrap.com/docs/5.3/components/dropdowns/" target="_blank" className="g-link">https://getbootstrap.com/docs/5.3/components/dropdowns/</a></li>
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
						<h3 className="g-h3">dropdown</h3>
							<h4 className="g-h4">module-a</h4>
							<div className="dropdown module-a">
								<button className="btn module-a secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<span>Dropdown button</span>
								</button>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</div>
							<h4 className="g-h4">module-b</h4>
							<div className="dropdown module-b">
								<button className="btn module-a secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<span>Dropdown button</span>
								</button>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</div>
							<h4 className="g-h4">module-c</h4>
							<div className="dropdown module-c">
								<button className="btn module-a secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									<span>Dropdown button</span>
								</button>
								<ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
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

export default DropdownPage;