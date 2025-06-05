import React from 'react';
import { NavLink } from 'react-router';

export interface TableRowData {
    num?: number;
    depth1: string;
    depth2: string;
    depth3?: string;
    type?: string;
    url?: string;
    complete?: string;
    memo?: string[];
}

const IAComponentRow: React.FC<{ data: TableRowData }> = ({ data }) => {
    return (
        <tr
            className={
                [
                    data.complete === '완료' ? 'row-done' : '',
                    data.complete === '삭제' ? 'row-del' : '',
                    data.complete === '제외' ? 'row-except' : '',
                ].filter(Boolean).join(' ')
            }
        >
            <td className="col-num">{data.num ?? ''}</td>
            <td className="col-1depth">{data.depth1}</td>
            <td className="col-2depth">{data.depth2}</td>
            <td className="col-3depth">{data.depth3 ?? ''}</td>
            <td className="col-type" data-type={data.type ?? ''}></td>
            <td className="col-url"><NavLink to={data.url ?? ''}>{data.url ?? ''}</NavLink></td>
            <td className="col-complete" data-complete={data.complete ?? ''}></td>
            <td className="col-memo">
                {data.memo && data.memo.map((memoItem, index) => (
                <p key={index}>{memoItem}</p> // 각 메모 항목을 <p>로 감싸서 출력
                ))}
            </td>
        </tr>
    );
};

export default IAComponentRow;