'use client';

import React from 'react';

const FormCheckboxPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Form Controls</h1>
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
											<td className="align-l"><code className="g-code-label">frm-controls</code></td>
										</tr>
										<tr>
											<th className="align-l">모듈</th>
											<td className="align-l"><code className="g-code-label">type-*</code></td>
										</tr>
										<tr>
											<th className="align-l">설명</th>
											<td className="align-l">
												<p>서식이 여러개일 때 묶어주는 목적이다.</p>
												<p>따라서 하나일 때는 생략 할 수 있다.</p>
											</td>
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
							<h2 className="g-h2">Types</h2>
						</div>
						<div className="g-section-body">
							{/* 폼 */}
							<form action="" className="frm module-a">
								<fieldset className="frm-fieldset">
									<legend className="blind">개인정보 입력</legend>

									{/* 필드: 주민등록번호 */}
									<div className="frm-field vertical">
										<div className="frm-title">
											<label htmlFor="frmPersnolId" className="frm-label">주민등록번호</label>
											<b className="frm-star" aria-hidden="true">*</b>
										</div>
										<div className="frm-content">
											<div className="frm-controls">
												<div className="frm-inp module-a fluid">
													<input type="text" name="" id="frmPersnolId" value="" placeholder="예: 900101" title="주민등록번호 6자리 입력" className="inp" aria-required="true" />
												</div>
												<span className="frm-split">-</span>
												<div className="frm-inp module-a fluid">
													<input type="text" name="" id="" value="" placeholder="예: 1234567" title="주민등록번호 7자리 입력" className="inp" aria-required="true" />
												</div>
											</div>
										</div>
									</div>
									{/* // 필드: 주민등록번호 */}

									{/* 필드: 이메일 */}
									<div className="frm-field vertical">
										<div className="frm-title">
											<label htmlFor="frmEmail" className="frm-label">이메일</label>
										</div>
										<div className="frm-content">
											<div className="frm-controls type-email">
												<div className="frm-inp module-a fluid">
													<input type="text" name="" id="frmEmail" value="" placeholder="아이디 입력" title="이메일 아이디 입력" className="inp" />
												</div>
												<span className="frm-split">@</span>
												<div className="frm-inp module-a fluid">
													<input type="text" name="" id="" value="" placeholder="도메인 입력" title="이메일 도메인주소 입력" className="inp" />
												</div>
											</div>
										</div>
									</div>
									{/* // 필드: 이메일 */}

									{/* 필드: 카드번호 */}
									<div className="frm-field vertical">
										<div className="frm-title">
											<label htmlFor="frmCardNo" className="frm-label">카드번호</label>
										</div>
										<div className="frm-content">
											<div className="frm-controls type-cardNo">
												<div className="frm-inp module-a fluid">
													<input type="text" name="" id="frmCardNo" value="" placeholder="0000" title="카드 첫번째 4자리 입력" className="inp" />
												</div>
												<div className="frm-inp module-a fluid">
													<input type="text" name="" id="" value="" placeholder="0000" title="카드 두번째 4자리 입력" className="inp" />
												</div>
												<div className="frm-inp module-a fluid">
													<input type="text" name="" id="" value="" placeholder="0000" title="카드 세번째 4자리 입력" className="inp" />
												</div>
												<div className="frm-inp module-a fluid">
													<input type="text" name="" id="" value="" placeholder="0000" title="카드 네번째 4자리 입력" className="inp" />
												</div>
											</div>
										</div>
									</div>
									{/* // 필드: 카드번호 */}

									{/* 필드: 주소 */}
									<div className="frm-field vertical">
										<div className="frm-title">
											<label htmlFor="frmAddress" className="frm-label">주소</label>
										</div>
										<div className="frm-content">
											<div className="frm-controls type-address">
												<div className="frm-inp module-a fluid">
													<input type="text" name="" id="frmAddress" value="" placeholder="우편번호" title="우편번호 5자리 입력" className="inp" />
												</div>
												<button type="button" className="btn module-b">
													<span>검색</span>
												</button>
												<div className="frm-inp module-a fluid">
													<input type="text" name="" id="" value="" placeholder="기본 주소" title="기본 주소 입력, 도로명 주소 또는 지번 주소" className="inp" />
												</div>
												<div className="frm-inp module-a fluid">
													<input type="text" name="" id="" value="" placeholder="나머지 주소" title="상세 주소 입력, 동·호수 또는 건물명까지 입력" className="inp" />
												</div>
											</div>
										</div>
									</div>
									{/* // 필드: 주소 */}
								</fieldset>
							</form>
							{/* // 폼 */}
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