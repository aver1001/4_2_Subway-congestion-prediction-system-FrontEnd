import React from "react";

export default function Result({LOC,NOW,A30,A60}){

    return(
        <div>
            
            <div style={{"border-width":2}}>
                <div className="text-center text-2xl font-bold tracking-tight text-gray-900 mb-5 mt-2" style={{"textAlign":'center'}}>{LOC}</div>
                <div className="text-center text-1xl font-bold tracking-tight text-gray-900 mb-5" style={{display:"flex",justifyContent:'space-around'}}>
                    <div style={{"textAlign":'center'}}>
                        현재 시각
                        {
                            { 
                            BAD : <p className="text-3xl mt-3">😡</p>,
                            SOSO : <p className="text-3xl mt-3">🙂</p>,
                            GOOD : <p className="text-3xl mt-3">😄</p>,
                            CLOSE : <p className="text-3xl mt-3">💤</p>
                            }[NOW]
                        }
                        <p className="mt-3"> {NOW} </p>
                    </div>
                    <div style={{"textAlign":'center'}}>
                        30분 후
                        {
                            { 
                            BAD : <p className="text-3xl mt-3">😡</p>,
                            SOSO : <p className="text-3xl mt-3">🙂</p>,
                            GOOD : <p className="text-3xl mt-3">😄</p>,
                            CLOSE : <p className="text-3xl mt-3">💤</p>
                            }[A30]
                        }
                        <p className="mt-3"> {A30} </p>
                    </div>
                    <div style={{"textAlign":'center'}}>
                        60분 후
                        {
                            { 
                            BAD : <p className="text-3xl mt-3">😡</p>,
                            SOSO : <p className="text-3xl mt-3">🙂</p>,
                            GOOD : <p className="text-3xl mt-3">😄</p>,
                            CLOSE : <p className="text-3xl mt-3">💤</p>
                            }[A60]
                        }
                        <p className="mt-3"> {A60} </p>
                    </div>
                </div>

            </div>
            

        </div>

    );
}