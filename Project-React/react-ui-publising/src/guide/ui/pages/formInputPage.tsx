'use client';

import React from 'react';

const FormInputPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Form Input</h1>
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
											<td className="align-l"><code className="g-code-label">frm-*</code></td>
										</tr>
										<tr>
											<th className="align-l">모듈</th>
											<td className="align-l"><code className="g-code-label">module-*</code></td>
										</tr>
										<tr>
											<th className="align-l">옵션</th>
											<td className="align-l"><code className="g-code-label">[가변]</code></td>
										</tr>
										<tr>
											<th className="align-l">필수입력</th>
											<td className="align-l"><code className="g-code-label">aria-required="true"</code></td>
										</tr>
									</tbody>
								</table>
							</div>
							<h3 className="g-h3">옵션</h3>
							<h4 className="g-h4">가변</h4>
							<div className="frm-inp module-a fluid">
								<input type="text" name="" id="" value="fluid" placeholder="Placeholder" title="" className="inp" />
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
						{/* frm-inp */}
							<h3 className="g-h3">frm-inp</h3>
							{/* module-a */}
							<h4 className="g-h4">module-a</h4>
							<h5 className="g-h5">기본</h5>
							<div className="frm-inp module-a fluid">
								<input type="text" name="" id="" value="" placeholder="Placeholder" title="" className="inp" />
							</div>
							
							<br />
							<br />
							<div className="frm-inp module-a fluid">
								<input type="text" name="" id="" value="" placeholder="Placeholder" title="" className="inp" disabled />
							</div>
							<h5 className="g-h5">on-right</h5>
							<div className="frm-inp module-a fluid">
								<input type="text" name="" id="frmInp13" value="입력된 글자 (삭제가능)" placeholder="Placeholder" title="" className="inp" />
								<div className="on-right">
									<button type="button" className="btn btn-clear" onClick={() => alert("InputClearHandler('#frmInp13')")}>
										<i className="icn icn-20-demo-remove-dk" aria-hidden="false"></i>
										<span className="blind">삭제</span>
									</button>
								</div>
							</div>
							<br />
							<br />
							<div className="frm-inp module-a fluid">
								<input type="text" name="" id="" value="" placeholder="Placeholder" title="" className="inp" />
								<div className="on-right">
									<button type="button" className="btn btn-srch">
										<i className="icn icn-20-demo-srch-bk" aria-hidden="false"></i>
										<span className="blind">검색</span>
									</button>
								</div>
							</div>
							{/* // module-a */}

							{/* module-b */}
							<h4 className="g-h4">module-b</h4>
							<div className="frm-inp module-b fluid">
								<input type="text" name="" id="" value="" placeholder="Placeholder" title="" className="inp" />
							</div>
							{/* // module-b */}

							{/* module-c */}
							<h4 className="g-h4">module-c</h4>
							<div className="frm-inp module-c fluid">
								<input type="text" name="" id="" value="" placeholder="Placeholder" title="" className="inp" />
							</div>
							{/* // module-c */}
							{/* // frm-inp */}
							
						</div>
					</section>
					{/* // section */}
				</div>
			</div>
		</main>



        // Container
    );
};

export default FormInputPage;