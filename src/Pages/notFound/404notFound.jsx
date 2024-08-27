import React from 'react';
import './notFound.scss';
function notFound() {
    {
        document.title = '404 NOT FOUND';
    }
    return (
        <div className="container">
            <h1 className="notFound">vui lòng trở lại trang chủ vì trang này chưa làm hoặc không tồn tại</h1>
        </div>
    );
}

export default notFound;
