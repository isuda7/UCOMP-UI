'use client';

import React from 'react';

const FormCheckboxPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Form Checkbox</h1>
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
						{/* frm-chk */}
							<h3 className="g-h3">frm-chk, frm-rdo</h3>
							<h4 className="g-h4">module-a</h4>
							<h5 className="g-h5">horizontal</h5>
							<div className="frm-chk-group module-a horizontal">
								<span className="frm-chk module-a">
									<input type="checkbox" name="sCheck1" id="sCheck11" />
									<label htmlFor="sCheck11" className="frm-chk-label">
										<span className="frm-chk-txt">normal</span>
									</label>
								</span>
								<span className="frm-chk module-a">
									<input type="checkbox" name="sCheck1" id="sCheck12" checked />
									<label htmlFor="sCheck12" className="frm-chk-label">
										<span className="frm-chk-txt">normal checked</span>
									</label>
								</span>
								<span className="frm-chk module-a">
									<input type="checkbox" name="sCheck1" id="sCheck13" disabled />
									<label htmlFor="sCheck13" className="frm-chk-label">
										<span className="frm-chk-txt">disabled</span>
									</label>
								</span>
								<span className="frm-chk module-a">
									<input type="checkbox" name="sCheck1" id="sCheck14" checked disabled />
									<label htmlFor="sCheck14" className="frm-chk-label">
										<span className="frm-chk-txt">disabled checked</span>
									</label>
								</span>
							</div>
							<div className="frm-rdo-group module-a horizontal">
								<span className="frm-rdo module-a">
									<input type="radio" name="sRadio1" id="sRadio11" />
									<label htmlFor="sRadio11" className="frm-rdo-label">
										<span id="sRadio11" className="frm-rdo-txt">normal</span>
									</label>
								</span>
								<span className="frm-rdo module-a">
									<input type="radio" name="sRadio1" id="sRadio12" checked />
									<label htmlFor="sRadio12" className="frm-rdo-label">
										<span className="frm-rdo-txt">normal checked</span>
									</label>
								</span>
								<span className="frm-rdo module-a">
									<input type="radio" name="sRadio2" id="sRadio21" disabled />
									<label htmlFor="sRadio21" className="frm-rdo-label">
										<span className="frm-rdo-txt">disabled</span>
									</label>
								</span>
								<span className="frm-rdo module-a">
									<input type="radio" name="sRadio2" id="sRadio22" checked disabled />
									<label htmlFor="sRadio22" className="frm-rdo-label">
										<span className="frm-rdo-txt">disabled checked</span>
									</label>
								</span>
							</div>
							<h5 className="g-h5">vertical</h5>
							<div className="frm-chk-group module-a vertical">
								<span className="frm-chk module-a">
									<input type="checkbox" name="sCheck2" id="sCheck21" />
									<label htmlFor="sCheck21" className="frm-chk-label">
										<span className="blind">normal</span>
									</label>
								</span>
								<span className="frm-chk module-a">
									<input type="checkbox" name="sCheck2" id="sCheck22" checked />
									<label htmlFor="sCheck22" className="frm-chk-label">
										<span id="sCheck22" className="frm-chk-txt">normal checked</span>
									</label>
								</span>
								<span className="frm-chk module-a">
									<input type="checkbox" name="sCheck2" id="sCheck23" disabled />
									<label htmlFor="sCheck23" className="frm-chk-label">
										<span id="sCheck23" className="frm-chk-txt">disabled</span>
									</label>
								</span>
								<span className="frm-chk module-a">
									<input type="checkbox" name="sCheck2" id="sCheck24" checked disabled />
									<label htmlFor="sCheck24" className="frm-chk-label">
										<span id="sCheck24" className="frm-chk-txt">disabled checked</span>
									</label>
								</span>
							</div>

							<h4 className="g-h4">module-b</h4>
							<h5 className="g-h5">horizontal</h5>
							<div className="frm-chk-group module-b horizontal">
								<span className="frm-chk module-b">
									<input type="checkbox" name="sCheck3" id="sCheck31" />
									<label htmlFor="sCheck31" className="frm-chk-label">
										<span className="frm-chk-txt">normal</span>
									</label>
								</span>
								<span className="frm-chk module-b">
									<input type="checkbox" name="sCheck3" id="sCheck32" checked />
									<label htmlFor="sCheck32" className="frm-chk-label">
										<span className="frm-chk-txt">normal checked</span>
									</label>
								</span>
								<span className="frm-chk module-b">
									<input type="checkbox" name="sCheck3" id="sCheck33" disabled />
									<label htmlFor="sCheck33" className="frm-chk-label">
										<span className="frm-chk-txt">disabled</span>
									</label>
								</span>
								<span className="frm-chk module-b">
									<input type="checkbox" name="sCheck3" id="sCheck34" checked disabled />
									<label htmlFor="sCheck34" className="frm-chk-label">
										<span className="frm-chk-txt">disabled checked</span>
									</label>
								</span>
							</div>
							<h5 className="g-h5">vertical</h5>
							<div className="frm-rdo-group module-b vertical">
								<span className="frm-rdo module-b">
									<input type="radio" name="sRadio3" id="sRadio31" />
									<label htmlFor="sRadio31" className="frm-rdo-label">
										<span className="frm-rdo-txt">normal</span>
									</label>
								</span>
								<span className="frm-rdo module-b">
									<input type="radio" name="sRadio3" id="sRadio32" checked />
									<label htmlFor="sRadio32" className="frm-rdo-label">
										<span className="frm-rdo-txt">normal checked</span>
									</label>
								</span>
								<span className="frm-rdo module-b">
									<input type="radio" name="sRadio4" id="sRadio43" disabled />
									<label htmlFor="sRadio43" className="frm-rdo-label">
										<span className="frm-rdo-txt">disabled</span>
									</label>
								</span>
								<span className="frm-rdo module-b">
									<input type="radio" name="sRadio4" id="sRadio44" checked disabled />
									<label htmlFor="sRadio44" className="frm-rdo-label">
										<span className="frm-rdo-txt">disabled checked</span>
									</label>
								</span>
							</div>
							{/* // frm-chk */}

							{/* frm-switch */}
							<h3 className="g-h3">frm-switch</h3>
							<h4 className="g-h4">module-a</h4>
							<div className="frm-switch module-a">
								<input type="checkbox" name="sSwitch1" id="sSwitch11" value="" />
								<label htmlFor="sSwitch11"></label>
							</div>
							<div className="frm-switch module-a">
								<input type="checkbox" name="sSwitch1" id="sSwitch12" value="" checked />
								<label htmlFor="sSwitch12"></label>
							</div>
							<div className="frm-switch module-a">
								<input type="checkbox" name="sSwitch1" id="sSwitch13" value="" disabled />
								<label htmlFor="sSwitch13"></label>
							</div>
							<div className="frm-switch module-a">
								<input type="checkbox" name="sSwitch1" id="sSwitch14" value="" checked disabled />
								<label htmlFor="sSwitch14"></label>
							</div>
							{/* // frm-switch */}
							
						</div>
					</section>
					{/* // section */}
				</div>
			</div>
		</main>



        // Container
    );
};

export default FormCheckboxPage;