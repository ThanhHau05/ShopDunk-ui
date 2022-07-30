import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Content from './Content';
import LogoWeb from '~/Images/logoweb.svg';
import Config from '~/Config';
import { TiSocialFacebook } from 'react-icons/ti';
import { SiYoutube, SiZalo } from 'react-icons/si';
const cx = classNames.bind(styles);

const sanpham = {
    title: 'Sản phẩm',
    data: [
        {
            title: 'iPhone',
            to: Config.routes.iphone,
        },
        {
            title: 'iPad',
            to: Config.routes.ipad,
        },
        {
            title: 'Mac',
            to: Config.routes.mac,
        },
        {
            title: 'Apple Watch',
            to: Config.routes.watch,
        },
        {
            title: 'Âm thanh',
            to: Config.routes.am_thanh,
        },
        {
            title: 'Phụ kiện',
            to: Config.routes.phu_kien,
        },
        {
            title: 'Dịch vụ',
            to: Config.routes.dich_vu,
        },
    ],
};

const thongtin = {
    title: 'Thông tin',
    data: [
        { title: 'Giới thiệu' },
        { title: 'Khuyến mại' },
        { title: 'Bảo hành và sửa chữa' },
        { title: 'Tuyển dụng' },
        { title: 'Tin tức' },
        { title: 'Check IMEI' },
        { title: 'Phương thức thanh toán' },
        { title: 'Gửi góp ý, khiếu nại' },
    ],
};

const chinhsach = {
    title: 'Chính sách',
    data: [
        { title: 'Trả góp' },
        { title: 'Giao hàng' },
        { title: 'Giao hàng (ZaloPay)' },
        { title: 'Hủy giao dịch' },
        { title: 'Đổi trả' },
        { title: 'Bảo hành' },
        { title: 'Giải quyết khiếu nại' },
        { title: 'Bảo mật thông tin' },
    ],
};

const diachi = {
    title: 'Địa chỉ',
    data: [
        {
            title: 'Tìm Store trên Google Map',
        },
        {
            title: 'Hệ thống cửa hàng',
        },
    ],
};
const lienhe = {
    title: 'Liên hệ',
    data: [
        {
            title: 'Mua hàng:',
            phone: '1900.6626',
        },
        {
            title: 'Khiếu nại:',
            phone: '0886.308.688',
        },
        {
            title: 'Doanh nghiệp & Đối tác:',
            phone: '0822.688.668',
        },
    ],
};

const introduce = {
    logo: <img src={LogoWeb} alt="ShopDunk" />,
    title: 'Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.',
    icon: [
        {
            icon: TiSocialFacebook,
            to: 'https://www.facebook.com',
        },
        {
            icon: SiYoutube,
            to: 'https://www.youtube.com',
        },
        {
            icon: SiZalo,
            to: 'https://zalo.me',
        },
    ],
};
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-1')}>
                <div className={cx('content-1-row')}>
                    <Content data={introduce} introduce />
                    <Content data={sanpham} product />
                    <Content data={thongtin} information />
                    <Content data={chinhsach} policy />
                    <div>
                        <Content data={diachi} address />
                        <Content data={lienhe} contact />
                    </div>
                </div>
            </div>
            <div className={cx('content-2')}>
                <div className={cx('container')}>
                    <div className={cx('divider')}>
                        <span className={cx('divider-separator')} />
                    </div>
                    <div className={cx('text-image')}>
                        <div className={cx('text')}>
                            <p>
                                © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH & ĐT TP. Hà Nội cấp
                                ngày 08/06/2016. Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố Hà
                                Nội, Việt Nam
                                <br></br>Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email:
                                lienhe@shopdunk.com
                            </p>
                        </div>
                        <img
                            className={cx('image')}
                            src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-3524ea6/wp-content/uploads/2022/01/bo-cong-thuong-1170x780-2.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
