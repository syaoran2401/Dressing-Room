import React, { useState } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import Model from './Model'

export default function BaiTapDressingRoom() {

   


    return (
        <div>
       
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="text-center">
                            <img src="./images/cybersoft.png" alt="Card image" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-center">
                                CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến
                                - Virtual Dressing Room
                            </h4>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <DanhSachSanPham/>
                     
                </div>
                <div className="col-md-4">
                   <Model/>
                </div>
            </div>

        </div>

    )
}
