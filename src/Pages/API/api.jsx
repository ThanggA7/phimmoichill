import React from 'react';
import './api.scss';
const Api = () => {
    return (
        <div className="container">
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Loại API</th>
                        <th scope="col">URL</th>
                        <th scope="col">Thông tin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Phim Lẻ</td>
                        <td>
                            <a href="https://phimapi.com/v1/api/danh-sach/phim-le" aria-label="Phim Lẻ API">
                                https://phimapi.com/v1/api/danh-sach/phim-le
                            </a>
                        </td>
                        <td>
                            Bạn có thể sử dụng 'page' để xem đúng số trang trả kết quả mà bạn mong muốn. Bỏ trống tự
                            động sẽ là ở trang 1. Bạn có thể sử dụng 'limit' để giới hạn kết quả được trả về nếu nó quá
                            lớn. Bỏ trống tự động sẽ là 10 kết quả.
                        </td>
                    </tr>
                    <tr>
                        <td>Phim Bộ</td>
                        <td>
                            <a href="https://phimapi.com/v1/api/danh-sach/phim-bo" aria-label="Phim Bộ API">
                                https://phimapi.com/v1/api/danh-sach/phim-bo
                            </a>
                        </td>
                        <td>
                            Bạn có thể sử dụng 'page' để xem đúng số trang trả kết quả mà bạn mong muốn. Bỏ trống tự
                            động sẽ là ở trang 1. Bạn có thể sử dụng 'limit' để giới hạn kết quả được trả về nếu nó quá
                            lớn. Bỏ trống tự động sẽ là 10 kết quả.
                        </td>
                    </tr>
                    <tr>
                        <td>Hoạt Hình</td>
                        <td>
                            <a href="https://phimapi.com/v1/api/danh-sach/hoat-hinh" aria-label="Hoạt Hình API">
                                https://phimapi.com/v1/api/danh-sach/hoat-hinh
                            </a>
                        </td>
                        <td>
                            Bạn có thể sử dụng 'page' để xem đúng số trang trả kết quả mà bạn mong muốn. Bỏ trống tự
                            động sẽ là ở trang 1. Bạn có thể sử dụng 'limit' để giới hạn kết quả được trả về nếu nó quá
                            lớn. Bỏ trống tự động sẽ là 10 kết quả.
                        </td>
                    </tr>
                    <tr>
                        <td>TV Shows</td>
                        <td>
                            <a href="https://phimapi.com/v1/api/danh-sach/tv-shows" aria-label="TV Shows API">
                                https://phimapi.com/v1/api/danh-sach/tv-shows
                            </a>
                        </td>
                        <td>
                            Bạn có thể sử dụng 'page' để xem đúng số trang trả kết quả mà bạn mong muốn. Bỏ trống tự
                            động sẽ là ở trang 1. Bạn có thể sử dụng 'limit' để giới hạn kết quả được trả về nếu nó quá
                            lớn. Bỏ trống tự động sẽ là 10 kết quả.
                        </td>
                    </tr>
                    <tr>
                        <td>Tìm kiếm phim</td>
                        <td>
                            <a
                                href="https://phimapi.com/v1/api/tim-kiem?keyword=%7BT%E1%BB%AB%20kh%C3%B3a%7D&limit=%7Bnumber%7D"
                                aria-label="Tìm kiếm phim theo từ khóa API"
                            >
                                https://phimapi.com/v1/api/tim-kiem?keyword=
                            </a>
                        </td>
                        <td>
                            Bạn có thể sử dụng 'limit' để giới hạn kết quả được trả về nếu nó quá lớn. Bỏ trống tự động
                            sẽ là 100 kết quả.
                        </td>
                    </tr>

                    <tr>
                        <td>API</td>
                        <td>
                            <a href="https://kkphim.com/help/help.html" aria-label="Nguồn API">
                                https://kkphim.com/help/help.html
                            </a>
                        </td>
                        <td>Bạn có thể vào đây để xem chi tiết các API và Hướng dẫn sử dụng nhé !!!</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Api;
