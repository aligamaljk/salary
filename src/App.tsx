
import { ConfigProvider, App as AntApp } from 'antd';
import AppRouter from './Routes/AppRouter';
import { useAppSelector } from './Store/hooks';
import en from './localization/en';
import ar from './localization/ar';

const tokenAnt = {
  token: {
    fontFamily: 'Cairo, sans-serif',
    colorPrimary: '#1877f2',
    contentFontSize: 20,
    fontWeight: 600,
    colorInfo: '#faad14',
    borderRadius: 8,
    colorText: '#212121',
    fontSize: 16,
    controlHeight: 40,
    colorBtnColor: '#fff',
    secBtnBg: '#F8F5FF',
    secColor: '#8A4CF5',
    defaultBg: '#EEF0FF',
    defaultColor: '#4F5062',
    defaultBorderColor: '#B0B0C0',
    thirdColor: '#59A6ED',
    Accent: '#EBF2FA',
    line: '#CFD8E3',
    grayTxt: '#595959',
    linearBg: 'linear-gradient(270deg, #8A4CF5 0%, #595FBC 100%)',
    secBtnBorderColor: '#C7BBF9',
    colorPrimaryBgHover: '#1876f2de',
    colorPrimaryHover: '#1876f2de',
    colorTextDescription: '#6D29F6',
    colorPrimaryActive: '#6D29F6',
    colorPrimaryText: '#6D29F6',
    colorPrimaryTextActive: '#6D29F6',
    colorPrimaryTextHover: '#6D29F6',
    colorLink: '#6D29F6',
    colorLinkHover: '#6D29F6',
    colorSuccess: '#238709',
    colorSuccessBg: '#E9FFDA',
    colorWarning: '#ff9d00',
    colorWarningBg: '#FFF4E2',
    colorError: '#cf2110',
    colorErrorBg: '#FFE7E4',
    colorTextBase: '#000',
    colorFillQuaternary: '#ebf2fa',
    colorFillSecondary: '#ebf2fa',
    colorPrimaryBg: '#ede8ff',
    fontSizeXL: 18,
    fontSizeHeading5: 16,
    fontSizeHeading4: 18,
    fontSizeHeading3: 22,
    fontSizeHeading2: 25,
    fontSizeHeading1: 32,
    marginMD: 24,
    wireframe: false,
    marginLG: 32,
    marginXL: 40,
    paddingMD: 24,
    paddingLG: 32,
    paddingXL: 40,
    borderRadiusSM: 4,
    borderRadiusLG: 12,
    borderRadiusXS: 4,
    colorBgLayout: '#F0F1F2',
    colorBgContainer: '#ffffff',
    colorBgElevated: '#ffffff',
    boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.1);',
    boxShadowSecondary: '0px 0px 24px rgba(0, 0, 0, 0.1);',
    colorPrimaryBorder: '#6D29F6',
  },
};
function App() {
  const { currentLang } = useAppSelector((state) => state.user);
  console.log(currentLang, 'currentLang');
  const t  = currentLang === 'en' ? en : ar;
  return (
    <ConfigProvider
      direction={currentLang === 'en' ? 'ltr' : 'rtl'}
      theme={tokenAnt}
      virtual
    >
      <AntApp>
        <AppRouter t={t} />
      </AntApp>
    </ConfigProvider>
  );
}

export default App
