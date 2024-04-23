
import { ConfigProvider, App as AntApp } from 'antd';
import AppRouter from './Routes/AppRouter';
import { useAppSelector } from './Store/hooks';
import en from './localization/en';
import ar from './localization/ar';
import { getStoredDarkMode } from './Services/user-storage';


function App() {
  const { currentLang } = useAppSelector((state) => state.user);
  console.log(currentLang, 'currentLang');
  const t  = currentLang === 'en' ? en : ar;
  const dark = getStoredDarkMode();
  console.log(dark, 'dark');
  const tokenAnt = {
    token: {
      fontFamily: 'Cairo, sans-serif',
      colorPrimary: dark ? '#fff' : '#1877f2', // primary color & color sidebar
      contentFontSize: 20,
      fontWeight: 600,
      colorInfo: '#faad14',
      borderRadius: 8,
      colorText: dark ? '#fff' : '#000', // color table && sidebar && form label
      fontSize: 16,
      controlHeight: 40,
      colorBtnColor: dark ? '#fff' : '#1877f2',
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
      secBtnBorderColor: dark ? '#fff' : '#C7BBF9',
      colorPrimaryBgHover: dark ? '#000' : '#1876f2de',
      colorPrimaryHover: dark ? '#fff' : '#1876f2de', // background hover button
      colorTextDescription: dark ? '#fff' : '#6D29F6',
      colorPrimaryActive: dark ? '#fff' : '#6D29F6',
      colorPrimaryText: dark ? '#fff' : '#6D29F6',
      colorPrimaryTextActive: dark ? '#fff' : '#6D29F6',
      colorPrimaryTextHover: dark ? '#fff' : '#6D29F6',
      colorLink: dark ? '#fff' : '#6D29F6',
      colorLinkHover: dark ? '#fff' : '#6D29F6', // color link
      colorSuccess: dark ? '#238709' : '#238709', // color success
      colorSuccessBg: '#E9FFDA', // background success
      colorWarning: '#ff9d00', // color warning
      colorWarningBg: '#FFF4E2', // background warning
      colorError: '#cf2110', // color error
      colorErrorBg: '#FFE7E4', // background error
      colorTextBase: dark ? '#fff' : '#000',
      colorFillQuaternary: dark ? '#666565a1' : '#27a0d0', // background table thead & hover table tbody
      colorFillSecondary: dark ? '#666565a1' : '#ede8ff', // background hover sidebar
      colorPrimaryBg: dark ? '#666565a1' : '#ede8ff', // background sidebar
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
      colorBgLayout: dark ? '#000' : '#F0F1F2', // background layout
      colorBgContainer: dark ? 'rgb(18, 18, 18)' : '#fff', // background table && card
      colorBgElevated: dark ? '#000' : '#fff', // color value select
      boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.1);',
      boxShadowSecondary: '0px 0px 24px rgba(0, 0, 0, 0.1);',
      colorPrimaryBorder: dark ? '#666565a1' : '#6D29F6',
    },
  };
  return (
    <ConfigProvider
      direction={currentLang === 'en' ? 'ltr' : 'rtl'}
      theme={tokenAnt}
      virtual
    >
      <AntApp >
        <AppRouter t={t} />
      </AntApp>
    </ConfigProvider>
  );
}

export default App
