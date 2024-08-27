import React from 'react';
import './notFound.scss';
function notFound() {
    {
        document.title = '404 NOT FOUND';
    }
    return (
        <div className="container">
            <h1 className="notFound">
                Đơn giản không cầu kỳ , vui lòng trở lại trang chủ vì trang này không tồn tại :v
            </h1>
        </div>
    );
}

export default notFound;
