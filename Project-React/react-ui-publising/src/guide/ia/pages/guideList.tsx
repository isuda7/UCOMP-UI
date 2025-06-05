'use client';
import React from 'react';
import IAComponentRow, { TableRowData } from '../components/iaComponentRow';
import { useEffect, useState } from 'react';

const dataList: TableRowData[] = [
	// Components
	{
		depth1: 'Modules',
		depth2: 'Prototype',
		depth3: '',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/prototypePage',
		complete: '완료', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: 'Element',
		depth3: 'Button',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/buttonPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Icon',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/iconPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Label',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/labelPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Thumb',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/thumbPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: 'Form',
		depth3: 'Input, Textarea, Select',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/formInputPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Checkbox, Radio, Switch',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/formCheckboxPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Form Controls',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/formControlsPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Form Fieldset',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/formFieldsetPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: 'Structure',
		depth3: 'Section',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/sectionPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Data',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/dataPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Info',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/infoPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Step',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/stepPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Board',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/boardPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Post',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/postPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			''
		]
	},
	{
		depth1: '',
		depth2: 'Selection',
		depth3: 'Accordion',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/accordionPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			'Bootstrap React'
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Dropdown',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/dropdownPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			'Bootstrap React'
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Tab',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/tabPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			'Bootstrap React'
		]
	},
	{
		depth1: '',
		depth2: 'Layer',
		depth3: 'Modal',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/modalPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			'Bootstrap React'
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Toast',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/toastPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			'Bootstrap React'
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Tooltip',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/tooltipPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			'Bootstrap React'
		]
	},
	{
		depth1: '',
		depth2: '',
		depth3: 'Popover',
		type: '', // AP, CP, SP, FP, BP
		url: '/guide/ui/popoverPage',
		complete: '', // [빈값] | 대기 | 보류 | 완료
		memo: [ // YYYY-MM-DD 이름 : 내용 상태
			'Bootstrap React'
		]
	},
];

const GuidetList = () => {
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
export default GuidetList;