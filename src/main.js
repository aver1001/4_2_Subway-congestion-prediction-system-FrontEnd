import React, { useState } from "react"
import Select from 'react-select'
import axios from 'axios';
import Result from "./Result";
import imgLogo from './train.png'

export function Main() {
    const [Selected,setSelected] = useState("시청")
    const [viewSelected, setViewselected] = useState("")
    const [NOW,setNOW] = useState("")
    const [A30,setA30] = useState("")
    const [A60,setA60] = useState("")

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
    return(
        <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-16 w-auto"
              src={imgLogo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                지하철 혼잡도 예측 시스템
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                2호선 지하철의 혼잡도를 미리 알아보세요 {':)'}
              </a>
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
              <Select onChange={(e)=>{
                setSelected(e.value)
            }} options={options} />
              </div>
              
            </div>
            <div>
              <button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={()=>{
                    axios.get('http://localhost:8000/items', 
                    {params: {
                        loc: Selected
                      }}, 
                    ).then(function (response) {
                        console.log(response.data.NOW,response.data.AFTER30,response.data.AFTER60);
                        setNOW(response.data.NOW)
                        setA30(response.data.AFTER30)
                        setA60(response.data.AFTER60)
                        setViewselected(Selected)
                      })
                      .catch(function (error) {
                        console.log(error);
                      }

                    )
                }}>
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                검색하기
              </button>
            </div>
            <div>
                <Result LOC={viewSelected} NOW={NOW} A30={A30} A60={A60}></Result>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}