'use client';
import React from 'react';
import IAComponentRow, { TableRowData } from '../components/iaComponentRow';
import { useEffect, useState } from 'react';

const dataList: TableRowData[] = [
	// Prototype
	{
		depth1: 'Prototype',
		depth2: 'Layout',
		depth3: '',
		type: '', // AP, CP, SP, FP, BP
		url: '/Pages/Prototype',
		complete: '완료', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			'2025-04-08 조찬기 : 초안 완료'
		]
	},

	// 메인
	{
		depth1: '메인',
		depth2: '',
		depth3: '',
		type: '', // AP, CP, SP, FP, BP
		url: '',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},

	// 카테고리
	{
		depth1: '카테고리',
		depth2: '',
		depth3: '',
		type: '', // AP, CP, SP, FP, BP
		url: '',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
];



const FrontList = () => {
	// 상태 설정
	const [totalPages, setTotalPages] = useState(0);
	const [completed, setCompleted] = useState(0);
	const [progress, setProgress] = useState('0.00');

	// dataList가 변경될 때마다 상태 업데이트
	useEffect(() => {
		const total = dataList.length; // 총 페이지 수 (배열 길이)
		const completedCount = dataList.filter((item) => item.complete === '완료').length; // '완료'된 페이지 수
		const progressPercentage = total > 0 ? ((completedCount / total) * 100).toFixed(2) : '0.00'; // 진척률 계산

		// 상태 업데이트
		setTotalPages(total);
		setCompleted(completedCount);
		setProgress(progressPercentage);
	}, []);
	return (
		<div className="ia-container">
			<div className="ia-content">
				<section className="ia-section ia-section-data">
					<div className="ia-section-header">
						<h2 className="ia-h2"><a href="#this" className="accordion-toggle">가이드</a></h2>
						<div className="ia-legend">
							<span className="item">
								<em>총 페이지 : </em>
								<em className="legend-total">{totalPages}</em>, {/* 총 페이지 수 */}
							</span>
							<span className="item c-done">
								<em>완료 : </em>
								<em className="legend-complete">{completed}</em>, {/* 완료된 페이지 수 */}
							</span>
							<span className="item">
								<em>진척률 : </em>
								<em className="legend-process">{progress}%</em> {/* 진척률 */}
							</span>
						</div>
					</div>
					<div className="ia-section-body">
						<div className="ia-tab-content type-thumb">
							<div className="ia-iframe-wrap">
								<div className="ia-iframe-list"></div>
							</div>
						</div>
						<div className="ia-tab-content type-list is-visible">
							<div className="tbl ia-tbl">
								<table>
									<caption>
										<strong>제목 정보</strong>
										<p>제목1, 제목2, 제목3 항목으로 구성됨</p>
									</caption>
									<thead>
										<tr>
											<th scope="col">번호</th>
											<th scope="col" className="col-1depth">1Depth</th>
											<th scope="col" className="col-2depth">2Depth</th>
											<th scope="col" className="col-3depth">3Depth</th>
											<th scope="col" className="col-point">구분</th>
											<th scope="col" className="col-url">URL</th>
											<th scope="col" className="col-complete">상태</th>
											<th scope="col" className="col-memo">비고</th>
										</tr>
									</thead>
									<tbody>
										{dataList.map((item, index) => (
											<IAComponentRow key={index} data={{ ...item, num: index + 1 }} />
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
export default FrontList;