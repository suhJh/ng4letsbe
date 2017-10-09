
export interface Member {
    name: string;
    sabun: string;
    dptNm: string;
    itJobYn: boolean;
    bossYn: boolean;
    chrpeYn: boolean;
}

export const memberList: Member[] = [
    { name: '장진우', sabun: '110020001', dptNm: 'IT개발파트', itJobYn: true, bossYn: true, chrpeYn: false },
    { name: '지의창', sabun: '119237123', dptNm: 'IT개발파트', itJobYn: true, bossYn: false, chrpeYn: false },
    { name: '박재홍', sabun: '123897231', dptNm: 'IT개발파트', itJobYn: true, bossYn: true, chrpeYn: false },
    { name: '손승현', sabun: '123231237', dptNm: 'IT개발파트', itJobYn: true, bossYn: false, chrpeYn: true },
    { name: '김상민', sabun: '187238772', dptNm: 'IT개발파트', itJobYn: true, bossYn: false, chrpeYn: false },
    { name: '정상기', sabun: '177266123', dptNm: 'IT개발파트', itJobYn: true, bossYn: false, chrpeYn: false },
    { name: '박새놀', sabun: '100230021', dptNm: '다이렉트마케팅', itJobYn: false, bossYn: false, chrpeYn: false },
    { name: '문지혜', sabun: '100319232', dptNm: '다이렉트마케팅', itJobYn: false, bossYn: false, chrpeYn: false },
    { name: '이동욱', sabun: '138992381', dptNm: '다이렉트마케팅', itJobYn: false, bossYn: true, chrpeYn: false },
];
