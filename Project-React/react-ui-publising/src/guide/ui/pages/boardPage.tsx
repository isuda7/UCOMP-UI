'use client';

import React from 'react';

const BoardPage = () => {
    return (
        // Container
        <main className="g-container">
			<div id="content" className="content">
				<div className="content-body outer">
					<div className="inner">
						<h1 className="g-h1">Board</h1>
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
											<td className="align-l"><code className="g-code-label">board-*</code></td>
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
						{/* board-list */}
							<h3 className="g-h3">board-list</h3>
							<h4 className="g-h4">module-a</h4>
							{/* board-list module-a */}
							<div className="board-list module-a">
								{/* board-header */}
								<div className="board-header">
									<div className="board-count">
										<p>총 <em className="count">1,000건</em>의 게시글이 있습니다.</p>
									</div>
									<div className="board-search">
										<div className="frm-controls">
											<div className="frm-sel module-a">
												<select name="" id="frm아이디" title="" className="sel">
													<option value="">최신순</option>
													<option value="">오름차순</option>
												</select>
											</div>
											<div className="frm-inp module-a fluid">
												<input type="text" name="" id="" value="" placeholder="검색어를 입력해 주세요." className="inp" aria-required="true" />
											</div>
											<button type="button" className="btn module-b">
												<span>검색</span>
											</button>
										</div>
									</div>
								</div>
								{/* // board-header */}
								{/* board-body */}
								<div className="board-body">
									<div className="img-demo-gr" style={{display: 'flex', fontSize: '24rem', height: '200rem'}}>
										Post List 영역
									</div>
									<br />
									<div className="img-demo-gr" style={{display: 'flex', fontSize: '24rem', height: '200rem'}}>
										Post Nodata 영역
									</div>
								</div>
								{/* // board-body */}
								{/* board-footer */}
								<div className="board-footer">
									<nav className="paging module-a" aria-label="Pagination">
										<div className="paging-prev">
											<button type="button" className="btn first" disabled>
												<span>First</span>
											</button>
											<button type="button" className="btn prev" disabled>
												<span>Prev</span>
											</button>
										</div>
										<div className="paging-number">
											<button type="button" className="btn number" aria-current="page">
												<span>1</span>
											</button>
											<button type="button" className="btn number">
												<span>2</span>
											</button>
											<button type="button" className="btn number">
												<span>3</span>
											</button>
											<button type="button" className="btn number">
												<span>4</span>
											</button>
											<button type="button" className="btn number">
												<span>5</span>
											</button>
										</div>
										<div className="paging-next">
											<button type="button" className="btn next">
												<span>Next</span>
											</button>
											<button type="button" className="btn last">
												<span>Last</span>
											</button>
										</div>
									</nav>
								</div>
								{/* // board-footer */}
							</div>
							{/* // board-list module-a */}
							{/* // board-list */}

							{/* board-view */}
							<h3 className="g-h3">board-view</h3>
							<h4 className="g-h4">module-a</h4>
							<div className="board-view module-a">
								<div className="board-body">
									<div className="post-view module-a">
										<div className="img-demo-gr" style={{display: 'flex', fontSize: '24rem', height: '200rem'}}>
											Post View 영역
										</div>
									</div>
								</div>
								<div className="board-footer">
									<div className="board-nav">
										<div className="board-item">
											<div className="board-nav-dir">
												<strong>이전 글</strong>
											</div>
											<div className="board-nav-tit">
												<p>광양제철소, 열연 코일 스틸밴드 결속 자동화 장치 개발</p>
											</div>
										</div>
										<div className="board-item">
											<div className="board-nav-dir">
												<strong>다음 글</strong>
											</div>
											<div className="board-nav-tit">
												<p>광양제철소, 열연 코일 스틸밴드 결속 자동화 장치 개발</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* // board-view */}

							{/* board-write */}
							<h3 className="g-h3">board-write</h3>
							<h4 className="g-h4">module-a</h4>
							<h5 className="g-h5">상세구분</h5>
							<ul className="g-desc">
								<li>목록</li>
							</ul>
							{/* // board-write */}
						</div>
					</section>
					{/* // section */}
				</div>
			</div>
		</main>
        // Container
    );
};

export default BoardPage;