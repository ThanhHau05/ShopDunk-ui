import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import Content from './Content';
import LogoWeb from '~/Images/logoweb.svg';
import LogoBoCongThuong from '~/Images/logobocongthuong.png';
import Config from '~/Config';
import { TiSocialFacebook } from 'react-icons/ti';
import { SiYoutube, SiZalo } from 'react-icons/si';
const cx = classNames.bind(styles);

const sanpham = {
    title: 'Sản phẩm',
    data: [
        {
            title: 'iPhone',
            current: 'iPhone',
            to: Config.routes.iphone,
        },
        {
            title: 'iPad',
            current: 'iPad',
            to: Config.routes.ipad,
        },
        {
            title: 'Mac',
            current: 'Mac',
            to: Config.routes.mac,
        },
        {
            title: 'Apple Watch',
            current: 'Watch',
            to: Config.routes.watch,
        },
        {
            title: 'Âm thanh',
            current: 'Âm Thanh',
            to: Config.routes.am_thanh,
        },
        {
            title: 'Phụ kiện',
            current: 'Phụ Kiện',
            to: Config.routes.phu_kien,
        },
        {
            title: 'Dịch vụ',
            current: 'Dịch vụ',
            to: Config.routes.dich_vu,
        },
    ],
};

const thongtin = {
    title: 'Thông tin',
    data: [
        { title: 'Giới thiệu', to: '*' },
        { title: 'Khuyến mại', to: '*' },
        { title: 'Bảo hành và sửa chữa', to: '*' },
        { title: 'Tuyển dụng', to: '*' },
        { title: 'Tin tức', to: '*' },
        { title: 'Check IMEI', to: '*' },
        { title: 'Phương thức thanh toán', to: '*' },
        { title: 'Gửi góp ý, khiếu nại', to: '*' },
    ],
};

const chinhsach = {
    title: 'Chính sách',
    data: [
        { title: 'Trả góp', to: '*' },
        { title: 'Giao hàng', to: '*' },
        { title: 'Giao hàng (ZaloPay)', to: '*' },
        { title: 'Hủy giao dịch', to: '*' },
        { title: 'Đổi trả', to: '*' },
        { title: 'Bảo hành', to: '*' },
        { title: 'Giải quyết khiếu nại', to: '*' },
        { title: 'Bảo mật thông tin', to: '*' },
    ],
};

const diachi = {
    title: 'Địa chỉ',
    data: [
        {
            title: 'Tìm Store trên Google Map',
            to: '*',
        },
        {
            title: 'Hệ thống cửa hàng',
            to: '*',
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
    logo: <img src={LogoWeb} className={cx('logo-icon')} alt="ShopDunk" />,
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
        {
            image: <img className={cx('image-mobile')} src={LogoBoCongThuong} alt="" />,
            to: '*',
        },
    ],
};
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-1')}>
                <div className={cx('content-1-row')}>
                    <Content data={introduce} introduce />
                    <div className={cx('content-1-list-row')}>
                        <Content data={sanpham} product />
                        <Content data={thongtin} information />
                        <Content data={chinhsach} policy />
                        <div>
                            <Content data={diachi} address />
                            <Content data={lienhe} contact />
                        </div>
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
                        <img className={cx('image')} src={LogoBoCongThuong} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
