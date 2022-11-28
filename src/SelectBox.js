import React from 'react'
import Select from 'react-select'

const options = [
  { value: '시청', label: '시청' },
  { value: '을지로입구', label: '을지로입구' },
  { value: '을지로3가', label: '을지로3가' },
  { value: '동대문역사문화공원', label: '동대문역사문화공원' },
  { value: '신당', label: '신당' },
  { value: '상왕십리', label: '상왕십리' },
  { value: '왕십리', label: '왕십리' },
  { value: '한양대', label: '한양대' },
  { value: '뚝섬', label: '뚝섬' },
  { value: '성수', label: '성수' },
  { value: '건대입구', label: '건대입구' },
  { value: '구의', label: '구의' },
  { value: '강변', label: '강변' },
  { value: '잠실나루', label: '잠실나루' },
  { value: '잠실', label: '잠실' },
  { value: '신천', label: '신천' },
  { value: '종합운동장', label: '종합운동장' },
  { value: '삼성', label: '선릉' },
  { value: '역삼', label: '역삼' },
  { value: '강남', label: '강남' },
  { value: '교대', label: '교대' },
  { value: '서초', label: '서초' },
  { value: '방배', label: '방배' },
  { value: '사당', label: '사당' },
  { value: '낙성대', label: '낙성대' },
  { value: '서울대입구', label: '서울대입구' },
  { value: '봉천', label: '봉천' },
  { value: '신림', label: '신림' },
  { value: '신대방', label: '신대방' },
  { value: '구로디지털단지', label: '구로디지털단지' },
  { value: '대림', label: '대림' },
  { value: '신도림', label: '신도림' },
  { value: '문래', label: '문래' },
  { value: '영등포구청', label: '영등포구청' },
  { value: '당산', label: '당산' },
  { value: '합정', label: '홍대입구' },
  { value: '신촌(지하)', label: '신촌(지하)' },
  { value: '이대', label: '이대' },
  { value: '아현', label: '아현' },
  { value: '충정로', label: '충정로' },
  { value: '잠실새내', label: '잠실새내' },
]

export default function SelectBox(setState) {
    return(
        <div>
            <Select onChange={(e)=>{
                setState(e.value)
                console.log(e.value)
            }} options={options} />
        </div>
        
    )
} 