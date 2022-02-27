import NavMenu from '@components/NavMenu';
import SettingsComponent from '@components/Settings';
import * as S from './styled';

function Settings() {
  return (
    <S.RootContainer>
      <NavMenu />
      <SettingsComponent />
    </S.RootContainer>
  );
}

export default Settings;
